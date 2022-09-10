import React from 'react';
import "./scss/app.scss";

import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";


function App() {
   const [items, setItems] = React.useState([]);

   React.useEffect(() => {
      fetch('https://6304e8e294b8c58fd727feba.mockapi.io/rPizzaData')
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
         });
   }, []);

   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <div className="container">
               <div className="content__top">
                  <Categories />
                  <Sort />
               </div>
               <h2 className="content__title">Все пиццы</h2>
               <div className="content__items">
                  {items.map((obj) => (
                     <PizzaBlock
                        key={obj.id}
                        name={obj.name}
                        price={obj.price}
                        imageUrl={obj.imageUrl}
                        sizes={obj.sizes}
                        types={obj.types}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
