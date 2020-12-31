import { NextPage } from 'next';
import HomeStyle from '~/styles/Home.module.scss';
import Layout from '~/layouts/index';
import LinkCard from '~/components/LinkCard';

const Home: NextPage = () => {
  return (
    <Layout marginTop={80}>
      <main className={HomeStyle.main}>
        <h1 className={HomeStyle.title}>
          Welcome to <a>Next.js!</a>
        </h1>

        <p className={HomeStyle.description}>
          Get started by editing <code className={HomeStyle.code}>pages/index.js</code>
        </p>

        <div className={HomeStyle.grid}>
          <LinkCard
            href="/"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />
          <LinkCard
            href="/about"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />
          <LinkCard
            href="/product"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />
          <LinkCard
            href="/hobby"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
