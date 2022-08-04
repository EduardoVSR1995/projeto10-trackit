import axios from "axios";
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth";

function postLogin(obj, module){
    const promise = axios.post(`${URL}/${module}`,obj);
    return promise;
}

export { postLogin }