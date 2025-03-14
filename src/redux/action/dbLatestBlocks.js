import dbApi from '../dbApi'
import { format } from "timeago.js";
import { mainpageDataActions } from '../reducer/mainpageData'

function dbLatestBlocksApi() {
    return async (dispatch) => {
        try {
            const datas = await dbApi.get("/dbLatestBlockData")

            let timeagoArr = []

            for(let i = 0; i < datas.data.length; i++){
                let date = new Date()
                let year = date.getFullYear();
                let month = "0" + (date.getMonth()+1);
                let day = "0" + date.getDate();
                let hour = "0" + date.getHours();
                let minute = "0" + date.getMinutes();
                let second = "0" + date.getSeconds();
                let time = year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2) + ":" + second.substr(-2);
        
                let timeago = format(datas.data[i].time_stamp, "en_US", { relativeDate: time });      
                timeagoArr.push(timeago);
            }

            dispatch(mainpageDataActions.dbLatestBlocks({ latestBlocks : datas.data }))
            dispatch(mainpageDataActions.dbLatestBlocksTimeago({ latestBlocksTimeago : timeagoArr }))
        } 
        catch(error) {
            console.error(error)
        }
    }
}

export const dbLatestBlocks = {dbLatestBlocksApi}
