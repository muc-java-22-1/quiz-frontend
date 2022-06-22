import {getAllQuestions} from "./apiServices";
import {useEffect, useState} from "react";
import {Question} from "./model";


export default function Test(){

    const [questions, setQuestions] = useState<Question[]>();

    useEffect(()=>{
        fetchQuestions();
    }, [])

    const fetchQuestions = () => {
        getAllQuestions().then(q=>
            setQuestions(q)
        );
    }

    return (
        <div>
            <h1>Questions</h1>
            {
                questions &&
                questions.map(q=><div>{q.question}</div>)
            }
        </div>
    )
}