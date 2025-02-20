"use client";
import React from "react";
import { FiGithub, FiLinkedin, FiDribbble, FiInstagram } from "react-icons/fi";
import MagnetIcon from "./common/MagneticIcon";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.ul
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-green-100 fixed mb-4 md:mb-12 ml-4 md:ml-12 left-0 bottom-0 flex flex-col items-start gap-1 duration-150 z-50"
    >
      <MagnetIcon icon={<FiGithub />} />
      <MagnetIcon icon={<FiLinkedin />} />
      <MagnetIcon icon={<FiDribbble />} />
      <MagnetIcon icon={<FiInstagram />} />
    </motion.ul>
  );
};

export default Socials;
