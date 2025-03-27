import React from 'react';
import {Link} from "react-router-dom";


import linux from "../../../assets/linux.png"
import docs from "../../../assets/docs.png"
import member from "../../../assets/member.png"
import sduLogo from "../../../assets/sduLogo.png"
import oops from "../../../assets/Oops.png"

function Navigation() {
    return (
        <div className="max-w-[1280px] mx-auto flex flex-wrap text-center">
            <div className="min-w-[150px] max-w-[400px] w-1/3 lg:w-1/5 py-4 flex-grow">
                <Link to="/mirror">
                    <img src={linux} alt="开源镜像" className="max-w-[150px] mx-auto select-none"/>
                    <div className="mt-1">开源镜像</div>
                </Link>
            </div>
            <div className="min-w-[150px] max-w-[400px] w-1/3 lg:w-1/5 py-4 flex-grow">
                <Link to="/docs">
                <img src={docs} alt="博客" className="max-w-[150px] mx-auto select-none"/>
                <div className="pr-5 mt-1">博客</div></Link>
                {/*    这个pr-5主要是为了让博客二字在视觉上和图标居中*/}
            </div>
            <div className="min-w-[150px] max-w-[400px] w-1/3 lg:w-1/5 py-4 flex-grow">
                <Link to="/about">
                <img src={member} alt="成员信息" className="max-w-[150px] mx-auto select-none"/>
                <div className="mt-1">成员信息</div></Link>
            </div>
            <div className="min-w-[150px] max-w-[400px] w-1/3 lg:w-1/5 py-4 flex-grow">
                <a href="https://www.nc.sdu.edu.cn/" target="_blank">
                <img src={sduLogo} alt="信息化工作办公室" className="max-w-[150px] mx-auto select-none"/>
                <div className="mt-1">信息化工作办公室</div></a>
            </div>
            {/*<div className="min-w-[150px] max-w-[400px] w-1/3 lg:w-1/5 py-4 flex-grow">*/}
            {/*    <a href="https://oops.qd.sdu.edu.cn/" target="_blank">*/}
            {/*    <img src={oops} alt="Oops计算机社团" className="max-w-[150px] mx-auto select-none"/>*/}
            {/*    <div className="mt-1">Oops计算机社团</div>*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    );
}

export default Navigation;