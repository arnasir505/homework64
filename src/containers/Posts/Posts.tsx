import React, { useCallback, useEffect, useState } from 'react';
import { Post, ApiPosts } from '../../types';
import axiosApi from '../../axiosApi';
import PostItem from '../../components/PostItem/PostItem';

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
    void fetchPosts();
  }, [fetchPosts]);

  return (
    <div className='container'>
      {posts.map((post) => (
        <PostItem />
      ))}
    </div>
  );
};

export default Posts;
