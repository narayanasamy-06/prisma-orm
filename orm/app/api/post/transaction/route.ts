import prisma from '@/lib/prisma'
import { json } from 'stream/consumers';
export const POST = async ()=> {
    const editLike = prisma.post.update({
        where:{
            id:1,
        },
        data:{
            likeNum:{
                decrement:5,
            }
        }
    });
    const addLike = prisma.post.update({
        where:{
            id:2,
        },
        data:{
            likeNum:{
                increment:5
            }
        }
    });
    const res = await prisma.$transaction([editLike,addLike]);
    return new Response(JSON.stringify(res));
}