import { globalMeta } from '@/data/globalMeta'
import Head from 'next/head'
import { ReactNode } from 'react'

export default function SEOHead({ title }: { title: string }) {
  return (
    <Head>
      {/*
        	Fundamental head elements important for SEO.
    	*/}
      <title>{title} </title>
      <meta name='description' content={globalMeta.description} />
      <link rel='canonical' href={globalMeta.siteUrl} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />

      {/*
        	Open graph meta tags.
    	*/}
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content={globalMeta.siteName} />
      <meta property='og:description' content={globalMeta.description} />
      <meta property='og:image' content={globalMeta.siteLogo} />
      <meta property='og:url' content={globalMeta.siteUrl} />
    </Head>
  )
}
