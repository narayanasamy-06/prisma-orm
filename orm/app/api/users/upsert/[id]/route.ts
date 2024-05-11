import prisma from '@/lib/prisma'
interface Body {
    name:string,
    email:string
}
    export const PUT = async (req:Request,{params}:{params:{id:string}})=> {
        const body:Body = await req.json();
        
        const user = await prisma.user.upsert({
            where:{
                id:+params.id,
            },
            update:{
                name:"Updated One via upsert"
            },
            create:{
                name:body.name,
                email:body.email,
            }
        });
        return new Response(JSON.stringify(user));
    }