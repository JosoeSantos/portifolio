import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Head>
        <title>Josoe Santos</title>
        <meta name="description" content="Web developer an technology lover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center gap-3">
        <h1 className="text-6xl font-bold">
          Welcome to what will be my own site.
        </h1>
        <dl className='max-w-max'>
          <dt className="text-gray-500">Github: </dt>
          <dd><a className='text-indigo-600 hover:text-indigo-500 visited:text-red-500 pl-3' href="https://github.com/JosoeSantos">@JosoeSantos</a></dd>
          <dt className="text-gray-500 ">Discord: </dt>
          <dd className='pl-3'>JosOe#9705</dd>
        </dl>
      </main>
    </div>
  )
}

export default Home
