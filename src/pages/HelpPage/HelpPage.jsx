import {useEffect, useState} from 'react';

import {showToast} from "src/utils/utils.js";
import {useHeader} from "src/components/Layouts/HeaderContext.jsx";
import Menu from "./Menu/Menu.jsx"
import DialogMenu from "./DialogMenu/DialogMenu.jsx"
import HelpViewer from "./HelpViewer/HelpViewer.jsx";
import {getHelpsListData, isUsingMockData} from "src/services/api.js";

import HelpsPageIconSVG from "src/assets/svg/help-page-icon.svg?react"


function HelpPage() {
    const [helpsList,setHelpsList] = useState([])
    const [isHelpsListLoad,setIsHelpsListLoad] = useState(false)
    const [helpsListError,setHelpsListError] = useState(false)
    const [openDialogMenu, setOpenDialogMenu] = useState(false)

    const { setExtraButton } = useHeader();
    useEffect(() => {
        setExtraButton(
            <button onClick={()=>setOpenDialogMenu(true)}>
                <HelpsPageIconSVG className="md:hidden stroke-black w-8 h-8 mx-2 dark:stroke-white"></HelpsPageIconSVG>
            </button>);

        return () => setExtraButton(null);
    }, [setExtraButton]);


    async function getHelpsList(signal){
        try {
            const data = await getHelpsListData({signal});
            setHelpsList(data);
            setIsHelpsListLoad(true);

            if (isUsingMockData('helps')) {
                showToast("正在使用虚拟帮助数据", "info");
            }
        } catch (error) {
            if (signal.aborted) return
            setHelpsListError(true)
            setIsHelpsListLoad(true)
            showToast("获取帮助列表失败，请尝试手动刷新","error")
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        getHelpsList(controller.signal)
        return () => controller.abort()
    }, []);

    return (
        <div className="flex-1 flex max-h-[calc(100vh-64px)] relative">
            <DialogMenu open={openDialogMenu} setOpen={setOpenDialogMenu} helpsList={helpsList} isHelpsListLoad={isHelpsListLoad}></DialogMenu>
            <div className="hidden md:block w-[280px] overflow-y-auto border-gray-200 border-solid border-r-2 flex-shrink-0 dark:border-gray-600">
                <Menu helpsList={helpsList} isHelpsListLoad={isHelpsListLoad}></Menu>
            </div>
            <div className="flex-grow overflow-y-auto p-4">
                {helpsListError
                    ? <div className="h-[50vh] flex items-center justify-center text-gray-500">帮助列表加载失败，请刷新页面重试</div>
                    : <HelpViewer helpsList={helpsList} isHelpsListLoad={isHelpsListLoad}></HelpViewer>}
            </div>
        </div>
    );
}

export default HelpPage;
