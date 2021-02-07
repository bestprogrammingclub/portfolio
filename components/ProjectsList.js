import Link from "next/link";
import projects from "../db/projects";
import styles from "./ProjectsList.module.css";

export default function ProjectsList() {
  return (
    <section className={styles.list}>
      {projects.map((project) => (
        <div key={project.name} className={styles.listItem}>
          <h2 className={styles.name}>{project.name}</h2>
          <p className={styles.description}>{project.description}</p>
          <div>
            <Link href={`/projects/${project.slug}`}>View</Link>
          </div>
        </div>
      ))}
    </section>
  );
}
