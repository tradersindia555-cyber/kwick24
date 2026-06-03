// lib/messages.ts

export const apiMessages = {
  leads: {
    success:
      "Your booking request has been submitted successfully. Our team will contact you shortly.",
    error:
      "We couldn't submit your booking request at the moment. Please try again later.",
  },

  partners: {
    success:
      "Thank you for your interest in partnering with us. Our team will review your request and get back to you soon.",
    error:
      "We couldn't submit your partnership request at the moment. Please try again later.",
  },

  contactUs: {
    success:
      "Thank you for contacting us. We've received your message and will respond as soon as possible.",
    error:
      "We couldn't send your message at the moment. Please try again later.",
  },

  common: {
    validationError: "Please fill in all required fields before submitting.",
    serverError: "Something went wrong on our side. Please try again later.",
    telegramError:
      "Notification could not be delivered. Your request may not have been processed.",
  },
} as const;
