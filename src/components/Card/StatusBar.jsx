import React, {Fragment} from 'react';
import SyncStatus from "./SyncStatus.jsx";

import {calcSize, calcLastTimestamp, renderTimestamp} from '/src/utils/utils.js'

import DatabaseSVG from "src/assets/svg/database.svg?react"
import HistorySVG from "src/assets/svg/history.svg?react"
import AttentionSVG from "src/assets/svg/attention.svg?react"

function StatusBar({info}) {
    const {status,sync_method,size,last_timestamp,is_limited_image} = info
    return (
        <div className="flex flex-wrap text-sm text-center gap-2 mt-1.5 mb-0.5 text-gray-700 dark:text-gray-400 select-none">

            <SyncStatus status={status} sync_method={sync_method}></SyncStatus>

            {
                size > 0 ?
                    <div className="flex items-center gap-1">
                        <DatabaseSVG
                            className="inline w-5 h-5 stroke-gray-700 dark:stroke-gray-400">
                        </DatabaseSVG>
                        <span>{calcSize(size)}</span>
                    </div>
                    : <></>
            }

            {
                last_timestamp > 0 ?
                    <div className="flex items-center gap-1">
                        <HistorySVG
                            className="inline w-5 h-5 stroke-gray-700 dark:stroke-gray-400">
                        </HistorySVG>
                        <span title={"最近一次同步成功时间："+renderTimestamp(last_timestamp)}>{calcLastTimestamp(last_timestamp)}</span>
                    </div>
                    : <></>
            }

            {
                is_limited_image === 1 ?
                    <div className="flex items-center gap-1">
                        <AttentionSVG
                            className="inline w-5 h-5 fill-yellow-400">
                        </AttentionSVG>
                        <span className="text-yellow-500" title="只对部分内容进行了同步">LIMITED</span>
                    </div>
                    : <></>
            }
        </div>
    );
}

export default StatusBar;