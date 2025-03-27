import React, {useEffect, useState} from 'react';
import axios from "axios";

import {showToast} from "src/utils/utils.js";
import {useHeader} from "../../components/Layouts/HeaderContext.jsx";
import Menu from "./Menu/Menu.jsx"
import DialogMenu from "./DialogMenu/DialogMenu.jsx"
import DocumentViewer from "./DocumentViewer/DocumentViewer.jsx";

import DocsPageIconSVG from "src/assets/svg/docs-page-icon.svg?react"


function DocumentPage() {
    const [docsList,setDocsList] = useState([])
    const [isDocsListLoad,setIsDocsListLoad] = useState(false)
    const [openDialogMenu, setOpenDialogMenu] = React.useState(false)

    const { setExtraButton } = useHeader();
    useEffect(() => {
        setExtraButton(
            <button onClick={()=>openDialogMenuFunc()}>
                <DocsPageIconSVG className="md:hidden fill-black w-8 h-8 mx-2 dark:fill-white"></DocsPageIconSVG>
            </button>);

        //用于在组件卸载时移除按钮
        return () => setExtraButton(null);
    }, [setExtraButton]);


    function getDocsList(){
        let domain = import.meta.env.VITE_APP_BASE_URL
        let timestamp = new Date().getTime();
        timestamp = Math.floor(timestamp / 60000)
        axios({
            url:domain+"/json/docs.json",
            method:"get",
            params:{
                timestamp
            }
        }).then(response => {
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                setDocsList(response.data);
                setIsDocsListLoad(true);
            }
        }).catch(error => {
            showToast("获取文档列表失败，请尝试手动刷新","error")
        })
    }
    function openDialogMenuFunc(){
        setOpenDialogMenu(!openDialogMenu)
    }

    useEffect(() => {
        getDocsList()
        // setDocsList(docsList233)
        // setIsDocsListLoad(true)
    }, []);

    return (
    <div className="flex-1 flex max-h-[calc(100vh-64px)] relative">
        <DialogMenu open={openDialogMenu} setOpen={()=>setOpenDialogMenu()} docsList={docsList} isDocsListLoad={isDocsListLoad}></DialogMenu>
        <div className="hidden md:block w-[280px] overflow-y-auto border-gray-200 border-solid border-r-2 flex-shrink-0 dark:border-gray-600">
            <Menu docsList={docsList} isDocsListLoad={isDocsListLoad}></Menu>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
            <DocumentViewer docsList={docsList} isDocsListLoad={isDocsListLoad}></DocumentViewer>
        </div>
    </div>
    );
}

export default DocumentPage;