import React from 'react'

import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from '../components/Categories';


export const Home = ({ searchValue, setSearchValue }) => {
   const [items, setItems] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true)

   const [categoryId, setCategoryId] = React.useState(0);
   const [sortType, setSortType] = React.useState({
      name: 'популярности',
      sortProperty: 'rating'
   });

   React.useEffect(() => {
      setIsLoading(true)

      const sortBy = sortType.sortProperty.replace('-', '');
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';


      fetch(`https://6304e8e294b8c58fd727feba.mockapi.io/rPizzaData?${category}&sortBy=${sortBy}&order=${order}${search}`)
         .then((res) => res.json())
         .then((arr) => {
            setItems(arr)
            setIsLoading(false) 
         });
      window.scrollTo(0, 0);
   }, [categoryId, sortType, searchValue]);

   const pizzas = items.map((obj) => <PizzaBlock key={obj.id}{...obj} />);

   const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

   return (
      <div className="container">
         <div className="content__top">
            <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoading ? skeletons : pizzas}
         </div>
      </div>
   )
}

  // .filter((obj) => {
      //    if (obj.title.toLowerCase().includes(searchValue.ArraytoLowerCase())) {
      //       return true;
      //    }
      //    return false;

      // })