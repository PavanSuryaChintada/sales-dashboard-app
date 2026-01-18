import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <main className="flex flex-col items-center justify-center gap-8 p-8 text-center relative z-10">
        <div className="inline-block mb-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
            ANALYTICS PLATFORM
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
          Sales Dashboard
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          A comprehensive sales analytics dashboard built with Next.js 15,
          TypeScript, and Tailwind CSS using atomic design principles.
        </p>
        <Link
          href="/dashboard"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
        >
          Go to Dashboard →
        </Link>
      </main>
    </div>
  );
}
