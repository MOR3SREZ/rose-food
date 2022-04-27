import { useState } from 'react';
import ReactPaginate from 'react-paginate';

//components
import { allProduct } from '../../../App';
import Card from '../../Card/Card';

//styles
import styles from './FoodMenu.module.css';

const FoodMenu = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const foodPerPage = 16;
  const pageVisited = pageNumber * foodPerPage;

  const displayFoods = allProduct
    .slice(pageVisited, pageVisited + foodPerPage)
    .map((item) => {
      return <Card food={item} key={item.id} />;
    });

  const pageCount = Math.ceil(allProduct.length / foodPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className={styles['food-menu']}>
      <div className={styles.foods}>{displayFoods}</div>
      <div className={styles.paginate}>
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
      </div>
    </div>
  );
};

export default FoodMenu;
