import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import StatusBar from "./StatusBar.jsx";

import HelpSVG from "src/assets/svg/help.svg?react"

function Card({item = {},icon = <></>,showFriendlyName = true}) {
    let {
        name = "",
        url = "/",
        display_name = "",
        description = "暂无描述",
        help_url = "",
        status = 0,
        sync_method = "display_only",
        sync_methon = "display_only",
        size = 0,
        last_timestamp = 0,
        is_limited_image = 0,
    } = item

    // sync_methon的存在是为了临时解决sync.json中sync_method拼写不统一的问题
    // 问题解决后就删除这个硬编码
    if(sync_methon === "rsync" || sync_methon === "custom")sync_method = sync_methon

    return (
        <div
            className="min-w-[300px] min-h-[160px] rounded-3xl shadow-md px-6 pt-5 pb-2 border-gray-200 border-solid-2 border cursor-pointer hover:bg-gray-50 duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
            key={name}
            onClick={()=>window.open(url)}>
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <div className="min-w-0">
                        <div className="text-[0px]">
                            {/*text-[0px]是为了解决下面元素设为inline-block时会意外撑起一些高度的问题*/}
                            <div className="relative inline-block whitespace-nowrap overflow-ellipsis max-w-full pr-8 overflow-hidden text-2xl font-bold">
                                {showFriendlyName ? display_name : name}
                                {
                                    help_url !== "" ?
                                        <Link className="inline-block absolute right-1 top-0"
                                              to={help_url}
                                              target={`${help_url.charAt(0) === '/' ? '' : '_blank'}`}
                                              onClick={(e)=>{e.stopPropagation()}}>
                                            <HelpSVG className="w-6 h-6 fill-blue-500 hover:opacity-50 duration-200"></HelpSVG>
                                        </Link>
                                        : <></>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="flex">
                        <div className="overflow-hidden text-gray-400 line-clamp-5 mr-2 h-full break-words flex-grow">
                            {description}
                        </div>
                        {icon}
                    </div>

                </div>
                <StatusBar info = {{status,sync_method,last_timestamp,size,is_limited_image}}></StatusBar>
            </div>
        </div>
    );
}

export default Card;