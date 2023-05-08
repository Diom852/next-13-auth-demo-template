"use client";

import { useState } from 'react';
import Button from '../components/Button'
import TextField from '../components/TextField'
import { signIn, useSession } from 'next-auth/react';
const SignInPage = () => {
  const { data: session } = useSession();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: userName,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    // ... (a parte restante do código é a mesma)
    <form onSubmit={onSubmit}>
      <div className='space-y-2'>
        <TextField
          id='email'
          name='email'
          type='email'
          onChange={(e) => setUserName(e.target.value)}
          label='Sign in with your email'
          placeholder='hello@me.com'
          autoComplete='email'
          required
        />
        <TextField
          id='password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          label='Password'
          placeholder='Your password'
          autoComplete='current-password'
          required
        />
      </div>

      <Button
        type='submit'
        variant='outline'
        color='gray'
        className='mt-3 w-full'
      >
        Continue with email
      </Button>
    </form>
    // ...
  )
}

export default SignInPage
