
import {FC, Suspense} from "react";
import UserItemById from "@/components/users/user-item-id/UserItemById";

type Props = {
    params: {userId:string}
}

const Users:FC<Props> = async ({params}) => {
    const  {userId} = await params

    return (
        <Suspense fallback={<div><h2>Loading...</h2></div>}>
            <UserItemById userId={userId} />
        </Suspense>
    );
};

export default Users;