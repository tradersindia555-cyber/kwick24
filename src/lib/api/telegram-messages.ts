export const telegramMessages = {
  booking(data: any) {
    return `
  📌 NEW BOOKING
  
  👤 Name: ${data.name}
  🛠 Service: ${data.serviceName || "N/A"}
  📅 Date: ${data.date || "N/A"}
  ⏰ Time: ${data.time || "N/A"}
  📞 Phone: ${data.phone || "N/A"}
  
  📍 Address:
  ${data.address || "N/A"}
  
  ${
    data.notes
      ? `📝 Notes:
  ${data.notes}`
      : ""
  }
  `;
  },

  partner(data: any) {
    return `
  🤝 NEW PARTNER REQUEST
  
  👤 Name: ${data.name}
  📞 Phone: ${data.phone}
  📧 Email: ${data.email}
  🏢 Service: ${data.serviceType}
  `;
  },

  contact(data: any) {
    return `
  📩 NEW CONTACT REQUEST
  
  👤 Name: ${data.name}
  📞 Phone: ${data.phone}
  📧 Email: ${data.email}
  
  💬 Message:
  ${data.message}
  `;
  },
};
