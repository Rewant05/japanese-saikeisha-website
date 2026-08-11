import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import MaterialExplorer from "@/components/MaterialExplorer";

export default function MaterialsPage() {
  return (
    <div className="w-full pb-24">
      <PageHeader title="素材と哲学" jpTitle="風土の恵み" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 space-y-24">
        <ScrollReveal>
          <p className="font-sans font-light text-lg leading-loose text-[var(--foreground)]/80 max-w-3xl">
            日本の建築は自然と深く結びついています。私たちが使用する素材（木、土、紙、石）は季節とともに呼吸します。私たちは可能な限り地元から調達し、何世代にもわたって受け継がれてきた持続可能な慣行を維持する職人と提携しています。
          </p>
        </ScrollReveal>

        <MaterialExplorer />
      </div>
    </div>
  );
}
