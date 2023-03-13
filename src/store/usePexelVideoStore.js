import { defineStore } from "pinia"
import { usePexelClient } from "../composables/usePexelClient"

const { getFetchArgs } = usePexelClient()
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
        async updateVideos(options=defaultOptions, search=null){
            const { url, header } = getFetchArgs('videos', options)
            this.searchString = options.query
            const res = await fetch(url, header)
            const result = await res.json()
            if(!search){
                this.currentPages = [...this.currentPages, result.page]
                this.videos = [...this.videos, ...result.videos]
            }else{
                this.currentPages = [result.page]
                this.videos = [...result.videos]
            }
            this.nextPage = result.page + 1
        }
    }
})