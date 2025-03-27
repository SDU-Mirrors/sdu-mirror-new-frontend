import React, {Fragment} from 'react';

function SyncStatus({status,sync_method}) {
    //只显示
    if(sync_method === "display_only"){
        return <></>
    }
    //手动同步模式
    if (sync_method === "manual") {
        return <Fragment>
            <div className="w-[100px] mx-auto bg-purple-200 text-purple-400 select-none dark:bg-purple-900">
                MANUAL
            </div>
        </Fragment>
    }
    else {
        //同步成功
        if (status === 0) {
            return <Fragment>
                <div>
                    <div className="w-[100px] mx-auto bg-green-200 text-green-400 select-none dark:bg-green-900">
                        SUCCESS
                    </div>
                </div>
            </Fragment>
        }
        //同步失败
        else if (status === 1 || status === 2) {
            return <Fragment>
                <div className="w-[100px] mx-auto bg-red-200 text-red-400 select-none dark:bg-red-900">
                    FAILED
                </div>
            </Fragment>
        }
        //正在同步
        else if (status === 3) {
            return <Fragment>
                <div className="w-[100px] mx-auto bg-blue-200 text-blue-400 select-none dark:bg-blue-900">
                    SYNGING
                </div>
            </Fragment>
        }
    }
}

export default SyncStatus;