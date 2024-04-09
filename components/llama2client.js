import React, { useState, useEffect } from 'react';



export default function llama2bot() {
    const [prompt, setPrompt] = useState("");

    const [history1, setHistory1] = useState("");

    const [history2, setHistory2] = useState("");


    const handleResponse = (response) => {
        var replicate = response["replicate_response"]
        var openai = response["openai_response"]


        setHistory1(history1 + "\n" + "User: " + prompt + "\n\n" + "Llama2: " + replicate + "\n")

        setHistory2(history2 + "\n" + "User: " + prompt + "\n\n" + "ChatGPT: "+ openai + "\n")

    }


    const handleSubmit = (event) => {
        event.preventDefault();

        //setHistory(history + "\n" + question)
        setPrompt("")


        fetch('/api/llama2' , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({question: prompt})
        })
        .then(response => response.json())
        .then(handleResponse)
        .catch(error => console.error(error));
        //alert(`The name you entered was: ${question}`)

    }

    const handleonChange = (e) => {
        //console.log(e.target.value)
        setPrompt(e.target.value)
    }
    //onChange = (e) => setQuestion(e.target.value) 

    return (

        <form action="/api/llama2" method="post" onSubmit={handleSubmit} >


            <div style={{display: 'inline-flex'}}>

                
                

                <textarea type="text" value={history1} name="question" onChange={handleonChange} style={{ height: "520px", width: "650px", flexGrow: 1, marginLeft: "-450px", marginRight: "200px"}} readOnly />  
                <textarea type="text" value={history2} name="question" onChange={handleonChange} style={{ height: "520px", width: "650px", flexGrow: 1, marginRight: "40px" }} readOnly />
            </div>

            <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", backgroundColor: "#f0f0f0", padding: "10px" }}>
                

                <input type="text" value={prompt} onChange={handleonChange} style={{ flexGrow: 1, marginRight: "10px", padding: "10px", border: "dotted", borderRadius: "5px", width: "400px", height: "40px" }} placeholder="Type your message..." />

                <input type="submit" value="Send" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer" }}  />
                
            </div>

        </form>










    );
}
