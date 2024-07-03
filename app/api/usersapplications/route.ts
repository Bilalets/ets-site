import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

interface User {
  id: string;
  Name: string;
  FatherName: string;
  CNIC: string;
  MobileNumber: string;
  Email: string;
  DateOfBirth: Date;
  Gender: string;
  Qualification: string;
  Province: string;
  City: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as User;
    const {
      id,
      Name,
      FatherName,
      CNIC,
      MobileNumber,
      Email,
      DateOfBirth,
      Gender,
      Qualification,
      Province,
      City,
    } = body;
    const createdData: User = {
      id,
      Name,
      FatherName,
      CNIC,
      MobileNumber,
      Email,
      DateOfBirth,
      Gender,
      Qualification,
      Province,
      City,
    };
    const createdApplication = await prisma.userApplication.create({
      data: createdData,
    });
    return NextResponse.json(createdApplication);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while creating the application" },
      { status: 500 },
    );
  }
}
