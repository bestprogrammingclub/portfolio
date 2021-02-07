import Head from "next/head";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import ProjectsList from "@components/ProjectsList";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Selected Projects | My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main">
        <h1 className="main-title">Selected projects</h1>

        <p className="main-description">This is the projects page</p>

        <ProjectsList />
      </main>

      <Footer />
    </div>
  );
}
