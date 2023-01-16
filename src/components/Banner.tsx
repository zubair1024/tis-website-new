import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-20 md:flex-row pl-7 font-lato">
      <div className="max-w-md tracking-tighter md:pl-10">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="py-2 text-5xl font-bold text-left font-lato">
            Elevate your façades with our Cladding Solutions
          </h1>
          <p className="text-xl">
            Best materials, state-of-the-art techniques, and highly skilled
            craftsmen. We are committed to delivering beautiful, durable and
            cost-effective solutions
          </p>
        </motion.div>
      </div>
      <motion.div
        className="mt-6 min-w-sm"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banner vector.svg" alt="banner" />
      </motion.div>
    </div>
  );
};

export default Banner;
