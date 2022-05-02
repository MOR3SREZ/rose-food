import { useSelector } from 'react-redux';

//Components
import Card from '../Card/Card';

//Styles
import styles from './FavoriteFoods.module.css';

const FavoriteFoods = () => {
  const favoriteFoods = useSelector((state) => state.favorite.favoriteItems);
  return (
    <section className={styles.favorite}>
      <h2>This is Your Favorite Foods!</h2>
      <div className={styles['foods-container']}>
        {favoriteFoods.length > 0 ? (
          favoriteFoods.map((item) => <Card food={item} key={Math.random()} />)
        ) : (
          <h2>Your Favorite list is empty :\</h2>
        )}
      </div>
    </section>
  );
};
export default FavoriteFoods;
