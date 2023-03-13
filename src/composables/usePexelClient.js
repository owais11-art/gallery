const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const createUrl = (resource, options) => {
    const { query, per_page, page } = options
    switch(resource){
        case 'curated':
            return BASE_URL + `v1/curated?per_page=${per_page}&page=${page}`
        case 'videos':
            return BASE_URL + `videos/search?query=${query}&per_page=${per_page}&page=${page}`
        default:
            return BASE_URL + `v1/search?query=${query}&per_page=${per_page}&page=${page}`
    }
}

export const usePexelClient = () => {
    const getFetchArgs = (resource, options) => {
        const url = createUrl(resource, options)
        const header = {
            headers: {
                "Authorization": API_KEY
            }
        }
        return {
            url,
            header
        }
    }
    return { getFetchArgs }
}