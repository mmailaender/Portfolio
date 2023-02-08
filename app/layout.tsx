import './globals.css';
import { Reshaped } from 'components/Reshaped/Reshaped';
// import 'reshaped/themes/reshaped/theme.css';
// import 'components/Reshaped/theme.css';
import 'src/themes/productTheme/theme.css';

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

      <body>
        <Reshaped theme='productTheme' defaultColorMode='dark'>
          {children}
        </Reshaped>
      </body>
    </html>
  );
}
