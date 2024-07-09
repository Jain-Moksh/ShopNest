import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../Context/FilterContext';
import { FaCheck } from 'react-icons/fa';

const FilterSection = () => {

  const { filters: { text }, updateFilterValue, allProducts } = useFilterContext();

  // getUniqueData is the common function which returns the value of the property, which is passed where it is called, for each product
  const getUniqueData = (data, property) => {
    let uniqueData = data.map((currentElement) => {
      return currentElement[property];
    });

    if (property === 'colors') {
      // the below methos adds all the values of different arrays in a single array and then eliminated the duplicate one from the array
      uniqueData = uniqueData.flat();
    }

    return uniqueData = ['all', ...new Set(uniqueData)];


  }

  // here we want all the product's category like mobile, laptop, pc etc in categoryData 
  const categoryData = getUniqueData(allProducts, 'category');
  const companyData = getUniqueData(allProducts, 'company');
  const colorsData = getUniqueData(allProducts, 'colors');

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' value={text} onChange={updateFilterValue} placeholder='Search here' />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryData.map((currentElement, index) => {
              return <button key={index} type='buton' name='category' value={currentElement} onClick={updateFilterValue} >
                {currentElement}
              </button>
            })
          }
        </div>
      </div>

      <div className='filter-company'>
        <h3>Company</h3>
        <form action="#">
          <select name="company" id="company" className='filter-company--select' onClick={updateFilterValue}>
            {
              companyData.map((currentElement, index) => {
                return <option key={index} value={currentElement} name='company'>
                  {currentElement}
                </option>
              })
            }

          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorsData.map((currentElement, index) => {
              return <button
                key={index}
                type='button'
                name='colors'
                value={currentElement}
                style={{ backgroundColor: currentElement }}
                className='btnStyle'
                onClick={updateFilterValue}>

                {colors === currentElement ? <FaCheck className='checkStyle' /> : null}
              </button>
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default FilterSection
