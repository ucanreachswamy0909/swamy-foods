import { getCategories } from "@/lib/categories";

export default async function TestPage() {
  const categories = await getCategories();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Categories Count: {categories.length}</h1>

      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div>
  );
}