export const Gemflix_Logo =
  "/assets/gemflix_logo.png";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const Gemflix_Background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const TMDB_API_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const TMDB_API_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const TMDB_API_TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";

export const TMDB_API_UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
