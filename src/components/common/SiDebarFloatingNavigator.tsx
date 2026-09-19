import React from 'react';
import './SiDebarFloatingNavigator.css';

interface SiDebarFloatingNavigatorProps {
  visible?: boolean;
}

export default function SiDebarFloatingNavigator({
  visible = true,
}: SiDebarFloatingNavigatorProps) {
  if (!visible) return null;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="si-debar-floating-nav"
      aria-label="Navigasi SI Debar"
    >
      <button
        type="button"
        className="si-debar-floating-btn"
        onClick={scrollTop}
        aria-label="Ke atas"
        title="Ke atas"
      >
        ↑
      </button>

      <button
        type="button"
        className="si-debar-floating-btn"
        onClick={scrollBottom}
        aria-label="Ke bawah"
        title="Ke bawah"
      >
        ↓
      </button>
    </div>
  );
}
