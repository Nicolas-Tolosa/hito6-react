import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

const Cart = ({name, price, count, img, onChangeQuantity }) => {
  const add = () => onChangeQuantity(count + 1);
  const remove = () => onChangeQuantity(Math.max(count - 1, 0));
  return (
    <div className='cart-container'>
      <div className='item-cart'>
        <img src={img} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className='quantity-cart'>
        <h3>Precio unitario: ${formatCurrency(price)}</h3>
        <div className='quantity-controls'>
          <button onClick={remove}>-</button>
          <span>{count}</span>
          <button onClick={add}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
