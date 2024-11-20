import React from 'react'

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <div className="text-end me-1">
      <button className="btn btn-outline-tertiary btn-lg" type="button" onClick={scrollToTop}>
        <span className="material-symbols-rounded" aria-hidden="true">
          arrow_upward
        </span>
        Volver arriba
      </button>
    </div>
  )
}

export default ScrollTopButton
