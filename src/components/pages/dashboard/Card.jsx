const Card = ({ img, title, description, amount }) => {
  return (
    <div className="flex flex-col w-fit m-2 rounded-lg p-3 gap-3 shadow-lg shadow-sky-400">
      <img src={img} alt={title} className="w-[306px] h-[253px] rounded-lg" />
      <h3 className="font-bold text-base leading-8 text-blackBold">{title}</h3>
      <p className="text-grayBold text-[14px] leading-7">{description}</p>
      <p className="font-bold text-base text-blackBold leading-8">{amount}</p>
    </div>
  );
};

export default Card;
