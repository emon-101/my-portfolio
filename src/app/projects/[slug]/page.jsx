import { notFound } from "next/navigation";
import { projectData } from "./projectData";
import ProjectDetailClient from "./ProjectDetailClient";

// Server component: no "use client" here, so generateStaticParams is valid.
export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) return {};
  return {
    title: `${project.title} — Project details`,
    description: project.tagline,
  };
}

const ProjectDetailPage = async ({ params }) => {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
};

export default ProjectDetailPage;