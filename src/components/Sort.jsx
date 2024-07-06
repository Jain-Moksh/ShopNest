import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';
import { useFilterContext } from '../Context/FilterContext';


const Sort = () => {

  const { filterProducts, gridView, setGridView, setListView } = useFilterContext();

  return (
    <Wrapper className='sort-section'>

      {/* grid list toggleling button */}
      <div className="sorting-list--grid">

        <button className={gridView ? 'sort-btn active' : 'sort-btn'}
          onClick={setGridView}
        >
          <BsFillGridFill className='icon' />
        </button>

        <button className={gridView ? 'sort-btn' : 'sort-btn active'}
          onClick={setListView}
        >
          <BsList className='icon' />
        </button>

      </div>

      {/*  */}
      <div className="product-data">
<p>{`${filterProducts.length} Products Available `}</p>
      </div>

      {/* dropdown bar section */}
      <div className="sort-selection">

      </div>


    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
