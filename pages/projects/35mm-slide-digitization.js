import Head from "next/head";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function ThirtyFiveMMSlideDigitization() {
  return (
    <div className="container">
      <Head>
        <title>35mm Slide Digitization | Projects | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">35mm Slide Digitization</h1>

        <p className="main-description">Digitized some 35mm slides!</p>
      </main>

      <Footer />
    </div>
  );
}
