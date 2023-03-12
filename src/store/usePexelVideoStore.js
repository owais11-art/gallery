import { defineStore } from "pinia"
import { usePexelClient } from "../composables/usePexelClient"

const client = usePexelClient()
const defaultOptions = {
    query: 'Nature',
    per_page: 10,
    page: 1
}

export const usePexelVideoStore = defineStore('pexel-video-store', {
    state: () => ({
        videos: [],
        nextPage: 0,
        perPage: 10,
        currentPages: [],
        searchString: '',
        defaultSearchString: 'Nature'
    }),
    actions: {
        updateVideos(options=null, search=null){
            const { query, per_page, page } = options ? options : defaultOptions
            this.searchString = query
            client.videos.search({query, per_page, page})
                .then(result => {
                    if(!search){
                        this.currentPages = [...this.currentPages, result.page]
                        this.videos = [...this.videos, ...result.videos]
                    }else{
                        this.currentPages = [result.page]
                        this.videos = [...result.videos]
                    }
                    this.nextPage = result.page + 1
                })
        }
    }
})