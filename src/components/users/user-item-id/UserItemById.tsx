'use client'
import {useEffect, useState} from "react";
import {IUser} from "@/models/user/IUser";
import {useGetSingleItem} from "@/hooks/useGetSingleItem";
import {IRecipe} from "@/models/recipe/IRecipe";
import {getUserRecipes} from "@/services/data/getData/getUserRecipes";
import './UserItemById.scss'
import Link from "next/link";

interface UserItemByIdProps {
    userId: string
}

const UserItemById = ({userId}: UserItemByIdProps) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [userRecipes, setUserRecipes] = useState<IRecipe[]>([])

    useEffect(() => {
        getUserRecipes(Number(userId), setUserRecipes)
    }, []);

    useGetSingleItem(
        `users/${userId}`,
        setLoading,
        setUser,
        'user'
    )
    return (
        <div className={'wrapper'}>
            <div className={'user__details'}>
                {
                    loading ? (
                        <div className={'loader'}><h2>loading...</h2></div>
                    ) : (
                        user && <div className={'user__details-container'}>
                            <div className={'user__details-profile'}>
                                <div className={'user__details-profile-info'}>
                                    <p>{user.firstName} {user.lastName}, {user.age}</p>
                                    <p className={'capitalize'}>{user.gender}, {user.birthDate}</p>
                                    <p>{user.phone}</p>
                                    <p>{user.email}</p>
                                </div>
                                <div className={'user__details-profile-img'}>
                                    <img src={user.image} alt='avatar' width={'100'} height={'100'}/>
                                </div>
                            </div>
                            <div className={'user__details-recipes'}>
                                <h2 className={'user__details-recipes-title'}>User Recipes</h2>
                                {
                                    loading ? (
                                        <div className={'loader'}><h2>Loading...</h2></div>
                                    ) : (
                                        <div className={'user__details-recipes-list'}>
                                            {
                                                userRecipes.length === 0 ? (
                                                    <div>
                                                        <p>This user doesn`t have any recipes</p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        {userRecipes.map((recipe, index) =>
                                                            <p className={'user__details-recipes-item'}
                                                               key={index}><Link
                                                                href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                                                            </p>)}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default UserItemById;