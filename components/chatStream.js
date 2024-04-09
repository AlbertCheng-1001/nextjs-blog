"use client"

import {useChat, Message} from "ai/react"

export default function chatbot(){

    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat({api:'/api/chatStreamServerSide'});


    
    console.log(messages);
    console.log(input);




    return (
        <div>

            {messages.map((message) => {
                return (
                    <div key={message.id}>
                        {
                            message.role == "assistant"
                            ?
                            <h3 className="text-lg font-semibold mt-2">
                                GPT-3.5-turbo
                            </h3>
                            :
                            <h3 className="text-lg font-semibold mt-2">
                                User
                            </h3>
                        }

                        {message.content.split("\n").map((currentTextBlocks, index) =>{
                            if(currentTextBlocks === ""){
                                return <p key={message.id + index}>&nbsp;</p>
                            } else{
                                return <p key={message.id + index}>{currentTextBlocks}</p>
                            }
                        })
                        }


                    </div>
                )



            })}
            <div>
                <h3 className="text-lg font-semibold mt-2">GPT-3.5-turbo</h3>
                <p>I am a robot with GPT-3.5-turbo</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mt-2">User</h3>
                <p>I am a user</p>
            </div>
            
            <form className="mt-12" onSubmit={handleSubmit}>
                
                <p>User Message</p>

                <textarea 
                className="mt-2 w-full bg-slate-800 p-2"
                placeholder="What are data structures and algorithms" 
                value={input}
                onChange={handleInputChange}  
                >
                
                </textarea>

                

                <button className="rounded-md bg-blue-600 p-2 mt-2">
                    Send message

                </button>


            </form>





        </div>




    );
}