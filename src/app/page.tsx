import Home from '@/templates/home'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <Home />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return page;
}

export default Page
