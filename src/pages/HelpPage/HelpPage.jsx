import React, {useEffect, useState} from 'react';
import axios from "axios";

import {showToast} from "src/utils/utils.js";
import {useHeader} from "../../components/Layouts/HeaderContext.jsx";
import Menu from "./Menu/Menu.jsx"
import DialogMenu from "./DialogMenu/DialogMenu.jsx"
import HelpViewer from "./HelpViewer/HelpViewer.jsx";

import HelpsPageIconSVG from "src/assets/svg/help-page-icon.svg?react"


function HelpPage() {
    const [helpsList,setHelpsList] = useState([])
    const [isHelpsListLoad,setIsHelpsListLoad] = useState(false)
    const [openDialogMenu, setOpenDialogMenu] = React.useState(false)

    const { setExtraButton } = useHeader();
    useEffect(() => {
        setExtraButton(
            <button onClick={()=>openDialogMenuFunc()}>
                <HelpsPageIconSVG className="md:hidden stroke-black w-8 h-8 mx-2 dark:stroke-white"></HelpsPageIconSVG>
            </button>);

        //用于在组件卸载时移除按钮
        return () => setExtraButton(null);
    }, [setExtraButton]);


    function getHelpsList(){
        let domain = import.meta.env.VITE_APP_BASE_URL
        let timestamp = new Date().getTime();
        timestamp = Math.floor(timestamp / 60000)
        axios({
            url:domain+"/json/helps.json",
            method:"get",
            params:{
                timestamp
            }
        }).then(response => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                setHelpsList(response.data);
                setIsHelpsListLoad(true);
            }
        }).catch(error => {
            showToast("获取帮助列表失败，请尝试手动刷新","error")
        })
    }
    function openDialogMenuFunc(){
        setOpenDialogMenu(!openDialogMenu)
    }

    useEffect(() => {
        getHelpsList()
    }, []);

    return (
        <div className="flex-1 flex max-h-[calc(100vh-64px)] relative">
            <DialogMenu open={openDialogMenu} setOpen={()=>setOpenDialogMenu()} helpsList={helpsList} isHelpsListLoad={isHelpsListLoad}></DialogMenu>
            <div className="hidden md:block w-[280px] overflow-y-auto border-gray-200 border-solid border-r-2 flex-shrink-0 dark:border-gray-600">
                <Menu helpsList={helpsList} isHelpsListLoad={isHelpsListLoad}></Menu>
            </div>
            <div className="flex-grow overflow-y-auto p-4">
                <HelpViewer helpsList={helpsList} isHelpsListLoad={isHelpsListLoad}></HelpViewer>
            </div>
        </div>
    );
}

export default HelpPage;