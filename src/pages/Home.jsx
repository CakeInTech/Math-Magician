import React from 'react';
import css from './home.module.css';

const Home = () => (
  <div className={css.container} data-testid={"home"}>
    <h1>Welcome to our page!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque illo et asperiores temporibus tempore ad aperiam at fuga distinctio labore quasi maiores laudantium odio consectetur eveniet earum consequatur, dignissimos, deleniti eos minus.
    </p>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque illo et asperiores temporibus tempore ad aperiam at fuga distinctio labore quasi maiores laudantium odio consectetur eveniet earum consequatur, dignissimos, deleniti eos minus.
    </p>
  </div>
);

export default Home;