import { getImageUrl } from "../../Unltis/unltis"

const Logo = () => {
  return (
    <>
      <img src={getImageUrl("images/logo.png")} alt='logo' />
      <img src={getImageUrl("images/text-logo.png")} alt='text-logo' />
    </>
  )
}

export default Logo
