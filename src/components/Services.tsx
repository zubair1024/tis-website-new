import Image from "next/image";

interface IServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const serviceItems: IServiceCardProps[] = [
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/undraw_calendar.svg",
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/undraw_calendar.svg",
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/undraw_calendar.svg",
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet. Et reiciendis alias sit nesciunt illum qui vero error in optio rerum ut doloremque ducimus. Est aperiam itaque qui asperiores praesentium eum alias possimus ut facilis itaque qui sunt placeat. Sit galisum omnis et dolorum ipsam sit repellat quibusdam.",
    image: "/services/undraw_calendar.svg",
  },
];

const ServiceCard = (props: IServiceCardProps) => {
  return (
    <div className="flex space-x-6 md:space-x-0 md:flex-col justify-center items-center p-5 bg-[#fff] shadow-2xl rounded-xl md:max-w-xs mt-3 border-[0.5px]">
      <div className="md:min-h-[150px] flex justify-center items-center">
        <Image
          alt={props.title}
          src={props.image}
          height={150}
          width={150}
        ></Image>
      </div>
      <div>
        <h2 className="py-2 text-xl md:text-center ">{props.title}</h2>
        <p className="text-sm font-light tracking-tighter">
          {props.description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <div className="edge-top"></div>
      <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-t from-[#80E7B2] to-[#83EDEB]">
        <div className="text-center font-lato">
          <h1 className="text-2xl font-medium ">Lorem ipsum</h1>
          <p className="text-sm font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 md:space-x-3 md:flex-row md:flex-wrap">
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
    </>
  );
};

export default Services;
