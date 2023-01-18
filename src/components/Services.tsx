import { motion } from "framer-motion";

interface IServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const serviceItems: IServiceCardProps[] = [
  {
    title: "Weather-Proofing - EIFS/ETICS",
    description:
      "<b>External Insulation and Finishing System (EIFS)</b> is a non load bearing cladding system that provides exterior wall with insulated, water-resistant finished surface attached adhesively and mechanically to the substrate. <b>It is one of the most durable and tested cladding</b> in the construction industry. It can be used for newer structures and also can be retro-fitted to old structures to meet the thermal requirements of the latest green building regulations.",
    image: "/services/eifs.jpg",
  },
  {
    title: "Cement Composite Cladding",
    description:
      "<b>Cement Composite Cladding</b> consisting of a mixture of wood particles and cement called the <b>Cement Bonded Particle Board (CBPB)</b>. It combines the flexibility of wood with the strength and durability of cement, allowing a wide range of applications both indoors and outdoors. Its natural appearance can be finished to suit varied architectural needs, with either a raw, polished or sanded appearance.",
    image: "/services/cement-composition.jpg",
  },
  {
    title: "Porcelain Cladding Systems",
    description: `<b>A ventilated facade</b> is a constructive enclosure solution with a ventilated cavity between the exterior cladding and the backing wall. The ventilated cavity allows the exit and entry of air through its openings (bottom and top) as well as between the panel open joints. We provide a ventilated facade system with high-performance extruded panels along with a wide range of structural and fixing systems. This provides projects with the best performance against the elements while offering quick installations and an environmentally friendly program with a wide variety of finishes.`,
    image: "/services/porcelain-cladding.jpg",
  },
  {
    title: "Large Format Tiles",
    description: `<b>Large format tiles</b> are a hi-tech solution for external and internal walls. They create a seamless modern look by minimizing the joints or grout lines, which are easy to clean. The tiles are durable and versatile. They have high resistance and can be used in a variety of settings, including residential, commercial, and industrial spaces. These tiles are available in a variety of thicknesses and can be used on facades or for flooring. They can withstand extreme weather conditions and resist fading from sunlight. They also come in a variety of materials that make it easier to find a tile that matches the design aesthetic of the space.`,
    image: "/services/large-format-tiles-2.jpg",
  },
];

const ServiceCard = (props: IServiceCardProps) => {
  return (
    <div className="transition ease-in md:hover:scale-105">
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
          <div className="min-h-[80px] hover:min-h-[100px]  duration-150 flex flex-col justify-end w-full bg-gradient-to-t from-[#000] to-[transparent]">
            <h2 className="py-2 text-xl text-center font-lato">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="p-5 h-[350px] font-lato flex items-center justify-center">
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <div className="edge-top"></div>
      <div
        id="services"
        className="flex flex-col items-center justify-center py-12 bg-gradient-to-t from-[#80E7B2] to-[#83EDEB] scroll-mt-16"
      >
        <div className="text-center font-lato">
          <h1 className="pb-4 text-3xl font-bold ">Our Services</h1>
          <p className="max-w-3xl text-xl font-thin">
            We pride ourselves on providing exceptional customer service and
            attention to detail. We use only the highest quality materials and
            latest techniques to ensure that your project is completed to the
            highest standards
          </p>
        </div>
        <div className="flex flex-col justify-center p-6 md:flex-row md:flex-wrap">
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
        {/* <img src="/rect.svg" alt="rect" className="w-full" /> */}
      </div>
    </>
  );
};

export default Services;
