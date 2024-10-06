import { dashboardCardListType } from "../Types/globalTypes";

interface Props {
  card: dashboardCardListType;
}

const Card = ({ card }: Props) => {
  return (
    <div
      className={`text-black ${card.cardColor} relative rounded-xl w-80 h-40 cursor-pointer `}
    >
      <div className="flex justify-between items-center pt-6 px-7 ">
        <p className="text-white text-[27px] font-semibold pt-4">
          {card.cardTitle}
        </p>
        <div className="relative ">
          <div className="absolute  p-8 bg-white/20 shadow-inner blur-xl  text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"></div>
          <img className="w-[90px] opacity-55" src={card.cardImg} alt="" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full backdrop-blur-3xl rounded-b-xl bg-gray-700/20 ">
        <p className="text-center rounded-b-xl text-gray-300 text-[13px] py-1.5">
          اطلاعات بیشتر +
        </p>
      </div>
    </div>
  );
};

export default Card;
