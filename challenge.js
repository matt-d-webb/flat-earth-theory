// outputs like :
// [
//     { city: 'Glasgow', weather: 'Cold' },
//     { city: 'London', weather: 'Chilly' },
//     { city: 'Brussels', weather: 'Chilly' },
//     { city: 'Tokyo', weather: 'Monsoon' },
//     { city: 'Honolulu', weather: 'Stormy' },
//     { city: 'Los-Angeles', weather: 'Sunny' },
// ]

const geodata = [
  { Glasgow: [55.852059, -4.095055] },
  { London: [51.503892, -0.002505] },
  { Brussels: [50.866501, 4.41341] },
  { Tokyo: [35.681103, 139.936773] },
  { Honolulu: [21.340987, -157.803476] },
  { "Los-Angeles": [34.020544, -118.069319] }
];

const weatherStations = [
  {
    lat: 33.517941,
    lng: -111.689978,
    weather: "Sunny",
    Location: "Arizona US"
  },
  {
    lat: 19.336835,
    lng: -155.100255,
    weather: "Stormy",
    Location: "Hawaii"
  },
  {
    lat: 53.282845,
    lng: -6.519751,
    weather: "Cold",
    Location: "Dublin"
  },
  {
    lat: 49.319554,
    lng: 2.538742,
    weather: "Chilly",
    Location: "France"
  },
  {
    lat: 23.696628,
    lng: 121.296179,
    weather: "Monsoon",
    Location: "Taiwan"
  }
];
