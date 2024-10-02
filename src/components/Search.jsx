import { useEffect, useState } from "react"
import styles from "./search.module.css"
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "307b136fa9644391a7a907badb329691"

export default function Search({fooddata, setFoodData}){
    const [query, setQuery] = useState("pizza");
    useEffect(()=>{
        async function fetchFood(){
          const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
          const data = await res.json(); 
          console.log(data.results);
          setFoodData(data.results);
        }
        fetchFood();
    },[query])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.inputBox} onChange={(e)=>setQuery(e.target.value)} value={query} type="text"/>
        </div>
    )
}