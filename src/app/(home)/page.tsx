import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="bg-[#4566A4] text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Buckal</h1>
          <p className="text-2xl mb-4 text-blue-100">
            Seamless migration from Cargo to Buck2.
          </p>
          <p className="text-lg mb-8 text-blue-200 font-mono">
            Ready for users ∈ &#123;Rust&#125;
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs"
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition shadow-lg"
            >
              Why Buckal?
            </Link>
            <Link
              href="/docs"
              className="bg-[#173774] text-white font-bold py-3 px-8 rounded-md hover:bg-[#102a5c] transition shadow-lg"
            >
              Getting started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Seamless Migration</h3>
            <p className="text-gray-600 leading-relaxed">
              Buckal ensures that changes to <code className="bg-gray-100 px-1 rounded text-sm">Cargo.toml</code> are automatically reflected in the generated <code className="bg-gray-100 px-1 rounded text-sm">BUCK</code> files. Migrate with zero configuration.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Familiar Workflow</h3>
            <p className="text-gray-600 leading-relaxed">
              Use Buck2 with a familiar, Cargo-like workflow without manual build file maintenance. Buckal handles the complexity of dependency graphs for you.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-6">🧩</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Extensible Tools</h3>
            <p className="text-gray-600 leading-relaxed">
              Beyond migration, explore tools like <strong>Qlean</strong> for system-level isolation testing. Build robust Rust applications with the power of Buck2 and the convenience of Cargo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
