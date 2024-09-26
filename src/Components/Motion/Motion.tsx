"use client"

import { heroStyle } from "@/Styles/HomeStyle"
import { I_Props_Text } from "@/Types/CustomerTypes"
import { changeColorVariants, hoverVariants, scaleVariants } from "@/Utils/Variants"
import { motion } from "framer-motion"
import { MoveRight } from "lucide-react"
import { FC } from "react"
import { NavLink } from "react-router-dom"

export const Hover: FC<I_Props_Text> = ({ text, link }) => (
  <motion.span variants={hoverVariants} initial='hidden' whileHover='show'>
    <NavLink to={link} className='hidden md:block'>
      {text}
    </NavLink>
  </motion.span>
)

export const Scale: FC<I_Props_Text> = ({ text, large, children }) => (
  <motion.div variants={scaleVariants} initial='rest' whileHover='hover' className={heroStyle.linkButton}>
    <p className={large ? "lg:px-10 px-2" : ""}>{text}</p>
    {children}
  </motion.div>
)

export const ChangeColor = () => (
  <motion.button
    whileHover='hover'
    variants={changeColorVariants}
    className='bg-header border border-white rounded-full lg:w-16 lg:h-16 w-10 h-10 flex justify-center items-center'
  >
    <MoveRight color='black' />
  </motion.button>
)
