import './globals.css';

export const metadata = {
  title: 'MOVIE4U — ดูหนังและซีรีส์',
  description: 'ค้นพบภาพยนตร์ ซีรีส์ และตัวอย่างภาพยนตร์ที่คุณชื่นชอบ',
};

export default function RootLayout({ children }) {
  return <html lang="th"><body>{children}</body></html>;
}
