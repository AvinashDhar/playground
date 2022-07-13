import axios from "axios";

export const requestGetTodo = () => {
    return axios.request({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todos'
    })
}