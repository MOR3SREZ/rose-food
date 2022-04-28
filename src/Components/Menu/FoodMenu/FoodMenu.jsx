import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

//components
import { allProduct } from '../../../App';
import Card from '../../Card/Card';

//styles
import styles from './FoodMenu.module.css';

const FoodMenu = () => {
  const [foods, setFoods] = useState(allProduct);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const categoryFilter = useSelector((state) => state.filter.category);
  const sortByFilter = useSelector((state) => state.filter.sortBy);
  const searchFilter = useSelector((state) => state.filter.search);

  //sorting Foods!
  useEffect(() => {
    if (sortByFilter === 'pLow') {
      let list = foods.sort((a, b) => a.price - b.price);
      setFoods([...list]);
    } else if (sortByFilter === 'pHigh') {
      let list = foods.sort((a, b) => b.price - a.price);
      setFoods([...list]);
    } else if (sortByFilter === 'rLow') {
      let list = foods.sort((a, b) => a.rate - b.rate);
      setFoods([...list]);
    } else if (sortByFilter === 'rHigh') {
      let list = foods.sort((a, b) => b.rate - a.rate);
      setFoods([...list]);
    }
  }, [sortByFilter]);

  // Filtering Category and Search
  useEffect(() => {
    let temp = [];
    foods
      .filter((food) => {
        if (categoryFilter === '') {
          return food;
        } else if (food.category === categoryFilter.toLowerCase()) {
          return food;
        }
      })
      .filter((food) => {
        if (searchFilter === '') {
          temp.push(food);
        } else if (
          food.title.toLowerCase().includes(searchFilter.toLowerCase())
        ) {
          temp.push(food);
        }
      });
    setFilteredFoods(temp);
  }, [categoryFilter, searchFilter, sortByFilter]);

  //code for paginate
  const foodPerPage = 16;
  const pageVisited = pageNumber * foodPerPage;

  const displayFoods = filteredFoods
    .slice(pageVisited, pageVisited + foodPerPage)
    .map((item) => {
      return <Card food={item} key={item.id} />;
    });

  const pageCount = Math.ceil(filteredFoods.length / foodPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles['food-menu']}>
      <div className={styles.foods}>{displayFoods}</div>
      <div className={styles.paginate}>
        {pageCount > 0 && (
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles['pagination-btn']}
            previousLinkClassName={styles['prev-btn']}
            nextLinkClassName={styles['next-btn']}
            disabledClassName={styles['pagination-disabled']}
            activeClassName={styles['pagination-active']}
          />
        )}
      </div>
    </div>
  );
};

export default FoodMenu;
