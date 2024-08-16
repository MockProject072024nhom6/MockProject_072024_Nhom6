import React from "react"

export default function Image({ src, alt, width, height, border, rounded, padding, marginL }: I_Props_Image) {
  return (
    <img src={src} alt={alt} width={width} height={height} className={`${border} ${rounded} ${padding} ${marginL}`} />
  )
}
