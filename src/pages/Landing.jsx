import React from 'react'
import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'

const url = '/products?featured=true';

const FeaturedProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url)
}

export const loader = (queryClient) => async () => {
  // const response = await customFetch.get(url);
  const response = await queryClient.ensureQueryData(FeaturedProductsQuery)
  const products = response.data.data;
  return { products }
}

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  )
}

export default Landing