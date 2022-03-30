import './AddPost.css';
import useForm from './useForm';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {
  const [formData, setFormData] = useForm({ title: '', body: '' });
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:80/posts', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Something went wrong' + response.status);
      }
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form id="addPost" onSubmit={onSubmit}>
      <label>Title
        <input name="title" value={formData.title} onChange={setFormData} />
      </label>
      <label>Body
        <textarea name="body" value={formData.body} onChange={setFormData}></textarea>
      </label>
      <button>add Post</button>
    </form>
  )
}