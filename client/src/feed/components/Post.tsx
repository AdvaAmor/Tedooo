import { forwardRef } from 'react';
import {
  PostContainer,
  PostHeader,
  UserDetailsContainer,
  UserName,
  ShopDetails,
  PostText,
  ImageGallery,
  PostImage,
  PostFooter,
  FooterTop,
  FooterDivider,
  FooterText,
  ActionButton,
} from '../style/feed.sc';
import { UserAvatarContainer, UserAvatarImg } from '../../app/style/navbar.sc';
import LikeIcon from '../../svg/LikeIcon';
import CommentIcon from '../../svg/CommentIcon';
import { timeAgo } from '../../common/utils';
import { TPost } from '../../type';

type PostProps = {
  post: TPost;
  editPost: (id: string)=> void;
};

const Post = forwardRef<HTMLDivElement, PostProps>(({ post, editPost }, ref) => {
  return (
    <PostContainer ref={ref}>
      <PostHeader>
        <UserDetailsContainer>
          <UserAvatarContainer>
            <UserAvatarImg src={post.avatar} alt="User Avatar" />
          </UserAvatarContainer>
          <div>
            <UserName>{post.username}</UserName>
            <ShopDetails>
              {post.shopName} · <span>{timeAgo(post.date)}</span>
            </ShopDetails>
          </div>
        </UserDetailsContainer>
        <PostText>{post.text}</PostText>
      </PostHeader>
      <ImageGallery>
        {post.images.slice(0, 2).map((img) => (
          <PostImage key={img} src={img} alt="Post content" />
        ))}
      </ImageGallery>
      <PostFooter>
        <FooterTop>
          <FooterText>
            <img src="likes.svg" alt="Likes icon" />
            {post.likes} Likes
          </FooterText>
          <FooterText>{post.comments} Comments</FooterText>
        </FooterTop>
        <FooterDivider />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <ActionButton $isActive={post.didLike} onClick={()=>editPost(post.id)}>
            <LikeIcon isActive={post.didLike} /> Like
          </ActionButton>
          <ActionButton $isActive={false}>
            <CommentIcon isActive={false} /> Comment
          </ActionButton>
        </div>
      </PostFooter>
    </PostContainer>
  );
});

export default Post;
