import Replicate from "replicate";
import Layout from "../../components/layout";
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



export default async function handler(req, res) {

  // console.log(req)

  const prompt = req.body['question'];

  // console.log(prompt)

  // const output = await replicate.run(
  //   "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
  //   {
  //     input: {
  //       debug: false,
  //       top_k: 50,
  //       top_p: 1,
  //       prompt: prompt,
  //       temperature: 0.5,
  //       system_prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
  //       max_new_tokens: 500,
  //       min_new_tokens: -1
  //     }
  //   }
  // );

  // var response = "";
  // for (const key in output) {
  //   response = response + output[key];

  // }
  // console.log(response);




  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: "system", content: prompt }],
  //   model: "gpt-3.5-turbo",
  // });




  // console.log(completion.choices[0]['message']['content']);




  // var combine_result = {
  //   replicate_response: response,
  //   openai_response: completion.choices[0]['message']['content']
  // }
  // res.status(200).json(combine_result);



  
  

  // console.log(Object.keys(req));
  // console.log(req.method);
  // console.log("query", req.query);
  // console.log("body", Object.keys(req.body));

  // console.log("question", req.body['question1']);

    var combine_result = {
    replicate_response: "replicate response",
    openai_response: "openai response"
  }

  
  res.status(200).json(combine_result);


  //res.status(200).json({ text: 'Hello llama2' });

  



}


  