import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavItem {
  text: string;
  isDisabled?: boolean;
  url?: string;
  id?: string | number;
  imgSrc?: string | 'https://gcba.github.io/img/card/homev1.svg';
  description?: string;
}

interface NavProps {
  items: NavItem[];
  className?: string;
}

const NavLayout = ({ items, className }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <ul className="nav flex-column nav-pills">
        {items.map((item, index) => {
          const isActive = pathname.startsWith(item.url || '#');

          return (
            <li className="nav-item" key={index}>
              {item.isDisabled ? (
                <span className="nav-link disabled">{item.text}</span>
              ) : (
                <Link href={item.url || '#'} className={`nav-link ${isActive ? 'active' : ''}`}>
                  {item.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavLayout;
