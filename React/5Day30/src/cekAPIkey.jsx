import { useState, useEffect } from "react";

export default function CekAPI() {
    const [headers, setHeaders] = useState({});

    useEffect(() => {
        const fetchingData = async () => {
            try {
                const resp = await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/foods");
                const respHeaders = resp.headers;

                // Mengkonversi objek header menjadi bentuk yang lebih mudah dibaca
                const headersObj = {};
                respHeaders.forEach((value, name) => {
                    headersObj[name] = value;
                });

                setHeaders(headersObj);
            } catch (error) {
                console.error(error);
            }
        }

        fetchingData();
    }, []);

    return (
        <div>
            <h2>Headers:</h2>
            <pre>{JSON.stringify(headers, null, 2)}</pre>
        </div>
    )
}
