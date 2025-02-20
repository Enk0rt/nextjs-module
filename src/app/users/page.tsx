
import UserList from "@/components/users/user-list/UserList";
import {Suspense} from "react";


const Users = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UserList/>
        </Suspense>
    );
};

export default Users;