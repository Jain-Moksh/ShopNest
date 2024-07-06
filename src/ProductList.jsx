import React from 'react';
import { useFilterContext } from './Context/FilterContext';
import GridView from './components/GridView';
import ListView from './components/ListView';

const ProductList = () => {

  const { filterProducts, gridView } = useFilterContext();

  // console.log(filterProducts[0].id);
  // console.log('hi');

  if (gridView === true) {
    return <GridView products={filterProducts} />
  }

  if (gridView === false) {
    return <ListView products={filterProducts} />
  }

}

export default ProductList;
