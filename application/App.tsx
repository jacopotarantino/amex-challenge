import React, { FC, useState } from 'react';
import {
  preloadCachingFetch,
  useCachingFetch,
  Cache,
  CachingFetch
} from '../caching-fetch-library/cachingFetch';
import Person from './Person';
import { validateData } from './validation';

type Application = FC & {
  preLoadServerData: () => Promise<void>;
};

const preloadUrl = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole&seed=123';

const App: Application = () => {
  const [data, setData] = useState<any>(Cache.has(preloadUrl) ? Cache.get(preloadUrl) : []);
  const [isLoading, setLoading] = useState(Cache.has(preloadUrl) ? false : true);
  
  useCachingFetch(preloadUrl).then((cachedData: CachingFetch) => {
    setData(cachedData.data);
    setLoading(false);
    validateData(cachedData.data);
  }).catch(reason => {
    return <div>Error: {reason}</div>
  });

  return (
    <div>
      <h1>Welcome to the People Directory</h1>
      {isLoading 
          ? <div>Loading...</div>
          : data.map((person: any, index: number) => (
              <Person person={person} key={person.email} index={index} />
            ))
      }
    </div>
  );
};

App.preLoadServerData = async () => {
  await preloadCachingFetch(preloadUrl);
};

export default App;
