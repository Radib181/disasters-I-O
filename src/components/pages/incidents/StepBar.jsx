import Button from "../../common/Button";
import { StepBarData } from "../../lib/db";
import StepBarCard from "./StepBarCard";

const StepBar = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-blackBold text-[32px]">
          Let&apos;s get started
        </h1>
        <p className="text-grayBold text-base leading-6">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar
          sit general sac mascho werhoLorem ipsum dolar sit gene
        </p>
      </div>

      <div className="flex justify-center items-center w-[598px] mx-auto mt-5">
          <div className="w-7 h-7 bg-whiteLight rounded-full"></div>
          <hr className="bg-whiteLight w-[299px] h-[3px]" />
          <div className="w-7 h-7 bg-whiteLight rounded-full"></div>
          <hr className="bg-whiteLight w-[299px] h-[3px]" />
          <div className="w-7 h-7 bg-whiteLight rounded-full"></div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-6">
        {StepBarData.map((stepBarDetails, i) => (
          <StepBarCard key={i} {...stepBarDetails} />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Button>Get started</Button>
      </div>
    </div>
  );
};

export default StepBar;
