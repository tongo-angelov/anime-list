export const searchAnime = (query, limit) => {
    if (query)
        return fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=${limit}`).then(res => res.json()).then(res => res.data);
};
export const fetchCharacters = (animeId, limit = 5) => {
    if (animeId)
        return fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`).then(res => res.json()).then(res => res.data.slice(0, limit));
};