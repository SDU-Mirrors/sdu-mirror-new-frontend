import React from 'react';

import Footer from "../../components/Layouts/Footer.jsx";
import Navigation from "src/pages/HomePage/Navigation/Navigation.jsx";
import Timeline from "src/pages/HomePage/Timeline/Timeline.jsx";

import logo_big from "src/assets/source/logo_big.png"
//备注:导入svg时别忘了在文件名后面加上?react
import IsoSVG from "src/assets/svg/iso.svg?react"
import AboutSVG from "src/assets/svg/about.svg?react"
import TimelineSVG from "src/assets/svg/timeline.svg?react"
import {useNavigate} from "react-router-dom";


function HomePage() {
    const navigate = useNavigate()

    return (
        <div className="p-6">
            <div className="mt-10 mb-8 mx-auto max-w-[600px] px-8">
                <img src={logo_big} alt="sdu_mirror_logo_big" className="select-none"/>
                <div className="text-center mt-8 opacity-50 text-2xl my-4">这里是山东大学镜像站，在这里我们将提供给您丰富的镜像资源，以及相关的学习和帮助资料，并且分享我们相关的动态。</div>

                <div className="w-full flex justify-center items-center">
                    <button onClick={()=> navigate("/mirror")}
                        className="inline-flex text items-center h-[48px] mx-2 p-4 rounded-md group text-white bg-blue-500 hover:bg-blue-500 hover:opacity-80">
                        <IsoSVG className="h-6 w-6 group-hover:rotate-180 duration-500 mr-2" fill="white"/>
                        镜像资源
                    </button>
                    <button  onClick={()=> navigate("/about")}
                        className="inline-flex text items-center h-[48px] mx-2 p-4 rounded-md group text-blue-400 bg-transparent border-blue-400 border-solid border hover:border-blue-500 hover:border-solid">
                        <AboutSVG className="h-6 w-6 group-hover:rotate-[360deg] duration-500 mr-2" fill="rgb(96,165,250)"/>
                        关于我们
                    </button>
                </div>
            </div>
            <Navigation/>
            <div className="mt-10 max-w-[1280px] mx-auto">
                <div className="flex mb-6">
                    <TimelineSVG className="h-10 w-10 stroke-black dark:stroke-white"/>
                    <div className="ml-4 text-3xl">
                        镜像站时间记录轴
                    </div>
                </div>


                <Timeline/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;