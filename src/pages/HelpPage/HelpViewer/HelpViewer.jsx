import {Fragment, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import Loading from "src/components/Loading/Loading.jsx"
import MarkdownContainer from "src/components/MarkdownContainer/MarkdownContainer.jsx";
import Footer from "src/components/Layouts/Footer.jsx";
import {getHelpContent} from "../../../services/api.js";

import HelpsPageIconSVG from "src/assets/svg/help-page-icon.svg?react";

function HelpViewer(props) {
    const {helpsList,isHelpsListLoad} = props
    const {route} = useParams()
    const [content, setContent] = useState('')
    const [isContentLoad, setIsContentLoad] = useState(false)
    const [contentError, setContentError] = useState(false)

    const normalizedRoute = route === "Windows-iso" ? "windows-iso" : route
    const selectHelp = normalizedRoute === undefined
        ? undefined
        : helpsList.find(item => item.route === normalizedRoute)

    useEffect(() => {
        if (selectHelp?.url) {
            const controller = new AbortController()
            setContent('')
            setContentError(false)
            setIsContentLoad(false)
            getHelpContent(selectHelp.url, {signal: controller.signal})
                .then(data => {
                    setContent(data)
                    setIsContentLoad(true)
                })
                .catch(error => {
                    if (controller.signal.aborted) return
                    console.error('获取帮助内容失败:', error)
                    setContentError(true)
                    setIsContentLoad(true)
                })

            return () => controller.abort()
        }
    }, [selectHelp?.url])

    return (
        <Fragment>
            {
                (route === undefined || (!selectHelp && isHelpsListLoad)) ?
                    <div className="h-[50vh] min-h-[200px] flex justify-center items-center select-none">
                        <HelpsPageIconSVG className="stroke-blue-500 w-[100px] h-[100px]"></HelpsPageIconSVG>
                        <div>
                            <div className="text-3xl mb-2 min-[400px]:text-4xl">这里是帮助页面</div>
                            <div className="text-xl min-[400px]:text-2xl">浏览菜单来查看帮助</div>
                        </div>
                    </div>
                    :
                    <Fragment>
                        {
                            isHelpsListLoad && isContentLoad?
                                <Fragment>
                                    <div className="mb-4 pb-4 border-b-2 border-gray-200 border-solid dark:border-gray-700">
                                        <div className="text-3xl md:text-[2.5rem]">{selectHelp.name}</div>
                                    </div>
                                    <div className="pb-10 border-b-2 border-gray-200 border-solid dark:border-gray-700">
                                        {contentError
                                            ? <div className="py-10 text-center text-gray-500">帮助内容加载失败，请刷新页面重试</div>
                                            : <MarkdownContainer url={selectHelp.url} content={content}></MarkdownContainer>}
                                    </div>

                                </Fragment>
                                :
                                <Loading/>
                        }
                    </Fragment>
            }

            <div className="mt-10">
                <Footer></Footer>
            </div>
        </Fragment>
    );
}

export default HelpViewer;
