"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
import styles from "../styles";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    varients={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span varients={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2>Title Text</motion.h2>
);
