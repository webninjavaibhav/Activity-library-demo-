// pages/api/auth
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const baseUrl = process.env.NEXT_OKTA_BASE_URL;
  const token = process.env.NEXT_OKTA_AUTH_TOKEN;

  try {
    const response = await fetch(`${baseUrl}/api/v1/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `SSWS ${token}`,
      },
    });
    const parsedVal = await response.json();

    return NextResponse.json({
      message: "User get successful",
      data: parsedVal,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong !",
      status: 500,
    });
  }
}
