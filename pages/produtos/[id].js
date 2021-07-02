import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Post({ product }) {
  return (
    <>
      <Head>
        <title>Daiane Sousa </title>
        <meta property="og:title" content="Daiane Sousa" key="title" />
      </Head>
      <Navbar />
      <div className="bg-gray-50 min-h-screen	p-8 flex justify-center">
        <div className="p-2 max-w-sm md:max-w-2xl">
          <div className="flex justify-center flex-wrap content-center mt-6 mb-4">
            <Image
              className="w-full hover:bg-yellow-100"
              src={product.cover.url}
              alt="Picture of the author"
              width={500}
              height={300}
            />
            <p className="font-bold text-base m-4">{product.title}</p>
            <p>{product.description}</p>
            <p className="font-bold text-base m-4"> R$ {product.valor},00 </p>
            <button className="bg-purple-200 h-14 p-2 ">
              <Link href={product.link}> Comprar →</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const response = await axios.get(
    `https://api-blog-256.herokuapp.com/stores/`,
  );
  const stores = await response.data;
  const paths = stores.map((product) => ({ params: { id: product.id } }));
  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await axios.get(
    `https://api-blog-256.herokuapp.com/stores?id=${id}`,
  );
  const product = await res.data[0];

  return {
    props: { product },
  };
}
