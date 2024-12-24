import { useCallback,useRef } from 'react';
import {addViewedPosts} from '../../api';


const useImpressionTracking = () => {
  const viewedPostsRef = useRef(new Set<string>());

  const trackImpression = async(id: string) => {
    try {
      if (!viewedPostsRef.current.has(id)) {
        await addViewedPosts(id);

        viewedPostsRef.current.add(id);
      };
    }catch (error) {
      console.error(`Failed to track impression for item ${id}:`, error)
    }
  };
 
  const postRefCallback = useCallback(
    (node: HTMLDivElement, id: string) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            trackImpression(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(node);

      return () => observer.disconnect();
    },[]);

  return { postRefCallback };
};

export default useImpressionTracking;

