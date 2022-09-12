import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel').then(res => res.default).then((ReactPixel) => {
      ReactPixel.init('488528279464370')
      ReactPixel.pageView()

      router.events.on('routeChangeComplete', () => {
        ReactPixel.pageView()
      })
    })
  }), [router.events]

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

      </Head>
      <Component {...pageProps} />
    </>
  )
}
