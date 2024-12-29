import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Loading, Navbar } from '../components'

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <nav>
        <Header />
        <Navbar />
        {isPageLoading ? <Loading /> : <section className='align-element py-20'>
          <Outlet />
        </section>}
      </nav>

    </>

  )
}

export default HomeLayout