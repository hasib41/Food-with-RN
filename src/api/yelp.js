import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer ZxOH3N1RAguIJRU5KCvw6bN3P6zdSNM7cT1t4jabpN4Ae2Jr8Dz7lD700RoiYaepUz-rMuqkU84Pbk_d1H7-SZ88UXUQfzyyxF0wK-yhNDkBNYGBeioTVswBCOukZHYx",
    },
});