import React,{useState} from 'react'
import {LoginContainer,
    Heading,FormContainer,
    Forms,
    Field,
    Inputs,
    SubmitButton,
    Icons,
    LoginOptions,
    LoginText,
    OtherLogins,
    Images,
    OtherLoginsAnchor,
    NoSubmitButton} from './CSS/login.js'


function SignUp_Page(){
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [checkPassword,setCheckPassword] = useState('')

    const equal = password != checkPassword ? false : true;

    return(
        <LoginContainer>
            <FormContainer>
                <Heading>Sign Up</Heading>
                <Forms>
                    <Field>
                        <Icons className='uil uil-at'></Icons>
                        <Inputs required id='email' placeholder='Email' type='text' onChange = {(e)=> setEmail(e.target.value)}/>
                    </Field>
                    <Field>
                        <Icons className='uil uil-lock-alt'></Icons>
                        <Inputs required id='name' placeholder='Full name' type='text' onChange = {(e)=> setName(e.target.value)}/>
                    </Field>
                    <Field>
                        <Icons className='uil uil-lock-alt'></Icons>
                        <Inputs required id='password' placeholder='Password' type='password' onChange = {(e)=> setPassword(e.target.value)}/>
                    </Field>
                    <Field>
                        <Icons className='uil uil-lock-alt'></Icons>
                        <Inputs required id='check' placeholder='Confirm passsword' type='password' onChange = {(e)=> setCheckPassword(e.target.value)}/>
                    </Field>
                    {equal === true ? <SubmitButton type ='submit'>Sign Up</SubmitButton> : <NoSubmitButton type ='submit'>Sign Up</NoSubmitButton>}
                </Forms>
                <LoginOptions>
                    <LoginText>Or, sign up with email...</LoginText>
                    <OtherLogins>
                        <OtherLoginsAnchor href=''><Images src='images\google.png'/></OtherLoginsAnchor>
                        <OtherLoginsAnchor href=''><Images src='images\facebook.png'/></OtherLoginsAnchor>
                        <OtherLoginsAnchor href=''><Images src='images\apple.png'/></OtherLoginsAnchor>
                    </OtherLogins>
                </LoginOptions>
            </FormContainer>
        </LoginContainer>
    )
}

export default SignUp_Page