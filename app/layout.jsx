import '@fortawesome/fontawesome-svg-core/styles.css'
import { Open_Sans } from 'next/font/google'
import FixedCall from '../components/FixedCall'
import FixedMobileCall from '../components/FixedMobileCall'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactDropDown from '../components/dropdowns/ContactDropDown'
import MapDropDown from '../components/dropdowns/MapDropDown'
import MenuDropDown from '../components/dropdowns/MenuDropDown'
import ShareDropDown from '../components/dropdowns/ShareDropDown'
import { AppProvider } from '../context'
import { SiteInfo } from './data'
import './globals.css'
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: SiteInfo.title,
  description: SiteInfo.description,
  verification: {
    'google': 'mpwTDJQGsPOKqab82sdxwE1PFkZ8HnycFrK2-dQBLvs',
  },
  icons: {
    icon: '/icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${openSans.className} bg-[#f8f4f4]`}>
        <AppProvider>
          <MenuDropDown />
          <MapDropDown />
          <ShareDropDown />
          <ContactDropDown />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FixedCall />
          <FixedMobileCall />
        </AppProvider>
      </body>
    </html>
  )
}
