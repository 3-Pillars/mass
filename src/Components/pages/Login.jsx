import React, {useState} from "react";
import { useForm, } from "react-hook-form";
import "./App.css";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

      const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        inquiry: ""
      })
    
      const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}))
      }
    

    const onSubmit = (data) => {
        // const userData = JSON.parse(localStorage.getItem(data.email));
        // console.log(`user data: ${userData}, data: ${data.password}`)
        // if (userData) {
        //     if (userData.password === data.password) {
        //         console.log(userData.name + " You Are Successfully Logged In");
        //     } else {
        //         console.log("Email or Password is not matching with our record");
        //     }
        // } else {
        //     console.log("Email or Password is not matching with our record");
        // }
                // if (userData) {
           
        // } else {
        //     console.log("Email or Password is not matching with our record");
         if ('password' === data.password && 'user@email.com' === data.email) {
                console.log(" You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
    };

     let isFormComplete = formData.user_email && formData.password

    return (
        <>
            <div className="page-body">
                <h1 id="header-text">SIGN IN</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-section">
                        <div className='form-element'>
                            <label>EMAIL</label>
                        </div>
                        <div className='form-element'>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
                        </div>
                    </div>
                    <div className="form-section">
                        <div className='form-element'>
                            <label>PASSWORD</label>
                        </div>
                        <div className='form-element'>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}
                        </div>
                    </div>
                    <div id={isFormComplete ? 'submit-button-ready' : 'submit-button-not-ready'} onClick={isFormComplete ? sendEmail: null}>
                        <input id="submit-input" disabled={!isFormComplete} type="submit"value="LOGIN" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;