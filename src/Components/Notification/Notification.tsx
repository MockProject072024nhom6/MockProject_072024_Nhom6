import React from'react';

interface NotificationData {
  icon: string;
  title: string;
  body: string;
}

const notificationData: NotificationData[] = [
  { icon: "", title: "", body: "" },
  { icon: "", title: "", body: "" },
  { icon: "", title: "", body: "" },
  { icon: "", title: "", body: "" }
];

interface NotificationItemProps {
  icon: string;
  title: string;
  body: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, title, body }) => {
  return (
    <article className="flex relative gap-3 items-start self-stretch my-auto min-w-[240px] w-[268px]">
      <div className="object-contain z-0 shrink-0 w-5 aspect-square" />
      <div className="flex z-0 flex-col flex-1 shrink leading-snug basis-4">
        <div className="flex flex-col w-full">
          <h3>
            {title}
          </h3>
          <p>
            {body}
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden absolute -top-2 -right-2 z-0 justify-center items-center p-2 w-9 rounded-[32px]">
        <div className="object-contain self-stretch my-auto w-5 aspect-square" />
      </div>
    </article>
  );
}

const NotificationContainer: React.FC = () => {
  return (
    <section className="flex gap-3 items-center px-4 py-4 bg-white rounded-lg border border-solid border-zinc-300 min-h-[299px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <h2 className="self-stretch my-auto text-base font-semibold text-zinc-500 w-[117px]">
        NOTIFICATIONS
      </h2>
      {notificationData.map((notification, index) => (
        <NotificationItem
          key={index}
          icon={notification.icon}
          title={notification.title}
          body={notification.body}
        />
      ))}
    </section>
  );
}

export default NotificationContainer;