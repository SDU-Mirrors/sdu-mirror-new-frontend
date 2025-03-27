import React from 'react'

import { useRegisterSW } from 'virtual:pwa-register/react'

function ReloadPrompt() {
    const intervalMS = 10 * 60 * 1000 //轮询Service Worker 更新的间隔,单位为ms

    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            // eslint-disable-next-line prefer-template
            console.log('SW Registered: ' + r)
            r && setInterval(() => {
                r.update()
            }, intervalMS)
        },
        onRegisterError(error) {
            console.log('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }

    return (
        <div className="w-0 h-0 p-0 m-0 select-none">
            { (offlineReady || needRefresh)
                && <div className="flex fixed right-0 bottom-0 m-6 p-4 z-10 shadow-xl rounded-xl bg-base-100 border-solid border-2 border-blue-500 dark:bg-base-200-dark">
                    <div className="mr-2">
                        { offlineReady
                            ? <span>网页准备好进入离线模式</span>
                            : <span>网页有新内容更新</span>
                        }
                    </div>
                    {needRefresh && <button className="mr-2 text-blue-400 hover:opacity-80 duration-200" onClick={() => updateServiceWorker(true)}>刷新一下</button> }
                    <button className="mr-2 text-gray-600 hover:opacity-80 duration-200 dark:text-gray-400" onClick={() => close()}>关闭</button>
                </div>
            }
        </div>
    )
}

export default ReloadPrompt