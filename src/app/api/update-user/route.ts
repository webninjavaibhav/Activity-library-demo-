// pages/api/auth
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const baseUrl = process.env.NEXT_OKTA_BASE_URL;
  const token = process.env.NEXT_OKTA_AUTH_TOKEN;

  try {
    const response = await fetch(`${baseUrl}/api/v1/users/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data.data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `SSWS ${token}`,
      },
    });
    const parsedVal = await response.json();
    if (parsedVal.profile) {
      return NextResponse.json({
        message: "Updated user successfully",
        data: parsedVal,
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: parsedVal.errorSummary,
        data: parsedVal,
        status: 400,
      });
    }
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong !",
      status: 500,
    });
  }
}

