import OpenAI from "openai";
import ChatComponent from "../components/chatBot"
import Layout from "../components/layout";
import Llama2component from "../components/llama2client"


export default function llama2chat() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className= "bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl" style={{textAlign: "center"}}>GPT vs LLAMA2 </h2>
        <Llama2component/>



      </div>

    </main>
    </Layout>
  )
   
    
  }
