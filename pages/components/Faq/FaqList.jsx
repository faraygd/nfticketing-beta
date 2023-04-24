import { useState} from "react";

const FaqList = () => {
  const [openFaq, setOpenFaq] = useState(false);
  const handleOpen = () => {
    setOpenFaq(!openFaq);
  }
  return (
    <>
      <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start"></div>
      <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className="md:w-5/12 lg:w-4/12 w-full">
          <img
            src="https://gateway.ipfscdn.io/ipfs/QmUmSPFBQiYfNKFMRLUySaEiT3ym7TR82r8fx8CDKHVBP8/4.jpg"
            alt="Image of Glass bottle"
            className="w-full md:block hidden"
          />
        </div>
        <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl  dark:text-white leading-5 text-gray-800">
                Shipping
              </h3>
              <button
                aria-label="too"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onclick={handleOpen}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="path1"
                    className=""
                    d="M10 4.1665V15.8332"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="currentColor"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              id="para1"
              className="hidden font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12"
            >
              We are covering every major country worldwide. The shipment leaves
              from US as it is our headquarter. Some extra information you
              probably need to add here so that the customer is clear of their
              wanted expectations.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />
        </div>
      </div>
    </>
  );
};

export default FaqList;
