import { usePexelPhotoStore } from "../store/usePexelPhotoStore"
import { usePexelCuratedStore } from "../store/usePexelCuratedStore"
import { usePexelVideoStore } from "../store/usePexelVideoStore"

const basePath = '/gallery/'
export const useSearch = (path) => {
    const photosStore = usePexelPhotoStore()
    const curatedStore = usePexelCuratedStore()
    const videoStore = usePexelVideoStore()
    switch(path){
        case basePath:
            return [ photosStore.updatePhotos, photosStore ]
        case basePath+'curated':
            return [curatedStore.updateCurated, curatedStore]
        case basePath+'videos':
            return [ videoStore.updateVideos, videoStore ]
        default:
            return [ null, null ]
    }
}