import React from 'react';
import './auth.styles.scss';
import SignIn from '../../components/sing-In/sing-In';
import SignUp from '../../components/sing-up/sing-up';

const Auth = () => (
  <section className="auth">
    <SignIn />

    <SignUp />
  </section>
);

export default Auth;
