import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Document() {
  const meta = {
    title: 'Subaru Sakaguchi',
    description: 'Site em forma de currículo do desenvolvedor Subaru Sakaguchi',
    image: 'https://my-portfolio-v1.s3.amazonaws.com/coding.jpg',
  }

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
    <Html lang="pt-br">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
