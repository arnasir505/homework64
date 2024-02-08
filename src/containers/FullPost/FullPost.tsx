import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ApiPost } from '../../types';
import axiosApi from '../../axiosApi';
import { format } from 'date-fns';
import Spinner from '../../components/Spinner/Spinner';

const FullPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<ApiPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosApi.get('/posts/' + params.id + '.json');
    const post = response.data;
    setPost(post);
    setIsLoading(false);
  }, [params.id]);

  const deletePost = async (id: string | undefined) => {
    await axiosApi.delete('/posts/' + id + '.json');
    navigate('/');
  };

  useEffect(() => {
    try {
      void fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, [fetchPost]);

  let postArea = (
    <div className='mt-5'>
      <Spinner />
    </div>
  );

  if (post && !isLoading) {
    postArea = (
      <div className='container mt-3'>
        <div className='card'>
          <div className='card-body'>
            <small className='text-secondary'>
              Created on: {format(post.createdAt, 'dd.MM.yyyy HH:mm')}
            </small>
            <h4 className='card-title'>{post.title}</h4>
            <p className='card-text'>{post.description}</p>
            <Link
              to={'/posts/' + params.id + '/edit'}
              className='btn btn-success'
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn btn-danger ms-2'
              onClick={() => deletePost(params.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  } else if (!post && !isLoading) {
    postArea = <h1 className='text-center mt-5'>Not Found!</h1>;
  }

  return postArea;
};

export default FullPost;
