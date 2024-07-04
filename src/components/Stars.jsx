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

export default Stars;
