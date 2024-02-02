import Link from 'next/link';

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, href }) => {
  return (
    <div>
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default NavItem;
