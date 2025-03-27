import React, {Fragment, useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import axios from "axios";

import {showToast} from "src/utils/utils.js";
import Loading from "src/components/Loading/Loading.jsx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

import 'src/css/github-markdown.css';
// import testMD from '/markdown/docs/blog/2019-04-21-BirthOfYetAnotherMirrorSite.md?url'
import testMD from '/markdown/docs/guide/2021-11-24-InstallUbuntuInVMware.md?url'

function MarkdownContainer(props) {
    const {url} = props
    let baseURL = getDirectory(url)
    let timestamp = new Date().getTime();
    timestamp = Math.floor(timestamp / 60000)
    const [mdContent, setMdContent] = useState('')
    const [isLoad,setIsLoad] = useState(false)
    useEffect(() => {

        setMdContent('')
        setIsLoad(false)

        let domain = ""
        axios({
            url:domain+url,
            method:"get",
            params:{
                timestamp
            }
        }).then(response => {
            setMdContent(response.data)
            setIsLoad(true)
        }).catch(error => {
            showToast("获取文章内容失败，请尝试手动刷新","error")
        })
    }, [url]);

    const components = {
        img: (props) => {
            const {alt,src} = props
            return (
                <span className={"block w-fit max-w-[70vw] md:max-w-[50vw] mx-auto min-[1600px]:max-w-[800px]"}>
                    <img
                        alt={alt}
                        src={baseURL+src+'?timestamp='+timestamp}
                    />
                </span>

            );
        },
    };
    function getDirectory(filePath) {
        if(filePath === undefined) return ''

        const parts = filePath.split('/');
        parts.pop(); // 移除文件名
        return parts.join('/') + "/";
    }

    return (
        <Fragment>
            {
                isLoad?
                    <div className="markdown-body">
                        <ReactMarkdown className={""} remarkPlugins={[remarkGfm,remarkFrontmatter]} children={mdContent} components={components}/>
                    </div>
                    :
                    <div className="h-[50vh]">
                        <Loading/>
                    </div>
            }
        </Fragment>

    );
}

export default MarkdownContainer;