import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page_wrapper">
      <Head>
        <title>Color Palette</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='page_container'>
        <Link href='/generator'>
          <button className='primary_btn'>Start Generator</button>
        </Link>
        <Link href='/saved'>
          <button className='primary_btn'>View Saved</button>
        </Link>
      </div>
    </div>
  )
}
