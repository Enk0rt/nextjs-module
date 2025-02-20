import { redirect } from "next/navigation";
import {Dispatch, RefObject, SetStateAction} from "react";

export const fetchPaginatedItems = async <T>(
    pageNumber: number,
    url:string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    amountItems: number,
    setItems: Dispatch<SetStateAction<T[]>>,
    itemsKey:string,
    setTotalItems: Dispatch<SetStateAction<number>>,
    isFetched:RefObject<boolean>
) => {

    setLoading(true);
    try {
        const skip = (pageNumber - 1) * amountItems;
        if(isFetched.current)return
        isFetched.current = true
        const response = await fetch(`http://localhost:3000/${url}/api?limit=${amountItems}&skip=${skip}`);

        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        setItems(data[itemsKey]);
        setTotalItems(data.total);
    } catch {
        redirect("/");
    } finally {
        setLoading(false);
    }
};
