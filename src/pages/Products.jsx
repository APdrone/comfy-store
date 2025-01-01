import React from 'react';
import { customFetch } from '../utils';
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const url = '/products';

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } = queryParams;

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch.get(url, { params: queryParams })
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

  // const response = await customFetch.get(url, { params });
  const response = await queryClient.ensureQueryData(allProductsQuery(params))
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