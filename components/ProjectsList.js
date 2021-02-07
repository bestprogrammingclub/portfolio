import Link from "next/link";
import projects from "../db/projects";
import styles from "./ProjectsList.module.css";

export default function ProjectsList() {
  const mediaProjects = projects.filter((project) => {
    return project.categories.includes("Media");
  });
  const designProjects = projects.filter((project) => {
    return project.categories.includes("Media");
  });

  return (
    <div>
      <section>
        <h2>Media</h2>
        <div className={styles.list}>
          {mediaProjects.map((project) => (
            <div key={project.name} className={styles.listItem}>
              <h2 className={styles.name}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <div>
                <Link href={`/projects/${project.slug}`}>View</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Design</h2>
        <div className={styles.list}>
          {designProjects.map((project) => (
            <div key={project.name} className={styles.listItem}>
              <h2 className={styles.name}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <div>
                <Link href={`/projects/${project.slug}`}>View</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
