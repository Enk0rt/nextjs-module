import {getUsers} from "@/services/data/dataApi";
import {NextResponse} from "next/server";
import axios from "axios";

export async function GET(){

       const res = await getUsers();

       const response = NextResponse.json({ message: "No refresh token",res })

       return response
}