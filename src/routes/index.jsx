import HomePage from "../pages/HomePage/HomePage.jsx"
import Mirror from "../pages/Mirror/Mirror.jsx"
import DocumentPage from "../pages/DocumentPage/DocumentPage.jsx";
import HelpPage from "../pages/HelpPage/HelpPage.jsx";
import About from "../pages/About/About.jsx"
import DocumentViewer from "src/pages/DocumentPage/DocumentViewer/DocumentViewer.jsx";
import HelpViewer from "src/pages/HelpPage/HelpViewer/HelpViewer.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import {Navigate} from "react-router-dom";

export default [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/mirror',
        element: <Mirror/>
    },
    {
        path: '/docs',
        element: <DocumentPage/>,
        children:[
            {
                path:':route',
                element: <DocumentViewer/>,
            }
        ]
    },
    {
        path: '/help',
        element: <HelpPage/>,
        children:[
            {
                path:':route',
                element: <HelpViewer/>,
            }
        ]
    },
    {
        path: '/about',
        element: <About/>
    },
    //以下为临时硬编码,待后端数据库正式修改完成后移除
    {
        path: '/docs/guide/ArchLinux',
        element: <Navigate to={"/help/archlinux"} replace />
    },
    {
        path: '/docs/guide/Debian',
        element: <Navigate to={"/help/debian"} replace />
    },
    {
        path: '/docs/guide/lxc-images',
        element: <Navigate to={"/help/lxc-images"} replace />
    },
    {
        path: '/docs/guide/RockyLinux/',
        element: <Navigate to={"/help/rockylinux"} replace />
    },
    {
        path: '/docs/guide/Ubuntu/',
        element: <Navigate to={"/help/ubuntu"} replace />
    },
    {
        path: '/docs/guide/Windows-iso',
        element: <Navigate to={"/help/windows-iso"} replace />
    },
    //以上为临时硬编码
    {
        path:"*",
        element: <NotFoundPage/>
    }
]