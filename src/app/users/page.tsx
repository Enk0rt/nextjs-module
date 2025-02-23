import UserList from "@/components/users/user-list/UserList";
import {Suspense} from "react";


const Users = () => {
    return (
        <Suspense fallback={<div><h2>Loading...</h2></div>}>
            <UserList/>
        </Suspense>
    );
};

export default Users;