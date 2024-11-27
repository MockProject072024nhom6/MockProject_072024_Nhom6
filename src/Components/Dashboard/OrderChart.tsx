import React from'react';

const OrdersChart: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start">
        <div className="flex justify-between">
          <div className="text-base">ORDERS</div>
          <div className="flex gap-1.5 self-start text-xs">
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
            <div className="flex gap-1">
              <div className="grow"></div>
              <div className="w-4 h-4 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
        <div className="bg-gray-200" />
        <div className="bg-gray-200" />
      </div>
    </div>
  );
};

export default OrdersChart;