import React from 'react';

const ReportsOverview: React.FC = () => {
  const reportItems = [
    { label: '', value: '', change: '', changeType: '' },
    { label: '', value: '', change: '', changeType: '' },
    { label: '', value: '', change: '', changeType: '' },
    { label: '', value: '', change: '', changeType: '' },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="text-base font-semibold"></div>
          <div className="text-base font-extrabold"></div>
        </div>
        <div className="bg-gray-200" />
        <div className="flex justify-between">
          <div className="flex flex-col text-xs font-medium text-zinc-500">
            {reportItems.map((item, index) => (
              <div key={index} className={index > 0? 't-1.5' : ''}>{item.label}</div>
            ))}
          </div>
          <div className="flex flex-col whitespace-nowrap">
            {reportItems.map((item, index) => (
              <div key={index} className={`flex justify-between ${index > 0? 't-1.5' : ''}`}>
                <div className="text-xs font-medium text-zinc-500">{item.value}</div>
                <div className="px-2.5 py-1 text-xs rounded">
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsOverview;