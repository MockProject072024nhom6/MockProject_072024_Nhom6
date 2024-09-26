import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start">
        <div className="flex">
          <div className="flex flex-col self-end">
            <div className="text-base">{title}</div>
            <div className="self-start mt-2">{value}</div>
          </div>
          <div className="shrink-0" />
        </div>
        <div className="flex gap-2 mt-2 text-xs font-medium">
          <div className="shrink-0" />
          <div className="my-auto">
            <span>from {change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;