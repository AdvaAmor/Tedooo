import { TPost } from '../../type';
import { useEffect, useState,useRef } from 'react';
import { getPosts} from '../../api';


const useInfiniteScrolling = (pageNumber: number ) => {
  const firstVisitRef = useRef(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<TPost[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const updateData = async () => {
      if (firstVisitRef.current || pageNumber) {
        firstVisitRef.current = false;
        setLoading(true);
        setError(false);
        try {
          const res = await getPosts(pageNumber);
          setData(prevData => {
            return [...prevData, ...res.data];
          });
          setHasMore(res.hasMore);
          setLoading(false);
        } catch (err) {
          setError(true);
          setLoading(false);
        }
      }
    };
    updateData();
  }, [pageNumber]);


  return { loading, error, data, hasMore, setData };
};

export default useInfiniteScrolling;

