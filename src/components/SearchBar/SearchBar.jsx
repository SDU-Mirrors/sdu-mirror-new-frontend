import React, {useRef} from 'react';

import CloseSVG from "src/assets/svg/close.svg?react"
function SearchBar(props) {
    const {setKeyword,placeholder} = props
    let inputRef = useRef(null)

    function updateKeyword(e){
        if(setKeyword){
            setKeyword(e.target.value)
        }
    }

    function cleanKeyword(){
        if(setKeyword){
            setKeyword('')
        }
        inputRef.current.value = ''
    }

    return (
        <div className="relative">
            <input onChange={(e)=>updateKeyword(e)} ref={inputRef} placeholder={placeholder}
                className="w-full h-10 py-1 pl-3 pr-8 bg-white border-gray-500 border-solid border rounded-full dark:bg-base-100-dark duration-200"/>
            <div onClick={()=>cleanKeyword()}
                className={`absolute top-2 right-2 rounded-full hover:bg-gray-500 hover:bg-opacity-20 group ${(inputRef.current !== null && inputRef.current.value === '') ? 'hidden':''}`}>
                <CloseSVG className="w-6 h-6 stroke-black dark:stroke-gray-400 group-hover:rotate-180 duration-500 cursor-pointer"/>
            </div>
        </div>
    );
}

export default SearchBar;