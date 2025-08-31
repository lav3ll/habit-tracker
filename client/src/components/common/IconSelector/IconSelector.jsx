import React from 'react';
import './IconSelector.css';

//Import all images
function importAll(r) {
  return r.keys().map((key) => ({ key, src: r(key) }));
}

const images = importAll(
  require.context('../../utils/character-icons', false, /\.png$/)
);

// sort images numerically
images.sort((a, b) => {
  const an = parseInt(a.key.replace('./', '').split('.')[0], 10);
  const bn = parseInt(b.key.replace('./', '').split('.')[0], 10);
  return an - bn;
});

const IconSelector = ({ inputs, setInputs }) => {
  return (
    <div className='row g-3'>
      {images.slice(0, 8).map(({ key, src }) => (
        <div key={key} className='col-3 p-0'>
          <div
            className='img-btn'
            role='button'
            onClick={() => setInputs({ ...inputs, avatar: src })}
          >
            <img src={src} alt={key} className='icon-img' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconSelector;
