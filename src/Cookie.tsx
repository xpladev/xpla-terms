import React, { useState } from "react";
import Header from "./components/PolicyComponents/Header";
import PolicySidebar from "./components/PolicyComponents/PolicySidebar";
import Content from "./components/PolicyComponents/Content";
import cookieData from "./cookie.json";
import TopButton from "./components/PolicyComponents/TopButton";
// import LanguageSelect from "./components/PolicyComponents/LanguageSelect";


const Cookie = () => {
    const [cookieIndex, setCookieIndex] = useState<number>(0);

    return <>
        <Header />
        <div className="w-full pt-[80px] flex justify-center items-start">
            <div className="w-full max-w-[1920px] pl-[40px] pt-[30px] pb-[200px] pr-[35px] flex flex-col justify-start items-center">
                <div className="mb-[30px] w-full max-w-[1290px] flex justify-start items-start relative">
                    <PolicySidebar />
                    {/* <LanguageSelect classname="" /> */}
                </div>
                <Content
                    title="Cookie Policy"
                    policiesData={cookieData}
                    index={cookieIndex}
                    setIndex={setCookieIndex}
                />
            </div>
            <TopButton />
        </div>
    </>
}

export default Cookie;