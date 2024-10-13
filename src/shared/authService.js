import axios from "axios";
const api = "http://localhost:5000/";


export const registerUser = async (user) => {
    return await axios.post(`${api}register`, user);
}

export const loginUser = async (phone, password) => {
    const response = await axios.get(`${api}register?phone=${phone}&password=${password}`);
    if (response.data.length > 0) {
        const user = response.data[0];
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } else {
        throw new Error('Invalid credentials');
    }
}

export const logout = ()=>{
    return localStorage.removeItem('user');
}
export const getCurrentuser = ()=>{
    return JSON.parse(localStorage.getItem('user'));
}