import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProduct } from '../App';

//Components
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import ProductContainer from '../Components/ProductContainer/ProductContainer';
import Slider from '../Components/Slider/Slider';
import Card from '../Components/Card/Card';
import ProductSlider from '../Components/ProductSlider/ProductSlider';

const Product = () => {
  const [food, setFood] = useState(null);
  const [category, setCategory] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    allProduct.filter((food) => {
      if (food.id === id) {
        setFood(food);
        setCategory(food.category);
        return null;
      } else return null;
    });
  }, [id]);

  let sliderItem = allProduct
    .filter((item) => item.category === category)
    .map((item) => <Card food={item} key={Math.random()} />);

  return (
    <>
      <Header />
      {food && <ProductContainer food={food} />}
      <ProductSlider items={sliderItem} />
      <Footer />
    </>
  );
};
export default Product;
