import { cn } from "../lib/utils/cn";

const Button = ({ children, className, handleChange }) => {
  return (
    <button
      type="button"
      onClick={handleChange}
      className={cn(
        "w-[108px] h-[42px] bg-orange rounded-[6px] text-zinc-50 hover:text-white hover:bg-amber-600 transition-all duration-300 text-[12px] font-bold",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
