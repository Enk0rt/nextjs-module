import {redirect} from "next/navigation";
import {Dispatch, RefObject, SetStateAction} from "react";

export const fetchPaginatedItems = async <T>(
    pageNumber: number,
    url: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    amountItems: number,
    setItems: Dispatch<SetStateAction<T[]>>,
    itemsKey: string,
    setTotalItems: Dispatch<SetStateAction<number>>,
    isFetched: RefObject<boolean>
) => {

    setLoading(true);
    try {
        const skip = (pageNumber - 1) * amountItems;
        if (isFetched.current) return
        isFetched.current = true

        // Я спеціально поставив тут force-cache, щоб кешувались дані після запиту й дані після фетча завантажувались моментально при повторному перегляді, але у такому разі якщо в бд додадуться якісь елементи, а дані повністю будуть закешовані, то користувач не матиме змогу побачити їх, але у нашому випадку дані залишаються статичними, тому я вирішив, що це тут буде правильним
        const response = await fetch(`${url}/api?limit=${amountItems}&skip=${skip}`, {cache: 'force-cache'});

        const data = await response.json();
        setItems(data[itemsKey]);
        setTotalItems(data.total);
    } catch {
        redirect("/");
    } finally {
        setLoading(false);
    }
};
