const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-20 md:flex-row pl-7 font-lato">
      <div className="max-w-md">
        <h1 className="py-2 text-2xl font-bold font-lato">Lorem Ipsum?</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
          commodo quis imperdiet massa tincidunt nunc pulvinar.
        </p>
      </div>
      <div className="mt-6 min-w-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banner vector.svg" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
