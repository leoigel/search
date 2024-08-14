import React, { useCallback, useEffect, useRef, useState } from 'react';

import useGetAllContries from '../hooks/useGetAllContries';

export const ListContries = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetAllContries();
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const lastCountryElementRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('Fetching next page');
          setLoading(true);
          fetchNextPage().finally(() => setLoading(false));
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage],
  );

  return (
    <div>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.countries.map((country, index) => (
            <div
              key={country.cca3}
              ref={
                page.countries.length === index + 1
                  ? lastCountryElementRef
                  : null
              }
            >
              {country.name.common}
            </div>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};
