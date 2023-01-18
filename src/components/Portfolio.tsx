import { motion } from "framer-motion";
import Image from "next/image";

const portfolios = [
  {
    title: "Latifa Hospital - Dubai",
    image: [
      "/portfolio/latifa_hospital1.jpeg",
      "/portfolio/latifa_hospital2.jpeg",
    ],
    vector: "/vector-1.svg",
  },
  {
    title: "Private Villa at Emirates Hills, Dubai",
    image: [
      "/portfolio/private_villa_emirates_hills1.jpeg",
      "/portfolio/private_villa_emirates_hills2.jpeg",
    ],
    vector: "/vector-1.svg",
  },
  {
    title: "Saint Gobain Comfort Home - Masdar, Abu Dhabi",
    image: ["/portfolio/Saint Gobain comfort house - Masdar, Abudhabi.jpeg"],
    vector: "/vector-1.svg",
  },
  {
    title: "Sobha Canal Villas - Sobha Hartland, Meydan, Dubai",
    image: [
      "/portfolio/Sobha Canal Villas - Sobha Hartland, Meydan, Dubai.jpeg",
    ],
    vector: "/vector-1.svg",
  },
  {
    title: "Sobha Greens, Sobha Hartland, Dubai",
    image: ["/portfolio/Sobha Greens, Sobha Hartland, Dubai.jpeg"],
    vector: "/vector-1.svg",
  },
  {
    title: "W Hotel - Mina Seyahi, Dubai",
    image: ["/portfolio/W Hotel - Mina Seyahi, Dubai.jpeg"],
    vector: "/vector-1.svg",
  },
  {
    title: "Els Club - Dubai Sports City, Dubai",
    image: [
      "/portfolio/Els Club - Dubai Sports City 1.jpeg",
      "/portfolio/Els Club - Dubai Sports City 2.jpeg",
    ],
    vector: "/vector-1.svg",
  },
  {
    title: "Luxury Villa - Jumeriah Bay, Dubai",
    image: [
      "/portfolio/Luxury private villa - jumeriah bay, Dubai 1.jpeg",
      "/portfolio/Luxury private villa - jumeriah bay, Dubai 2.jpeg",
    ],
    vector: "/vector-1.svg",
  },
  {
    title: "Dunes Villas for Ghurair family - Khawaneej, Dubai",
    image: ["/portfolio/dune 2.jpg", "/portfolio/dune 1.jpg"],
    vector: "/vector-1.svg",
  },
];

interface IPortfolioCardProps {
  title: string;
  image: string[];
  vector: string;
}

const PortfolioCard = (props: IPortfolioCardProps) => {
  return (
    <div className="flex flex-col  justify-center items-center  bg-[#fff] ">
      <div
      // style={{
      //   backgroundImage: `url(${props.vector})`,
      //   backgroundSize: "cover",
      // }}
      >
        <div className="flex flex-wrap justify-center space-y-3 md:space-y-0 md:space-x-4">
          {props.image.map((i) => {
            return (
              <Image
                key={i}
                alt={props.title}
                src={i}
                height={300}
                width={300}
                className="rounded-lg shadow-md"
              ></Image>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="py-3 font-semibold text-center text-md font-lato">
          {props.title}
        </h2>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="flex flex-col items-center justify-center max-w-3xl py-12 mx-auto scroll-mt-16"
      >
        <div className="text-center font-lato">
          <h1 className="pb-4 text-3xl font-bold ">Projects</h1>
          <p className="max-w-3xl px-5 text-xl font-thin">
            Our team of experienced professionals has the skills and expertise
            to handle projects of all sizes, from small renovations to
            large-scale commercial developments. We take a collaborative
            approach to every project, working closely with our clients to
            understand their unique needs and goals.
          </p>
        </div>
        <motion.div
          className="flex flex-col p-6 space-y-6"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        >
          {portfolios.map((i, idx) => (
            <div key={`portfolio_${idx}`}>
              <PortfolioCard
                title={i.title}
                image={i.image}
                vector={i.vector}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
