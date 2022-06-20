import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {

  const origin = (typeof window === 'undefined') ? '' : window.location.origin;

  return (
      <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name="author" content="Nicolas Soroka"/>
            <meta name="description" content={`Informacion del pokemon ${title}`}/>
            <meta name="keyword" content={`pokemon, pokedex, ${title}`}/>

            <meta property="og:title" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar/>


        <main style={{
          padding: '0 20px'
        }}>
          { children }
        </main>
      </>
    )
}
