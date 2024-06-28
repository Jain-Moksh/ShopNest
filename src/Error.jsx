import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';

function Error() {

    return <Wrapper>

        <div className="container">
            <div>
                <h2>404</h2>
                <h3>UH OH! YOU'RE LOST.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate debitis iure temporibus quae nobis voluptates eum ab saepe accusantium corrupti non sint adipisci veritatis dolor, sunt voluptatem ipsum optio maxime?</p>
                <NavLink to="/">
                    <Button>Go Back Home Page</Button>
                </NavLink>
            </div>
        </div>
    </Wrapper>

}

const Wrapper = styled.section`

 .container {
 padding: 8rem 2rem;
 text-align: center;
 
 h2 {
 font-size: 10rem;
 font-weight: 400;
 }

 h3 {
 font-size: 4.2rem}
 
 p {
 margin: 2rem 0;
 }
 }

`;

export default Error;