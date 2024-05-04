import React, { useState } from 'react';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Implement your logic for handling form submission here
        // e.g., send data to a backend server for authentication
        console.log('Username:', username);
        console.log('Password:', password); // Don't log password in production
        setUsername(''); // Clear form after submission (optional)
        setPassword('');
    };

    return (
        <div className="sign-in">
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <br />
            Username:
            <input type="text" id="username" name="username" />
            <br /><br></br>
            Password:
            <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <br /><br></br>
            <input type="submit" value="Submit" style={{ backgroundColor: 'darkcyan' }} />
        </form>
        </div>
    );
};

export default SignIn;
