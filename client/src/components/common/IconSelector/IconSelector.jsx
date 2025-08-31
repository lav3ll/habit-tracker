import React from 'react';
import './IconSelector.css';

// ✅ Import all images before the component
function importAll(r) {
  return r.keys().map((key) => ({ key, src: r(key) }));
}

const images = importAll(
  require.context('../../utils/character-icons', false, /\.png$/)
);

// ✅ Sort numerically by filename (1.png, 2.png, etc.)
images.sort((a, b) => {
  const an = parseInt(a.key.replace('./', '').split('.')[0], 10);
  const bn = parseInt(b.key.replace('./', '').split('.')[0], 10);
  return an - bn;
});

const IconSelector = ({ value, onSelect }) => {
  return (
    <div className='row g-3 test'>
      {images.slice(0, 8).map(({ key, src }) => (
        <div
          key={key}
          className={`col-3 p-0 ${value === src ? 'selected' : ''}`}
        >
          <button
            type='button'
            className='img-btn'
            onClick={() => onSelect(src)}
          >
            <img src={src} alt={key} className='icon-img' />
          </button>
        </div>
      ))}
    </div>
  );
};

export default IconSelector;
