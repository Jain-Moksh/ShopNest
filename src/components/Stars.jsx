import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styled from 'styled-components';


const Stars = ({ strs, revs }) => {


    const ratingStar = Array.from({ length: 5 }, (element, index) => {

        let number = index + 0.5;


        return <span key={index}>

            {
                strs >= index + 1 ? (<FaStar className='icon' />) : strs >= number ? (<FaStarHalfAlt className='icon' />) : (<AiOutlineStar className='icon' />)
            }
        </span>

    });

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
                <p>{revs} customer reviews</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars;