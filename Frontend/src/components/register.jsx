import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                alert("Registration successful");
                navigate("/auth/login");
            } else {
                alert(data.message || "Registration failed");
            }

        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div>
            <div className="registr">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">
                            Firstname
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            value={user.firstname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                            Lastname
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            value={user.lastname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>

                    <span>
                        Already have an account?{" "}
                        <Link to="/auth/login">Login here</Link>
                    </span>

                </form>
            </div>
        </div>
    );
}

export default Register;