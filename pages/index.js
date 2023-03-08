import Head from 'next/head';
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div 
      initial={{ y: "100%"}} 
      animate={{ y: "0%"}} 
      exit={{opacity: 1}}
      transition={{duration: 0.75, ease: "easeOut"}}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='my-96 p-1'>
          <h1 className='text-6xl text-center lg:text-right lg:text-9xl'>Happy Pickle</h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2023</h2>
          </div>
          <div>
            <h3>Reprehenderit culpa ex culpa id commodo eiusmod ullamco sunt duis duis.</h3>
            <h3>Quis ad consectetur esse ipsum magna reprehenderit.</h3>
            <h3>Exercitation eu duis aliquip nulla ex adipisicing Lorem.</h3>
          </div>
        </div>
      </main>
    </m.div>
  )
}
