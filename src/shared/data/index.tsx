import { Flight } from "@shared/types";
import { RowTitle } from "@shared/ui/RowTitle/RowTitle";
export {
  flightDeals1,
  topFlightDeal,
  hotelDeals1,
  departingFlights,
  returningFlights,
};

const flightDeals1 = [
  {
    img: "/images/19.png",
    title: (
      <RowTitle info="The Bund, " span="Shanghai" color="var(--purple-blue)" />
    ),
    price: 598,
    description: "China’s most international city",
    saturation: true,
  },
  {
    img: "/images/20.png",
    title: (
      <RowTitle
        info="Sydney Opera House, "
        span="Sydney"
        color="var(--purple-blue)"
      />
    ),
    price: 981,
    description: "Take a stroll along the famous harbor",
    saturation: true,
  },
  {
    img: "/images/5.png",
    title: (
      <RowTitle
        info="Kōdaiji Temple, "
        span="Kyoto"
        color="var(--purple-blue)"
      />
    ),
    price: 633,
    description: "Step back in time in the Gion district",
    saturation: true,
  },
];
const topFlightDeal = {
  img: "/images/3.png",
  title: (
    <RowTitle info="Tsavo East National Park, " span="Kenya" color="red" />
  ),
  price: 1248,
  description:
    "Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.",
};

const hotelDeals1 = [
  {
    img: "/images/22.png",
    title: (
      <RowTitle
        info="Discover the"
        span="Money Isles"
        color="var(--turquoise)"
      />
    ),
    description:
      "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
  },
  {
    img: "/images/21.png",
    title: (
      <RowTitle
        info="Experience the Ourika Valley in"
        span="Morocco"
        color="var(--turquoise)"
      />
    ),
    description:
      "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
  },
  {
    img: "/images/23.png",
    title: (
      <RowTitle
        info="Live traditionally in"
        span="Mongolia"
        color="var(--turquoise)"
      />
    ),
    description:
      "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
  },
];

const departingFlights: Flight[] = [
  {
    id: "1",
    logo: "/airlines/Hawaiian Airlines.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: { subtotal: 504, taxes: 120, total: 624 },
    flightType: "round trip",
    flightNumber: "FIG1234",
  },
  {
    id: "2",
    logo: "/airlines/Air China.svg",
    airline: "Air China",
    duration: "19h 00m",
    time: "7:00AM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: { subtotal: 504, taxes: 120, total: 624 },
    flightType: "round trip",
    flightNumber: "FIG542",
  },
  {
    id: "3",
    logo: "/airlines/Japan Airlines.svg",
    airline: "Japan Airlines",
    duration: "20h 14m",
    time: "9:35AM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
      {
        name: "ABC",
        duration: "1h 30m",
      },
    ],
    price: { subtotal: 820, taxes: 160, total: 660 },
    flightType: "round trip",
    flightNumber: "FIG486",
  },
];

const returningFlights: Flight[] = [
  {
    id: "30",
    logo: "/airlines/Qantas Airlines.svg",
    airline: "Qantas Airlines",
    duration: "20h 30m",
    time: "7:00AM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: { subtotal: 420, taxes: 100, total: 520 },
    flightType: "round trip",
    flightNumber: "HGT452",
  },
  {
    id: "31",
    logo: "/airlines/Air France.svg",
    airline: "Air France",
    duration: "14h 00m",
    time: "8:00AM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: { subtotal: 600, taxes: 140, total: 740 },
    flightType: "round trip",
    flightNumber: "HGT413",
  },
  {
    id: "32",
    logo: "/airlines/EVA Air.svg",
    airline: "EVA Air",
    duration: "13h 30m",
    time: "10:00AM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: { subtotal: 760, taxes: 200, total: 960 },
    flightType: "round trip",
    flightNumber: "HGT842",
  },
];
