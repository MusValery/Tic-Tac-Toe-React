import React, { useState } from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

const SignIn = () => {
   const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
   });

   const { email, password } = userCredentials;

   const handleChange = (e) => {
       e.preventDefault();

       const { value, name } = e.target;

       setCredentials({
           ...userCredentials,
           [name]: value,
       });
   };

   const handleSubmit = async (e) => {
        e.preventDefault();

        setCredentials({
            email: '',
            password: '',
        });
   };

   return (
       <div className="sing-in">
           <h2 className="title">I have an account</h2>
           <span>Sing in with email and password</span>

           <form onSubmit={handleSubmit}>
               <FormInput
                    name="email"
                    value={email}
                    required
                    id="email"
                    label="Email"
                    handleChange={handleChange}
                />

                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    required
                    id="password"
                    label="Password"
                    handleChange={handleChange}
                  />

              <div className="buttons">
                  <CustomButton type="submit">Sing in</CustomButton>
                  <CustomButton isGoogleSignIn>Sing in with Google</CustomButton>
              </div>
           </form>
       </div>
   );
};
export default SignIn;