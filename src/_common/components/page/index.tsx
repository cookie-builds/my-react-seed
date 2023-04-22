import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Content from '../../content'
import Footer from '../footer'
import Header from '../header'

type PageProps = {
  children?: React.ReactNode
  title: string
  seo?: SEO
}

type SEO = {
  title?: string
  description?: string
  keywords?: string
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const standardSeo: SEO = {
  title: '',
  description: '',
  keywords: '',
}

const standardTitle: string = 'Standard title'

const Page = ({ children, title, seo }: PageProps): React.ReactNode => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title !== null ? title : standardTitle}</title>
        <meta charSet='UTF-8' />
        <meta name='title' content={seo?.title ?? standardSeo.title} />
        <meta name='description' content={seo?.description ?? standardSeo.description} />
        <meta name='keywords' content={seo?.keywords ?? standardSeo.keywords} />
        <meta name='author' content='Jonathan Couck' />
      </Helmet>

      <Header />

      <Content>
        {children}
      </Content>

      <Footer />
    </HelmetProvider>
  )
}

export default Page
