import React, {Fragment, useState} from 'react';
import {useParams} from "react-router-dom";
import dayjs from "dayjs";

import Loading from "src/components/Loading/Loading.jsx"
import MarkdownContainer from "src/components/MarkdownContainer/MarkdownContainer.jsx";
import Footer from "src/components/Layouts/Footer.jsx";

import DocsPageIconSVG from "src/assets/svg/docs-page-icon.svg?react";

function DocumentViewer(props) {
    const {docsList,isDocsListLoad} = props
    const {route} = useParams()

    let selectArticle = {}
    function calcTimestamp(time){
        return dayjs(time).format('YYYY-MM-DD')
    }

    if(route !== undefined){
        let result = docsList.find(item => item.route === route);
        if(result) {
            selectArticle = result;
        }
    }

    return (
        <Fragment>
            {
                (route === undefined || (Object.keys(selectArticle).length === 0 && isDocsListLoad)) ?
                    <div className="h-[50vh] min-h-[200px] flex justify-center items-center select-none">
                        <DocsPageIconSVG className="fill-blue-500 w-[100px] h-[100px]"></DocsPageIconSVG>
                        <div>
                            <div className="text-3xl mb-2 min-[400px]:text-4xl">这里是文档页面</div>
                            <div className="text-xl min-[400px]:text-2xl">浏览菜单来查看文档</div>
                        </div>
                    </div>
                    :
                    <Fragment>
                        {
                            isDocsListLoad?
                                <Fragment>
                                    <div className="mb-4 pb-4 border-b-2 border-gray-200 border-solid dark:border-gray-700">
                                        <div className="text-3xl md:text-[2.5rem]">{selectArticle.name}</div>
                                        <div className="mt-2 flex flex-wrap justify-between items-center">
                                            <div className="py-1">{calcTimestamp(selectArticle.time)}</div>
                                            {
                                                'tags' in selectArticle && selectArticle.tags.length !== 0 ?
                                                    <div className="flex flex-wrap gap-2">
                                                        {
                                                            selectArticle.tags.map((tag,index)=>{
                                                                return <div className="px-2 py-1 bg-gray-50 border-gray-100 border-2 border-solid dark:bg-gray-800 dark:border-gray-700"
                                                                    key={index}>
                                                                    {tag}
                                                                </div>
                                                            })
                                                        }
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                        </div>

                                    </div>
                                    <div className="pb-10 border-b-2 border-gray-200 border-solid dark:border-gray-700">
                                        <MarkdownContainer url={selectArticle.url}></MarkdownContainer>
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

export default DocumentViewer;