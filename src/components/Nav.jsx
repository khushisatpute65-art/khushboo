import { NavLink } from 'react-router-dom'

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-6 z-50 flex justify-center px-4 w-full">
      <nav className="flex items-center gap-3 bg-[#181818] border border-zinc-800/90 rounded-full px-3 py-2 shadow-2xl backdrop-blur-md">
        {/* Planet Logo Icon */}
        <NavLink
          to="/"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black hover:scale-105 transition-transform"
          aria-label="Home page"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 17.93a8 8 0 0 1-6.93-4.01L15.92 6.07A8 8 0 0 1 13 19.93zM6.07 11A8 8 0 0 1 11 4.07v.01l-4.93 6.92zm11.86 2a8 8 0 0 1-4.93 6.93V19.9l4.93-6.9zm.93-2.07A8 8 0 0 1 13 17.93v-.01l4.93-6.92z" />
          </svg>
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-sm transition-all duration-200 rounded-full px-3.5 py-1.5 no-underline select-none ${
                  isActive
                    ? 'text-white bg-zinc-800/90 font-semibold border border-zinc-700/60 shadow-inner'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40 font-normal'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Contact Email Pill */}
        <a
          href="mailto:ihyaet@gmail.com"
          className="hidden sm:inline-flex items-center justify-center text-xs font-semibold bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors no-underline ml-1"
        >
          ihyaet@gmail.com
        </a>
      </nav>
    </header>
  )
}
