import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home({ store }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title> Store </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <p className="text-6xl"> Store </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-6">
            {store.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 max-w-sm rounded overflow-hidden mx-auto my-8 mx-8 group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent transition delay-100"
              >
                <div className="pl-3 pr-2">
                  <p className="font-bold text-xl mb-2 hover:text-purple-700 transition delay-50">
                    {product.title}
                  </p>
                  <Image
                    className="w-full hover:bg-yellow-100"
                    src={product.cover.url}
                    alt="Picture of the author"
                    width={500}
                    height={300}
                  />
                  <p className="text-gray-600 text-base">
                    {product.description}
                  </p>
                  <p className="font-bold text-base"> R$ {product.valor},00</p>
                  <p className="font-bold text-base mb-2 mt-2 hover:text-purple-700 transition delay-50">
                    <Link href={`/produtos/${product.id}`}> Comprar →</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get('https://api-blog-256.herokuapp.com/stores');
  const data = await res.data;

  return {
    props: { store: data, revalidade: 1 },
  };
}
