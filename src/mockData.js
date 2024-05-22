const ludos = [
  {
    id: 472,
    title: "The Elder Scrolls V: Skyrim",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tnw.webp",
    year: 2011,
    genre: ["RPG", "Adventure"],
    themes: ["Action", "Fanatasy", "Open world", "Sandbox", "Stealth"],
    console: ["PC", "PlayStation 3", "Xbox 360"],
    developer: ["Bethesda Game Studios"],
    publisher: ["Bethesda Softworks"],
  },
  {
    id: 1073,
    title: "Super Mario World 2: Yoshi's Island",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kn9.webp",
    year: 1995,
    genre: ["Platform"],
    themes: ["Action", "Fantasy", "Kids"],
    console: ["Satellaview", "Super Famicom", "SNES"],
    developer: ["Nintendo"],
    publisher: ["Nintendo", "Hyundai", "St. GIGA", "Playtronic"],
  },
  {
    id: 418,
    title: "Final Fantasy X",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tr1.webp",
    year: 2001,
    genre: ["RPG", "Adventure"],
    themes: ["Drama", "Fantasy", "Romance", "Science fiction"],
    console: ["PlayStation 2"],
    developer: ["Square Product Development Division 1"],
    publisher: ["Square Electronic Arts", "Square"],
  },
  {
    id: 1070,
    title: "Super Mario World",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co65za.webp",
    year: 1990,
    genre: ["Platform", "Adventure"],
    themes: ["Action", "Fantasy"],
    console: [
      "Super Famicon",
      "SNES",
      "Arcarde",
      "Wii",
      "Wii U",
      "New Nintendo 3DS",
    ],
    developer: ["Nintendo"],
    publisher: ["Nintendo", "Playtronic", "Gradiente", "Hyundai"],
  },
  {
    id: 427,
    title: "Final Fantasy VII",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kx2.webp",
    year: 1997,
    genre: ["RPG", "TBS", "Adventure"],
    themes: ["Fantasy", "Science Fiction"],
    console: [
      "PlayStation",
      "PlayStation 3",
      "PlayStation Portable",
      "PlayStation Vita",
    ],
    developer: ["Square Product Development Division 1"],
    publisher: ["Sony Computer Entertainment", "Square Enix", "Square"],
  },
  {
    id: 1942,
    title: "The Witcher 3: Wild Hunt",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp",
    year: 2015,
    genre: ["RPG", "Adventure"],
    themes: ["Action", "Fantasy", "Open World"],
    console: [
      "Nintendo Switch",
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series XIS",
    ],
    developer: ["CD Projekt RED"],
    publisher: [
      "WB Games",
      "cdp.pl",
      "Spike ChunSoft",
      "Bandai Namco Entertainment",
    ],
  },
  {
    id: 204350,
    title: "The Last of Us Part I",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co5xex.webp",
    year: 2022,
    genre: ["Shooter", "Adventure"],
    themes: ["Action", "Horror", "Stealth", "Survival"],
    console: ["PC", "PlayStation 5"],
    developer: ["Naughty Dog"],
    publisher: ["Sony Interactive Entertainment"],
  },
  {
    id: 119388,
    title: "The Legend of Zelda: Tears of the Kingdom",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.webp",
    year: 2023,
    genre: ["RPG", "Adventure"],
    themes: ["Action", "Fantasy", "Open world", "Science Fiction"],
    console: ["Nintendo Switch"],
    developer: ["Nintendo"],
    publisher: ["Nintendo"],
  },
  {
    id: 45181,
    title: "Mass Effect Trilogy",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co4a7a.webp",
    year: 2012,
    genre: ["Shooter", "RPG"],
    themes: ["Action"],
    console: ["PlayStation 3", "Xbox"],
    developer: ["BioWare"],
    publisher: ["Electronic Arts"],
  },
  {
    id: 119133,
    title: "Elden Ring",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
    year: 2022,
    genre: ["RPG", "Adventure"],
    themes: ["Action", "Fantasy", "Open world"],
    console: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series XIS",
    ],
    developer: ["FromSoftware"],
    publisher: ["Bandai Namco Entertainment", "FromSoftware"],
  },
  {
    id: 119171,
    title: "Baldur's Gate 3",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.webp",
    year: 2023,
    genre: ["RPG", "Strategy", "TBS", "Tactical", "Adventure"],
    themes: ["Action", "Fantasy"],
    console: ["Google Stadia", "Mac", "PC", "PlayStation 5", "Xbox Series XIS"],
    developer: ["Larian Studios"],
    publisher: ["Larian Studios"],
  },
  {
    id: 7194,
    title: "Steins;Gate",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ff7.webp",
    year: 2009,
    genre: ["Adventure", "Visual Novel"],
    themes: [
      "Fantasty",
      "Historical",
      "Mystery",
      "Science Fiction",
      "Survival",
    ],
    console: [
      "Android",
      "IOS",
      "PC",
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation Portable",
      "PlayStation Vita",
      "Xbox 360",
    ],
    developer: ["MAGES", "Nitroplus", "5pb"],
    publisher: ["PQube", "JAST USA", "MAGES", "Kadokawa Shoten", "5pb"],
  },
  {
    id: 114283,
    title: "Persona 5 Royal",
    imagesrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1nic.webp",
    year: 2019,
    genre: ["RPG", "TBS", "Adventure"],
    themes: ["Action", "Fantasy"],
    console: [
      "Nintendo Switch",
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series XIS",
    ],
    developer: ["Atlus", "P Studio"],
    publisher: ["Sega"],
  },
];
