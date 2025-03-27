import React from 'react';
import {useNavigate} from "react-router-dom";

import logo_mini from 'src/assets/source/logo_mini.png'

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className="max-h-screen max-w-full overflow-hidden">
            <div className="h-32"></div>
            <div className="h-[400px] max-w-[1280px] mx-auto relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src={logo_mini} className=" max-w-[400px] opacity-15 select-none" alt=""/>
                </div>
                <div className="absolute min-w-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                    <div className="text-2xl">404 NOT FOUND</div>
                    <div className="text-4xl">哎呀 出错了 {`(>＿<)`}</div>
                    <div className="text-4xl my-2">您要找的页面似乎并不存在</div>

                    <div className="flex">
                        <div onClick={() => navigate(-1)}
                            className="text-[#9c0c13] hover:text-blue-400 duration-200 cursor-pointer">回到上一页</div>
                        <div className="flex-grow"></div>
                        <div onClick={() => navigate('/')}
                            className="text-[#9c0c13] hover:text-blue-400 duration-200 cursor-pointer">返回首页</div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default NotFoundPage;