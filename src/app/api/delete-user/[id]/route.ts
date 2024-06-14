// pages/api/delete-user/:id
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  res: {
    params: {
      id: string;
    };
  }
) {
  const id = res.params.id;
  const baseUrl = process.env.NEXT_OKTA_BASE_URL;
  const token = process.env.NEXT_OKTA_AUTH_TOKEN;

  try {
    const response = await fetch(`${baseUrl}/api/v1/users/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `SSWS ${token}`,
      },
    });
    const parsed = await response.json();

    if(parsed.errorSummary){
      return NextResponse.json({
        message: parsed.errorSummary,
        data: parsed,
        status: 400,
      });
    }else{
      return NextResponse.json({
        message: "User deleted successfully",
        data: parsed,
        status: 200,
      });
    }
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong !",
      status: 500,
    });
  }
}
