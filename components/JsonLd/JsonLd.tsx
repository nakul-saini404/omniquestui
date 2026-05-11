interface JsonLdProps {
  data: object | object[] | null;
}
 
export default function JsonLd({ data }: JsonLdProps) {
  // Don't render anything if schema couldn't be built
  if (!data) return null;
<<<<<<< HEAD
 
=======

>>>>>>> 695c3d6ee2e0fbf6caea92bfb9b7f023ea006e66
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
    />
  );
}