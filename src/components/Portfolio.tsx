import { motion } from "framer-motion";
import Image from "next/image";

const portfolios = [
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "https://picsum.photos/512/512",
    vector: "/vector-1.svg",
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "https://picsum.photos/512/512",
    vector: "/vector-1.svg",
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "https://picsum.photos/512/512",
    vector: "/vector-1.svg",
  },
];

interface IPortfolioCardProps {
  title: string;
  description: string;
  image: string;
  vector: string;
}

const PortfolioCard = (props: IPortfolioCardProps) => {
  return (
    <div className="flex space-x-6 justify-center items-center p-5 bg-[#fff] ">
      <div className="">
        <Image
          alt={props.title}
          src={props.image}
          height={512}
          width={1024}
          className="rounded-lg"
        ></Image>
      </div>
      <div>
        <h2 className="py-2 text-xl ">{props.title}</h2>
        <p className="text-sm font-light tracking-tighter">
          {props.description}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-3xl py-12 mx-auto">
        <div className="text-center font-lato">
          <h1 className="pb-4 text-3xl font-bold ">Projects</h1>
          <p className="max-w-3xl text-xl font-thin">
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
                description={i.description}
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
