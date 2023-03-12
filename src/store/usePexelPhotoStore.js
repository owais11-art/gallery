import { defineStore } from "pinia"
import { usePexelClient } from "../composables/usePexelClient"

const client = usePexelClient()
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
        updatePhotos(options=null, search=false){
            const { query, per_page, page } = options ? options : defaultOptions
            this.searchString = query
            client.photos.search({query, per_page, page})
                .then(result => {
                    if(!search){
                        this.currentPages = [...this.currentPages, result.page]
                        this.photos = [...this.photos, ...result.photos]
                    }else{
                        this.currentPages = [result.page]
                        this.photos = [...result.photos]
                    }
                    this.nextPage = result.page + 1
                })
        }
    }
})