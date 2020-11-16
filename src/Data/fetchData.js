import mapData from "./api_techician_response_data.json";

// export async function fetchData(index) {
//   return mapData[index].features;
// }

// export const fetchData = (index) => Promise.resolve(mapData[index]);

export const loadData = () => JSON.parse(JSON.stringify(mapData));


// export const fetchData = (index) => {
//   fetch("src/data/api_techician_response_data.json")
//     .then((res) => res.json())
//     .then((data) => JSON.parse(data));
// };