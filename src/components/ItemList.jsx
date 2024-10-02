import Item from "./Item"

export default function ItemList({isLoading, food}){
    return(
        <div>
            <h3> Ingrediants </h3>
            {isLoading?"Loading":food.extendedIngredients.map((item)=>(
               <Item item={item}/>))}
        </div>
    )
}