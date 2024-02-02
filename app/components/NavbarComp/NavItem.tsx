import Link from 'next/link';

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, href }) => {
  return (
    <div className="text-slate-950 dark:text-slate-50 tracking-widest">
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default NavItem;
