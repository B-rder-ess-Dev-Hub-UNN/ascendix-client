import { useState, useEffect, use } from "react"
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(url)
        .then((res) => setData(res.data));
    }, [url]);

    return data;
}

export default useFetch

// custom useFetch hook that fetches data from a given URL using axios