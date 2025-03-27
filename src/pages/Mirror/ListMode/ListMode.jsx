import React, {Fragment, useEffect} from 'react';
import dayjs from "dayjs";
import {calcSize,renderTimestamp} from '/src/utils/utils.js'
import SyncStatus from "./SyncStatus.jsx";

import AttentionSVG from "src/assets/svg/attention.svg?react"
import HelpSVG from "src/assets/svg/help.svg?react"
import {Link} from "react-router-dom";


function ListMode(props) {
    const {mirrorsList} = props

    let SuccessBackgroundColor = "hover:bg-gray-300 dark:hover:bg-gray-700"
    let SyncingBackgroundColor = "bg-[#D2ECFA] dark:bg-[#355A6E] dark:text-gray-200"
    let FailedBackgroundColor = "bg-[#FEDBDB] dark:bg-[#A16161] dark:text-gray-200"
    let TimeoutBackgroundColor = "bg-[#FFEAC2] dark:bg-[#6F6148] dark:text-white"

    return (
        <div className="my-8 overflow-x-scroll">
            <table className="w-[900px] min-[900px]:w-full table-fixed" id={"tableList"}>
                <thead>
                    <tr>
                        <th className="py-2 pl-4 min-w-[140px] bg-gray-100 dark:bg-gray-700 select-none text-left">镜像名称</th>
                        <th className="py-2 px-4 w-16 min-w-16 bg-gray-100 dark:bg-gray-700 select-none">帮助</th>
                        <th className="py-2 pl-10 min-w-[200px] bg-gray-100 dark:bg-gray-700 select-none text-left">友好名称</th>
                        <th className="py-2 w-[100px] bg-gray-100 dark:bg-gray-700 select-none">大小</th>
                        <th className="py-2 w-[200px] bg-gray-100 dark:bg-gray-700 select-none">最近一次同步成功时间</th>
                        <th className="py-2 w-40 bg-gray-100 dark:bg-gray-700 select-none">状态</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mirrorsList.map((item,index) => {
                            let colBackgroundColor = SuccessBackgroundColor
                            let nowTimestamp = dayjs().unix()
                            // 这个变量表示当前镜像距上次同步是否已经超过24小时
                            let isTimeout = item.last_timestamp > 0 && nowTimestamp - item.last_timestamp >= 86400

                            if(item.status === 1 || item.status === 2)colBackgroundColor = FailedBackgroundColor
                            else if (item.status === 3)colBackgroundColor = SyncingBackgroundColor

                            if(isTimeout)colBackgroundColor = TimeoutBackgroundColor

                            return <tr className={`${colBackgroundColor} hover:bg-opacity-50 duration-500`} key={index}>
                                <th className="py-3 pl-4 text-left">

                                    <div className="flex items-center flex-wrap">
                                        <a className="block relative min-w-0 flex-shrink overflow-hidden overflow-ellipsis mr-2 text-sky-400" href={item.url} target="_blank">
                                            {item.name}
                                        </a>
                                        {
                                            item.is_limited_image === 1 ?
                                                <div className="bg-yellow-100 flex-shrink-0 px-2 select-none flex rounded-lg items-center mr-2 dark:bg-yellow-500 dark:bg-opacity-50">
                                                    <AttentionSVG className="w-4 h-4 fill-amber-400"></AttentionSVG>
                                                    <div className="text-amber-400 text-sm leading-6" title="只对部分内容进行了同步">LIMITED</div>
                                                </div>
                                                :<></>
                                        }
                                        {
                                            isTimeout ?
                                                <div className="bg-orange-300 flex-shrink-0 px-2 select-none flex rounded-lg items-center dark:bg-orange-500 dark:bg-opacity-50">
                                                    <AttentionSVG className="w-4 h-4 fill-white"></AttentionSVG>
                                                    <div className="text-white text-sm leading-6" title="距上次同步已超过24小时">同步超时</div>
                                                </div>
                                                :<></>
                                        }
                                    </div>
                                </th>

                                {
                                    item.help_url !== ""?
                                        <th>
                                            <Link className="inline-block relative" to={item.help_url} target={`${item.help_url.charAt(0) === '/' ? '' : '_blank'}`}>
                                                <HelpSVG className="w-6 h-6 fill-blue-500 hover:opacity-50 duration-500"></HelpSVG>
                                            </Link>
                                        </th>
                                        :<th></th>
                                }

                                <th className="my-3 pl-10 text-left line-clamp-2 break-words">{item.display_name}</th>
                                {
                                    item.size > 0 ? <th className="py-2">{calcSize(item.size)}</th> : <th></th>
                                }

                                {
                                    item.last_timestamp > 0 ? <th className="py-2">{renderTimestamp(item.last_timestamp)}</th> : <th></th>
                                }

                                <th className="py-2">
                                    <SyncStatus status={item.status} sync_method={item.sync_method}></SyncStatus>
                                </th>
                            </tr>

                        })
                    }



                </tbody>
            </table>

        </div>
    );
}

export default ListMode;