import { storiesOf } from '@storybook/react';
import React from 'react';

import useContrastBgImage from './index';

const Dummy = () => {
  const ref = useContrastBgImage(() => {
    alert('you clicked outside');
  });

  return (
    <div
      ref={ref}
      className="contrast-bg"
      style={{
        width: '100%',
        height: '50vh',
        backgroundSize: 'cover',
        backgroundImage: `url(
          'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
        )`
      }}
    >
      <h1 className="contrast-el">Watch this</h1>
    </div>
  );
};

storiesOf('Image', module).add('default', () => <Dummy />);
