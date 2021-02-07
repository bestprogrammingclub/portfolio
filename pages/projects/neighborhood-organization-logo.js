import Head from "next/head";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function NeighborhoodOrganizationLogo() {
  return (
    <div className="container">
      <Head>
        <title>NeighborhoodOrganizationLogo | Projects | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">NeighborhoodOrganizationLogo</h1>

        <p className="main-description">NeighborhoodOrganizationLogo</p>
      </main>

      <Footer />
    </div>
  );
}
