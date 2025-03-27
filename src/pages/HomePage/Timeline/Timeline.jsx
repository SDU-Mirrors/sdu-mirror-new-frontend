import React from 'react';

import timelineArr from "./Timeline.json"
function Timeline() {
    const colors = ["#706dff","#ff70a6","#ff9770","#ffd670","#9eb3c2"]

    const timelines = timelineArr.map((obj,index) =>
        <li className="w-full flex group text-xl" key={obj.id}>
            <div className="hidden md:block mt-6 mx-2 mb-4 flex-1">
                <div className="p-4 shadow-2xl border-gray-200 border rounded-xl max-md:hidden md:group-odd:hidden dark:border-gray-600" dangerouslySetInnerHTML={{__html:obj.content}}>
                </div>
            </div>
            <div className="relative">
                <div className="w-5 h-5 rounded-full absolute top-0 right-[-2px]" style={{backgroundColor:`${colors[index%5]}`}}></div>
                <div className="absolute left-6 top-0 w-40 text-gray-500 text-sm">{obj.time}</div>
                <div className="border-gray-500 border-2 border-solid h-full mx-1.5 dark:border-gray-700"></div>
            </div>
            <div className="mt-6 mx-2 mb-4 flex-1">
                <div className="p-4 shadow-2xl border-gray-200 border rounded-xl md:group-even:hidden dark:border-gray-600" dangerouslySetInnerHTML={{__html:obj.content}}>
                </div>
            </div>
        </li>
    )

    return (
        <div className="max-w-[1280px] mx-auto mb-20">
            <ul className="">
                {timelines}
            </ul>
        </div>
    );
}

export default Timeline;