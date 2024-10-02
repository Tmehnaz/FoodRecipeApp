import FoodItem from "./Fooditem"
export default function FoodList({fooddata, setFoodId}){
    return(
        <div>
        {fooddata.map((food)=>(
            <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
        ))}
        
        </div>
    )
}