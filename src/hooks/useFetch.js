import { useEffect, useState } from 'react';

const useFetch = (url, method = "GET") => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState(null);
    const postData = (data) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
    useEffect(() => {
        const getData = async (options) => {
            setLoading(true);
            try {
                const res = await fetch(url, { ...options });

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                const data = await res.json();
                setData(data);

            } catch (error) {
                setError(error.message)
            }
            setLoading(false);
        }
        if (method === "GET") {
            getData();
        }
        if (method === "POST" && options) {
            getData(options);
        }

    }, [url, options, method]);

    return { data, loading, error, postData }
}

export default useFetch