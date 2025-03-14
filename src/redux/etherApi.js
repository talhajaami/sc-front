import axios from "axios";

const etherApi = axios.create({
  baseURL: "http://10.1.10.146:8545",
  //baseURL : "https://testnet-rpc-seoul.gen.foundation",
  headers: { "content-type": "application/json" },
});

export default etherApi;
