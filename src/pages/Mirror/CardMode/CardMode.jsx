import React, {Fragment} from 'react';
import { useNavigate } from 'react-router-dom'
import Card from "../../../components/Card/Card.jsx";

import icons from '../icons.json'

function CardMode(props) {
    const {mirrorsList, showFriendlyName} = props

    //按首字母分类
    let groupedMirrorsList = mirrorsList.reduce(function (result, item) {
        let firstChar = item.name.charAt(0).toUpperCase()
        let index = result.length - 1
        if (index >= 0 && result[index].letter === firstChar) {
            result[index].data.push(item)
        }
        else if (index >= 0) {
            result.push({letter: firstChar, data: [item]})
        }
        else {
            result = [{letter: firstChar, data: [item]}]
        }
        return result;
    }, {});

    //匹配图标
    function matchIcons(name) {
        let obj = icons.find(obj => obj.name === name)
        if (obj) {
            return <svg className="w-20 h-20 p-2 flex-shrink-0">
                <use xlinkHref={`/__spritemap#sprite-${obj.icon}`}></use>
            </svg>
        }
        else return <></>
    }

    return (
        <div>
            <div className="my-4">
                {
                    groupedMirrorsList.map((group, index) =>
                        <div key={index}>
                            <div className="text-3xl font-bold my-4 select-none">{group.letter}</div>
                            <div
                                className="grid grid-cols-[repeat(auto-fill,minmax(300px,_2fr))] min-[875px]:grid-cols-[repeat(auto-fill,minmax(400px,_1fr))] gap-4">
                                {group.data.map((item,index) => <Card item = {item} icon = {matchIcons(item.name)} showFriendlyName = {showFriendlyName} key={index}/>)}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CardMode;