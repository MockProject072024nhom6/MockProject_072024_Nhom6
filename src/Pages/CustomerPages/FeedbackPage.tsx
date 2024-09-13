import { Feedback } from "@/Components/FeedbackComponent/Feedback"
import HeaderInPageHome from "@/Components/ShareComponents/HeaderInPageHome"
import Slider from "react-slick"
import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { SliderFeedback } from "@/Components/FeedbackComponent/SliderFeedback"

export const FeedbackPage = () => {
  return (
    <div className='bg-white overflow-hidden'>
      <HeaderInPageHome title='Quality Feedback' subtitle='Quality Feedback' page='Home' />
      <Feedback />
      <SliderFeedback />
    </div>
  )
}
