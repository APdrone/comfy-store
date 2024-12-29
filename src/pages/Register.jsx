import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4' method='POST'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type="text" label="username" name="username" defaultValue="" />
        <FormInput type="email" label="email" name="email" defaultValue="" />
        <FormInput type="password" label="password" name="password" defaultValue="" />
        <div className='mt-4'>
          <SubmitBtn text="REGISTER" />
        </div>
        <p className='text-center'>
          Already a member?
          <Link to="/login" className='ml-2 link link-hover link-primary capitalize'>Login</Link>
        </p>
      </Form>

    </section>
  )
}

export default Register