import prisma from '@/lib/prisma'
interface Body {
    name:string,
    email:string
}
    export const DELETE = async (req:Request,{params}:{params:{id:string}})=> {
        const user = await prisma.user.delete({
            where:{
                id: +params.id,
            }
        });
        return new Response(JSON.stringify(user));
    }