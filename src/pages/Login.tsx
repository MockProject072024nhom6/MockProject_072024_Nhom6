import React from 'react';
import Logo from '@/Components/Login/Logo';
import InputField from '@/Components/Login/InputField';
import RememberMe from '@/Components/Login/RememberMe';
import Button from '@/Components/Login/Button';

const LoginPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-48 bg-white max-md:px-5 max-md:py-24">
      <div className="flex flex-col max-w-full w-[311px]">
        <Logo />
        <h1 className="self-start ml-3 text-4xl font-semibold text-slate-900 max-md:ml-2.5">
          <span className="text-blue-700">Xpress</span>Guards
        </h1>
        <h2 className="self-start mt-36 text-3xl font-medium tracking-wide leading-none text-black text-opacity-80 max-md:mt-10">
          WELCOME BACK !
        </h2>
        <form>
          <InputField label="Email Address" type="email" />
          <InputField label="Password" type="password" />
          <RememberMe />
          <Button text="Login" />
        </form>
        <button className="self-center mt-4 text-sm font-medium leading-none text-black text-opacity-60">
          Forgot password?
        </button>
      </div>
    </main>
  );
};

export default LoginPage;