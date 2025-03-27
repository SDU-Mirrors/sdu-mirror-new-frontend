import React, {Fragment, useState} from 'react';

function List(props) {
    const {isoLinks} = props
    const [nowSelectID,setNowSelectID] = useState('')
    const [nowSelect,setNowSelect] = useState({})
    function handleClick(id){
        setNowSelectID(id)
        setNowSelect(isoLinks.find(obj => obj.id === id))
    }

    return (
        <Fragment>
            <div className="flex-shrink-0 w-20 md:w-40 overflow-y-auto border-r-2 border-base-200 border-solid dark:border-base-100-dark">
                <ul>
                    {
                        isoLinks.map(item=>{
                            return <li onClick={()=>handleClick(item.id)}
                                       className={`p-2 hover:bg-blue-400 hover:bg-opacity-20 select-none break-words ${nowSelectID === item.id ? 'text-blue-500':''}`} key={item.id}>{item.label}</li>
                        })
                    }
                </ul>
            </div>
            <div className="flex-grow overflow-y-auto p-4">
                {
                    nowSelectID !== '' ?
                        <div
                            className="grid grid-cols-[repeat(auto-fill,minmax(200px,_2fr))] select-none gap-4">
                            {
                                nowSelect.children.map((item,index)=>{
                                    return <a href={item.value} target="_blank"
                                              key={index}
                                        className="min-w-[100px] min-h-[40px] rounded-3xl shadow-md p-4 border-gray-200 border-solid-2 border cursor-pointer hover:bg-gray-50 duration-200 transition-colors dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                                        <div className="text-2xl">{item.primary}</div>
                                        <div className="text-sm">{item.secondary}</div>
                                    </a>
                                })
                            }
                        </div>
                        :
                        <div className="flex justify-center items-center w-full h-full">
                            <div className="text-gray-500 text-opacity-50 select-none">在左侧选择一个选项...</div>
                        </div>
                }
            </div>
        </Fragment>
    );
}

export default List;