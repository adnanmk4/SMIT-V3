const api = "https://saylani-tech-backend.vercel.app";

const getrequest = async (requestData) => {
    console.log(requestData)
    try {
        const res = await fetch(`${api}/msgs/send-msg`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        const result = await res.json();
        return result;
    } catch (error) {
        throw new Error('Error in API request');
    }
};

export default getrequest;