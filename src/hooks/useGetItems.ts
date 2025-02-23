import {Dispatch, SetStateAction, useEffect, useRef} from "react";
import {fetchPaginatedItems} from "@/services/data/getData/fetchPaginatedItems";


export const useGetPaginatedItems = <T>(
    pageNumber: number,
    url: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    amountItems: number,
    setItems: Dispatch<SetStateAction<T[]>>,
    itemsKey: string,
    setTotalUsers: Dispatch<SetStateAction<number>>
) => {
    const fetched = useRef(false)

    useEffect(() => {
        fetchPaginatedItems<T>(
            pageNumber,
            url,
            setLoading,
            amountItems,
            setItems,
            itemsKey,
            setTotalUsers,
            fetched
        );
    }, [pageNumber]);
    return fetched
}
