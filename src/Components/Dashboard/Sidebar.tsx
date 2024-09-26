import React from'react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { label: '' },
    { label: '' },
    { label: '' },
    { label: '' },
    { label: '' },
  ];

  const websiteCategories = [
    { color: '', label: '' },
    { color: '', label: '' },
    { color: '', label: '' },
    { color: '', label: '' },
  ];

  return (
    <aside className="flex flex-col">
      <nav className="flex flex-col">
        <div className="flex flex-col items-start">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex gap-3.5 ${index > 0? 't-7' : ''}`}>
              <div className="w-6 h-6 bg-gray-200 rounded-full" />
              <div>{item.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <div className="flex gap-5 justify-between self-stretch text-xs font-bold uppercase whitespace-nowrap">
            <div></div>
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
          </div>
          {websiteCategories.map((category, index) => (
            <div key={index} className="flex gap-4 mt-8 whitespace-nowrap">
              <div className={`flex shrink-0 my-auto w-2 h-2 rounded-full`} />
              <div>{category.label}</div>
            </div>
          ))}
          <div className="flex relative flex-col self-stretch">
            <div className="absolute inset-0 bg-gray-200" />
            <div className="relative self-center mt-6"></div>
            <div className="relative mt-3 text-xs text-center text-zinc-500"></div>
            <button className="relative px-7 py-3 mt-3.5 bg-white rounded">Write a message</button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;