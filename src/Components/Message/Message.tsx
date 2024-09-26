import React from "react"

interface ProfileImageProps {
  src: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
  return <div className='object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[38px]' />
}

const DotIndicator: React.FC = () => {
  return <div className='flex shrink-0 self-stretch my-auto bg-emerald-300 rounded-full h-[9px] w-[9px]' />
}

const UserInfo: React.FC = () => {
  return (
    <div className='flex flex-col items-start self-stretch px-12 pb-1.5 my-auto rounded-md bg-neutral-100 w-[228px] max-md:pl-5'>
      <div className='object-contain rounded-full aspect-[4.15] w-[158px]' />
    </div>
  )
}

interface MyComponentProps {
  userName?: string
}

const MyComponent: React.FC<MyComponentProps> = ({ userName }) => {
  return (
    <section className='flex z-10 gap-3 items-center px-4 pt-6 pb-12 mt-0 max-w-full bg-white rounded border border-solid border-zinc-300 min-h-[289px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px]'>
      <DotIndicator />
      <DotIndicator />
      <DotIndicator />
      <div className='shrink-0 self-stretch my-auto h-px border border-solid border-zinc-300 min-w-[240px] w-[268px]' />
      <ProfileImage src='' />
      <UserInfo />
      <div className='self-stretch my-auto text-sm text-black w-[63px]'>{userName}</div>
    </section>
  )
}

export default MyComponent
