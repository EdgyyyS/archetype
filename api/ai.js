import { GoogleGenerativeAI } from "@google/generative-ai";
export default async function handler(req,res){
 const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
 const model=genAI.getGenerativeModel({model:"gemini-1.5-flash"});
 const {messages}=req.body;
 const prompt=`Você é um estrategista high ticket. Libere acesso apenas para perfis fortes.
 Responda 'ACESSO LIBERADO' apenas se o lead demonstrar potencial.
 Conversa:
 ${messages.map(m=>m.role+':'+m.text).join('\n')}`;
 const r=await model.generateContent(prompt);
 res.json({reply:r.response.text()});
}