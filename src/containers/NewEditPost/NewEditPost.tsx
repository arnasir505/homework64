import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { ApiPost } from '../../types';

const NewEditPost = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<ApiPost>({
    createdAt: '',
    description: '',
    title: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosApi.get('/posts/' + params.id + '.json');
    const post = response.data;
    setPost(post);
    setIsLoading(false);
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const date = new Date();
    setPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      createdAt: date.toISOString(),
    }));
  };

  const EditPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.put('/posts/' + params.id + '.json', post);
  };

  const AddPost = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.post('/posts.json', post);
    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      void fetchPost();
    }
  }, [fetchPost]);

  return params.id ? (
    <div className='container mt-3'>
      <h2>Edit Post</h2>
      <div className='card'>
        <form className='card-body d-flex flex-column gap-2'>
          <input
            className='form-control form-control-lg'
            name='title'
            placeholder='Title'
            value={post.title}
            onChange={(e) => handleChange(e)}
          />
          <textarea
            className='form-control'
            name='description'
            placeholder='Description'
            value={post.description}
            onChange={(e) => handleChange(e)}
          />
          <button
            type='submit'
            className='btn btn-primary align-self-baseline'
            onClick={(e) => EditPost(e)}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className='container mt-3'>
      <h2>Add Post</h2>
      <div className='card'>
        <form className='card-body d-flex flex-column gap-2'>
          <input
            className='form-control form-control-lg'
            name='title'
            placeholder='Title'
            value={post.title}
            onChange={(e) => handleChange(e)}
          />
          <textarea
            className='form-control'
            name='description'
            placeholder='Description'
            value={post.description}
            onChange={(e) => handleChange(e)}
          />
          <button
            type='submit'
            className='btn btn-primary align-self-baseline'
            onClick={(e) => AddPost(e)}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewEditPost;
