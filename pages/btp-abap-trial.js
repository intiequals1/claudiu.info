import Link from 'next/link';
import SEO from '../components/SEO';
import Layout, { GradientBackground } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';

const steps = [
  ['01 Ziel & Kontext', 'Ziel ist ein nachvollziehbarer SAP-Lernpfad von der Orientierung bis zu einem lauffaehigen ABAP-Cloud-Beispiel.'],
  ['02 SAP BTP Trial', 'Die Trial-Umgebung dient als Cloud-Einstiegspunkt fuer Subaccount, Entitlements, Service-Instanzen und Rollen.'],
  ['03 Business Application Studio', 'BAS wird als browserbasierte Entwicklungsumgebung verstanden und als Kontext- und Tooling-Baustein dokumentiert.'],
  ['04 Destination & Verbindung', 'Die Verbindung zwischen lokaler Entwicklungsumgebung und BTP muss technisch sauber dokumentiert werden.'],
  ['05 Eclipse ADT', 'Eclipse mit ABAP Development Tools ist der zentrale Arbeitsbereich fuer ABAP Cloud Artefakte.'],
  ['06 Erste ABAP-Klasse', 'Das Ergebnis ist eine ausfuehrbare Klasse mit einer einfachen Ausgabe.'],
];

export default function BtpAbapTrial({ globalData }) {
  return (
    <Layout>
      <SEO title="BTP ABAP Trial" description="SAP Learning Path fuer BTP ABAP Trial und ABAP Cloud" />
      <Header name={globalData.name} />
      <main className="w-full">
        <Link href="/"><a className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur transition hover:bg-white/20"><ArrowIcon className="h-4 w-4 rotate-180" /> Zur Uebersicht</a></Link>
        <section className="overflow-hidden rounded-3xl border border-white/20 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
          <div className="bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-indigo-500/20 p-8 md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-100/80">SAP Learning Path</p>
            <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">BTP ABAP Trial einrichten und ABAP Cloud testen</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-100/80">Diese Unterseite dokumentiert den Lernpfad vom SAP-BTP-Trial-Kontext ueber Entwicklungsumgebung und Verbindung bis zur ersten lauffaehigen ABAP-Cloud-Klasse.</p>
          </div>
        </section>
        <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([title, text]) => (<article key={title} className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"><h2 className="mb-3 text-xl font-semibold">{title}</h2><p className="leading-7 opacity-75">{text}</p></article>))}
        </section>
        <section className="mt-10 rounded-3xl border border-emerald-200/20 bg-emerald-950/30 p-8 backdrop-blur md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-100/70">Ergebnis</p>
          <h2 className="mb-4 text-3xl font-bold">ABAP Cloud funktioniert</h2>
          <p className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-emerald-100">Hello Claudiu - ABAP Cloud works.</p>
        </section>
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur md:p-10"><h2 className="mb-4 text-3xl font-bold">Naechste sinnvolle Ergaenzung</h2><p className="leading-8 opacity-80">Als naechster Schritt koennen die konkreten Screenshots aus der Lernstrecke als Assets unter /public/sap-learning/ abgelegt und hier als visuelle Schrittfolge eingebettet werden.</p></section>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground variant="large" className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
