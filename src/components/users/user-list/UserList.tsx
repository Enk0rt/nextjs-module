'use client'
import { useEffect, useState } from "react";
import UserItem from "@/components/users/user-item/UserItem";
import {redirect} from "next/navigation";
import {IUser} from "@/models/user/IUser";

const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/users/api");

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setUsers(data.users);
            } catch {
                redirect('/')
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user, index) => (
                <UserItem key={index} user={user} />
            ))}
        </div>
    );
};

export default UserList;
