const api = axios.create({
    baseURL: "http://127.0.0.1:8080/api/",
    headers: {
        "Content-Type": "application/json",
    },
});
