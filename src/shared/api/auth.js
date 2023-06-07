import axios from "axios";

const instance = axios.create({
    BASE_URL: "https://connections-api.herokuapp.com"
})

export const register = async (data) => {
    const {data: result} = await instance.post("/users/signup", data)
    return result;
    
}