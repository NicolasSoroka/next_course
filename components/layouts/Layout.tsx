import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
      <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name="author" content="Nicolas Soroka"/>
            <meta name="description" content={`Informacion del pokemon ${title}`}/>
            <meta name="keyword" content={`pokemon, pokedex, ${title}`}/>
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
