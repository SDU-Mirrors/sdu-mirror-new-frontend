import React from 'react';
import List from "./List.jsx";
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';

import Loading from "src/components/Loading/Loading.jsx"
import CloseSVG from "src/assets/svg/close.svg?react"
import LoadingSVG from "src/assets/svg/loading.svg?react"

function DownloadCard(props) {
    const {open,setOpen,isoLinks,isLoad=false} = props

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-70 fixed inset-0 transition-opacity duration-200 z-10 animate-overlayShow" />
                <Dialog.Content aria-describedby={undefined}
                    className="bg-white fixed w-[90vw] max-w-[1600px] min-h-[300px] h-[80vh] rounded-xl flex flex-col p-4 top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 animate-contentShow dark:bg-base-200-dark dark:text-[#A6ADBB]">
                    <Dialog.Title className="text-2xl mb-4 select-none flex-shrink-0">下载</Dialog.Title>

                    <Tabs.Root defaultValue="tab_os" className="min-h-0 flex-grow flex flex-col">
                        <Tabs.List className="">
                            {
                                isoLinks.hasOwnProperty('os') ? <Tabs.Trigger value="tab_os" className="p-2 mr-4 data-[state=active]:text-blue-500 hover:bg-black hover:bg-opacity-20">操作系统</Tabs.Trigger> : <></>
                            }
                            {
                                isoLinks.hasOwnProperty('app') ? <Tabs.Trigger value="tab_app" className="p-2 mr-4 data-[state=active]:text-blue-500 hover:bg-black hover:bg-opacity-20">应用程序</Tabs.Trigger> : <></>
                            }
                        </Tabs.List>

                        <Tabs.Content value="tab_os" className="min-h-0 data-[state=active]:flex-grow flex overflow-y-auto border-base-200 dark:border-base-100-dark border-solid data-[state=active]:border-y-2 dark:data-[state=active]:border-y-4 ">
                            {
                                isLoad?
                                    <List isoLinks={isoLinks['os']} />
                                    :
                                <Loading/>

                            }
                        </Tabs.Content>

                        <Tabs.Content value="tab_app" className="min-h-0 data-[state=active]:flex-grow flex overflow-y-auto border-base-200 dark:border-base-100-dark border-solid data-[state=active]:border-y-2 dark:data-[state=active]:border-y-4">
                            {
                                isLoad?
                                    <List isoLinks={isoLinks['app']} />
                                    :
                                    <Loading/>

                            }
                        </Tabs.Content>
                    </Tabs.Root>

                    <Dialog.Description asChild className="mt-2">
                        <p>ISO 数据通过 <a href="https://github.com/tuna/mirror-web" rel="external nofollow" className="text-blue-500">tuna/mirror-web</a> 中的 geninfo 程序生成。</p>
                    </Dialog.Description>
                    <Dialog.Close asChild>
                        <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-500 hover:bg-opacity-20 group" aria-label="Close">
                            <CloseSVG className="w-6 h-6 stroke-black dark:stroke-gray-400 group-hover:rotate-180 duration-500"/>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default DownloadCard;