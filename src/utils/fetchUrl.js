export const DOMAIN = "https://api.themoviedb.org/3";
export const IMAGE_DOMAIN = "https://image.tmdb.org/t/p/original";
export const API_KEY = "f7036a0037614a473cd5152290cc19c4";
const LANG = "ja";

// export const fetchUrl = {
//   trend: `${DOMAIN}/trending/all/week?api_key=${API_KEY}&language=${LANG}`,
//   netflix: `${DOMAIN}/discover/tv?api_key=${API_KEY}&with_networks=213&language=${LANG}`,
//   topRated: `${DOMAIN}/discover/tv?api_key=${API_KEY}&language=${LANG}`,
//   action: `${DOMAIN}/discover/tv?api_key=${API_KEY}with_genres=28&language=${LANG}`,
//   comedy: `${DOMAIN}/discover/tv?api_key=${API_KEY}with_genres=35&language=${LANG}`,
//   horror: `${DOMAIN}/discover/tv?api_key=${API_KEY}with_genres=27&language=${LANG}`,
//   romance: `${DOMAIN}/discover/tv?api_key=${API_KEY}with_genres=10749&language=${LANG}`,
//   document: `${DOMAIN}/discover/tv?api_key=${API_KEY}with_genres=99&language=${LANG}`,
// };

export const fetchUrl = [
  {
    title: "Trend",
    url: `${DOMAIN}/trending/all/week?api_key=${API_KEY}&language=${LANG}`,
  },
  {
    title: "Netflix Original",
    url: `${DOMAIN}/discover/tv?api_key=${API_KEY}&with_networks=213&language=${LANG}`,
  },
  {
    title: "TopRated",
    url: `${DOMAIN}/discover/tv?api_key=${API_KEY}&language=${LANG}`,
  },
  // {
  //   title: "Action",
  //   url: `${DOMAIN}/discover/tv?api_key=${API_KEY}&with_genres=28&language=${LANG}`,
  // },
  {
    title: "Comedy",
    url: `${DOMAIN}/discover/tv?api_key=${API_KEY}&with_genres=35&language=${LANG}`,
  },
  // {
  //   title: "Horror",
  //   url: `${DOMAIN}/discover/tv?api_key=${API_KEY}with_genres=27&language=${LANG}`,
  // },
  {
    title: "Romance",
    url: `${DOMAIN}/discover/tv?api_key=${API_KEY}&with_genres=10749&language=${LANG}`,
  },
  {
    title: "Document",
    url: `${DOMAIN}/discover/tv?api_key=${API_KEY}&with_genres=99&language=${LANG}`,
  },
];
