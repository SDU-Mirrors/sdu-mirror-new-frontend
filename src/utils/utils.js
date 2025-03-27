import dayjs from "dayjs";
import dayjs_zh_cn from 'dayjs/locale/zh-cn.js'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import {toast,Slide} from "react-toastify";

let thresholds = [
    {l: 's', r: 1},
    {l: 'm', r: 1},
    {l: 'mm', r: 59, d: 'minute'},
    {l: 'h', r: 1},
    {l: 'hh', r: 23, d: 'hour'},
    {l: 'd', r: 1},
    {l: 'dd', r: 29, d: 'day'},
    {l: 'M', r: 1},
    {l: 'MM', r: 11, d: 'month'},
    {l: 'y', r: 1},
    {l: 'yy', d: 'year'}
]

dayjs.extend(relativeTime, {thresholds})
dayjs.locale('zh-cn')


//转换大小到合适的单位,默认传入为MB,通过offset来指定传入的单位
export const calcSize = (size,offset=2) => {
    // 备注:这里默认后端传回来的数据是以MB算
    let kb = 1024
    let unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = Math.floor(Math.log(size) / Math.log(kb))
    return Number((size / Math.pow(kb, i)).toPrecision(3)) + ' ' + unit[i + offset];
}

//传入一个时间戳,返回当前时间距该时间戳过了多久
export const calcLastTimestamp = (timestamp) => {
    return dayjs.unix(timestamp).fromNow()
}

//传入一个时间戳,将时间戳转换为可读格式,形如'YYYY/MM/DD HH:mm:ss'
export const renderTimestamp = (timestamp) =>{
    return dayjs.unix(timestamp).format('YYYY/MM/DD HH:mm:ss')
}

export const showToast = (msg,type = "default") =>{
    let options = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
    }
    if (type === "info") toast.info(msg,options)
    else if (type === "success") toast.success(msg,options)
    else if (type === "warning") toast.warn(msg,options)
    else if (type === "error") toast.error(msg,options)
    else toast(msg,options)
}