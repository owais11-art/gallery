import { defineStore } from "pinia"
import { usePexelClient } from "../composables/usePexelClient"

const { getFetchArgs } = usePexelClient()

export const usePexelCuratedStore = defineStore('pexels-curated-store', {
    state: () => ({
        curated: [],
        nextPage: 0,
        perPage: 10,
        currentPages: []
    }),
    actions: {
        async updateCurated(options={per_page: 10, page: 1}){
            const { url, header } = getFetchArgs('curated', options)
            const res = await fetch(url, header)
            const curatedPhotos = await res.json()
            this.curated = [...this.curated, ...curatedPhotos.photos]
            this.nextPage = curatedPhotos.page + 1
            this.currentPages = [...this.currentPages, curatedPhotos.page]
        }
    }
})