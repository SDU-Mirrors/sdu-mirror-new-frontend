import {Fragment, useEffect, useRef, useState} from 'react';
import ReactMarkdown from 'react-markdown'

import {showToast} from "src/utils/utils.js";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

import CorrectSVG from "src/assets/svg/correct.svg?react"
import CopySVG from "src/assets/svg/copy.svg?react"

import 'src/css/github-markdown.css';

function getDirectory(filePath) {
    if(filePath === undefined) return ''

    const parts = filePath.split('/');
    parts.pop();
    return parts.join('/') + "/";
}

function CodeBlock({className, children}) {
        const [copied, setCopied] = useState(false);
        const resetTimer = useRef();
        const codeContent = String(children ?? '');
        const isCodeBlock = codeContent.includes('\n') || (className && className.startsWith('language-'));

        useEffect(() => () => clearTimeout(resetTimer.current), []);

        const handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(codeContent);
                setCopied(true);
                clearTimeout(resetTimer.current);
                resetTimer.current = setTimeout(() => setCopied(false), 1000);
            } catch {
                showToast("复制失败，请手动复制", "error");
            }
        };

        if (!isCodeBlock) {
            return <code className={className}>{children}</code>;
        }

        return (
            <div className="relative group">
                <button
                    onClick={handleCopy}
                    className="absolute top-0 right-0 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer z-10"
                    aria-label="复制代码"
                >
                    {copied ? (
                        <CorrectSVG className="w-6 h-6 fill-green-400" />
                    ) : (
                        <CopySVG className="w-6 h-6 fill-[#666666]" />
                    )}
                </button>
                <div className="overflow-x-auto">
                    <code className={className}>{children}</code>
                </div>
            </div>
        );
}

function MarkdownContainer({url, content = ''}) {
    const baseURL = getDirectory(url)
    const timestamp = Math.floor(Date.now() / 60000)

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
        code: CodeBlock,
    };

    return (
        <Fragment>
            <div className="markdown-body">
                <ReactMarkdown className={""} remarkPlugins={[remarkGfm,remarkFrontmatter]} components={components}>
                    {content}
                </ReactMarkdown>
            </div>
        </Fragment>

    );
}

export default MarkdownContainer;
