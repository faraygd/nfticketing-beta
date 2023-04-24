import React from "react";
import {
  useContract,
  useTotalCirculatingSupply,
  useActiveClaimConditionForWallet,
  useClaimConditions,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";
import { toast } from "react-toastify";
import { BigNumber, utils } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { parseIneligibility } from "../../components/utils/utils";
import ReactLoading from "react-loading";
import { ContractMetadata } from "@thirdweb-dev/sdk";

const MintingBox = ({ spinningBubbles, white }) => {
  const address = useAddress();
  const tokenId = 0;
  const { contract: editionDrop } = useContract(
    "0xc0A426810ba6557919C53F61752870bBb08e9ee0",
    "edition-drop"
  );

  const claimedSupply = useTotalCirculatingSupply(editionDrop, tokenId);
  const claimConditions = useClaimConditions(editionDrop);
  const activeClaimCondition = useActiveClaimConditionForWallet(
    editionDrop,
    address,
    tokenId
  );
  const [quantity, setQuantity] = useState(1);
  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading || claimedSupply.isLoading || !editionDrop
    );
  }, [activeClaimCondition.isLoading, editionDrop, claimedSupply.isLoading]);
  const totalAvailableSupply = useMemo(() => {
    try {
      return BigNumber.from(activeClaimCondition.data?.availableSupply || 0);
    } catch {
      return BigNumber.from(1_000_000);
    }
  }, [activeClaimCondition.data?.availableSupply]);
  const claimerProofs = useClaimerProofs(editionDrop, address || "", tokenId);
  const numberTotal = useMemo(() => {
    const n = totalAvailableSupply.add(BigNumber.from(claimedSupply.data || 0));
    if (n.gte(1_000_000)) {
      return "";
    }
    return n.toString();
  }, [totalAvailableSupply, claimedSupply]);
  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;
    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    let max;
    if (totalAvailableSupply.lt(bnMaxClaimable)) {
      max = totalAvailableSupply;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    totalAvailableSupply,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);
  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);
  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);
  const claimIneligibilityReasons = useClaimIneligibilityReasons(
    editionDrop,
    {
      quantity,
      walletAddress: address || "",
    },
    tokenId
  );
  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);
  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
      if (pricePerToken.eq(0)) {
        return "Mint (Free)";
      }
      return `Mint (${priceToMint})`;
    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity);
    }
    if (buttonLoading) {
      return "Checking eligibility...";
    }

    return "Claiming not available";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);
  return (
    <div class="w-[250px] -mt-[144px] h-[400px]">
      <div className="">
        {isLoading ? (
          <div className="m-4 text-center items-center justify-center">
            <ReactLoading
              type={spinningBubbles}
              color={white}
              height={100}
              width={100}
            />
          </div>
        ) : (
          <div className="border border-outline w-[250px] h-[400px]">
            <img src="https://ipfs.thirdwebcdn.com/ipfs/QmZwK5DmU77X3J1w52oFAmumpHA6s29bnE9PQ2dxVYL27g/QmXzgHsrfAq4kqZfKjb8cwoyUyBw1gQ6rwK2VMkQtuQnjm.jpg" />
            <div className="text-center bg-black text-white">
              {claimedSupply ? (
                <div className="text-center items-center py-4">
                  <p>
                    <b>{numberClaimed}</b>
                    {" / "}
                    {numberTotal || "∞"}
                  </p>
                </div>
              ) : (
                <h2>Loading Supply</h2>
              )}
              {claimConditions.data?.length === 0 ||
              claimConditions.data?.every(
                (cc) => cc.maxClaimableSupply === "0"
              ) ? (
                <div>
                  <h2>
                    This drop is not ready to be minted yet. (No claim condition
                    set)
                  </h2>
                </div>
              ) : (
                <>
                  <div className="flex flex-row items-center justify-center ml-4">
                    <button
                      className="cursor-pointer w-10 h-10 text-3xl bg-transparent text-white"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>

                    <h4>{quantity}</h4>

                    <button
                      className="cursor-pointer w-10 h-10 text-3xl bg-transparent ml-4"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= maxClaimable}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center mt-6">
                    {isSoldOut ? (
                      <div className="mb-6">
                        <Web3Button
                          contractAddress={editionDrop?.getAddress() || ""}
                          action={(cntr) =>
                            cntr.erc1155.claim(tokenId, quantity)
                          }
                          isDisabled={!canClaim || buttonLoading}
                          onError={(err) => {
                            toast.error("Ticket Purchase Process Error");
                          }}
                          onSuccess={() => {
                            setQuantity(1);
                            toast.success(
                              "Ticket Purchase Process Successful, Check your transaction"
                            );
                          }}
                        >
                          {buttonLoading ? "Loading..." : buttonText}
                        </Web3Button>
                      </div>
                    ) : (
                      // <button className="border border-outline h-20 w-96 text-white z-100 font-bold uppercase">
                      //   Sold Out
                      // </button>
                      <div className="mb-6">
                        <Web3Button
                          contractAddress={editionDrop?.getAddress() || ""}
                          action={(cntr) =>
                            cntr.erc1155.claim(tokenId, quantity)
                          }
                          isDisabled={!canClaim || buttonLoading}
                          onError={(err) => {
                            toast.error("Ticket Purchase Process Error");
                          }}
                          onSuccess={() => {
                            setQuantity(1);
                            toast.success(
                              "Ticket Purchase Process Successful, Check your transaction"
                            );
                          }}
                        >
                          {buttonLoading ? "Loading..." : buttonText}
                        </Web3Button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MintingBox;
