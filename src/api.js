// base url

const base_url = "https://api.rawg.io/api/";

//date

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}

if (mm < 10) {
  mm = `0${mm}`;
}
const currentYear = `${yyyy}-${mm}-${dd}`;
const lastYear = `${yyyy - 1}-${mm}-${dd}`;
const nextYear = `${yyyy + 1}-${mm}-${dd}`;

//urls

export const popularGamesUrl = () =>
  `${base_url}games?dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`;

export const upcomingGamesUrl = () =>
  `${base_url}games?dates=${currentYear},${nextYear}&ordering=-added&page_size=10`;

export const newGamesUrl = () =>
  `${base_url}games?dates=${lastYear},${currentYear}&ordering=-released&page_size=10`;
