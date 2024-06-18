import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import Genre from "../components/genre";
import PostCard from "../components/PostCard";

import Card from "../components/card";
import HomePagenation from "../components/home_pagenation";


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
      <Header />
      
      <div className="mt-8"> {/* ヘッダーとカードの間に上部のマージンを追加 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blog.map((post) => (
          <Card key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center mt-8"> {/* Flexboxを使用して中央揃え */}
          <HomePagenation />
        </div>
      </div>

      <div className="mt-8"> {/* ジャンルとカードの間に上部のマージンを追加 */}
        <Genre />
      </div>      

      <Footer />
    </>
  );
}

