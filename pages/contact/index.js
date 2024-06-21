import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Genre from "../../components/genre";
import Contact from "../../components/contact";
import Drawer from "../../components/drawer";




//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "nexttech" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
    <Drawer/>
      <Contact/>
    <Footer/>
    </>
  );
}
