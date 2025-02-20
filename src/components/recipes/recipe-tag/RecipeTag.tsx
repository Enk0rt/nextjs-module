'use client'
import Link from "next/link";
import './RecipeTag.scss'
import {useParams} from "next/navigation";

interface RecipeTagProps {
    tag: string
}

const RecipeTag = ({tag}: RecipeTagProps) => {
    const {chosenTag} = useParams()


    return (
        <div className={tag===chosenTag ? 'recipe__tag mark' : 'recipe__tag'}>
            <div>
                <Link href={`/recipe/${tag}`}>
                    #{tag}
                </Link>
            </div>
        </div>
    );
};

export default RecipeTag;