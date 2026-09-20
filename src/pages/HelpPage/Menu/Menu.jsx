import {Fragment, useState} from 'react';
import {NavLink} from "react-router-dom";

import Loading from "src/components/Loading/Loading.jsx"
import SearchBar from "src/components/SearchBar/SearchBar.jsx";

function Menu(props) {
    const {helpsList,isHelpsListLoad} = props
    const [searchKeyword,setSearchKeyword] = useState('')
    const filterHelpsArray = helpsList.filter(help =>
        help.name.toLowerCase().includes(searchKeyword.toLowerCase())
    )

    return (
        <Fragment>
            {
                isHelpsListLoad?
                    <Fragment>
                        <div className="p-2">
                            <SearchBar setKeyword={setSearchKeyword} placeholder={"搜索..."}></SearchBar>
                        </div>
                        <div className="px-2">
                            <ul>
                                {
                                    filterHelpsArray.map((help)=>{
                                        return (
                                            <NavLink
                                                className={({ isActive }) => {
                                                    return isActive ? 'text-blue-400' : ''
                                                }}
                                                to={`./${help.route}`} key={help.route} >
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
