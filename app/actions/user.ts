"use server"

import { PrismaClient } from "@prisma/client";

const dbClient = new PrismaClient();


//This replaces HTTP Calls made by clients, turns them into simple function calls
export async function signup(username: string, password: string) {
    try{
        console.log(username, password)
        const user = await dbClient.user.create({
            data: {
                username: username,
                password: password
            }
        })
    
        // return JSON.stringify({
        //     message: "Logged-in",
        //     user: {
        //         id: user.id
        //     }
        // })
        return "Logged-in";
    }
    catch(e: any) {
        // return Response.json({
        //     message: `Error: ${e.message}`,
        // })
        return `Error: ${e}`;
    }
}