import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request: NextRequest) {
  try {
    const id = await getDataFromToken(request);
    // const user = await User.findById(id, "username _id email"); select specific fields from the response
    // const user = await User.findById(id).select("email") another way to select fields
    const user = await User.findById(id).select("-password") //exclude fields from the response
    return NextResponse.json({
      message: "Profile fetched successfully",
      status: 200,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function ANOTHERGET(request: NextRequest) {
const reqBody = await request.json();
console.log("reqBody", reqBody);
}
