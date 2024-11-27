import React from "react"
import { I_Props_Image } from "../../Types/GuardTypes"

export default function Image({
  src,
  alt,
  width,
  height,
  border,
  rounded,
  padding,
  marginL,
  flex,
  justify
}: I_Props_Image) {
  return (
    <div className={`${flex} ${justify}`}>
      <img src={src} alt={alt} width={width} height={height} className={`${border} ${rounded} ${padding} ${marginL}`} />
    </div>
  )
}
