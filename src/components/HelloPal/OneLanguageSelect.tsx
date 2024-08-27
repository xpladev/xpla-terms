import React, { useRef } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import clsx from "clsx";

const OneLanguageSelect = ({ language, classname = "" }: { language: "english" | "korean", classname?: string }) => {
    const selectRef = useRef<HTMLDivElement | null>(null);


    return <div className={clsx(classname, "absolute right-0 top-0 ")}>
        <div
            ref={selectRef}
            className={clsx(
                "relative w-[120px] ",
                " bg-[#F2F2F2]"
            )}>
            <div className="  flex justify-between items-center py-[4.5px] pl-[10px] text-[#878D96] ">

                <span className="text-[16px] leading-[19px] font-medium">
                    {
                        language === "english" ? "English" : "한국어"
                    }
                </span>
                <KeyboardArrowDownRoundedIcon className={clsx("scale-[1.2] mr-[4.3px]")} />
            </div>

        </div>
    </div>
}

export default OneLanguageSelect