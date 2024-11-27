import React from 'react';

const DataTable: React.FC = () => {
  return (
    <section className="mt-11 w-full">
      <div className="flex relative flex-col pt-4 pr-20 pb-2 pl-2.5 w-full text-base whitespace-nowrap rounded-none min-h-[240px] text-zinc-500">
        <div className="absolute inset-0" />
        <div className="flex relative gap-5 justify-between self-center ml-16 max-w-full">
          <div className="shrink-0" />
          <div className="flex gap-2.5">
            <div></div>
            <div className="shrink-0" />
          </div>
          <div className="shrink-0" />
        </div>
        <div className="mt-6 w-6" />
      </div>
      <div className="flex flex-wrap gap-10 mt-6 w-full text-base font-medium text-black">
        <div className="flex flex-1 gap-2.5 my-auto">
          <div className="grow"></div>
          <div className="flex gap-1 self-start whitespace-nowrap">
            <div></div>
            <div className="shrink-0" />
          </div>
          <div></div>
        </div>
        <nav className="flex flex-1 gap-2.5 items-center whitespace-nowrap" aria-label="Pagination">
          <button className="grow self-stretch my-auto" aria-label="Previous page"></button>
          <div className="flex self-stretch">
            <button className="px-2.5 w-7 h-7"></button>
            <button className="px-2.5 w-7 h-7"></button>
          </div>
          <div className="flex gap-6 self-stretch my-auto">
            <button></button>
            <button aria-label="Next page"></button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default DataTable;