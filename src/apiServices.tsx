import axios, {AxiosResponse} from "axios";
import {Question} from "./model";

axios.defaults.baseURL = "https://quizzable.herokuapp.com/api/quiz"

export function getAllQuestions() {
    return axios.get("")
        .then((response: AxiosResponse<Question[]>) => response.data)
        .then(questions =>{
            console.log(questions);
            return questions;
        });
}