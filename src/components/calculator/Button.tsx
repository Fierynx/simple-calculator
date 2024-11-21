import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export default function Button({
    icon,
    ...props
  } : {icon: string} & HTMLAttributes<HTMLElement>
){
  return (
    <button 
      {...props} 
      className={cn("flex justify-center items-center text-white text-xl hover:opacity-80 rounded-full w-[3.125rem] h-[3.125rem] bg-light-gray active:opacity-70", props.className)}
    >
      {icon}
    </button>
  );
}