/**
 * 获取数据
 */
import axios from 'axios';

//封装好的get和post接口，调用方法情况action文件
// axios.defaults.baseURL = 'http://api.didadi.fm';  // 基础url前缀
// axios.defaults.headers.post[‘Content-Type’] = ‘application/x-www-form-urlencoded’;

/*
 * [getData get请求]
 * @param  {[string]} url   [请求地址]
 * @param  {[object]} param [传入的参数]
 * @return {[object]}       [返回成功或失败的数据]
 */
export const getData = (url, param) => {
    return (
        axios.get(`${url}`, {
            params: param
        })
    );
};

/*
 * [postData post]
 * @param  {[string]} url   [请求地址]
 * @param  {[object]} param [传入的参数]
 * @return {[object]}       [返回成功或失败的数据]
 */
export const postData = (url, param) => {
    return(
        axios.post(`${url}`, param)
    );
};
