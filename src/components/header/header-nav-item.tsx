import { NavLink } from 'react-router-dom'

interface HeaderNavItemProps {
  url: string
  text: string
}

export function HeaderNavItem({ url, text }: HeaderNavItemProps) {
  return (
    <NavLink
      to={url}
      end={url === '/'}
      className={({ isActive }) =>
        `border-b pb-0.5 transition-colors ${
          isActive ? 'text-[#092519] border-[#092519]' : 'border-transparent hover:border-[#092519] text-gray-400 hover:text-[#092519]'
        }`
      }
    >
      {text}
    </NavLink>
  )
}
