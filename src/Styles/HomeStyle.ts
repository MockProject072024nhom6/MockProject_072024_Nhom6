export const heroStyle = {
  section: "relative overflow-hidden font-headings flex flex-col",
  content: "absolute flex flex-col items-center inset-0 bg-black/35 text-center",
  heading1: "lg:text-[64px] text-[37px] mt-[13%] text-header font-semibold leading-13",
  heading2: "lg:text-[48px] text-[22px] text-white font-semibold",
  p: "lg:text-[16px] text-xs text-white lg:mx-auto lg:w-4/12 w-9/12 lg:text-left mb-24 pt-10 leading-5",
  linkButton:
    "uppercase border-2 border-white inline-flex font-semibold justify-between lg:p-1 lg:pl-3 p-[0.5%] lg:text-[16px] text-[9px] pl-[2%] rounded-full items-center text-white gap-2 lg:mt-1"
}

export const serviceTypeStyle = {
  section:
    "relative bg-white flex flex-col w-screen overflow-hidden lg:h-screen h-[70vh] items-center font-headings border-b-2 border-header",
  open: "text-[16px] text-header font-bold lg:mb-5 mb-1 mt-9",
  heading: "text-center font-semibold lg:text-[64px] text-[31px] mb-2",
  p: "text-xs lg:text-[16px] font-semibold mb-10 lg:w-5/12 w-5/6 text-center z-20",
  buttons: "absolute lg:mx-10 flex justify-between left-0 right-0 lg:left-3 lg:right-3 lg:top-1/2 bottom-[30%] z-20",
  cardContainer:
    "absolute lg:w-screen lg:left-[20.64%] left-[25%] lg:top-[36%] bottom-[10%] flex gap-6 lg:gap-3 justify-center overflow-x-hidden duration-300",
  card: "lg:w-1/2 w-[55vw] max-w-[250px]  relative border border-[#1EDEF7] rounded-2xl",
  cardImg: "rounded-2xl ",
  cardP: "absolute top-2 left-4 w-1/2 lg:text-[30px] text-[17px] text-white font-bold",
  cardButton:
    "flex items-center text-[9px] lg:text-sm gap-2 lg:gap-4 rounded-full absolute bottom-4 right-4 bg-header font-bold text-white",
  layer: "absolute bg-white w-[19.6%] lg:top-0 top-1/4 bottom-0"
}

export const benefitStyle = {
  section: "px-2 flex flex-col items-center font-headings font-semibold pb-[4%] border-b-2 border-black lg:h-[80vh]",
  heading: "lg:text-[48px] text-[20px] mt-[2%] lg:mb-[4%] text-center",
  container:
    "lg:relative lg:flex-row lg:text-black lg:flex-row lg:justify-between text-black/50 flex-col flex items-center pl-2 lg:px-14 lg:items-start",
  text: "text-xs lg:text-sm lg:w-2/6 py-4 px-4",
  button:
    "mt-4 lg:absolute lg:bottom-0 lg:right-[40%] flex items-center rounded-full pl-12 gap-6 pr-4 py-2 cursor-pointer text-[#1E56F8] border border-[#1E56F8]",
  img: "w-[90%] lg:w-1/5"
}
