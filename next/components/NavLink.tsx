import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: Props) => {
  const activeParam = 'border-b-2 border-main';

  const { pathname } = useRouter();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href}>
      <a className={isActive ? `${className} ${activeParam}` : className}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
