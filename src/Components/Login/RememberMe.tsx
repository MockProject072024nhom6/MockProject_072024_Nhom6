import React from'react';

const RememberMe: React.FC = () => {
  return (
    <div className="flex flex-col mt-3.5 w-60 max-w-full">
      <label className="flex gap-3 items-center w-full cursor-pointer">
        <div className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch my-auto w-4 h-4 rounded bg-zinc-800 bg-opacity-60 min-h-[16px]">
          <input type="checkbox" className="sr-only" aria-label="Remember me" />
        </div>
        <span className="flex-1 shrink self-stretch my-auto leading-snug basis-0 font-[number:var(--sds-typography-body-font-weight-regular)] opacity-[var(--sds-size-stroke-border)] text-[length:var(--sds-typography-body-size-medium)] text-black text-opacity-60">
          Remember me
        </span>
      </label>
    </div>
  );
};

export default RememberMe;