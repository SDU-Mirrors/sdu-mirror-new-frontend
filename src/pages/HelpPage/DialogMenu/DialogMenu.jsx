import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Menu from "../Menu/Menu.jsx"
import CloseSVG from "src/assets/svg/close.svg?react";

function DialogMenu(props) {
    const {open,setOpen,helpsList,isHelpsListLoad} = props

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-70 fixed inset-0 transition-opacity duration-200 z-10 animate-overlayShow" />
                <Dialog.Content aria-describedby={undefined}
                                onOpenAutoFocus={(e)=>{e.preventDefault()}}
                                className="bg-white fixed w-[90vw] max-w-[1600px] min-h-[300px] max-h-[80vh] rounded-xl flex flex-col p-4 top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 animate-overlayShow dark:bg-base-200-dark dark:text-[#A6ADBB]">
                    <Dialog.Title className="text-2xl mb-4 select-none flex-shrink-0">帮助</Dialog.Title>

                    <div className="overflow-y-auto">
                        <Menu helpsList={helpsList} isHelpsListLoad={isHelpsListLoad}></Menu>
                    </div>

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

export default DialogMenu;