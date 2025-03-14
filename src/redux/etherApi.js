import axios from "axios";

const etherApi = axios.create({
  baseURL: "http://192.168.100.21:8545",
  //baseURL : "https://testnet-rpc-seoul.gen.foundation",
  headers: { "content-type": "application/json" },
});

export default etherApi;
