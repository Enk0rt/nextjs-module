import React, {Dispatch, SetStateAction} from "react";
import Image from "next/image";
import './Pagination.scss'

type PaginationProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    total: number,
    limit: number,
    fetched: React.RefObject<boolean>
}

const Pagination = ({page, setPage, total, limit, fetched}: PaginationProps) => {
    const totalPages = Math.ceil(total / limit);

    return (
        <div className={'pagination flex gap-4 mt-4'}>
            <button
                disabled={page === 1}
                onClick={() => {
                    setPage(--page)
                    fetched.current = false
                }}>
                <Image className={'pagination__img pagination__img--left'} src={'/svg/prev.svg'} width={'40'}
                       height={'40'} alt="left-arrow"/>
            </button>
            <p className={'my-auto text-lg '}>Page {page} </p>
            <button
                disabled={page === totalPages}
                onClick={() => {
                    setPage(++page)
                    fetched.current = false
                }}>
                <Image className={'pagination__img pagination__img--right'} src="/svg/next.svg" width={'40'}
                       height={'40'} alt="right-arrow"/>
            </button>
        </div>
    );
};

export default Pagination;
