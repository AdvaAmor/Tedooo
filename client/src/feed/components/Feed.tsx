import { StyledContainer, MsgText } from '../style/feed.sc';
import Post from '../components/Post';
import { useState, useCallback } from 'react';
import useInfiniteScrolling from './useInfiniteScrolling';
import useImpressionTracking from './useImpressionTracking';

const Feed = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { data, hasMore, loading, error, setData } = useInfiniteScrolling(pageNumber);
  const { postRefCallback } = useImpressionTracking();

  const editPost = (id: string) => {
    const updatedPosts = data.map((post) =>
      post.id === id
        ? { ...post, didLike: !post.didLike, likes: post.didLike ? post.likes - 1 : post.likes + 1 }
        : post
    );
    setData(updatedPosts);
  };

    const lastPostRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 6);
        }
      });

      if (node) observer.observe(node);
      return () => observer.disconnect();
    },
    [loading, hasMore]
  );

  return (
    <StyledContainer>
      {data.map((post, index) => {
        const ref = (data.length === index + 1 && hasMore)? lastPostRef : (node: HTMLDivElement) => postRefCallback(node, post.id);
        return <Post key={post.id} ref={ref} post={post} editPost={editPost} />;
      })}
      <MsgText>{loading && 'Loading...'}</MsgText>
      <MsgText>{error && 'Error'}</MsgText>
    </StyledContainer>
  );
};

export default Feed;


