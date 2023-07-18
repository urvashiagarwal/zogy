
import { Inter } from 'next/font/google'

import { Header } from '@/components/Header';
import { HeroHome } from '@/components/HeroHome';
import Landing from './Landing';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
     
    <HeroHome />
    
     

    </>
  )
}
