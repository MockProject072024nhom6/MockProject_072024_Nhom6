import { serviceTypeStyle } from "@/Styles/HomeStyle"
import { getImageUrl } from "@/Unltis/unltis"
import { ArrowRight } from "lucide-react"
import React from "react"

const ServiceTypeCard = ({ serviceType }: I_Props_ServiceTypeCard) => {
  return (
    <div className={serviceTypeStyle.card}>
      <img src={getImageUrl("images/service-type.png")} alt={serviceType.name} className={serviceTypeStyle.cardImg} />
      <p className={serviceTypeStyle.cardP}>{serviceType.name}</p>
      <button className={serviceTypeStyle.cardButton}>
        See more <ArrowRight color='black' />
      </button>
    </div>
  )
}

export default ServiceTypeCard
