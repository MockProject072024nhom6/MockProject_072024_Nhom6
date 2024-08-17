import React from'react';

const Dashboard: React.FC = () => {
  const statCards = [
    { title: '', value: '', change: '', changeType: '' },
    { title: '', value: '', change: '', changeType: '' },
    { title: '', value: '', change: '', changeType: '' },
    { title: '', value: '', change: '', changeType: '' },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <section className="flex flex-wrap gap-5 justify-between self-center w-full">
          {statCards.map((card, index) => (
            <div key={index} className="bg-gray-100 p-5 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-3xl font-bold">{card.value}</p>
              <p className="text-sm">
                {card.change} ({card.changeType})
              </p>
            </div>
          ))}
        </section>
        <section className="mt-10">
          <div className="flex gap-5">
            {/* Content*/}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;