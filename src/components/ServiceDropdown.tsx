'use client';

import serviceLinks from '@/data/serviceLinks';

export default function ServiceDropdown({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    const match = href.match(/^\/hizmet\/([^.\/]+)\.html$/);
    if (match) {
      const service = decodeURIComponent(match[1].replace(/-/g, ' '));
      window.location.href = `/hizmet?service=${encodeURIComponent(service)}`;
      onNavigate?.();
    }
  };

  return (
    <ul className="dropdown-content bg-[#1a1d29] border border-gray-700 rounded w-56 shadow-lg z-50">
      {serviceLinks.map(({ name }) => {
        const fakeHtmlHref = `/hizmet/${name.toLowerCase().replace(/\s+/g, '-').replace(/ı/g, 'i')}.html`;

        return (
          <li key={name}>
            <a
              href={fakeHtmlHref}
              onClick={(e) => handleClick(e, fakeHtmlHref)}
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition"
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
