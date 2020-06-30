import axios from './axios-users'

export const getUsers = async () => {
    try {
        const res = await axios.get("");

        return {
            data: res.data,
            error: null
        };
    }
    catch (e) {
        return {
            data: [],
            error: e.message
        };
    }
}