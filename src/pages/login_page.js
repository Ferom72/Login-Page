import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {LoginContainer,
        Heading,FormContainer,
        Forms,
        Field,
        Inputs,
        ForgotLinkContainer,
        SubmitButton,
        Icons,
        ForgotLinkAnchor,
        LoginOptions,
        LoginText,
        OtherLogins,
        Images,
        OtherLoginsAnchor,
        SignUpLinkAnchor,
        SignUpContainer} from './CSS/login.js'

function Login_Page(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return(
        <LoginContainer>
            <FormContainer>
                <Heading>Login</Heading>
                <Forms>
                    <Field>
                        <Icons className='uil uil-at'></Icons>
                        <Inputs required id='email' placeholder='Email' type='text' onChange = {(e)=> setEmail(e.target.value)}/>
                    </Field>
                    <Field>
                        <Icons className='uil uil-lock-alt'></Icons>
                        <Inputs required id='password' placeholder='Password' type='password' onChange = {(e)=> setPassword(e.target.value)}/>
                    </Field>
                    <ForgotLinkContainer>
                        <ForgotLinkAnchor href=''>Forgot password?</ForgotLinkAnchor>
                    </ForgotLinkContainer>
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </Forms>
                <LoginOptions>
                    <LoginText>Or, login with...</LoginText>
                    <OtherLogins>
                        <OtherLoginsAnchor href=''><Images src='images\google.png'/></OtherLoginsAnchor>
                        <OtherLoginsAnchor href=''><Images src='images\facebook.png'/></OtherLoginsAnchor>
                        <OtherLoginsAnchor href=''><Images src='images\apple.png'/></OtherLoginsAnchor>
                    </OtherLogins>
                </LoginOptions>
                <SignUpContainer>
                    <Link to='/signup'><SignUpLinkAnchor href=''>Sign Up</SignUpLinkAnchor></Link>
                </SignUpContainer>
                
            </FormContainer>
        </LoginContainer>
    )
}

export default Login_Page;