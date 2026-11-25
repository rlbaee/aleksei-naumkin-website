import { notFound } from "next/navigation";
import { ResourceSection } from "@/components/resource-section";

const sectionSlugs = ["guides", "news", "webinars", "videos"] as const;

function isSectionSlug(
  section: string,
): section is (typeof sectionSlugs)[number] {
  return sectionSlugs.some((slug) => slug === section);
}

export function generateStaticParams() {
  return sectionSlugs.map((section) => ({ section }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!isSectionSlug(section)) notFound();
  return <ResourceSection slug={section} />;
}
