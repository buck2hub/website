
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Install',
};

export default function InstallPage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-6xl font-black mb-8">Install Buckal</h1>
      </div>

      {/* Recommended Install Section */}
      <section className="bg-[#4566A4] text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-2">Using Cargo (Recommended)</h2>
          <div className="h-1 w-24 bg-[#173774] mb-6"></div>

          <p className="text-xl mb-8 leading-relaxed max-w-3xl">
            To download and install Buckal, run the following in your terminal. Ensure you have Rust and Cargo installed.
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-md font-mono text-lg shadow-xl overflow-x-auto border border-blue-400/30">
            <span className="select-none text-gray-500">$ </span>
            cargo install cargo-buckal
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-2 text-gray-900">Notes about Buckal installation</h2>
          <div className="h-1 w-24 bg-yellow-400 mb-12"></div>

          <div className="grid gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Getting started</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you&apos;re just getting started with Buckal and would like a more detailed walk-through, see our <Link href="/docs" className="underline decoration-2 decoration-[#4566A4] hover:bg-[#4566A4] hover:text-white transition-colors">getting started</Link> page.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Prerequisites</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Buckal requires <a href="https://buck2.build/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 px-1 py-0.5 rounded text-gray-900 hover:bg-gray-200">Buck2</a> and <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 px-1 py-0.5 rounded text-gray-900 hover:bg-gray-200">Python3</a>. Please ensure both are installed on your system before proceeding.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Toolchain management</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Buckal is distributed as a Cargo subcommand. If you&apos;ve installed <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">cargo-buckal</code> in the past, you can update your installation by running:
              </p>
              <code className="bg-gray-100 px-2 py-1 rounded text-gray-800 font-mono">cargo install cargo-buckal</code>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Uninstall Buckal</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If at any point you would like to uninstall Buckal, you can run <code className="bg-gray-100 px-2 py-1 rounded text-gray-800 font-mono">cargo uninstall cargo-buckal</code>. We&apos;ll miss you though!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Methods Section */}
      <section className="bg-[#173774] text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-2">Other installation methods</h2>
          <div className="h-1 w-24 bg-[#4566A4] mb-8">
</div>

          <p className="text-xl mb-8 leading-relaxed max-w-3xl">
            The installation described above, via <code className="bg-white/10 px-1 py-0.5 rounded">cargo install</code>, is the preferred way to install Buckal for most developers. However, you can also install the latest development version from the git repository.
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-md font-mono text-lg shadow-xl overflow-x-auto border border-blue-400/30">
            <span className="select-none text-gray-500">$ </span>
            cargo install --git https://github.com/buck2hub/cargo-buckal.git
          </div>
        </div>
      </section>
    </div>
  );
}
