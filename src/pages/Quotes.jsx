import React from 'react';
import css from './quotes.module.css'

const Quote = () => (
  <div className={css.quotes_container}>
    <p>
      " Mathematics is not about numbers, equations, computations, or
      algorithms: it is about understaning. -William Paul Thurston"
    </p>
  </div>
);

export default Quote;