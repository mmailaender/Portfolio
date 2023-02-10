import './globals.css';
import 'src/themes/productTheme/theme.css';
import 'reactflow/dist/style.css';
import { Reshaped } from 'components/Reshaped/Reshaped';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Reshaped theme='productTheme' defaultColorMode='dark'>
          {children}
        </Reshaped>
      </body>
    </html>
  );
}
