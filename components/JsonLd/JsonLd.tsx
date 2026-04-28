// components/JsonLd/JsonLd.tsx

interface JsonLdProps {
  data: object | object[] | null;
}

export default function JsonLd({ data }: JsonLdProps) {
  // Don't render anything if schema couldn't be built
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
    />
  );
}