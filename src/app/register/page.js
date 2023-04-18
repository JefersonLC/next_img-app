import RegisterForm from '@/components/RegisterForm';

export const metadata = {
  title: 'Register'
};

export default function LoginPage() {
  return (
    <div className='main-div_form'>
      <RegisterForm />
    </div>
  );
}
