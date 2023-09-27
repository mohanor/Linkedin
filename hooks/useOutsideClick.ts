import { useEffect, useRef } from "react";


export const useOutsideClick = (close : (param: boolean) => void) => {

    const ref = useRef<any>(null)

    useEffect(() => {

        const handdler = (e: any) => {
            if (ref.current.contains(e.target)) return;
            close(false)
        }

        document.addEventListener('click', handdler)
        return () => {
            document.removeEventListener('click', handdler)
        }

    }, [])

    return ref

}