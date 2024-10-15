import Button from "../common/Button";
import { IoIosSearch } from "react-icons/io";

const Filter = ({ welcome, heading, btnText }) => {
  return (
    <section className="bg-whiteLight lg:py-6 py-3">
      <div className="flex md:flex-row flex-col justify-between items-center mx-20">
        <div>
          <p className=" text-[12px] text-grayBold">{welcome}</p>
          <h1 className=" text-[26px] font-bold text-blackBold">{heading}</h1>
        </div>
        <div>
          <form className="flex md:flex-row flex-col gap-3">
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search incident"
                className="py-2 px-6 rounded-[6px] text-[12px] text-grayBold w-40 md:w-48 h-10"
              />
              <IoIosSearch className=" absolute top-[10px] left-1 text-zinc-500 h-5 w-5" />
            </div>

            <input
              type="text"
              placeholder="sort by: Date modified"
              className="md:w-48 w-40 h-10 py-2 px-6 rounded-[6px] text-[12px] text-grayBold"
            />
            <Button className="mx-auto">{btnText}</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Filter;
