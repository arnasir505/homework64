import { useCallback, useEffect, useState } from 'react';
import { Post, ApiPosts } from '../../types';
import axiosApi from '../../axiosApi';
import PostItem from '../../components/PostItem/PostItem';
import Spinner from '../../components/Spinner/Spinner';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    const response = await axiosApi.get<ApiPosts | null>('/posts.json');
    const posts = response.data;
    if (posts) {
      setPosts(
        Object.keys(posts).map((id) => ({
          ...posts[id],
          id: id,
        }))
      );
    } else {
      setPosts([]);
    }
  }, []);

  useEffect(() => {
    try {
      void fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, [fetchPosts]);

  return posts.length > 0 ? (
    <div className='container mt-3 d-flex gap-3 flex-column'>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          createdAt={post.createdAt}
          title={post.title}
          id={post.id}
        />
      ))}
    </div>
  ) : (
    <div className='mt-5'>
      <Spinner />
    </div>
  );
};

export default Posts;
