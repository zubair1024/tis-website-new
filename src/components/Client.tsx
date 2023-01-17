import Image from "next/image";

const Client = () => {
  return (
    <div className="bg-[#1D1D1D]">
      <Image
        src="/client/sobha-group.png"
        height={100}
        width={100}
        alt={"sohba"}
      ></Image>
    </div>
  );
};

export default Client;
