'use client'
import Link from "next/link";
import './RecipeTag.scss'
import {useParams} from "next/navigation";
import {routes} from "@/constants/constants";

interface RecipeTagProps {
    tag: string
}

const RecipeTag = ({tag}: RecipeTagProps) => {
    const {chosenTag} = useParams()


    return (
        <div className={tag===chosenTag ? 'recipe__tag mark' : 'recipe__tag'}>
            <div>
                <Link href={`${routes.recipes}/tag/${tag}`}>
                    #{tag}
                </Link>
            </div>
        </div>
    );
};

export default RecipeTag;