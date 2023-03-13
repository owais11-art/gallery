import { defineStore } from "pinia"
import { usePexelClient } from "../composables/usePexelClient"

const { getFetchArgs } = usePexelClient()
const defaultOptions = {
    query: 'Nature',
    per_page: 10,
    page: 1
}

export const usePexelPhotoStore = defineStore('pexels-photo-store', {
    state: () => ({
        photos: [],
        heroBgSrc: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
        nextPage: '',
        perPage: 10,
        currentPages: [],
        defaultSearchString: 'Nature',
        searchString: ''
    }),
    actions: {
        async updatePhotos(options=defaultOptions, search=false){
            const { url, header } = getFetchArgs('photos', options)
            this.searchString = options.query
            const res = await fetch(url, header)
            const result = await res.json()
            if(!search){
                this.currentPages = [...this.currentPages, result.page]
                this.photos = [...this.photos, ...result.photos]
            }else{
                this.currentPages = [result.page]
                this.photos = [...result.photos]
            }
            this.nextPage = result.page + 1
        }
    }
})