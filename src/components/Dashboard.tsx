import { dashboardCardListType } from "../Types/globalTypes";
import Card from "./Card";
import NavBar from "./NavBar";

interface Props {
  sideBarToggler: boolean;
  setSideBarToggler: any;
}

const dashboardCardList: dashboardCardListType[] = [
  {
    cardTitle: "گزارشات",
    cardImg: "/src/assets/bar-chart (1).png",
    cardColor: "bg-[#DD4B39]",
  },
  {
    cardTitle: "ثبت فروش",
    cardImg: "/src/assets/bar-chart (1).png",
    cardColor: "bg-[#8582BC]",
  },
  {
    cardTitle: "اقلام جدید",
    cardImg: "/src/assets/order.png",
    cardColor: "bg-[#00A65A]",
  },
  {
    cardTitle: "قیمت اجناس",
    cardImg: "/src/assets/shipping-cost.png",
    cardColor: "bg-[#52587D]",
  },
  {
    cardTitle: "مرجوعی",
    cardImg: "/src/assets/return.png",
    cardColor: "bg-[#F7C65F]",
  },
  {
    cardTitle: "ارتباط با ما",
    cardImg: "/src/assets/telephone-call.png",
    cardColor: "bg-[#00C0EF]",
  },
];

const Dashboard = ({ setSideBarToggler, sideBarToggler }: Props) => {
  return (
    <div className={`${sideBarToggler ? "" : ""} w-full`}>
      <NavBar
        setSideBarToggler={setSideBarToggler}
        sideBarToggler={sideBarToggler}
      />
      {/* dashboard */}
      <div className={`${sideBarToggler ? "" : "sm:ms-72"}  `}>
        {/* dashboard-title */}
        <div className={` w-full flex border-b-2 border-black px-6 py-3 `}>
          <p className="font-bold pe-4">داشبورد</p>
          <img
            src="/src/assets/exclamation-circle.svg"
            className="w-[20px] text-[#273db786]"
            alt=""
          />
        </div>
        {/* dashboard-cards */}
        <div className="flex justify-center">
          <div
            className={`grid grid-cols-1 md:px-3 pt-24 gap-11 ${
              sideBarToggler
                ? "md:grid-cols-2 lg:grid-cols-3  xl:gap-24"
                : "lg:grid-cols-2 xl:grid-cols-3 md:gap-20  xl:gap-24"
            } `}
          >
            {dashboardCardList.map((card: dashboardCardListType) => (
              <Card card={card} key={card.cardTitle} />
            ))}
          </div>
        </div>
        {/* dashboard footer */}
        <footer className=" ">
          <div className="flex justify-end pe-11 pt-16">
            <span className="text-sm">ورژن 1.10.3</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
