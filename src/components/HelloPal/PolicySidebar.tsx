import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const HelloPalPolicySidebar = () => {
    const location = useLocation();
    const { pathname } = location;

    return <div className="md:mt-0 flex ">
        <Link
            className={clsx("text-[16px] font-medium leading-[19px] mr-[12px]",
                (pathname === "/hello-pal/tou" || pathname === "/" )? "text-[#00B1FF]" : "text-[#878D96]"
            )}
            to="/hello-pal/tou"
        >
            Terms of Use
        </Link>
        <div className="border-r-[0.7px]  border-[#878D96] mr-[12px]" />
        <Link
            className={clsx("text-[16px] font-medium leading-[19px] mr-[12px]",
                pathname === "/" ? "text-[#00B1FF]" : "text-[#878D96]"
            )}
            to="/"
        >
            Privacy Policy
        </Link>
        <div className="border-r-[0.7px]  border-[#878D96] mr-[12px]" />
        
        <Link
            className={clsx("text-[16px] font-medium leading-[19px] ",
                pathname === "/hello-pal/cookie" ? "text-[#00B1FF]" : "text-[#878D96]"
            )}
            to="/hello-pal/cookie"
        >
            Cookie Policy
        </Link>
    </div>
}

export default HelloPalPolicySidebar;