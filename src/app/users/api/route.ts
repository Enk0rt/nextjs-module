import { NextResponse } from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IUserResponse} from "@/models/user/IUserResponse";

export async function GET() {
       try {
              const {users} = await getApiData<IUserResponse>("/auth/users");
              return NextResponse.json({ users });
       } catch {
              return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
       }
}
