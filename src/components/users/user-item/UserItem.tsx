import {IUser} from "@/models/user/IUser";

interface UserItemProps {
    user: IUser
}

const UserItem =  ({user}: UserItemProps) => {
    return (
        <div>
            {user.firstName} {user.lastName}
        </div>
    );
};

export default UserItem;