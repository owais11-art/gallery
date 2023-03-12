import { defineStore } from "pinia"
import { usePexelClient } from "../composables/usePexelClient"

const client = usePexelClient()

export const usePexelCuratedStore = defineStore('pexels-curated-store', {
    state: () => ({
        curated: [],
        nextPage: 0,
        perPage: 10,
        currentPages: []
    }),
    actions: {
        updateCurated(options={per_page: 10, page: 1}){
            const { per_page, page } = options
            client.photos.curated({ per_page, page })
                .then(curatedPhotos => {
                    this.curated = [...this.curated, ...curatedPhotos.photos]
                    this.nextPage = curatedPhotos.page + 1
                    this.currentPages = [...this.currentPages, curatedPhotos.page]
                })
        }
    }
})