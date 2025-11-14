import Image from "next/image";
import Logo from "@/../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#060c2a] text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="/" aria-label="Home" className="inline-block">
              <Image
                src={Logo}
                alt="logo"
                width={160}
                height={48}
                className="w-36 h-auto"
                priority
              />
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Make your links work for you.
            </p>
          </div>

          <nav className="flex gap-6">
            <a className="text-sm hover:text-blue-600" href="#features">
              Features
            </a>
            <a className="text-sm hover:text-blue-600" href="#pricing">
              Pricing
            </a>
            <a className="text-sm hover:text-blue-600" href="#templates">
              Templates
            </a>
            <a className="text-sm hover:text-blue-600" href="#contact">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Linkify. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-gray-500 hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.11 0c-2.73 0-4.95 2.23-4.95 4.98 0 .39.04.77.12 1.13A14.02 14.02 0 0 1 1.64.9a4.92 4.92 0 0 0-.67 2.5c0 1.72.87 3.24 2.19 4.13A4.9 4.9 0 0 1 .96 7v.06c0 2.4 1.7 4.42 3.96 4.88a4.93 4.93 0 0 1-2.23.08 4.95 4.95 0 0 0 4.6 3.45A9.87 9.87 0 0 1 0 19.54 13.93 13.93 0 0 0 7.56 22c9.06 0 14.02-7.74 14.02-14.45 0-.22-.01-.43-.02-.64A10.12 10.12 0 0 0 23 3z" />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1C5.925 1 1 5.925 1 12c0 4.868 3.163 8.99 7.557 10.442.553.102.754-.24.754-.533 0-.263-.01-1.134-.015-2.055-3.074.667-3.724-1.48-3.724-1.48-.502-1.288-1.226-1.632-1.226-1.632-.999-.683.076-.669.076-.669 1.104.078 1.684 1.156 1.684 1.156.982 1.668 2.574 1.187 3.202.908.1-.71.384-1.187.697-1.459-2.453-.28-5.032-1.226-5.032-5.456 0-1.206.428-2.19 1.128-2.962-.113-.281-.49-1.414.107-2.948 0 0 .921-.295 3.02 1.127A10.46 10.46 0 0 1 12 6.844c.933.004 1.873.126 2.75.37 2.095-1.422 3.014-1.127 3.014-1.127.6 1.534.224 2.667.11 2.949.703.774 1.128 1.758 1.128 2.962 0 4.24-2.584 5.172-5.044 5.446.395.343.748 1.02.748 2.057 0 1.486-.014 2.684-.014 3.048 0 .296.198.64.76.531C19.842 20.99 23 16.866 23 12c0-6.075-4.927-11-11-11z" />
              </svg>
            </a>

            <a
              href="mailto:hello@linkify.example"
              aria-label="Email"
              className="text-gray-500 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x={3} y={5} width={18} height={14} rx={2} ry={2} />
                <polyline points="3,7 12,13 21,7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
