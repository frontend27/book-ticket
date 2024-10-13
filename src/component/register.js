
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../shared/authService";

export const Register =()=>{
   
    const [user, setUser]= useState({
        name:'',
        phone:'',
        password:''
    })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmit = async(e)=>{
        e.preventDefault();
        await registerUser(user).then(()=> setUser({
            name:'',
            phone:'',
            password:''
        })).catch(err=> console.log(err))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" name="phone" className="form-control" value={user.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value={user.password} onChange={handleChange} required />
                        </div>
                        <button className="mt-2 mb-2 btn btn-primary">Submit</button>
                        <p>
                            <Link to={'/login'}>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}