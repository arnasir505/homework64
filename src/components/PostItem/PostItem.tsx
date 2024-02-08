import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  createdAt: string;
  title: string;
}

const PostItem: React.FC<Props> = ({ id, createdAt, title }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <small className='text-secondary'>
          {format(createdAt, 'dd.MM.yyyy HH:mm')}
        </small>
        <h5 className='card-title my-2'>{title}</h5>
        <Link to={'/posts/' + id} className='btn btn-primary'>
          Read more &gt;&gt;
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
