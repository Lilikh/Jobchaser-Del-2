import  { useState } from 'react';
import { useAuth } from '../AuthContext';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password);
    };

    return (
      
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="flex flex-col p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
                Sign In
            </button>
        </form>
    </div>
    );
};

export default SignIn;
