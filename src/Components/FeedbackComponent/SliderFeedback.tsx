import React from "react"
import { feedbackColor, feedbackInfo } from "@/Arrays/CustomerArrays"
import { Card } from "@/Components/FeedbackComponent/Card"
import Slider from "react-slick"
import "./SliderFeedback.css"
export const SliderFeedback = () => {
  const settings = {
    className: "mb-20 center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true
  }
  return (
    <div className='sider-container'>
      <p className='text-center font-semibold text-[48px] mt-[37px] text-[#908C91]'>Feedback</p>
      <Slider {...settings}>
        {feedbackInfo.map((f, i) => (
          <div>
            <Card key={i} bgColor={feedbackColor[i]} info={f} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
