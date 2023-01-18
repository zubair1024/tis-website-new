const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="w-full bg-[#1d1d1d] text-center py-2 text-[#fff]">
        <span className="text-sm font-lato">
          TIS GULF © {date}. All Rights Received
        </span>
      </div>
    </>
  );
};

export default Footer;
