export default function handler(req,res){
 const {name,date,time}=req.query;
 const msg=`Olá, sou ${name}.
 Passei pelo diagnóstico do ARCHETYPE.
 Data:${date} Hora:${time}.
 Estou ciente que é um serviço high ticket.`;
 res.writeHead(302,{Location:"https://wa.me/5511970685235?text="+encodeURIComponent(msg)});
 res.end();
}