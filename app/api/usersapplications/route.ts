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
  Imageurl: string;
  isVerified: boolean;
  isViewed: boolean;
  registrationNumber: number; // Ensure this field is present in the interface
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
      Imageurl,
      isVerified,
      isViewed,
    } = body;

    // Calculate the next registration number
    const lastUser = await prisma.userApplication.findFirst({
      orderBy: {
        registrationNumber: 'desc',
      },
      select: {
        registrationNumber: true,
      },
    });

    const nextRegistrationNumber = lastUser ? lastUser.registrationNumber + 1 : 1;

    const createdData = {
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
      Imageurl,
      isVerified: false,
      isViewed: false,
      registrationNumber: nextRegistrationNumber,
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
