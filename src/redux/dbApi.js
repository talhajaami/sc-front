import axios from "axios";

const dbApi = axios.create({
    baseURL : "https://api.stablecoin.life",
    //baseURL : "https://dev-explorer-server.gen.foundation",
    headers : {'content-type' : "application/json"}
})

export default dbApi