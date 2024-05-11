import prisma from '@/lib/prisma'
// export const POST = async ()=> {
//     const user =  await prisma.user.create({
//         data:{
//             name:"narayanasamy",
//             email:"narayanasamy@google.co.us",
//             role:"USER",
//             posts:{
//                 create:[
//                     {
//                         title:"written from prisma",
//                         published:true,
//                         catgories:{
//                             create:[
//                                 {
//                                     id:12,
//                                     name:"ithu athu la"
//                                 },{
//                                     id:13,
//                                     name:"funny memes"
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             }
//         }
//     });
//     return new Response(JSON.stringify(user));
// }
interface Body {
name:string
}
export const PUT = async (req:Request,{params}:{params:{id:string}})=> {
    const body:Body = await req.json();
    
    const user = await prisma.user.update({
        where:{
            id:+params.id,
        },
        data:{
            name:body.name,
        }
    });
    return new Response(JSON.stringify(user));
}