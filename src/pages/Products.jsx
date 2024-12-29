import React from 'react';
import { customFetch } from '../utils';
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const url = '/products';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

  const response = await customFetch.get(url, { params });
  return { products: response.data.data, meta: response.data.meta, params };
}

const Products = () => {

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products