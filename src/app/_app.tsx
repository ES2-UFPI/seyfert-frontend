import '../styles/globals.css'
import '@nextcss/reset';
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import  SSRProvider  from 'react-bootstrap/SSRProvider';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }
  
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }
  
  export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
  
    return getLayout(<SSRProvider> <Component {...pageProps} /> </SSRProvider>)
  }