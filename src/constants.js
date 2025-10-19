export const API_BASE_URL = {
    dev: import.meta.env.VITE_API_BASE_URL_DEV,
    prod: import.meta.env.VITE_API_BASE_URL_PROD,
    webAPIdev: 'https://localhost:7005/api'
};

export const ENDPOINTS = {
    getallnotes: '/notes',
    createnote: '/create-note',
    deletenote: '/deleteNote',
    healthCheck: '/health',
    getAllNotesWebAPI: '/Notes'
};
