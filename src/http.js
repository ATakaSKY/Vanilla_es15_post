class Http {
    async get(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async post(url, data) {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resdata = await response.json();
        return resdata;
    }

    async put(url, data) {

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resdata = await response.json();
        return resdata;


    }

    async delete(url) {

        const response = await fetch(url, {
            method: "DELETE"
        });

        const resdata = await 'Item deleted...';
        return resdata;
    }
}

export const http = new Http();