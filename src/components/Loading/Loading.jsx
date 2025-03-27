import React, {useEffect, useState} from 'react';
import LoadingSVG from "src/assets/svg/loading.svg?react";

function Loading(props) {
    const {pending=100} = props
    const [displayLoading,setDisplayLoading] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            setDisplayLoading(true)
        },pending)
    }, []);

    return (
        <div className="flex items-center justify-center w-full h-full">
            {
                displayLoading?
                    <LoadingSVG className="animate-spin w-20 h-20" ></LoadingSVG>
                    :
                    <div className="w-20 h-20"></div>
            }

        </div>
    );
}

export default Loading;