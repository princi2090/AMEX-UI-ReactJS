import React from "react";
import axios from "axios";


class ApiService {

    get = (data) => {
        return axios({
            url: data.baseURL,
            method: "GET",
            headers: {
                authorization: "your token comes here",
            },
            data: data.payload,
        });
        // .then((res) => {
        //     console.log(res);
        //     return res;
        // }).catch((err) => {
        //     console.log(err);
        //     return err;
        // });

    };
}

const api_service = new ApiService;
export default api_service;