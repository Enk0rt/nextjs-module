
import UserItem from "@/components/users/user-item/UserItem";
import {getUsers} from "@/services/data/dataApi";

const UserList =async () => {
    const response = await getUsers()

    return (
        <div>
            {
                response && response.users.map((user,index) => <UserItem key={index} user={user}/>)
            }
        </div>
    );
};

export default UserList;