import axios from "axios";


const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function postCreat(obj){
    const promise = axios.post(`${URL}auth/sign-up`,obj);
    return promise;
}

function postLogin(obj){
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
function delHabts(id , header){
    const promise = axios.delete(`${URL}habits/${id}`, header);
    return promise;
}

function getToday(header){
    const promise = axios.get(`${URL}habits/today`, header);
    return promise;    
}

function postCheck( id,header){
    const promis = axios.post( `${URL}habits/${id}/check`, {} , header );
    return promis;
}

function postUncheck(id,header){
    const promis = axios.post( `${URL}habits/${id}/uncheck`, {} , header );
    return promis;
}

function getHistori(header){
    const promis = axios.get( `${URL}habits/history/daily`, header );
    return promis;
}    



export { getHistori , postUncheck ,postCheck, postLogin ,postCreat , postLoginHeader, getHeader, delHabts, getToday };