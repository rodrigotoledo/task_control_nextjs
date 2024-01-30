import { Inter } from "next/font/google";

import axios from 'axios';

axios.defaults.baseURL = 'https://18df-45-71-76-107.ngrok-free.app';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
