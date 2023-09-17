
import { useEffect } from 'react'


const useHideGlobalScroll = () => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

}

export { useHideGlobalScroll }