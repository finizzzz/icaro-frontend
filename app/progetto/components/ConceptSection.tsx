// app/progetto/components/ConceptSection.tsx
import ConceptPart1 from '././ConceptPart1';
import ConceptPart2 from '././ConceptPart2';
import ConceptPart3 from '././ConceptPart3';

export default function ConceptSection() {
  return (
    <section className="w-full">
      <ConceptPart1 />
      <ConceptPart2 />
      <ConceptPart3 />
    </section>
  );
}