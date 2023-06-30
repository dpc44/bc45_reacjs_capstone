//Tập tin lưu các dữ liệu hằng số hoặc các utility function
import axios from 'axios'
import { customNavigate } from '..';
export const USER_SHOE = 'USERSHOE';
export const TOKEN = 'accessToken';
export const DOMAIN = 'https://shop.cyberlearn.vn';

const configClient = {
    setStoreJson: (name, data) => {
        let sData = JSON.stringify(data);
        localStorage.setItem(name, sData);
    },
    getStoreJson: (name) => {
        if (localStorage.getItem(name)) {
            let sData = localStorage.getItem(name);
            let data = JSON.parse(sData);
            return data;
        }
        return {};
    },
    //lưu chuỗi
    setStore: (name, data) => {
        localStorage.setItem(name, data);
    },
    //lấy chuỗi
    getStore: (name) => {
        if (localStorage.getItem(name)) {
            return localStorage.getItem(name);;
        }
        return undefined;
    }, setCookieJson(name, value, days) {
        //Biến đổi data thành string
        value = JSON.stringify(value);
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }, getCookieJson(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
                return JSON.parse(c.substring(nameEQ.length, c.length))
            }
        }
        return null;
    }, deleteCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}


export const { setStoreJson, getStoreJson, setStore, getStore, getCookieJson, setCookieJson, deleteCookie } = configClient;

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000 //thời gian chờ 
});



http.interceptors.request.use((req) => {
    req.data = {...req.data}
    req.headers = {
        ...req.headers,

        TokenCybersoft: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMDQzODQwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAwNTg2MDAwfQ.nqyOmcwBXyqINN0ROA_xI8TKx0Jk05_lwRy4Cdv0j_8`
    }
    if (getStoreJson(USER_SHOE)) {
        req.headers = {
            ...req.headers,
            Authorization: `Bearer ${getStoreJson(USER_SHOE).accessToken}`
        }
    }
    return req;
}, err => {
    return Promise.reject(err)
})




http.interceptors.response.use((res) => {
    //Tất cả kết quả trả về từ http đều chạy hàm này
    // res.data.result = 'abc';
    console.log(res.data)
    return res;
}, err => {
    //Xử lý lỗi 
    // console.log('first')
    // localStorage.clear();
    // customNavigate.push('/');
    if (err.response?.status === 401) {
        
        // console.log(err)

        //Nếu chưa đủ quyền thì đá về login
        customNavigate.push('/');
        return;
    }
    if(err.response?.status === 400 || err.response?.status  === 404){
        customNavigate.push('/');
        return;
    }
    return Promise.reject(err);
});

