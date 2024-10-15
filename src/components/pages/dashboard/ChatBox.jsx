import Button from "../../common/Button";
import { CiCamera } from "react-icons/ci";

const ChatBox = () => {
  return (
    <>
      <div className="bg-zinc-50 shadow-sm shadow-sky-300 rounded-[12px] w-[331px] h-[475px]">
        <div className="bg-orange rounded-t-[12px] p-5">
          <h1 className="w-full font-bold text-[18px] text-zinc-50 tracking-[-1%]">
            Chat with Cypher
          </h1>
        </div>

        <div>
          <div className="flex flex-col items-end">
            <div className="bg-[#3F3F46] rounded-[7px] w-[213px] px-4 py-2 my-2 ms-3">
              <p className="text-[12px] leading-5 text-white">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="bg-zinc-50 border border-[#E4E4E7] rounded-[7px] w-[213px] px-4 py-2 my-2 ms-3">
              <p className="text-[12px] leading-5 text-grayBold">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="bg-zinc-50 border border-[#E4E4E7] rounded-[7px] w-[213px] px-4 py-2 my-2 ms-3">
              <p className="text-[12px] leading-5 text-grayBold">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="bg-[#3F3F46] rounded-[7px] w-[213px] px-4 py-2 my-2 ms-3">
              <p className="text-[12px] leading-5 text-white">
                Lorem ipsum dolar sit general sac mascho werho
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Enter your question..."
            className="border border-[#E5E7EB] w-[301px] px-[10px] py-3 rounded-md bg-[#F3F4F6] hover:shadow-sm focus:outline-emerald-300 text-[12px] text-grayBold"
          />
        </div>

        <div className="flex justify-between items-center gap-3 mx-3 mt-3">
          <div className="flex gap-2 items-center">
            <CiCamera className="w-6 h-6 text-grayBold" />
            <img src="Img/Frame1.png" alt="" />
            <img src="Img/Frame.png" alt="" />
          </div>
          <Button className="rounded-full h-7 w-20">Send</Button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
