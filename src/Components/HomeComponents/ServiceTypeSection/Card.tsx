import { serviceTypeStyle } from "@/Styles/HomeStyle"
import { I_Props_ServiceTypeCard } from "@/Types/CustomerTypes"
import { getImageUrl } from "@/Utils/unltis"
import { ArrowRight } from "lucide-react"
import React from "react"

const Card = ({ serviceType }: I_Props_ServiceTypeCard) => {
  return (
    <div className={serviceTypeStyle.card}>
      <img src={getImageUrl("images/service-type.png")} alt={serviceType.name} className={serviceTypeStyle.cardImg} />
      <p className={serviceTypeStyle.cardP}>{serviceType.name}</p>
      <button className={serviceTypeStyle.cardButton}>
        See more <ArrowRight color='black' size='16px' />
      </button>
    </div>
  )
}

export default Card
