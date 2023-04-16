import '../styles/globals.css';

export const metadata = {
  title: 'Home'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='main'>{children}</main>
        <footer className='footer'>Footer</footer>
      </body>
    </html>
  );
}
