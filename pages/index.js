import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <section className="mb-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-lg dark:bg-black/30 md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] opacity-70">SAP Learning Path</p>
          <h1 className="mb-6 text-3xl font-bold lg:text-5xl">Übersicht der Themen</h1>
          <p className="mb-8 max-w-3xl text-lg opacity-80">
            Im folgenden Menü findest du Links zu Kursinformationen, Dokumentationen und Lernpfaden.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/btp-abap-trial">
              <a className="group block rounded-2xl border border-emerald-200/30 bg-emerald-950/30 p-6 transition hover:-translate-y-1 hover:border-emerald-200/70 hover:bg-emerald-900/40">
                <p className="mb-2 text-sm uppercase tracking-[0.25em] text-emerald-200/80">ABAP Cloud</p>
                <h2 className="mb-3 text-2xl font-semibold">BTP ABAP Trial einrichten</h2>
                <p className="opacity-75">
                  Dokumentierter Lernpfad von SAP BTP Trial über Destination und Eclipse ADT bis zur ersten ABAP-Klasse.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald-100">
                  Zur Unterseite <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            </Link>
            <a className="block rounded-2xl border border-white/10 bg-white/5 p-6 opacity-80">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] opacity-60">ABAP</p>
              <h2 className="mb-3 text-2xl font-semibold">ABAP Code lernen</h2>
              <p className="opacity-70">Weitere ABAP-Grundlagen und Beispiele können hier später ergänzt werden.</p>
            </a>
          </div>
        </section>

        <h2 className="mb-6 text-2xl font-bold lg:text-3xl">Beiträge</h2>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
