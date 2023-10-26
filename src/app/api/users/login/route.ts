import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {
  NextRequest,
  NextResponse,
} from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(
  request: NextRequest,
) {
  try {
    const reqBody =
      await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    const user = await User.findOne({
      email,
    });
    console.log("user: ", user);
    if (!user) {
      return NextResponse.json({
        error: "User not found",
        status: 404,
      });
    }
    const validPassword =
      await bcryptjs.compare(
        password,
        user.password,
      );
    console.log(
      "validPassword: ",
      validPassword,
    );
    if (!validPassword) {
      return NextResponse.json({
        error: "Invalid password",
        status: 400,
      });
    }
    const tokenData = {
      id: user._id,
      email: user.email,
      password: user.password,
    };

    const token = jwt.sign(
      tokenData,
      process.env.TOKEN_SECRET!,
      {
        expiresIn: "30m",
      },
    );
    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });
    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,
      },
    );
    return response;
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
