import { Switch } from "antd";
import { useState } from "react";

const Topbar = () => {
  const [testLive, setTestLive] = useState<boolean>(false);
  return (
    <div className="w-full absolute top-0 h-[89px] z-50 border border-[#F5F5F5] px-7 flex items-center justify-between bg-white">
      <h1 className="text-16 font-semibold leading-5 text-[#343433]">
        Dashboard
      </h1>
      <div className="flex w-max gap-1 items-center">
        <div className="border-r border-r-[#E2E3E5] px-2 flex gap-1 items-center">
          {!testLive ? (
            <p className={`text-16 leading-5 text-[#FF4E4E] font-semibold`}>
              Test
            </p>
          ) : (
            <p className={`text-16 leading-5 text-[#00C46C] font-semibold`}>
              Live
            </p>
          )}
          <Switch
            onChange={(checked: boolean) => {
              setTestLive(checked);
            }}
            className="outline-none ring-0 focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8742 16.9717C15.8742 18.9203 14.1509 20.5 12.0251 20.5C9.89933 20.5 8.17605 18.9203 8.17605 16.9717M15.8742 16.9717H18.1809C19.4766 16.9717 20.2008 15.4768 19.3977 14.46L18.2256 12.976V9.72821C18.2256 6.28847 15.4371 3.5 11.9974 3.5C8.53698 3.5 5.74004 6.32074 5.76936 9.781L5.79496 12.8019L4.58839 14.4112C3.79735 15.4663 4.5502 16.9717 5.8689 16.9717H8.17605M15.8742 16.9717H8.17605"
                stroke="#99999C"
                strokeWidth="1.8"
              />
              <rect x="14" y="2" width="8" height="8" rx="4" fill="#FF4E4E" />
              <rect
                x="14"
                y="2"
                width="8"
                height="8"
                rx="4"
                stroke="white"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_633_558)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.8115 0H4.18848C1.87525 0 0 1.86548 0 4.16667V35.8333C0 37.6522 1.17151 39.1988 2.80485 39.7673C5.34686 32.7362 12.1098 27.7083 20.0531 27.7083C27.9837 27.7083 34.7376 32.72 37.2891 39.7333C38.8732 39.1391 40 37.6171 40 35.8333V4.16667C40 1.86548 38.1247 0 35.8115 0ZM20.1578 25C24.9578 25 28.8489 21.1291 28.8489 16.3542C28.8489 11.5792 24.9578 7.70833 20.1578 7.70833C15.3579 7.70833 11.4667 11.5792 11.4667 16.3542C11.4667 21.1291 15.3579 25 20.1578 25Z"
                  fill="#F3F4F5"
                />
                <path
                  d="M28.8489 16.3542C28.8489 21.1291 24.9578 25 20.1578 25C15.3579 25 11.4667 21.1291 11.4667 16.3542C11.4667 11.5792 15.3579 7.70833 20.1578 7.70833C24.9578 7.70833 28.8489 11.5792 28.8489 16.3542Z"
                  fill="#99999C"
                />
                <path
                  d="M4.18848 40H35.8115C36.3316 40 36.8296 39.9057 37.2891 39.7333C34.7376 32.72 27.9837 27.7083 20.0531 27.7083C12.1098 27.7083 5.34686 32.7362 2.80485 39.7673C3.23799 39.918 3.70362 40 4.18848 40Z"
                  fill="#99999C"
                />
              </g>
              <defs>
                <clipPath id="clip0_633_558">
                  <rect width="40" height="40" rx="6" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
