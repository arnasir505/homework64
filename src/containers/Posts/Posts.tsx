import { useCallback, useEffect, useState } from 'react';
import { Post, ApiPosts } from '../../types';
import axiosApi from '../../axiosApi';
import PostItem from '../../components/PostItem/PostItem';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  let postsList = (
    <div className='mt-5'>
      <Spinner />
    </div>
  );

  if (posts.length > 0 && !isLoading) {
    postsList = (
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
    );
  } else if (posts.length === 0 && !isLoading) {
    postsList = (
      <h2 className='text-center mt-5'>
        You don't have any posts. <Link to={'/posts/add'}>Click here</Link> to
        create new post!
      </h2>
    );
  }
  return postsList;
};

export default Posts;
