import Head from "next/head";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Selected Projects | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="title">Selected projects</h1>

        <p>This is the projects page</p>
      </main>

      <Footer />
    </div>
  );
}
