"use client";

import Menus from '@/components/menus'
import { motion } from "framer-motion";


const Sidebar = () => {
  return (
    <motion.ul
      initial={({ y: -100, opacity: 0 }, "hidden")}
      animate={({ y: 0, opacity: 1 }, "visible")}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 1 } },
      }}
      className=" w-[20vw] p-8 white duration-150"
    >
      <li>About</li>
      <li>Work</li>
      <li>Contact</li>
    </motion.ul>
  );
}

export default Sidebar