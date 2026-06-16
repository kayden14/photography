import React, { useState, useEffect } from 'react';

export default function Header({ links, logoHref = '/', logoText = 'FAITH' }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="position-fixed a-header-wrapper vw-100 px-0">
      <div className="container-fluid d-flex align-items-center justify-content-between a-header-size px-4">
        <div className="d-flex align-items-center justify-content-between w-100 w-md-auto">
          <a
            href={logoHref}
            className="a-nav-link a-text-link a-nav-logo-link"
            data-mouse="link"
          >
            {logoText}
          </a>
          <button
            type="button"
            className={`a-mobile-nav-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <ul className={`a-nav-list d-flex align-items-center justify-content-end ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <li className="a-nav-link-wrapper" key={link.label}>
              <a
                href={link.href}
                className={`a-nav-link a-text-link ${link.extraClass || ''}`.trim()}
                data-mouse="link"
                {...(link.dataAnime ? { 'data-anime': 'scramble' } : {})}
                {...(link.dataNavigation ? { 'data-navigation': link.dataNavigation } : {})}
                {...(link.dataTarget ? { 'data-target': link.dataTarget } : {})}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
