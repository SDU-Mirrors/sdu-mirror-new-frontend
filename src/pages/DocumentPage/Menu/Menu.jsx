import React, {Fragment, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import dayjs from "dayjs";

import Loading from "src/components/Loading/Loading.jsx"
import SearchBar from "src/components/SearchBar/SearchBar.jsx";

import TimeSVG from "src/assets/svg/time.svg?react";

function Menu(props) {
    const {docsList,isDocsListLoad} = props
    const [filterDocsArray,setFilterDocsArray] = useState([])
    const [searchKeyword,setSearchKeyword] = useState('')

    useEffect(() => {
        setFilterDocsArray(docsList)
    }, [isDocsListLoad]);
    function calcTimestamp(time){
        return dayjs(time).format('YYYY-MM-DD')
    }

    function setKeyword(Keyword){
        // console.log(Keyword)
        setSearchKeyword(Keyword)
        updateFilterDocsArray(Keyword)
    }

    function updateFilterDocsArray(Keyword){
        // console.log(searchKeyword,searchKeyword === '')
        if(Keyword === ''){
            setFilterDocsArray(docsList)
        }
        else{
            let tmpArr = docsList.filter(doc=>{
                return doc.name.toLowerCase().includes(Keyword.toLowerCase())
            })
            setFilterDocsArray(tmpArr)
        }
    }

    return (
        <Fragment>
            {
                isDocsListLoad?
                    <Fragment>
                        <div className="p-2">
                            <SearchBar setKeyword={setKeyword} placeholder={"搜索..."}></SearchBar>
                        </div>
                        <div className="px-2">
                            <ul>
                                {
                                    filterDocsArray.map((doc,index)=>{
                                        return (
                                            <NavLink
                                                className={({ isActive }) => {
                                                    return isActive ? 'text-blue-400' : ''
                                                }}
                                                to={`./${doc.route}`} key={index} >
                                                <li className="text-xl mb-2 p-2 select-none cursor-pointer rounded-2xl hover:bg-gray-200 hover:bg-opacity-80 dark:hover:bg-gray-700">
                                                    <div>{doc.name}</div>
                                                    <div className="text-sm text-gray-500 flex items-center">
                                                        <TimeSVG className="w-5 h-5 stroke-gray-500 mr-1"></TimeSVG>
                                                        {calcTimestamp(doc.time)}
                                                    </div>
                                                </li>
                                            </NavLink>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Fragment>
                :
                <Loading/>
            }
        </Fragment>
    );
}

export default Menu;