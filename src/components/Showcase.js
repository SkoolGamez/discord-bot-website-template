import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">Nova</h1>
        <h2 className="showcase-header-text h-color">
          The only cheat you will ever need!
        </h2>
        <p className="showcase-para p-color">
      One of the most useful cheats in the league, giving you god-like aim and percision
      Purchase now, before we run out 😉
        </p>

        <span className="p-color">Nova is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Purchase Now
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/4Zvbr39qvr">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
