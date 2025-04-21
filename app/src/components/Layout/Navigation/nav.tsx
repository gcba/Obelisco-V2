import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  text: string;
  isDisabled?: boolean;
  url?: string;
  id?: string | number;
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
          const isActive = pathname === item.url;
          
          return (
            <li className="nav-item" key={index}>
              {item.isDisabled ? (
                <span className="nav-link nav-link-lg disabled">{item.text}</span>
              ) : (
                <Link href={item.url || '#'} className={`nav-link nav-link-lg ${isActive ? 'active' : ''}`}>
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
