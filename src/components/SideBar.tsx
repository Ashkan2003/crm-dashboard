interface Props {
  sideBarToggler: boolean;
  setSideBarToggler: any;
}

type sideBarMenuType = {
  itemName: string;
  itemIcon: string;
}[];

const sideBarMenu: sideBarMenuType = [
  { itemName: "مدیریت کالا", itemIcon: "/src/assets/features (1).png" },
  { itemName: "مدیریت فروش", itemIcon: "/src/assets/budget.png" },
  { itemName: "مدیریت خرید", itemIcon: "/src/assets/purchase.png" },
  { itemName: "مدیریت هزینه", itemIcon: "/src/assets/gear.png" },
  { itemName: "مدیریت مشتری", itemIcon: "/src/assets/expert.png" },
  { itemName: "تنظیمات", itemIcon: "/src/assets/settings.png" },
];

const SideBar = ({ sideBarToggler, setSideBarToggler }: Props) => {
  return (
    <div
      className={`${
        sideBarToggler ? "hidden" : " "
      } w-72 bg-[#2E303D] fixed h-full z-10 `}
    >
      <div className=" bg-[#434866]  flex justify-center items-center h-[60px] ">
        <p className="text-white text-[20px] pb-2 pl-10">مدیریت انبارداری</p>
        <img
          className="w-[25px] h-[25px]  cursor-pointer"
          src="/src/assets/menu (1).png"
          onClick={() => setSideBarToggler(!sideBarToggler)}
        />
      </div>
      {/* searchBox */}
      <div className="p-5 rounded-lg">
        <div className=" shadow-sm shadow-slate-300 h-[33px] dark:shadow-none relative  items-center  rounded-xl bg-[#43486680] focus-within:shadow-md md:flex dark-gray-700 hover:dark:outline hover:dark:outline-1  dark:transition-all ">
          <input
            className="peer rounded-xl text-white placeholder:text-white bg-gray-100 h-full w-full pr-2 text-sm  outline-none  dark:bg-gray-700   dark:border-4 dark:border-gray-700 "
            type="text"
            placeholder="جستجو"
          />
          <div className=" absolute left-0 top-0 grid h-full w-12 place-items-center text-gray-500  ">
            <img
              src="/src/assets/search-13-16.png"
              className="h-[15px] "
              alt=""
            />
          </div>
        </div>
      </div>
      {/* menuList */}
      <ul className="px-3  pt-4 space-y-9">
        {sideBarMenu.map((item) => (
          <li
            key={item.itemName}
            className={` flex items-center relative cursor-pointer ${
              item.itemName == "تنظیمات" && "pt-[240px] "
            }`}
          >
            {/* render the hr */}
            {item.itemName == "تنظیمات" && (
              <hr className="absolute w-72 bottom-9 -right-3" />
            )}
            <img className="w-[16px] h-[14px]" src={item.itemIcon} alt="" />
            <p className="text-white  ms-3 ">{item.itemName}</p>
            <img
              className="w-[16px] h-[14px] absolute left-5"
              src="/src/assets/arrowpng.parspng.com-13.png"
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
