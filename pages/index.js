import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          개인적인 번역글입니다, 오타나 잘 못된 표현 첨삭 감사합니다. 영어
          원본은 <a href="https://justjavascript.com/">Just JavaScript</a> 에서
          구독하실 수 있습니다 .)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Courses</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            // console.log(filename);
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/ko/${id}`}>
                  {title}
                </Link>
                <br />
                 {date}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
