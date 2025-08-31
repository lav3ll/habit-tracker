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
    <div className='mb-3'>
      <div className='row g-3 mb-2'>
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

      {/* 👇 Hidden input for validation */}
      <input
        type='text'
        name='avatar'
        value={value || ''}
        onChange={() => {}}
        style={{
          position: 'absolute',
          left: '-9999px',
          width: 0,
          height: 0,
          opacity: 0,
        }}
        tabIndex={-1}
      />
    </div>
  );
};

export default IconSelector;
