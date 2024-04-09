import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);


export default async function POST(req,res){
    //console.log(req.method);


    const {messages} = await req.json();
    
    //console.log(messages);

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [{
            role: "system", content: "you are a helpful assistant. You explain software concempts simply to intermediate programmers."} ,
            ...messages
        ]
    
    })

    const stream = await OpenAIStream(response);

    return new StreamingTextResponse(stream);

}
