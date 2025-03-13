export const bikeCategories = [
  { name: "Supersport", slug: "supersport" },
  { name: "Sport", slug: "sport" },
  { name: "Naked", slug: "naked" },
  { name: "Adventure", slug: "adventure" },
  { name: "Touring", slug: "touring" },
  { name: "Cruiser", slug: "cruiser" },
  { name: "Café Racer", slug: "cafe-racer" },
  { name: "Scrambler", slug: "scrambler" },
  { name: "Supermoto", slug: "supermoto" },
  { name: "Sport-Touring", slug: "sport-touring" },
];

export const bikes = [
  {
    name: "YZF-R1",
    slug: "yzf-r1",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "supersport",
    displacement: 998,
    cylinders: 4,
    lams: false,
  },
  {
    name: "YZF-R6",
    slug: "yzf-r6",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "supersport",
    displacement: 599,
    cylinders: 4,
    lams: false,
  },
  {
    name: "YZF-R3",
    slug: "yzf-r3",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "sport",
    lams: true,
    displacement: 321,
    cylinders: 2,
  },
  {
    name: "MT-10",
    slug: "mt-10",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "naked",
    displacement: 998,
    cylinders: 4,
    lams: false,
  },
  {
    name: "MT-09",
    slug: "mt-09",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "naked",
    displacement: 890,
    cylinders: 3,
    lams: false,
  },
  {
    name: "MT-07",
    slug: "mt-07",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "naked",
    displacement: 689,
    cylinders: 2,
    lams: false,
  },
  {
    name: "MT-07 LAMS",
    slug: "mt-07-lams",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "naked",
    displacement: 655,
    cylinders: 2,
    lams: true,
  },
  {
    name: "XSR900",
    slug: "xs900",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "naked",
    displacement: 847,
    cylinders: 3,
    lams: false,
  },
  {
    name: "Tracer 900",
    slug: "tracer-900",
    brand: {
      connect: {
        slug: "yamaha",
      },
    },
    type: "sport-touring",
    displacement: 847,
    cylinders: 3,
    lams: false,
  },

  {
    name: "Ninja ZX-10R",
    slug: "ninja-zx-10r",
    brand: {
      connect: {
        slug: "kawasaki",
      },
    },
    type: "supersport",
    displacement: 998,
    cylinders: 4,
    lams: false,
  },
  {
    name: "Ninja 650",
    slug: "ninja-650",
    brand: {
      connect: {
        slug: "kawasaki",
      },
    },
    type: "sport",
    displacement: 649,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Z900",
    slug: "z900",
    brand: {
      connect: {
        slug: "kawasaki",
      },
    },
    type: "naked",
    displacement: 948,
    cylinders: 4,
    lams: false,
  },
  {
    name: "Versys 650",
    slug: "versys-650",
    brand: {
      connect: {
        slug: "kawasaki",
      },
    },
    type: "adventure",
    displacement: 649,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Z650",
    slug: "z650",
    brand: {
      connect: {
        slug: "kawasaki",
      },
    },
    type: "naked",
    displacement: 649,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Vulcan S",
    slug: "vulcan-s",
    brand: {
      connect: {
        slug: "kawasaki",
      },
    },
    type: "cruiser",
    displacement: 649,
    cylinders: 2,
    lams: false,
  },

  {
    name: "CBR1000RR",
    slug: "cbr1000rr",
    brand: {
      connect: {
        slug: "honda",
      },
    },
    type: "supersport",
    displacement: 999,
    cylinders: 4,
    lams: false,
  },
  {
    name: "CB650R",
    slug: "cb650r",
    brand: {
      connect: {
        slug: "honda",
      },
    },
    type: "naked",
    displacement: 649,
    cylinders: 4,
    lams: false,
  },
  {
    name: "CB500F",
    slug: "cb500f",
    brand: {
      connect: {
        slug: "honda",
      },
    },
    type: "naked",
    displacement: 471,
    cylinders: 2,
    lams: true,
  },
  {
    name: "Monkey",
    slug: "monkey",
    brand: {
      connect: {
        slug: "honda",
      },
    },
    type: "naked",
    displacement: 125,
    cylinders: 1,
    lams: true,
  },
  {
    name: "Grom",
    slug: "grom",
    brand: {
      connect: {
        slug: "honda",
      },
    },
    type: "naked",
    displacement: 125,
    cylinders: 1,
    lams: true,
  },
  {
    name: "Africa Twin",
    slug: "africa-twin",
    brand: {
      connect: {
        slug: "honda",
      },
    },
    type: "adventure",
    displacement: 1084,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Gold Wing",
    slug: "gold-wing",
    brand: {
      connect: {
        slug: "honda",
      },
    },
    type: "touring",
    displacement: 1833,
    cylinders: 6,
    lams: false,
  },

  {
    name: "GSX-R1000",
    slug: "gsx-r1000",
    brand: {
      connect: {
        slug: "suzuki",
      },
    },
    type: "supersport",
    displacement: 999,
    cylinders: 4,
    lams: false,
  },
  {
    name: "GSX-S750",
    slug: "gsx-s750",
    brand: {
      connect: {
        slug: "suzuki",
      },
    },
    type: "naked",
    displacement: 749,
    cylinders: 4,
    lams: false,
  },
  {
    name: "V-Strom 650",
    slug: "v-strom-650",
    brand: {
      connect: {
        slug: "suzuki",
      },
    },
    type: "adventure",
    displacement: 645,
    cylinders: 2,
    lams: false,
  },
  {
    name: "SV650",
    slug: "sv650",
    brand: {
      connect: {
        slug: "suzuki",
      },
    },
    type: "naked",
    displacement: 645,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Hayabusa",
    slug: "hayabusa",
    brand: {
      connect: {
        slug: "suzuki",
      },
    },
    type: "supersport",
    displacement: 1340,
    cylinders: 4,
    lams: false,
  },
  {
    name: "Katana",
    slug: "katana",
    brand: {
      connect: {
        slug: "suzuki",
      },
    },
    type: "naked",
    displacement: 999,
    cylinders: 4,
    lams: false,
  },

  {
    name: "RC 390",
    slug: "rc-390",
    brand: {
      connect: {
        slug: "ktm",
      },
    },
    type: "supersport",
    displacement: 373,
    cylinders: 1,
    lams: true,
  },
  {
    name: "Duke 390",
    slug: "duke-390",
    brand: {
      connect: {
        slug: "ktm",
      },
    },
    type: "naked",
    displacement: 373,
    cylinders: 1,
    lams: true,
  },
  {
    name: "Adventure 890",
    slug: "adventure-890",
    brand: {
      connect: {
        slug: "ktm",
      },
    },
    type: "adventure",
    displacement: 889,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Super Duke 1290",
    slug: "super-duke-1290",
    brand: {
      connect: {
        slug: "ktm",
      },
    },
    type: "naked",
    displacement: 1301,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Duke 200",
    slug: "duke-200",
    brand: {
      connect: {
        slug: "ktm",
      },
    },
    type: "naked",
    displacement: 199,
    cylinders: 1,
    lams: true,
  },
  {
    name: "Adventure 390",
    slug: "adventure-390",
    brand: {
      connect: {
        slug: "ktm",
      },
    },
    type: "adventure",
    displacement: 373,
    cylinders: 1,
    lams: true,
  },

  {
    name: "S1000RR",
    slug: "s1000rr",
    brand: {
      connect: {
        slug: "bmw",
      },
    },
    type: "supersport",
    displacement: 999,
    cylinders: 4,
    lams: false,
    torqueNm: 113,
    torqueRpm: 11000,
    powerKw: 156.6,
    powerRpm: 13750,
  },
  {
    name: "R1250RT",
    slug: "r1250rt",
    brand: {
      connect: {
        slug: "bmw",
      },
    },
    type: "touring",
    displacement: 1254,
    cylinders: 2,
    lams: false,
    torqueNm: 143,
    torqueRpm: 6250,
    powerKw: 100,
    powerRpm: 7750,
  },
  {
    name: "R1300GS",
    slug: "r1300gs",
    brand: {
      connect: {
        slug: "bmw",
      },
    },
    type: "adventure",
    displacement: 1300,
    cylinders: 2,
    lams: false,
    torqueNm: 149,
    torqueRpm: 6500,
    powerKw: 108,
    powerRpm: 7750,
  },
  {
    name: "F900R",
    slug: "f900r",
    brand: {
      connect: {
        slug: "bmw",
      },
    },
    type: "naked",
    displacement: 895,
    cylinders: 2,
    lams: false,
  },
  {
    name: "G310R",
    slug: "g310r",
    brand: {
      connect: {
        slug: "bmw",
      },
    },
    type: "naked",
    displacement: 313,
    cylinders: 1,
    lams: true,
  },
  {
    name: "K1600GT",
    slug: "k1600gt",
    brand: {
      connect: {
        slug: "bmw",
      },
    },
    type: "touring",
    displacement: 1649,
    cylinders: 6,
    lams: false,
  },
  {
    name: "R nineT",
    slug: "r-ninet",
    brand: {
      connect: {
        slug: "bmw",
      },
    },
    type: "naked",
    displacement: 1170,
    cylinders: 2,
    lams: false,
  },

  {
    name: "Panigale V4",
    slug: "panigale-v4",
    brand: {
      connect: {
        slug: "ducati",
      },
    },
    type: "supersport",
    displacement: 1103,
    cylinders: 4,
    lams: false,
  },
  {
    name: "Monster 1200",
    slug: "monster-1200",
    brand: {
      connect: {
        slug: "ducati",
      },
    },
    type: "naked",
    displacement: 1198,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Multistrada V4",
    slug: "multistrada-v4",
    brand: {
      connect: {
        slug: "ducati",
      },
    },
    type: "adventure",
    displacement: 1158,
    cylinders: 4,
    lams: false,
  },
  {
    name: "Scrambler",
    slug: "scrambler",
    brand: {
      connect: {
        slug: "ducati",
      },
    },
    type: "scrambler",
    displacement: 803,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Diavel",
    slug: "diavel",
    brand: {
      connect: {
        slug: "ducati",
      },
    },
    type: "cruiser",
    displacement: 1262,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Hypermotard 950",
    slug: "hypermotard-950",
    brand: {
      connect: {
        slug: "ducati",
      },
    },
    type: "supermoto",
    displacement: 937,
    cylinders: 2,
    lams: false,
  },

  {
    name: "Street Triple RS",
    slug: "street-triple-rs",
    brand: {
      connect: {
        slug: "triumph",
      },
    },
    type: "naked",
    displacement: 765,
    cylinders: 3,
    lams: false,
  },
  {
    name: "Tiger 900",
    slug: "tiger-900",
    brand: {
      connect: {
        slug: "triumph",
      },
    },
    type: "adventure",
    displacement: 888,
    cylinders: 3,
    lams: false,
  },
  {
    name: "Bonneville T120",
    slug: "bonneville-t120",
    brand: {
      connect: {
        slug: "triumph",
      },
    },
    type: "cruiser",
    displacement: 1200,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Rocket 3",
    slug: "rocket-3",
    brand: {
      connect: {
        slug: "triumph",
      },
    },
    type: "touring",
    displacement: 2458,
    cylinders: 3,
    lams: false,
  },
  {
    name: "Speed Triple 1200",
    slug: "speed-triple-1200",
    brand: {
      connect: {
        slug: "triumph",
      },
    },
    type: "naked",
    displacement: 1160,
    cylinders: 3,
    lams: false,
  },
  {
    name: "Thruxton RS",
    slug: "thruxton-rs",
    brand: {
      connect: {
        slug: "triumph",
      },
    },
    type: "cafe racer",
    displacement: 1200,
    cylinders: 2,
    lams: false,
  },

  {
    name: "Street Glide",
    slug: "street-glide",
    brand: {
      connect: {
        slug: "harley-davidson",
      },
    },
    type: "touring",
    displacement: 1746,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Sportster S",
    slug: "sportster-s",
    brand: {
      connect: {
        slug: "harley-davidson",
      },
    },
    type: "cruiser",
    displacement: 1252,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Iron 883",
    slug: "iron-883",
    brand: {
      connect: {
        slug: "harley-davidson",
      },
    },
    type: "cruiser",
    displacement: 883,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Fat Boy",
    slug: "fat-boy",
    brand: {
      connect: {
        slug: "harley-davidson",
      },
    },
    type: "cruiser",
    displacement: 1746,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Road King",
    slug: "road-king",
    brand: {
      connect: {
        slug: "harley-davidson",
      },
    },
    type: "touring",
    displacement: 1746,
    cylinders: 2,
    lams: false,
  },

  {
    name: "Classic 350",
    slug: "classic-350",
    brand: {
      connect: {
        slug: "royal-enfield",
      },
    },
    type: "cruiser",
    displacement: 349,
    cylinders: 1,
    lams: true,
  },
  {
    name: "Himalayan",
    slug: "himalayan",
    brand: {
      connect: {
        slug: "royal-enfield",
      },
    },
    type: "adventure",
    displacement: 411,
    cylinders: 1,
    lams: true,
  },
  {
    name: "Interceptor 650",
    slug: "interceptor-650",
    brand: {
      connect: {
        slug: "royal-enfield",
      },
    },
    type: "cruiser",
    displacement: 648,
    cylinders: 2,
    lams: true,
  },
  {
    name: "Continental GT",
    slug: "continental-gt",
    brand: {
      connect: {
        slug: "royal-enfield",
      },
    },
    type: "cafe racer",
    displacement: 648,
    cylinders: 2,
    lams: true,
  },
  {
    name: "Meteor 350",
    slug: "meteor-350",
    brand: {
      connect: {
        slug: "royal-enfield",
      },
    },
    type: "cruiser",
    displacement: 349,
    cylinders: 1,
    lams: true,
  },
  {
    name: "RSV4",
    slug: "rsv4",
    brand: {
      connect: {
        slug: "aprilia",
      },
    },
    type: "supersport",
    displacement: 1099,
    cylinders: 4,
    lams: false,
  },
  {
    name: "Scout Bobber",
    slug: "scout-bobber",
    brand: {
      connect: {
        slug: "indian",
      },
    },
    type: "cruiser",
    displacement: 1133,
    cylinders: 2,
    lams: false,
  },
  {
    name: "Svartpilen 401",
    slug: "svartpilen-401",
    brand: {
      connect: {
        slug: "husqvarna",
      },
    },
    type: "naked",
    displacement: 373,
    cylinders: 1,
    lams: true,
  },
];
