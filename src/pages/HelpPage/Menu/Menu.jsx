import React, {Fragment, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import dayjs from "dayjs";

import Loading from "src/components/Loading/Loading.jsx"
import SearchBar from "src/components/SearchBar/SearchBar.jsx";

import TimeSVG from "src/assets/svg/time.svg?react";

function Menu(props) {
    const {helpsList,isHelpsListLoad} = props
    const [filterHelpsArray,setFilterHelpsArray] = useState([])
    const [searchKeyword,setSearchKeyword] = useState('')

    useEffect(() => {
        setFilterHelpsArray(helpsList)
    }, [isHelpsListLoad]);

    function setKeyword(Keyword){
        setSearchKeyword(Keyword)
        updateFilterHelpsArray(Keyword)
    }

    function updateFilterHelpsArray(Keyword){
        if(Keyword === ''){
            setFilterHelpsArray(helpsList)
        }
        else{
            let tmpArr = helpsList.filter(help=>{
                return help.name.toLowerCase().includes(Keyword.toLowerCase())
            })
            setFilterHelpsArray(tmpArr)
        }
    }

    return (
        <Fragment>
            {
                isHelpsListLoad?
                    <Fragment>
                        <div className="p-2">
                            <SearchBar setKeyword={setKeyword} placeholder={"搜索..."}></SearchBar>
                        </div>
                        <div className="px-2">
                            <ul>
                                {
                                    filterHelpsArray.map((help,index)=>{
                                        return (
                                            <NavLink
                                                className={({ isActive }) => {
                                                    return isActive ? 'text-blue-400' : ''
                                                }}
                                                to={`./${help.route}`} key={index} >
                                                <li className="text-xl mb-2 p-2 select-none cursor-pointer rounded-2xl hover:bg-gray-200 hover:bg-opacity-80 dark:hover:bg-gray-700">
                                                    <div>{help.name}</div>
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