import React, { FC } from 'react';
import { useCachingFetch } from '../caching-fetch-library/cachingFetch';
import { validateData } from './validation';
import Name from './Name';

interface Person {
  email: string;
  address: string;
  balance: string;
  created: string;
}

const Person: FC<{ person: Person, index: number }> = ({ person, index }) => {
  return (
    <div>
      <Name person={person} />
      <p>{person.email}</p>
      <p>{person.address}</p>
      <p>{person.balance}</p>
      <p>{person.created}</p>
    </div>
  );
};

export default Person;
