import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(name || 'guest');
          navigate('/');
        }}
        className="bg-gray-800 p-8 rounded text-white"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="p-2 text-black"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="block mt-4 bg-sky-500 px-4 py-2 rounded">
          Sign in
        </button>
      </form>
    </div>
  );
}
