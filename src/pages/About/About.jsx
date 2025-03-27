import React, {Fragment} from 'react';
import Footer from "../../components/Layouts/Footer.jsx";

import logo_big from "src/assets/source/logo_big.png"
import sdu120 from "src/assets/source/sdu120.png"
import members from "./members.json"
function About() {

    return (
        <div className="p-6">
            <div className="mt-10 mb-8 mx-auto max-w-[600px] px-8">
                <img src={logo_big} alt="logo_big"/>
            </div>

            {members.map(group =>{
                if(group.display)
                return  <div className="max-w-[1280px] mx-auto" key={group.id}>
                    <div className="text-2xl font-bold">{group.title}</div>
                    <div className="my-2">
                        <div className="flex flex-wrap">
                            {group.members.map((member, index) =>{
                                let avatar = new URL(`/src/assets/member_avatar/${member.short}.jpg`,import.meta.url).href;

                                return <div className="w-1/2 md:w-1/3 min-w-[300px] flex-grow" key={index}>
                                    <div
                                        className="m-3 bg-gradient-to-b from-[rgba(145,33,39,0.75)] to-[#ea5455] relative rounded-xl">
                                        <div className="flex px-[20px] py-[28px] h-[160px]">
                                            <div className="flex-shrink-0">
                                                <img src={avatar} alt="img"
                                                     className="rounded-full w-[100px] h-[100px]"/>
                                            </div>
                                            <div className="ml-4">
                                                <div
                                                    className="text-white font-bold text-3xl border-b-2 border-solid border-white pb-2 my-2">{member.name}
                                                </div>
                                                <div className="text-white">{member.description}</div>
                                            </div>
                                        </div>
                                        <img src={sdu120} alt="sdu"
                                             className="w-8 h-8 absolute right-2 bottom-2"/>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                })
            }
            <div className="my-10"></div>
            <Footer/>
        </div>
    );
}

export default About;