import React, { useEffect, useRef } from 'react';

import styles from './Drawer.module.scss';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, children, size = 300, direction = 'left', className = '' }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  const handleClickInside = () => {
    onClose();
  };

  return (
    <>
      <div className={`${styles.drawerOverlay} ${open ? styles.open : ''}`}></div>
      <div
        ref={drawerRef}
        className={`${styles.drawer} ${styles[direction]} ${open ? styles.open : ''} ${className}`}
        style={{ width: size }}
        onClick={handleClickInside}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
