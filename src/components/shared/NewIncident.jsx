import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { IoIosClose } from "react-icons/io";

const NewIncident = ({ btnText, btnBack, welcome, heading }) => {
    const navigate = useNavigate()
    const stepBack = () => {
        navigate("/incidents/stepbar")
    }
  return (
    <section className="bg-whiteLight lg:py-6 py-3">
      <div className="flex md:flex-row flex-col justify-between items-center mx-20">
        <div className="flex items-center gap-3">
          <div>
            <IoIosClose className="text-4xl bg-white rounded-full" />
          </div>
          <div>
            <p className=" text-[12px] text-grayBold">{welcome}</p>
            <h1 className=" text-[26px] font-bold text-blackBold">{heading}</h1>
          </div>
        </div>
        <div className="w-[527px] bg-gray-300 h-[5px] rounded-full">
          <div className="bg-orange w-[200px] h-[5px] rounded-full"></div>
        </div>
        <div>
          <Button
            className="mx-auto me-3 bg-[#FAFAFA] border-[#D4D4D8] text-grayBold"
            handleChange={stepBack}
          >
            {btnBack}
          </Button>
          <Button className="mx-auto">{btnText}</Button>
        </div>
      </div>
    </section>
  );
};

export default NewIncident;
