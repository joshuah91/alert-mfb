// import { useNavigate } from "react-router-dom";
import { Tabs, Tooltip } from "antd";
import Icons from "../assets/icons/icons";
import Chart from "react-apexcharts";
import { useAuthStore } from "../store/client";
import { useShallow } from "zustand/react/shallow";

const Dashboard = () => {
  // const navigate = useNavigate();
  // const onChange = (key: any) => {
  //   console.log(key);
  // };

  const options = {
    chart: {
      id: "value-chart",
      toolbar: {
        show: false,
      },
      fontFamily: "Arial",
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
      // y: {
      //   formatter: function (val: any) {
      //     return formatAmount(val);
      //   },
      // },
    },
    dataLabels: {
      enabled: false, // Disable data labels on series lines
    },
    fill: {
      colors: ["#5540EB"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.6,
        opacityTo: 0.3,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 2,
    },
    series: [
      {
        name: "",
        data: [
          2000000, 500000, 1000000, 5000000, 6000000, 3000000, 4000000, 1000000,
          5000000, 6000000, 3000000, 4000000,
        ],
        color: "#5540EB",
      },
    ],
    xaxis: {
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter",
          cssClass:
            "text-14 leading-5 font-semibold font-normal fill-[#7398B3] dark:fill-[#BDBDBD]",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        formatter: function (val: number) {
          return "N " + val;
        },
        style: {
          fontFamily: "Arial",
          cssClass:
            "text-12 leading-4 font-medium font-normal fill-[#615E83] dark:fill-[#BDBDBD]",
        },
      },
    },
  };

  const items = [
    {
      key: "1",
      label: "NGN",
      children: (
        <div className="w-full flex justify-between pt-[24px]">
          <div className="flex flex-col items-start gap-4">
            <div className="flex gap-1 items-center">
              <p className="text-14 leading-4 font-light text-[#99999C]">
                Available Balance{" "}
              </p>
              <Tooltip
                placement="top"
                color="black"
                title="Total wallet balance for a selected currency on your business account."
                overlayInnerStyle={{
                  color: "#fff",
                  fontSize: "12px",
                }}
              >
                <div>
                  <Icons.InfoIcon />
                </div>
              </Tooltip>
            </div>
            <p className="text-32 leading-8 flex gap-1 items-center font-bold text-[#343433]">
              NGN 1,000,000
            </p>
            <p className="text-14 leading-4 flex gap-1 items-center font-light text-[#00C46C]">
              <Icons.ArrowUp /> 20% Past Day
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex gap-1 items-center">
              <p className="text-14 leading-4 font-light text-[#99999C]">
                Total Transactions{" "}
              </p>
              <Tooltip
                placement="top"
                color="black"
                title="Count of transactions attempts initiated on your business account."
                overlayInnerStyle={{
                  color: "#fff",
                  fontSize: "12px",
                }}
              >
                <div>
                  <Icons.InfoIcon />
                </div>
              </Tooltip>
            </div>
            <p className="text-32 leading-8 flex gap-1 items-center font-bold text-[#343433]">
              345
            </p>
            <p className="text-14 leading-4 flex gap-1 items-center font-light text-[#00C46C]">
              <Icons.ArrowUp /> 20% Past Day
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex gap-1 items-center">
              <p className="text-14 leading-4 font-light text-[#99999C]">
                Total Settlements{" "}
              </p>
              <Tooltip
                placement="top"
                color="black"
                title="Total payouts made into your business settlement account."
                overlayInnerStyle={{
                  color: "#fff",
                  fontSize: "12px",
                }}
              >
                <div>
                  <Icons.InfoIcon />
                </div>
              </Tooltip>
            </div>
            <p className="text-32 leading-8 flex gap-1 items-center font-bold text-[#343433]">
              NGN 49,000,000
            </p>
            <p className="text-14 leading-4 flex gap-1 items-center font-light text-[#FF4E4E]">
              <Icons.ArrowDown /> 20% Past Day
            </p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "GBP",
      children: "Content of Tab Pane 2",
      disabled: true,
    },
    {
      key: "3",
      label: "USD",
      children: "Content of Tab Pane 3",
      disabled: true,
    },
    {
      key: "4",
      label: "CAD",
      children: "Content of Tab Pane 4",
      disabled: true,
    },
  ];

  const itemsTwo = [
    {
      key: "1",
      label: "Money In",
      children: (
        <div className="h-[300px] w-full pb-[50px]">
          <Chart
            options={options}
            series={options.series}
            type="bar"
            width={"100%"}
            height={"100%"}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: "Money Out",
      children: "Content of Tab Pane 2",
      disabled: true,
    },
  ];

  const { currentBusiness } = useAuthStore(
    useShallow((state) => ({
      // businesses: state.businesses,
      currentBusiness: state.currentBusiness,
    }))
  );

  return (
    <div className="absolute top-[90px] w-full flex flex-col items-start py-[40px] px-[80px]">
      <div className="w-full flex justify-between items-center py-3">
        <h3 className="text-32 leading-[40px] font-OjahDisplaySemiBold font-normal text-[#343433]">
          Good Afternoon, {currentBusiness?.split(" ")[0]}
        </h3>
        <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-bold text-[#99999C]">
          Monday, January 23, 2023
        </p>
      </div>
      <div className="w-full flex flex-col gap-6 py-3">
        <div className="w-full relative">
          <Tabs
            defaultActiveKey="1"
            items={items}
            indicator={{
              size: (origin) => origin - 100,
              align: "center",
            }}
          />
          <div className="absolute top-0 right-0 flex gap-4 items-center h-[42px]">
            <button className="h-full bg-[#625BF6] py-2 px-3 rounded-[12px] text-16 leading-5 font-semibold text-white">
              Add money
            </button>
            <button className="h-full bg-[#fff] border border-[#E2E3E5] py-2 px-3 rounded-[12px] text-16 leading-5 font-semibold text-[#343433]">
              Send money
            </button>
            <div className="w-[42px] h-full flex items-center justify-center border border-[#E2E3E5] rounded-[12px]">
              <Icons.Threedots />
            </div>
          </div>
        </div>
        <div className="w-full relative money-tab">
          <Tabs
            defaultActiveKey="1"
            items={itemsTwo}
            indicator={{
              size: 0,
              align: "center",
            }}
            tabBarStyle={{ borderBottom: 0 }}
          />
          <div className="absolute top-0 right-0 flex gap-4 items-center h-[42px]">
            <select className="rounded-[12px] border border-[#E2E3E5] outline-none ring-0 hover:ring-0 hover:outline-none focus:outline-none focus:ring-0">
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
        <div className="w-full flex gap-6 border-t">
          <div className="w-full flex flex-col gap-3 p-3 border-r">
            <div className="flex justify-between items-center w-full">
              <p className="text-26 font-OjahDisplaySemiBold text-center leading-8 font-normal text-[#343433]">
                Cards
              </p>
              <button className="h-full flex gap-2 items-center bg-[#fff] border border-[#E2E3E5] py-2 px-3 rounded-[12px] text-16 leading-5 font-semibold text-[#343433]">
                See all <Icons.ArrowForward />
              </button>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.CardIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-16 text-center leading-5 font-semibold text-[#343433]">
                    Naira Card
                  </p>
                  <p className="text-13 text-center leading-5 font-semibold text-[##99999C]">
                    *** 8594
                  </p>
                </div>
              </div>
              <div className="rounded-[6px] p-1 flex items-center justify-center border border-[#FF9900] text-14 font-normal text-[#FF9900]">
                Locked
              </div>
              <p className="text-16  text-center leading-5 font-semibold text-[#343433]">
                5,500 NGN
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.CardIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-16  text-center leading-5 font-semibold text-[#343433]">
                    Naira Card
                  </p>
                  <p className="text-13 text-center leading-5 font-semibold text-[##99999C]">
                    *** 8594
                  </p>
                </div>
              </div>
              <div className="rounded-[6px] p-1 flex items-center justify-center border border-[#DCFAEC] text-14 font-normal text-[#00C46C]">
                Active
              </div>
              <p className="text-16  text-center leading-5 font-semibold text-[#343433]">
                5,500 NGN
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.CardIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-16 text-center leading-5 font-semibold text-[#343433]">
                    Naira Card
                  </p>
                  <p className="text-13 text-center leading-5 font-semibold text-[##99999C]">
                    *** 8594
                  </p>
                </div>
              </div>
              <div className="rounded-[6px] p-1 flex items-center justify-center border border-[#FF9900] text-14 font-normal text-[#FF9900]">
                Locked
              </div>
              <p className="text-16  text-center leading-5 font-semibold text-[#343433]">
                5,500 NGN
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.CardIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-16 text-center leading-5 font-semibold text-[#343433]">
                    Naira Card
                  </p>
                  <p className="text-13 text-center leading-5 font-semibold text-[##99999C]">
                    *** 8594
                  </p>
                </div>
              </div>
              <div className="rounded-[6px] p-1 flex items-center justify-center border border-[#DCFAEC] text-14 font-normal text-[#00C46C]">
                Active
              </div>
              <p className="text-16 text-center leading-5 font-semibold text-[#343433]">
                5,500 NGN
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.CardIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-16 text-center leading-5 font-semibold text-[#343433]">
                    Naira Card
                  </p>
                  <p className="text-13 text-center leading-5 font-semibold text-[##99999C]">
                    *** 8594
                  </p>
                </div>
              </div>
              <div className="rounded-[6px] p-1 flex items-center justify-center border border-[#FF9900] text-14 font-normal text-[#FF9900]">
                Locked
              </div>
              <p className="text-16 text-center leading-5 font-semibold text-[#343433]">
                5,500 NGN
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 p-3">
            <div className="flex justify-between items-center w-full">
              <p className="text-26 font-OjahDisplaySemiBold text-center leading-8 font-normal text-[#343433]">
                Recent Activities
              </p>
              <button className="h-full flex gap-2 items-center bg-[#fff] border border-[#E2E3E5] py-2 px-3 rounded-[12px] text-16 leading-5 font-semibold text-[#343433]">
                See all <Icons.ArrowForward />
              </button>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.MtnIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-12 text-center leading-3 font-normal text-[##99999C]">
                    Bill payment for
                  </p>
                  <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#343433]">
                    MTN Airtime top up
                  </p>
                </div>
              </div>
              <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#00C46C]">
                + 5,500 NGN
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.GtIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-12 text-center leading-3 font-normal text-[##99999C]">
                    Payment to bank
                  </p>
                  <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#343433]">
                    Oluwatobi Oseni
                  </p>
                </div>
              </div>
              <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#00C46C]">
                + 5,500 NGN
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.PaymentToIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-12 text-center leading-3 font-normal text-[##99999C]">
                    Payment to
                  </p>
                  <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#343433]">
                    Oluwatobi Oseni
                  </p>
                </div>
              </div>
              <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#99999C]">
                5,500 TZS
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.PaymentProcessingIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-12 text-center leading-3 font-normal text-[##99999C]">
                    Currency Swap from
                  </p>
                  <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#343433]">
                    NGN &gt; GBP
                  </p>
                </div>
              </div>
              <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#00C46C]">
                + 500 GBP
              </p>
            </div>
            <div className="w-full flex justify-between items-center border-t p-3">
              <div className="flex gap-2 items-center">
                <Icons.PaymentFromIcon />
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-12 text-center leading-3 font-normal text-[##99999C]">
                    Received from bank
                  </p>
                  <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#343433]">
                    NGN &gt; GBP
                  </p>
                </div>
              </div>
              <p className="text-16 font-OjahDisplaySemiBold text-center leading-5 font-semibold text-[#00C46C]">
                + 5,500 GBP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
