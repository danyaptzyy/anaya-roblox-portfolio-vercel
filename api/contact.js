const links = {
  "whatsappTopup": "https://chat.whatsapp.com/FBwIrfOydHcJFPsbkTtzEx?s=cl&p=a&ilr=4&amv=0",
  "community": "https://www.roblox.com/communities/975964654/ANAYA-REALM#!/about",
  "profile": "https://www.roblox.com/users/8522985325/profile"
};

function cleanText(value, maxLength = 500) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed. Use POST."
    });
  }

  const body = req.body || {};

  const name = cleanText(body.name, 40);
  const contact = cleanText(body.contact, 80);
  const service = cleanText(body.service, 60);
  const message = cleanText(body.message, 500);

  if (!name || !contact || !service || !message) {
    return res.status(400).json({
      ok: false,
      message: "Lengkapi nama, kontak, kebutuhan, dan detail request."
    });
  }

  const allowedServices = [
    "Map Building",
    "Luau Scripting",
    "Lighting Polish",
    "Full Roblox Experience"
  ];

  if (!allowedServices.includes(service)) {
    return res.status(400).json({
      ok: false,
      message: "Jenis kebutuhan tidak valid."
    });
  }

  const ticket = `AR-${Date.now().toString(36).toUpperCase()}`;

  // Catatan:
  // Vercel serverless tidak menyimpan data permanen.
  // Untuk production, sambungkan endpoint ini ke email service, database, atau Discord webhook.
  console.log("New portfolio request:", {
    ticket,
    name,
    contact,
    service,
    message,
    createdAt: new Date().toISOString()
  });

  return res.status(200).json({
    ok: true,
    ticket,
    message: `Request masuk. Ticket: ${ticket}. Simpan kode ini buat follow up.`,
    links
  });
};
