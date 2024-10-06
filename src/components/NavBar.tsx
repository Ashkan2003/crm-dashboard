interface Props {
  sideBarToggler: boolean;
  setSideBarToggler: any;
}

const NavBar = ({ setSideBarToggler, sideBarToggler }: Props) => {
  return (
    <nav className="bg-[#52587D] px-5 py-3 flex  justify-between h-[60px]">
      <div className="flex items-center">
        <img
          className={`${
            sideBarToggler ? "" : "hidden"
          } w-[25px] h-[25px]  cursor-pointer me-5`}
          src="/src/assets/menu (1).png"
          onClick={() => setSideBarToggler(!sideBarToggler)}
        />
        <div
          className={`flex items-center ${sideBarToggler ? "" : "sm:ms-72"}`}
        >
          <img
            src="/src/assets/Kafsh-Meli-Logo-1030x1030.png "
            className="w-[50px] h-[50px] me-4"
          />
          <p className="text-white font-bold text-[18px]">کفش ملی</p>
        </div>
      </div>
      <div className="flex items-center text-white text-[15px]">
        {/* profile-info */}
        <div className="flex">
          <img src="/src/assets/profile-circle.svg" className="w-[24px] me-4 " alt="" />
          <p className="hidden sm:block">محمدجواد صباغ</p>
        </div>
        {/* date-time-info */}
        <div className="hidden lg:flex ">
          <div className="flex border-l-2 px-3">
            <img
              src="/src/assets/calendar.png"
              alt=""
              className="w-[20px]  mx-3"
            />
            <span>جمعه, </span>
            <span className="px-1">6 مهر</span>
            <span>1403</span>
          </div>
          <div className="ms-3 hidden xl:inline-block">
            <p>Fri,27 Sep 2024</p>
          </div>
        </div>
        {/* clock */}
        <div className="hidden md:flex items-center ps-5">
          <img className="w-[20px]" src="/src/assets/time.png" alt="" />
          <p className=" ps-3 space-x-2">
            <span>10:14</span>
            <span>PM</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
