import React, { useState } from "react";
import cookieData from "./cookie.json";
import TopButton from "../PolicyComponents/TopButton";
import HelloPalPolicySidebar from "./PolicySidebar";
import HelloPalHeader from "./Header";
import OneLanguageSelect from "./OneLanguageSelect";
import OneLanguageContent from "./OneLanguageContent";


const HelloPalCookie = () => {
    const [cookieIndex, setCookieIndex] = useState<number>(0);

    return <>
        <HelloPalHeader />
        <div className="w-full pt-[80px] flex justify-center items-start">
            <div className="w-full max-w-[1920px] pl-[40px] pt-[30px] pb-[200px] pr-[35px] flex flex-col justify-start items-center">
                <div className="mb-[30px] w-full max-w-[1290px] flex justify-start items-start relative">
                    <HelloPalPolicySidebar />
                    <OneLanguageSelect language="english" classname="" />
                </div>
                <OneLanguageContent
                    title="Cookie Policy"
                    policiesData={cookieData}
                    language="english"
                    index={cookieIndex}
                    setIndex={setCookieIndex}
                />
            </div>
            <TopButton />
        </div>
    </>
}

export default HelloPalCookie;