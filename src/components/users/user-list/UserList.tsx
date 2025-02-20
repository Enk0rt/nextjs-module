'use client'
import {Suspense, useState} from "react";
import UserItem from "@/components/users/user-item/UserItem";
import {IUser} from "@/models/user/IUser";
import Pagination from "@/components/pagination/Pagination";
import {useGetPaginatedItems} from "@/hooks/useGetItems";
import './Users.scss'
import {Search} from "@/components/search/Search";

const USERS_PER_PAGE = 5

const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [page, setPage] = useState(1)
    const [totalUsers, setTotalUsers] = useState(0)
    const [loading, setLoading] = useState<boolean>(false)

    const fetched = useGetPaginatedItems<IUser>(page,
        'users',
        setLoading,
        USERS_PER_PAGE,
        setUsers,
        "users",
        setTotalUsers)

    return (
        <Suspense fallback={<div className={'loader'}><h2>Loading...</h2></div>}>
            <div className={'wrapper'}>
                <section className={'users'}>
                    <Search type={'users'}/>
                    <div className={'users__container'}>
                        {loading ?
                            <div className={'loader'}><h2>Loading...</h2></div>
                            : (
                                <div className={'users__list'}>
                                    {users.map((user, index) => <UserItem key={index} user={user}/>)}
                                </div>
                            )}
                        <div className={'users__pagination'}>
                            <Pagination
                                page={page}
                                setPage={setPage}
                                total={totalUsers}
                                limit={USERS_PER_PAGE}
                                fetched={fetched}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </Suspense>
    );
};

export default UserList;
