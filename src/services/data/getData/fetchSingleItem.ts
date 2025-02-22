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

        // Я спеціально поставив тут force-cache, щоб кешувались дані після запиту й дані після фетча завантажувались моментально при повторному перегляді, але у такому разі якщо в бд додадуться якісь елементи, а дані повністю будуть закешовані, то користувач не матиме змогу побачити їх, але у нашому випадку дані залишаються статичними
        const response = await fetch(`http://localhost:3000/${url}/api`, {cache: 'force-cache'});

        const data = await response.json();
        setItem(data[itemKey] ?? null);
    } catch {
        redirect("/");
    } finally {
        setLoading(false);
    }
};
