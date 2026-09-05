import { NavLink } from 'react-router-dom'

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="flex items-center gap-1 sm:gap-2 bg-[#181818]/90 border border-zinc-800/80 rounded-full px-2.5 py-1.5 backdrop-blur-md">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            `text-xs sm:text-sm transition-all duration-200 rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 no-underline select-none ${
              isActive
                ? 'text-white bg-zinc-800/90 font-semibold border border-zinc-700/60 shadow-inner'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40 font-normal'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  )
}
