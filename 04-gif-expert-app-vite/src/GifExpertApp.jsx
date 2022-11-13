import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // categories list 
    const [categories, setCategories] = useState(['Dragon Ball']);

    //Add new category with spread operator
    const onAddCategory = ( newCategory ) => {
        //if category exists return
        if ( categories.includes(newCategory) ) return;
        //Insert the new category and the others
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            {/* title  */}
            <h1>GifExpertApp</h1>
            
            {/* input  */}
            <AddCategory 
                //Set prop onNewValue in the component
                onNewValue={ (event) => onAddCategory(event) }
            />

            {/* Gif's List  */}
            { 
                // render the categories with map
                categories.map( category => {
                    return (
                        <GifGrid  key={ category } category={ category }/>
                    )
                }) 
            }
        </>
    )
}
