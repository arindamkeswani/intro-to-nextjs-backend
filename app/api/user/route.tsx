import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server"

const dbClient = new PrismaClient();

export function GET() {
    //db logic
    return Response.json({
        email: "arindam@gmail.com",
        name: "Arindam",
    })
}

export async function POST(req: NextRequest) {
    try{

        const body = await req.json();
        //db logic
    
        const user = await dbClient.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
    
        return Response.json({
            message: "Logged-in",
            user: {
                id: user.id
            }
        })
    }
    catch(e: any) {
        return Response.json({
            message: `Error: ${e.message}`,
        })
    }
}

