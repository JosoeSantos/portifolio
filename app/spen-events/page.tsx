import { Metadata } from "next";
import SpenEventsPage from "./client-page";

import api from "../../singletons/api";



export const metadata: Metadata = {
  title: "Josoe Santos | Labs - Spen Events",
  description: "Lab about Spen Events",
  keywords:
    "Josoe Santos, Josoe, josoesantos, Josoe Santos Queiroz, Frontend, Dev",
  icons: "/favicon.ico",
  colorScheme: "dark light",
};
export default async function Page() {
  api.sayHello();
  return <SpenEventsPage />;
}
