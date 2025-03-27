import React, {Fragment, useState, useEffect} from 'react';
import Footer from "../../components/Layouts/Footer.jsx";
import CardMode from "./CardMode/CardMode.jsx";
import ListMode from "./ListMode/ListMode.jsx"
import axios from "axios";
import {showToast} from "src/utils/utils.js";

import DownloadSVG from "src/assets/svg/download.svg?react"
import LetterASVG from "src/assets/svg/letterA.svg?react"
import AboutSVG from "src/assets/svg/about.svg?react"
import IsoSVG from "src/assets/svg/iso.svg?react"
import ViewGridList from "src/assets/svg/view-grid-list.svg?react"
import ViewGridCard from "src/assets/svg/view-grid-card.svg?react"
import DownloadCard from "src/pages/Mirror/DownloadCard/DownloadCard.jsx";
import Loading from "../../components/Loading/Loading.jsx";

function Mirror() {
    // 是否已经获取了镜像列表
    const [loaded,setLoaded] = useState(false)
    // 镜像列表
    const [mirrorsList,setMirrorsList] = useState([])
    // ISO下载链接列表
    const [isoLinks,setIsoLinks] = useState({})
    // 是否已经获取了ISO下载链接列表
    const [isIsoLinkLoad,setIsIsoLinkLoad] = useState(false)
    // 搜索

    // 显示模式(卡片模式和列表模式)
    const [showMode,setShowMode] = useState('card')
    // 卡片模式下是否显示镜像友好名称
    const [showFriendlyName,setShowFriendlyName] = useState(true)

    // 是否打开了获取下载链接的弹窗
    const [openDownloadCard, setOpenDownloadCard] = React.useState(false)

    function handleChange(option){
        if(option === 'showFriendlyName'){
            setShowFriendlyName(!showFriendlyName)
        }
        else if(option === 'showMode'){
            if(showMode === 'card') setShowMode('list')
            else setShowMode('card')
        }
    }

    function getMirrorsList(){
        let domain = import.meta.env.VITE_APP_BASE_URL || "https://mirrors.sdu.edu.cn"
        axios({
            url:domain+"/sync.json",
            method:"get"
        }).then(response => {
            let mirrorsList = response.data;
            mirrorsList.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });

            mirrorsList = mirrorsList.map(obj => {
                if (obj.name === "ubuntu") {
                    obj.help_url = "/help/ubuntu"
                }
                return obj;
            })

            setLoaded(true)
            setMirrorsList(mirrorsList)
        }).catch(error => {
            showToast("获取镜像列表失败，请尝试手动刷新","error")
        })
    }

    function getIsoLinks(){
        let domain = import.meta.env.VITE_APP_BASE_URL || "https://mirrors.sdu.edu.cn"
        axios({
            url:domain+"/iso-links.json",
            method:"get"
        }).then(response => {
            let isoLinks = response.data.map((item,index)=>{

                item.children = item.children.map(obj=>{
                    let text = obj.label
                    let left = text.indexOf('(');
                    let right = text.lastIndexOf(')')
                    if(left !== -1 && right !== -1 && left < right){
                        return{...obj,
                            primary:text.slice(0,left) + text.slice(right+1),
                            secondary:text.slice(left+1,right)}
                    }
                    else{
                        return{...obj,primary:obj.label,secondary:''}
                    }
                })

                return {...item,id:index+1}
            })

            isoLinks = isoLinks.reduce(
                (acc, item) => ({
                    ...acc,
                    [item.category]: [...(acc[item.category] ?? []), item],
                }),
                {},
            );
            console.log(isoLinks)
            setIsoLinks(isoLinks)
            setIsIsoLinkLoad(true)
        }).catch(error => {
            showToast("获取下载链接失败，请尝试手动刷新","error")
        })
    }

    function openCard(){
        setOpenDownloadCard(!openDownloadCard)
    }

    useEffect(() => {
        getMirrorsList()
        getIsoLinks()
    }, []);

    return (
        <div className="p-6">
            <div className="flex flex-wrap items-end">
                <div className="mr-8 text-4xl font-bold">所有镜像</div>
                <div className="pt-2">
                    <button onClick={()=>openCard()}
                        className="inline-flex text-sm items-center h-[32px] mr-4 mt-2 px-8 text-[#fe5151] border-[#ff0505] border-solid border rounded-xl hover:opacity-50 duration-200 dark:bg-gray-700 dark:border-[#985151] ">
                        <IsoSVG className="w-5 h-5 mr-2 stroke-[#fe5151]" fill="#fe5151"></IsoSVG>
                        常用镜像下载链接
                    </button>

                    {
                        showMode === 'card'?
                            <button onClick={()=>handleChange("showFriendlyName")}
                                    className={`inline-flex text-sm items-center h-[32px] mr-4 mt-2 px-8 border-solid border rounded-xl hover:opacity-80 duration-200 ${showFriendlyName?"bg-blue-500 text-white dark:bg-[#0B62A1]":"border-blue-500 text-blue-500 dark:bg-gray-700 dark:border-[#0B62A1]"}`}>
                                <LetterASVG className={`w-5 h-5 mr-2 ${showFriendlyName?'fill-white':'fill-blue-500'}`}></LetterASVG>
                                显示镜像友好名称
                            </button>
                            :<></>
                    }


                    <button onClick={()=> handleChange("showMode")}
                        className="inline-flex text-sm items-center h-[32px] mr-4 mt-2 px-8 border-black border-solid border rounded-xl hover:opacity-50 duration-200 dark:bg-gray-700">
                        {
                            showMode === 'card'?
                                <Fragment>
                                    <ViewGridList className="w-5 h-5 mr-2 stroke-black dark:stroke-gray-400"></ViewGridList>
                                    切换到列表模式
                                </Fragment>
                                :
                                <Fragment>
                                    <ViewGridCard className="w-5 h-5 mr-2 stroke-black dark:stroke-gray-400"></ViewGridCard>
                                    切换到卡片模式
                                </Fragment>
                        }
                    </button>
                </div>
            </div>

            <div className="flex mt-4 text-gray-600 select-none dark:text-gray-400">
                <AboutSVG className="h-6 w-6 group-hover:rotate-[360deg] duration-500 mr-2" fill="rgb(96,165,250)"/>
                点击“常用镜像下载链接”按钮来下载常用发行版 ISO 镜像和应用软件安装包
            </div>

            <div className="flex mt-4 text-gray-600 select-none dark:text-gray-400">
                <AboutSVG className="h-6 w-6 group-hover:rotate-[360deg] duration-500 mr-2" fill="rgb(96,165,250)"/>
                山东大学镜像站采用了原子同步设计，仓库处于同步状态时仍可正常使用
            </div>

            <div className="min-h-[50vh]">
                {
                    !loaded ? <div className="h-[50vh]"><Loading/></div> : <></>
                }
                {
                    loaded&&showMode==="card" ? <CardMode mirrorsList={mirrorsList} showFriendlyName={showFriendlyName}/> : <></>
                }
                {
                    loaded&&showMode==="list" ? <ListMode mirrorsList={mirrorsList}/> : <></>
                }
            </div>
            <DownloadCard open={openDownloadCard} setOpen={()=>setOpenDownloadCard()} isoLinks={isoLinks} isLoad={isIsoLinkLoad}></DownloadCard>
            <Footer/>
        </div>

    );
}

export default Mirror;