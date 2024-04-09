import OpenAI from "openai";
import TestComponent from "../components/test3"
import Layout from "../components/layout";



export default function chat() {
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className= "bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl">GPT-3.5 streaming Chat Application</h2>
        <TestComponent/>



      </div>

    </main>
    </Layout>
  )
   
    
  }
