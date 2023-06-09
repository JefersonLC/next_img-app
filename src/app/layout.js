import { DM_Sans } from 'next/font/google';
import '../styles/globals.css';

export const metadata = {
  title: 'Home',
};

const firacode = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={firacode.className}>
      <body>
        <main className='main'>{children}</main>
        <footer className='footer'>
          <h4 className='footer-h4'>
            Powered By{' '}
            <a className='footer-a' href='https://github.com/JefersonLC' target='_blank'>
              @JefersonLC
            </a>{' '}
            {new Date().getFullYear()}
          </h4>
        </footer>
      </body>
    </html>
  );
}
