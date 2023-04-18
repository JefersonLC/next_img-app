import LoginForm from '@/components/LoginForm';

export const metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div className='main-div_form'>
      <LoginForm />
    </div>
  );
}
