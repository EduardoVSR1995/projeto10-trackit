import axios from "axios";


const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function postCreat(obj){
    console.log(obj)
    const promise = axios.post(`${URL}auth/sign-up`,obj);
    return promise;
}

function postLogin(obj){
    console.log(obj)
    const promise = axios.post(`${URL}auth/login`,obj);
    return promise;
}

function postLoginHeader(obj, header ){
    const promise = axios.post(`${URL}habits`,obj , header );
    return promise;
}

function getHeader(header){
    const promise = axios.get(`${URL}habits`,header);
    return promise;
}


export { postLogin ,postCreat , postLoginHeader, getHeader };