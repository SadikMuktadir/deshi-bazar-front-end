'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { currentUser, loginUser } from '@/src/services/authservices';
import { loginSchema } from './loginSchema';
import { useUser } from '@/src/context/UserProvider';
import { Loader } from 'lucide-react';

const LoginForm = () => {
  const { setUser, setLoading } = useUser();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const res = await loginUser({
        email: data.email,
        password: data.password,
      });
      console.log(res);
      if (res?.token) {
        toast('Login Successfully...');
        const user = await currentUser();
        setUser(user);
        setLoading(false);
        router.refresh();
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-5'>
      <Card className='w-full max-w-md shadow-xl'>
        <CardHeader>
          <CardTitle className='text-center text-2xl font-semibold'>
            Login Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type your Email'
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type your Password'
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='cursor-pointer bg-[#db4444] hover:bg-[#db4444] w-full'
                type='submit'
              >
                {isSubmitting ? <Loader /> : 'Login'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
