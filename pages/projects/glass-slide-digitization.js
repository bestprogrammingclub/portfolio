import Head from "next/head";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function GlassSlideDigitization() {
  return (
    <div className="container">
      <Head>
        <title>Glass Slide Digitization | Projects | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">Glass Slide Digitization</h1>

        <p className="main-description">Digitized some glass slides!</p>
      </main>

      <Footer />
    </div>
  );
}
