export const API_BASE_URL = {
    dev: import.meta.env.VITE_API_BASE_URL_DEV,
    prod: import.meta.env.VITE_API_BASE_URL_PROD
};

export const ENDPOINTS = {
    getallnotes: '/notes',
    createnote: '/create-note'
};
