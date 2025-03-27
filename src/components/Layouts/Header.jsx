import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useHeader } from './HeaderContext.jsx';

import logo_for_header from '../../assets/source/logo1.png'
import mini_logo_for_header from "../../assets/source/logo_mini.png"
import HamburgerButtonSVG from "src/assets/svg/hamburger_button.svg?react"
import ThemeButton from "../ThemeButton/ThemeButton.jsx";

function Header() {
    const { extraButton } = useHeader();

    return (
        <Fragment>
            <div className="h-16 px-6 flex shrink-0 items-center max-md:sticky max-md:top-0 max-md:bg-base-100 dark:max-md:bg-base-100-dark max-md:z-[1] duration-200">
                <Link className="h-full" to={"/"}>
                    <img src={logo_for_header} alt="sdu_mirror_logo_header" className="hidden min-[375px]:block h-full py-1 select-none"/>
                    <img src={mini_logo_for_header} alt="sdu_mini_mirror_logo_header" className="min-[375px]:hidden h-full py-1 select-none"/>
                </Link>
                {/*<img src={logo_for_header} alt="sdu_mirror_logo_header" className="hidden min-[375px]:block h-full py-1 select-none"/>*/}
                {/*<img src={mini_logo_for_header} alt="sdu_mini_mirror_logo_header" className="min-[375px]:hidden h-full py-1 select-none"/>*/}
                <div className="flex-grow"></div>

                <ThemeButton></ThemeButton>
                {extraButton}

                <div className="hidden md:block">
                    <Link className="mx-4 text-[#9c0c13] hover:text-blue-400 duration-200" to={"/"}>首页</Link>
                    <Link className="mx-4 text-[#9c0c13] hover:text-blue-400 duration-200" to={"/mirror"}>镜像</Link>
                    <Link className="mx-4 text-[#9c0c13] hover:text-blue-400 duration-200" to={"/docs"}>文档</Link>
                    <Link className="mx-4 text-[#9c0c13] hover:text-blue-400 duration-200" to={"/help"}>帮助</Link>
                    <Link className="mx-4 text-[#9c0c13] hover:text-blue-400 duration-200" to={"/about"}>关于</Link>
                </div>
                {/*<div className="">*/}
                {/*    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary md:hidden">Open drawer</label>*/}
                {/*</div>*/}
                {/*<div className="dropdown dropdown-end md:hidden">*/}
                {/*    <div tabIndex={0} role="button" className="btn rounded-btn hover:bg-opacity-80 hover:bg-base-200 dark:hover:bg-base-200-dark duration-200 ">*/}
                {/*        <HamburgerButtonSVG className="dark:stroke-white"></HamburgerButtonSVG>*/}
                {/*    </div>*/}
                {/*    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 mt-2 shadow bg-white rounded-xl w-[90px] dark:bg-base-200-dark duration-200">*/}
                {/*        <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/"}>首页</Link>*/}
                {/*        <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/mirror"}>镜像</Link>*/}
                {/*        <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/docs"}>文档</Link>*/}
                {/*        <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/help"}>帮助</Link>*/}
                {/*        <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/about"}>关于</Link>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                            <div className="mx-2 p-1 rounded-md btn rounded-btn hover:bg-opacity-80 hover:bg-base-200 dark:hover:bg-base-200-dark duration-200 md:hidden ">
                                <HamburgerButtonSVG className="dark:stroke-white"></HamburgerButtonSVG>
                            </div>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="rounded-lg overflow-hidden duration-200 md:hidden" sideOffset={10}>
                            <div className="bg-gray-100 dark:bg-gray-800 py-2">
                                <DropdownMenu.Item className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
                                    <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/"}>首页</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
                                    <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/mirror"}>镜像</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
                                    <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/docs"}>文档</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
                                    <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/help"}>帮助</Link>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
                                    <Link className="mx-auto my-2 text-lg text-[#9c0c13] hover:text-blue-400 duration-200" to={"/about"}>关于</Link>
                                </DropdownMenu.Item>
                            </div>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>

        </Fragment>
    );
}

export default Header;