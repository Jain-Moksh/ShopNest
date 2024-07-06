import React from 'react';
import { useFilterContext } from './Context/FilterContext';
import GridView from './components/GridView';

const ProductList = () => {

  const { filterProducts, setGridView } = useFilterContext();

  console.log(filterProducts);

  if (setGridView) {
    return <GridView products={filterProducts} />
  }

  // if (setGridView === false) {
  //   return <ListView products={filterProducts} />
  // }


}

export default ProductList
