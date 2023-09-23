import React from "react";
import Idea from "../Logo/Idea";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/State/index";

export default function Navigation() {
    const mode = useSelector((state) => state.darkMode);

    const dispatch = useDispatch();
    const { darkMode } = bindActionCreators(actionCreators, dispatch);
    const [on, setModeOn] = React.useState(false);
    const handleMode = () => {
        setModeOn(!on);
        darkMode(!on);
    };

    return (
        <nav
            className={'flex flex-row justify-evenly items-center smallMobile:px-8 mobile:px-8 tablet:px-8 laptop:px-8 desktop:px-8 largeDesktop:px-80 py-5 w-full border-b-gray-300 border-b-[0.05rem] fixed z-[999] h-[4.5rem]'}
            style={{
                background: `${mode.bg}`,
                color: `${mode.text}`
            }}
        >
            <div className="w-1/3">
                <Link href={"/idea"}>
                    <Idea />
                </Link>
            </div>
            <div className="w-1/3"></div>
            <div className="flex flex-row justify-end items-center w-2/3 gap-5">
                <div>
                    <Link href={"/"} className="flex flex-row justify-end items-center flex-nowrap w-full">About me</Link>
                </div>
                {/* <div>
                    Write
                    </div>
                    <div className="px-6 py-2 rounded-full font-bold text-white bg-purple-700">
                    Sign Up
                </div> */}
                <div onClick={handleMode} className="hover:cursor-pointer">
                    {mode.bg === "#242525" ? (
                        <LightModeIcon />
                    ) : (
                        <DarkModeIcon />
                    )}
                </div>
            </div>
        </nav>
    );
}
