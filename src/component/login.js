
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../shared/authService";

export const Login = () => {
    
    const navigate = useNavigate();
   const [phone, setphone] = useState('');
   const [password, setPassword] = useState('');
  
    const handlesubmit = async(e)=>{
        e.preventDefault();

       try {
        await loginUser(phone, password)
        navigate('/dashboard');
       } catch (error) {
        console.log(error)
       }
      
    }
   
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handlesubmit}>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" name="phone" className="form-control" value={phone} onChange={(e)=> setphone(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                        </div>
                        <button className="mt-2 mb-2 btn btn-primary">Submit</button>
                        <p>
                            <Link to={'/'}>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}