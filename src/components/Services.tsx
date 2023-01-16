import { motion } from "framer-motion";

interface IServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const serviceItems: IServiceCardProps[] = [
  {
    title: "Weatherproofing - EIF",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/eifs.jpg",
  },
  {
    title: "Cement Composition Cladding",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/cement-composition.jpg",
  },
  {
    title: "Porcelain Cladding Systems",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/large-format-tiles.jpg",
  },
  {
    title: "Large Format Tiles",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/large-format-tiles-2.jpg",
  },
];

const ServiceCard = (props: IServiceCardProps) => {
  return (
    <div className="transition ease-in hover:scale-105">
      <motion.div
        className="flex flex-col space-x-6 md:space-x-0 md:flex-col justify-center items-center bg-[#fff] shadow-2xl rounded-xl md:max-w-xs mt-3 md:mx-2"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          className=" flex flex-col justify-end w-full h-[300px] text-[#FFF] rounded-xl"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
          }}
        >
          <div className=" min-h-[80px] flex flex-col justify-end w-full bg-gradient-to-t from-[#000] to-[transparent]">
            <h2 className="py-2 text-xl text-center font-lato">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm font-light ">{props.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <div className="edge-top"></div>
      <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-t from-[#80E7B2] to-[#83EDEB]">
        <div className="text-center font-lato">
          <h1 className="pb-4 text-3xl font-bold ">Our Services</h1>
          <p className="max-w-3xl text-xl font-thin">
            We pride ourselves on providing exceptional customer service and
            attention to detail. We use only the highest quality materials and
            latest techniques to ensure that your cladding project is completed
            to the highest standards
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 md:flex-row md:flex-wrap">
          {serviceItems.map((i, idx) => {
            return (
              <ServiceCard
                key={`services_${idx}`}
                title={i.title}
                description={i.description}
                image={i.image}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/rect.svg" alt="rect" className="w-full" />
      </div>
    </>
  );
};

export default Services;
