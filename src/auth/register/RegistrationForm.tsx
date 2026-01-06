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
import { RegisterFormData, registrationSchema } from './registrationSchema';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { currentUser, registerUser } from '@/src/services/authservices';
import { useUser } from '@/src/context/UserProvider';
import { Loader } from 'lucide-react';

const RegistrationForm = () => {
  const { setUser, setLoading } = useUser();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log(res);

      if (res?.token) {
        toast('Registration Successfully...');
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
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type your name'
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
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
                className='w-full cursor-pointer bg-[#db4444] hover:bg-[#db4444]'
                type='submit'
              >
                {isSubmitting ? <Loader /> : 'Register'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
