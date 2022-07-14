import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import styles from '../styles/Home.module.css';
import KebabList from './../components/KebabList';

export default function Home({ kebabList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Tripol Kebab & Grill</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        admin && (
          <>
            {<AddButton setClose={setClose} />}
            {!close && <Add setClose={setClose} />}
          </>
        )
      }

      <KebabList kebabList={kebabList}></KebabList>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get('https://tripolkebab.vercel.app/api/products');
  return {
    props: {
      kebabList: res.data,
      admin: admin
    }
  }
};