import AppForm from '@/components/AppForm';

export const metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div className='main-div_form'>
      <AppForm type='login' />
    </div>
  );
}
