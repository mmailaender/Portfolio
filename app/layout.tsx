import './globals.css';
import { Reshaped } from 'components/Reshaped/Reshaped';
import 'reshaped/themes/reshaped/theme.css';
import { Poppins } from '@next/font/google';
// import 'components/Reshaped/theme.css';

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     */}
      <head />
      <Reshaped theme='reshaped' defaultColorMode='dark'>
        <body className={poppinsFont.className}>{children}</body>
      </Reshaped>
    </html>
  );
}
