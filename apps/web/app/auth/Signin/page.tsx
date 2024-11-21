'use client'
import { useState } from 'react';
import { SignIn } from '../../../src/SignIn';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (data: any) => {
    const { type, ...credentials } = data;
    
    try {
      const result = await signIn('credentials', {
        ...credentials,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen   flex justify-center items-center">
      <SignIn onSignIn={handleSignIn} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SignInPage;