import { redirect } from "next/navigation";
import { Dispatch, RefObject, SetStateAction } from "react";

export const fetchSingleItem = async <T>(
    url: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setItem: Dispatch<SetStateAction<T | null>>,
    isFetched: RefObject<boolean>,
    itemKey: string
) => {
    setLoading(true);
    try {
        if (isFetched.current) return;
        isFetched.current = true;

        const response = await fetch(`http://localhost:3000/${url}/api`);
        if (!response.ok) throw new Error("Failed to fetch item");

        const data = await response.json();
        setItem(data[itemKey] ?? null);
    } catch {
        redirect("/");
    } finally {
        setLoading(false);
    }
};
