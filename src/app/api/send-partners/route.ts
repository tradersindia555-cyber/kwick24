import { sendTelegramMessage } from "@/lib/api/telegram";
import { telegramMessages } from "@/lib/api/telegram-messages";
import { apiMessages } from "@/lib/messages";
import { NextResponse } from "next/server";
const { success, error: errorMsg } = apiMessages.partners;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data, "data");

    await sendTelegramMessage("partners", telegramMessages.partner(data));

    return NextResponse.json({
      success: true,
      message: success,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : errorMsg,
      },
      { status: 500 },
    );
  }
}
