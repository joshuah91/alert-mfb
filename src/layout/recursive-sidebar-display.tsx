/* eslint-disable @typescript-eslint/no-explicit-any */
// import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Icons from "../assets/icons/icons";
import AddBusinessModal from "../pages/components/new-business-modal";
import { useAuthStore } from "../store/client";
import { useShallow } from "zustand/react/shallow";

type RecursiveSidebarDisplayProps = {
  sidebarPages: { [key: string]: any }[];
  style?: string;
  isChild: boolean;
};

const RecursiveSidebarDisplay = ({
  sidebarPages,
  style,
}: // isChild,
RecursiveSidebarDisplayProps) => {
  const location = useLocation();
  const [addBusiness, setAddBusiness] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const currentPage = (path: string) => {
    return matchPath(path + "/*", location?.pathname);
  };

  const { businesses, currentBusiness } = useAuthStore(
    useShallow((state) => ({
      businesses: state.businesses,
      currentBusiness: state.currentBusiness,
    }))
  );

  const setCurrentBusiness = useAuthStore((state) => state.setCurrentBusiness);

  return (
    <>
      <div
        className={twMerge(
          "h-full shadow-md w-full pt-5 flex flex-col relative",
          style
        )}
      >
        <div className="relative w-full flex gap-2 items-center border border-[#E2E3E5] p-1 bg-white rounded-[12px] mb-[60px]">
          <Icons.UserIcon />
          <div className="flex flex-col gap-1 w-[63%]">
            <p className="text-16 overflow-hidden whitespace-nowrap text-[#343433] font-semibold leading-5 tracking-tighter">
              {currentBusiness}
            </p>
            <p className="text-12 text-[#6F6F6F] overflow-hidden whitespace-nowrap font-normal leading-5 tracking-tighter">
              Business ID: 093483930
            </p>
          </div>
          <div
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer"
          >
            <Icons.DropDownIcon />
          </div>
          {dropdown && (
            <>
              <div className="w-full absolute top-[53px] bg-white left-0 pt-2 pb-1 px-1 flex flex-col gap-3 items-start">
                {businesses?.length > 1 &&
                  businesses
                    ?.filter((i) => i !== currentBusiness)
                    .map((item: string, index: number) => {
                      return (
                        <div
                          onClick={() => {
                            setCurrentBusiness(item);
                            setDropdown(false);
                          }}
                          className="w-full cursor-pointer flex gap-2 items-center p-1 bg-white rounded-[12px]"
                        >
                          <Icons.UserIcon />
                          <div className="flex flex-col gap-1 w-[63%]">
                            <p
                              key={index}
                              className="text-16 overflow-hidden whitespace-nowrap text-[#343433] font-semibold leading-5 tracking-tighter"
                            >
                              {item}
                            </p>
                            <p className="text-12 text-[#6F6F6F] overflow-hidden whitespace-nowrap font-normal leading-5 tracking-tighter">
                              Business ID: 093483930
                            </p>
                          </div>
                        </div>
                      );
                    })}
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => {
                    setAddBusiness(true);
                    setDropdown(false);
                  }}
                >
                  <div className="flex items-center justify-center bg-[#FAFAFA]">
                    <Icons.AddIcon />
                  </div>
                  <p className="text-16 overflow-hidden text-[#343433] whitespace-nowrap font-semibold leading-5 tracking-tighter">
                    Add a Business
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <ul>
          {sidebarPages?.slice(0, 8).map((page) => {
            return (
              <li className="pl-[31px] py-[12px] text-16 font-semibold hover:bg-[#e8e8e8]">
                <NavLink
                  to={page.path}
                  className={
                    currentPage(page?.path)
                      ? " text-[#5540EB] flex items-center gap-[16px]"
                      : " text-[#99999C] flex items-center gap-[16px]"
                  }
                >
                  {currentPage(page?.path) ? (
                    <img src={page?.activeIcon} />
                  ) : (
                    <img src={page?.icon} />
                  )}
                  <p>{page.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="absolute w-full bottom-0">
          {sidebarPages?.slice(8).map((page) => {
            return (
              <li className="pl-[31px] py-[12px] text-16 font-semibold hover:bg-[#e8e8e8]">
                <NavLink
                  to={page.path}
                  className={
                    currentPage(page?.path)
                      ? " text-[#5540EB] flex items-center gap-[16px]"
                      : " text-[#99999C] flex items-center gap-[16px]"
                  }
                >
                  {currentPage(page?.path) ? (
                    <img src={page?.activeIcon} />
                  ) : (
                    <img src={page?.icon} />
                  )}
                  <p>{page.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <AddBusinessModal
        open={addBusiness}
        onClose={() => setAddBusiness(false)}
      ></AddBusinessModal>
    </>
  );
};

export default RecursiveSidebarDisplay;
