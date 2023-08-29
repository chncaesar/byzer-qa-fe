import { useState } from 'react'
import {Input,Button } from 'antd';
import axios from "axios";


function QA() {

    const [question, setQuestion] = useState("")
    const [nb, setNb] = useState("")
    const questionChange = (e) => {
        setQuestion(e.target.value);
    };

    type Query = {
        sql: string;
        notebook: string;
        cell_id: string;
    }

    const sql = `set template='''User: You are a helpful assistant. Think it over and answer the user question correctly. 
    {context}
    Please answer based on the content above? 
    {query}
    Assistant:''' where scope="session";

    select llm_response_predict(
        docs_qa(llm_param(map(
        "instruction","what's Byzer?",
        "k",10,
        "prompt","${question}",
        "temperature", 0.1,
        "max_length", 8192,
        "strategy", "full_doc"
        )))
        ) as response as output;`

    let query: Query = {
        sql: sql,
        notebook: "byzer-qa",
        cell_id: "999999"
    }
    const ask = () => {        
        axios.create().get('/api/notebook/84')
        .then( (resp) => {            
            setNb(resp.data);
            console.log(query);

        });
    };

    return (
        <>
            <Input addonBefore="Question" onChange={questionChange}/>
            <Button type="primary" onClick={ask}>Ask</Button>    
        </>
      )
}

export default QA