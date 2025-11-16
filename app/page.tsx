"use client";
import SchemaUnifilaireTostan from "../components/SchemaUnifilaireTostan";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Schéma Unifilaire TOSTAN</h1>
      <SchemaUnifilaireTostan />
    </main>
  );
}
