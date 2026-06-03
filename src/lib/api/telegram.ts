type TelegramBotType = "leads" | "partners" | "contactus";

const TELEGRAM_CONFIG = {
  leads: {
    token: process.env.TELEGRAM_LEADS_BOT_TOKEN,
    chatId: process.env.TELEGRAM_LEADS_CHAT_ID,
  },
  partners: {
    token: process.env.TELEGRAM_PARTNERS_BOT_TOKEN,
    chatId: process.env.TELEGRAM_PARTNERS_CHAT_ID,
  },
  contactus: {
    token: process.env.TELEGRAM_CONTACT_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CONTACT_CHAT_ID,
  },
};

export async function sendTelegramMessage(
  type: TelegramBotType,
  message: string,
) {
  const config = TELEGRAM_CONFIG[type];

  if (!config?.token || !config?.chatId) {
    throw new Error(`Telegram config missing for ${type}`);
  }

  const response = await fetch(
    `https://api.telegram.org/bot${config.token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: config.chatId,
        text: message,
      }),
    },
  );

  const data = await response.json();

  if (!data.ok) {
    throw new Error(data.description || "Telegram send failed");
  }

  return data;
}
