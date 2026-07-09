const projects = [
  {
    "name": "Secret Alley",
    "slug": "secret-alley",
    "role": "Map Builder • Scripting",
    "theme": "Urban alley, graffiti, hidden party lane",
    "url": "https://www.roblox.com/games/110699398907487/SECRET-ALLEY",
    "tag": "Urban",
    "status": "Live Preview"
  },
  {
    "name": "Swara Rembulan",
    "slug": "swara-rembulan",
    "role": "Map Builder • Experience Polish",
    "theme": "Night mood, social hangout, cinematic atmosphere",
    "url": "https://www.roblox.com/games/138493622574191/SWARA-REMBULAN",
    "tag": "Night",
    "status": "Live Preview"
  },
  {
    "name": "After Party",
    "slug": "after-party",
    "role": "Builder • Lighting • Interaction",
    "theme": "After-hours street club energy",
    "url": "https://www.roblox.com/games/81922341881280/AFTER-PARTY",
    "tag": "Party",
    "status": "Live Preview"
  },
  {
    "name": "NH Skatepark City",
    "slug": "nh-skatepark-city",
    "role": "Map Builder • City Layout",
    "theme": "Skatepark city, urban movement space",
    "url": "https://www.roblox.com/games/81595423388180/NH-SKATEPARK-CITY",
    "tag": "City",
    "status": "Live Preview"
  },
  {
    "name": "Street Children Club",
    "slug": "street-children-club",
    "role": "Builder • Scripting • Club Systems",
    "theme": "Street party, outdoor club, realistic urban night",
    "url": "https://www.roblox.com/games/109373940568666/STREET-CHILDREN-CLUB",
    "tag": "Club",
    "status": "Live Preview"
  }
];

module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  if (req.method !== "GET") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed. Use GET."
    });
  }

  return res.status(200).json({
    ok: true,
    count: projects.length,
    projects
  });
};
