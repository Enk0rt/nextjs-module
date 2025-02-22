import {Dispatch, SetStateAction, useEffect, useRef} from "react";
import {fetchSingleItem} from "@/services/data/getData/fetchSingleItem";


export const useGetSingleItem =  <T>(
    url:string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setItem: Dispatch<SetStateAction<T | null>>,
    itemKey:string,
) => {
    const fetched = useRef(false)

    useEffect(() => {
        fetchSingleItem<T>(
            url,
            setLoading,
            setItem,
            fetched,
            itemKey,
        );
    }, [url]);
    return fetched
}
