import React, { useState } from 'react'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { Link, useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

export const loader = async ({ params }) => {
  console.log("params", params);
  const { id } = params;
  const response = await customFetch.get(`/products/${id}`);
  const product = response.data.data;
  return { id: product.id, product: product.attributes }
}

const SingleProduct = () => {
  const { id, product: { image, title, price, description, colors, company } } = useLoaderData();
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartId: id + productColor,
    productId: id,
    image,
    title,
    price,
    amount,
    company,
    productColor
  }

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font bold mt-2'>{company}</h4>
          <p className='mt-3 text-xl'>{dollarAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>

          <div className="mt-6">
            <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
            <div className="mt-2">
              {
                colors.map(color => {
                  return <button key={color} type='button' className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`} style={{ backgroundColor: color }} onClick={() => setProductColor(color)}>
                  </button>
                })
              }
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label htmlFor="amount" className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>Amount</h4>
            </label>
            <select id="amount" className='select select-secondary select-bordered select-md'
              value={amount} onChange={handleAmount}>
              {generateAmountOptions(20)}
            </select>
          </div>

          <div className="mt-10">
            <button className="btn btn-secondary" onClick={addToCart}>Add to bag</button>
          </div>


        </div>
      </div>
    </section>
  )
}

export default SingleProduct