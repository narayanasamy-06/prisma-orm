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
name:string,
email:string
}
export const POST = async (req:Request)=> {
    const body:Body = await req.json();
    
    const user = await prisma.user.create({
        data:{
            ...body
        }
    });
    return new Response(JSON.stringify(user));
}