import { ReplicateStream, StreamingTextResponse } from 'ai';
import Replicate from 'replicate';
import { experimental_buildLlama2Prompt } from 'ai/prompts';

export const runtime = 'edge';

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY || '',
  });



export default async function POST(req){

    console.log("Error")

    const {messages} = await req.json();
    

    const prediction = await replicate.predictions.create({
      stream: true,
      version: "02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
      input: { prompt: "Tell me a story" },
      
  });
   
    const stream = await ReplicateStream(response);
    
    return new StreamingTextResponse(stream);



    

}
