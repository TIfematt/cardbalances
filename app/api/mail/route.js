import { transporter, mailOptions } from "@/config/nodemailer";
import { NextResponse } from "next/server";


// Notice the function definition:
export async function POST(request) {
  // ...
  // console.log(request)
  // console.log("Hello")
  // return NextResponse.json({ message: "Hello World" });

  // if (request.method === 'POST') {
  //   const data = request.body;

    
  // }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: request.body,
      text: 'Testing mail'
    })
  } catch (error) {
    console.log(error)
  }


}

export async function GET(request) {


  return NextResponse.json({ error: 'Internal Server Error' })
}

 
