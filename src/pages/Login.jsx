import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/UserSlice';
import { customFetch } from '../utils';
import { useDispatch } from 'react-redux';


export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local', data);
    store.dispatch(loginUser(response.data));
    toast.success('logged in successfully');
    return redirect('/');
  } catch (err) {
    const errMsg = err?.response?.data?.error?.message || 'please check your creds';
    toast.error(errMsg);
    return null;
  }
}


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret'
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    }
    catch (err) {
      console.log(err);
      toast.error('guest user login error.please try again!')
    }
  }


  return (
    <section className="h-screen grid place-items-center">
      <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 '>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type="email" label="email" name="identifier" defaultValue="test@test.com" />
        <FormInput type="password" label="password" name="password" defaultValue="secret" />
        <div className='mt-4'>
          <SubmitBtn text="login" />
        </div>
        <button type="button" className='btn btn-secondary btn-block capitalize' onClick={loginAsGuestUser}>guest user</button>
        <p className='text-center'>
          Not a member yet?
        </p>
        <Link to='/register' className='ml-2 link link-hover link-primary capitalize'>register</Link>
      </Form>
    </section>
  )
}

export default Login