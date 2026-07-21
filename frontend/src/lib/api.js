import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({
    baseURL: API,
    headers: { "Content-Type": "application/json" },
});

export const fetchReviews = async () => {
    const { data } = await api.get("/reviews");
    return data;
};

export const fetchReviewStats = async () => {
    const { data } = await api.get("/reviews/stats");
    return data;
};

export const submitReview = async (payload) => {
    const { data } = await api.post("/reviews", payload);
    return data;
};

export const submitEnquiry = async (payload) => {
    const { data } = await api.post("/enquiries", payload);
    return data;
};

export const subscribeNewsletter = async (email) => {
    const { data } = await api.post("/newsletter", { email });
    return data;
};
