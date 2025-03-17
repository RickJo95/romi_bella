import { Link } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";

const StoryIndexPage = () => {
  const [isExiting, setIsExiting] = useState(false);

  const start = () => {
    setIsExiting(true);
  };

  return (
    <>
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0 bg-black z-10" />
    <motion.div
      className="w-screen h-screen overflow-hidden bg-fuchsia-900 grid place-items-center fixed top-0 left-0 z-20"
      animate={isExiting ? { opacity: 0 } : {}}
      transition={{ duration: 3 }}
      onAnimationComplete={() => {
        if (isExiting) {
          window.location.href = "/story/us";
        }
      }}
    >
      <motion.div
        animate={isExiting ? { opacity: 0 } : {}}
        transition={isExiting ? { duration: 3 } : {}}
        className="rounded-2xl bg-fuchsia-100 p-8 shadow-lg max-w-2xl flex flex-col"
      >
        <h2 className="text-lg text-fuchsia-800 font-semibold mb-4 text-center">
          Escoge la historia
        </h2>
        <Link
          to="/story/vet"
          className="py-1.5 px-3 text-white font-bold uppercase bg-fuchsia-600 rounded shadow my-2 text-center text-xs dark:bg-fuchsia-900 dark:text-pink-600"
        >
          La historia de una princesa
        </Link>
        <motion.button
          className="py-1.5 px-3 text-white font-bold uppercase bg-fuchsia-600 rounded shadow my-2 text-center text-xs dark:bg-fuchsia-900 dark:text-pink-600"
          onClick={start}
        >
          La historia de una estrella (sube el volumen)
        </motion.button>
      </motion.div>
    </motion.div>
    </>
  );
};

export default StoryIndexPage;
