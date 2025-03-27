import React from 'react'
import {useRoutes} from "react-router-dom";
import routes from "/src/routes/index.jsx";
import {ToastContainer,Slide} from 'react-toastify';
// import './App.css'

import Header from "./components/Layouts/Header.jsx";
import UpdateNotification from "./components/UpdateNotification/UpdateNotification.jsx"
import {HeaderProvider} from "./components/Layouts/HeaderContext.jsx";
import {ThemeProvider} from "./components/ThemeProvider/ThemeProvider.jsx";
function App() {
    const element = useRoutes(routes)

    return (
        <ThemeProvider>
            <HeaderProvider>
                <UpdateNotification />
                <div className="bg-base-100 dark:bg-base-100-dark dark:text-[#A6ADBB] min-h-screen duration-200 flex flex-col h-full">
                    <Header/>
                    {element}
                </div>
            </HeaderProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                draggablePercent={60}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="colored"
                transition: Slide
            />
        </ThemeProvider>

  )
}

export default App
