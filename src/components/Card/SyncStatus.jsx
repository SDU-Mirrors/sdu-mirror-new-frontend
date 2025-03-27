import React, {Fragment} from 'react';
import CircleSVG from "src/assets/svg/circle.svg?react"

function SyncStatus({status,sync_method}) {
    //只显示
    if(sync_method === "display_only"){
        return <></>
    }
    //手动同步模式
    if (sync_method === "manual") {
        return <div className="flex items-center gap-1" title="同步方式：手动同步">
            <CircleSVG className="inline w-4 h-4 fill-purple-500"></CircleSVG>
            <span className="text-sm text-purple-500">MANUAL</span>
        </div>
    }
    else {
        //同步成功
        if (status === 0) {
            return <div className="flex items-center gap-1" title="同步成功">
                <CircleSVG className="inline w-4 h-4 fill-green-500"></CircleSVG>
                <span className="text-sm text-green-500">SUCCESS</span>
            </div>
        }
        //同步失败
        else if (status === 1 || status === 2) {
            return <div className="flex items-center gap-1" title="同步失败">
                <CircleSVG className="inline w-4 h-4 fill-red-500"></CircleSVG>
                <span className="text-sm text-red-500">FAILED</span>
            </div>
        }
        //正在同步
        else if (status === 3) {
            return <div className="flex items-center gap-1" title="正在同步">
                <CircleSVG className="inline w-4 h-4 fill-blue-500"></CircleSVG>
                <span className="text-sm text-blue-500">SYNCING</span>
            </div>
        }
    }
}

export default SyncStatus;