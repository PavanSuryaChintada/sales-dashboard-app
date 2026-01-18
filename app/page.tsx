import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center justify-center gap-8 p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Sales Dashboard Application
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          A comprehensive sales analytics dashboard built with Next.js 15,
          TypeScript, and Tailwind CSS using atomic design principles.
        </p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </Link>
      </main>
    </div>
  );
}
