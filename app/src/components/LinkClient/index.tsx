"use client";

import React from 'react';

interface LinkClientProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  download?: string; 
}

const LinkClient: React.FC<LinkClientProps> = ({ href = '#', children, className = '', title, download }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <a
      href={href}
      className={className}
      title={title}
      download={download} 
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkClient;
