import { useState, useEffect } from "react";
import axios from "axios";

// axios.defaults.baseURL = "https://portfolio.vercel.app/api/";

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    
    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    const fetchData = () => {
        axios[method](url,
            JSON.parse(headers),
            JSON.parse(body)
        ).then((res) => {
            setResponse(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {});
    };

    return {
        response,
        error
    };
};

export default useAxios;
