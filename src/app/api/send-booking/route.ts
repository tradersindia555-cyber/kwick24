import { sendTelegramMessage } from "@/lib/api/telegram";
import { telegramMessages } from "@/lib/api/telegram-messages";
import { apiMessages } from "@/lib/messages";
import { NextResponse } from "next/server";
const { success, error: errorMsg } = apiMessages.leads;
export async function POST(request: Request) {
  try {
    const booking = await request.json();

    await sendTelegramMessage("leads", telegramMessages.booking(booking));

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
