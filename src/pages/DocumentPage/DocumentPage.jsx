import {useEffect, useState} from 'react';

import {showToast} from "src/utils/utils.js";
import {useHeader} from "src/components/Layouts/HeaderContext.jsx";
import Menu from "./Menu/Menu.jsx"
import DialogMenu from "./DialogMenu/DialogMenu.jsx"
import DocumentViewer from "./DocumentViewer/DocumentViewer.jsx";
import {getDocumentsListData, isUsingMockData} from "src/services/api.js";

import DocsPageIconSVG from "src/assets/svg/docs-page-icon.svg?react"


function DocumentPage() {
    const [docsList,setDocsList] = useState([])
    const [isDocsListLoad,setIsDocsListLoad] = useState(false)
    const [docsListError,setDocsListError] = useState(false)
    const [openDialogMenu, setOpenDialogMenu] = useState(false)

    const { setExtraButton } = useHeader();
    useEffect(() => {
        setExtraButton(
            <button onClick={()=>setOpenDialogMenu(true)}>
                <DocsPageIconSVG className="md:hidden fill-black w-8 h-8 mx-2 dark:fill-white"></DocsPageIconSVG>
            </button>);

        return () => setExtraButton(null);
    }, [setExtraButton]);


    async function getDocsList(signal){
        try {
            const data = await getDocumentsListData({signal});
            setDocsList(data);
            setIsDocsListLoad(true);

            if (isUsingMockData('documents')) {
                showToast("正在使用虚拟文档数据", "info");
            }
        } catch (error) {
            if (signal.aborted) return
            setDocsListError(true)
            setIsDocsListLoad(true)
            showToast("获取文档列表失败，请尝试手动刷新","error")
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        getDocsList(controller.signal)
        return () => controller.abort()
    }, []);

    return (
    <div className="flex-1 flex max-h-[calc(100vh-64px)] relative">
        <DialogMenu open={openDialogMenu} setOpen={setOpenDialogMenu} docsList={docsList} isDocsListLoad={isDocsListLoad}></DialogMenu>
        <div className="hidden md:block w-[280px] overflow-y-auto border-gray-200 border-solid border-r-2 flex-shrink-0 dark:border-gray-600">
            <Menu docsList={docsList} isDocsListLoad={isDocsListLoad}></Menu>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
            {docsListError
                ? <div className="h-[50vh] flex items-center justify-center text-gray-500">文档列表加载失败，请刷新页面重试</div>
                : <DocumentViewer docsList={docsList} isDocsListLoad={isDocsListLoad}></DocumentViewer>}
        </div>
    </div>
    );
}

export default DocumentPage;
