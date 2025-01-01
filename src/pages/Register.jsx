import React from 'react'
import { Form, Link, redirect } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (err) {
    const errMsg = err?.response?.data?.error?.message || 'please check your creds';
    toast.error(errMsg);
    return null;
  }
}

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4' method='POST'>
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type="text" label="username" name="username" defaultValue="qweras1" />
        <FormInput type="email" label="email" name="email" defaultValue="qweras1@test.coms" />
        <FormInput type="password" label="password" name="password" defaultValue="secret" />
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