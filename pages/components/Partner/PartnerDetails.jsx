
import Image from "next/image";

const PartnerDetails = ({ img, title }) => {
  return (
    <div className="w-[200px] items-center justify-center">
      <Image
        src={img}
        width={100}
        className="items-center justify-center m-4 ml-12"
        height={100}
      />
    </div>
  );
};

export default PartnerDetails;
