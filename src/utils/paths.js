
export const resolvePath = (path) => {
    if (!path) return '';
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

    // If path is external (http), return as is
    if (path.startsWith('http')) return path;

    return cleanBase + cleanPath;
};
