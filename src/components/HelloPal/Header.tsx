import React from "react";

const HelloPalHeader = () => {

    return <header className="z-10 fixed top-0 left-0 right-0 w-full bg-black h-[80px] flex justify-center items-center">
        <div className="relative max-w-[1920px] w-full pl-[40px] pr-[35px] flex justify-start items-center">
            <div className="flex justify-center items-center">
                <img
                    src="/img/hello-pal-logo.svg"
                    className="mr-[30px]"
                    alt="xpla-logo"
                    width="150px"
                    height="40px"
                />
                <span className="text-white leading-[35.8px] text-[30px] font-medium">
                    Policies
                </span>
            </div>
        </div>
    </header>
}

export default HelloPalHeader;

