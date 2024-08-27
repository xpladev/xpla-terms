import React, { useState } from "react";
import touData from "./tou.json";
import Content from "../PolicyComponents/Content";
import TopButton from "../PolicyComponents/TopButton";
import HelloPalPolicySidebar from "./PolicySidebar";
import HelloPalHeader from "./Header";
import LanguageSelect from "../PolicyComponents/LanguageSelect";


const HelloPalTou = () => {
    const [touIndex, setTouIndex] = useState<number>(0);

    return <>
        <HelloPalHeader />
        <div className="w-full pt-[80px] flex justify-center items-start">
            <div className="w-full max-w-[1920px] pl-[40px] pt-[30px] pb-[200px] pr-[35px] flex flex-col justify-start items-center">
                <div className="mb-[30px] w-full max-w-[1290px] flex justify-start items-start relative">
                    <HelloPalPolicySidebar />
                    <LanguageSelect classname="" />
                </div>
                <Content
                    title="Terms of Use"
                    policiesData={touData}
                    index={touIndex}
                    setIndex={setTouIndex}
                />
            </div>
            <TopButton />
        </div>
    </>
}

export default HelloPalTou;