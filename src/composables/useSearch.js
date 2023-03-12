import { usePexelPhotoStore } from "../store/usePexelPhotoStore"
import { usePexelCuratedStore } from "../store/usePexelCuratedStore"
import { usePexelVideoStore } from "../store/usePexelVideoStore"

export const useSearch = (path) => {
    const photosStore = usePexelPhotoStore()
    const curatedStore = usePexelCuratedStore()
    const videoStore = usePexelVideoStore()
    switch(path){
        case '/':
            return [ photosStore.updatePhotos, photosStore ]
        case '/curated':
            return [curatedStore.updateCurated, curatedStore]
        case '/videos':
            return [ videoStore.updateVideos, videoStore ]
        default:
            return [ null, null ]
    }
}