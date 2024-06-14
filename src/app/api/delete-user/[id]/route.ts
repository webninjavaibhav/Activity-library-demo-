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

    return NextResponse.json({
      message: "User deleted successfully",
      data: response,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Something went wrong !",
      status: 500,
    });
  }
}
