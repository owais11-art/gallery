import { onUnmounted, onMounted } from "vue"
import { useSearch } from "./useSearch"

let lastElementId = 0 // tracking ID of last element 
export const useScrollEvent = (element, path) => {
    const [ search, store ] = useSearch(path)
    if(!search) return
    const getMoreMedia = () => {
        const lastElement = element.value.lastElementChild
        const rect = lastElement.getBoundingClientRect()
        if(rect.top <= window.innerHeight + 150){
            // checking that current last element is not equal to previous last element
            if(lastElement.id !== lastElementId){
                search({
                    query: store.searchString || store.defaultSearchString || '',
                    per_page: store.perPage,
                    page: store.nextPage
                })
                lastElementId = lastElement.id
            }
        }
    }
    onMounted(() => window.addEventListener('scroll', getMoreMedia))
    onUnmounted(() => window.removeEventListener('scroll', getMoreMedia))
}