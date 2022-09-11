import React from 'react'

import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from '../components/Categories';


export const Home = () => {
   const [items, setItems] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true)


   React.useEffect(() => {
      fetch('https://6304e8e294b8c58fd727feba.mockapi.io/rPizzaData')
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
            setIsLoading(false)
         });
   }, []);

   return (
      <div className="container">
         <div className="content__top">
            <Categories />
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {items.map((obj) => isLoading ? <Skeleton /> : (
               <PizzaBlock
                  key={obj.id} {...obj} />
            ))}
         </div>
      </div>
   )
}
