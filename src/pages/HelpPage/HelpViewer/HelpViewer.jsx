import React, {Fragment, useState} from 'react';
import {useParams} from "react-router-dom";
import dayjs from "dayjs";

import Loading from "src/components/Loading/Loading.jsx"
import MarkdownContainer from "src/components/MarkdownContainer/MarkdownContainer.jsx";
import Footer from "src/components/Layouts/Footer.jsx";

import HelpsPageIconSVG from "src/assets/svg/help-page-icon.svg?react";

function HelpViewer(props) {
    const {helpsList,isHelpsListLoad} = props
    const {route} = useParams()

    let selectHelp = {}
    function calcTimestamp(time){
        return dayjs(time).format('YYYY-MM-DD')
    }

    if(route !== undefined){
        let result = helpsList.find(item => item.route === route);

        if(route === "Windows-iso"){
            result = helpsList.find(item => item.route === "windows-iso");
        }

        if(result) {
            selectHelp = result;
        }
    }

    return (
        <Fragment>
            {
                (route === undefined || (Object.keys(selectHelp).length === 0 && isHelpsListLoad)) ?
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
                            isHelpsListLoad?
                                <Fragment>
                                    <div className="mb-4 pb-4 border-b-2 border-gray-200 border-solid dark:border-gray-700">
                                        <div className="text-3xl md:text-[2.5rem]">{selectHelp.name}</div>
                                    </div>
                                    <div className="pb-10 border-b-2 border-gray-200 border-solid dark:border-gray-700">
                                        <MarkdownContainer url={selectHelp.url}></MarkdownContainer>
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