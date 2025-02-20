import {IUser} from "@/models/user/IUser";
import Link from "next/link";
import './UserItem.scss'
interface UserItemProps {
    user: IUser
}

const UserItem =  ({user}: UserItemProps) => {
    return (
        <div className={'user__item'}>
           <Link className={'user__item-content'} href={`/users/${user.id}`}>
               {user.firstName} {user.lastName}, {user.age}
           </Link>
        </div>
    );
};

export default UserItem;