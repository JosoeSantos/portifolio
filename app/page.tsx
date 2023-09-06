import { Metadata } from 'next'
import HomePage from './home-page'

export const metadata: Metadata = {
  title: 'Josoe Santos',
  description: 'Web developer an technology lover',
  keywords: 'Josoe Santos, Josoe, josoesantos, Josoe Santos Queiroz, Frontend, Dev',
  icons: "/favicon.ico",
  colorScheme: "dark light",
}
export default async function Page() {

  return <HomePage />
}