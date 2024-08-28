import React, { FC } from 'react';
import { useCachingFetch } from '../caching-fetch-library/cachingFetch';
import { validateData } from './validation';

const Name: FC<{ person: any }> = ({ person }) => {
  return (
    <div>
      <h2>
        {person.first} {person.last}
      </h2>
    </div>
  );
};

export default Name;
