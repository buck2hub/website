import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-neutral-900 dark:text-neutral-100">Buck2Hub</h3>
            <p className="mb-4">
              Seamless migration from Cargo to Buck2.
              <br />
              Ready for users ∈ &#123;Rust&#125;
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-neutral-900 dark:text-neutral-100">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/install" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Install
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-neutral-900 dark:text-neutral-100">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/buck2hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://buck2.build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Buck2 Official
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Buck2Hub. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            
          </p>
        </div>
      </div>
    </footer>
  );
}