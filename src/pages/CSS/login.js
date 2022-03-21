import styled from 'styled-components'

export const LoginContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
`

export const Heading = styled.h2`
    font-size: 2em;
    margin-bottom: 40px;
    font-weight: 700;
`

export const Icons = styled.i`
    color:#828da0;
    font-szie: 1.3em;
    margin-right: 10px;
    padding-bottom: 5px;
`

export const FormContainer = styled.div`
    z-index: 999;
    background: #fff;
    box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
    width: 350px;
    padding: 50px 40px;
    border-radius: 5px;
    overflow: hidden;
`

export const Forms = styled.form`

`

export const Field = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px  solid #eee;
    margin-bottom: 25px;
`

export const Inputs = styled.input`
   border:none;
   outline:none;
   background:none;
   width:100%;
   font-size:1em; 
   padding-bottom: 5px;
`

export const ForgotLinkContainer = styled.div`
    text-align:right;
    transform: translateY(-10px);
    font-size: 0.8em;
    font-weight:500;
`

export const ForgotLinkAnchor = styled.a`
    color: #0065ff; 
    text-decoration: none;  
`

export const SubmitButton = styled.button`
    background:#0065ff;
    color:#fff;
    border:none;
    outline:none;
    width:120px;
    padding:10px 30px;
    border-radius: 5px;
    font-size: 0.85em;
    font-weight: 500;
    margin-top: 5px;
    cursor: pointer;
`
export const NoSubmitButton = styled.button`
    background:#808080;
    color:#fff;
    border:none;
    outline:none;
    width:120px;
    padding:10px 30px;
    border-radius: 5px;
    font-size: 0.85em;
    font-weight: 500;
    margin-top: 5px;
    cursor: pointer;
`


export const LoginOptions = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const LoginText = styled.text`
    color: #828da0;
    font-size: 0.65em;
    margin: 25px 0;
`

export const OtherLogins = styled.div`
    display: flex;
`

export const OtherLoginsAnchor = styled.a`
    border: 1px solid #ccc;
    padding: 11px 32px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    transition: border 0.3s ease;

    &:hover{
       border: 1px solid #0065ff;
    }
`

export const Images = styled.img`
   width: 20px;
`

export const SignUpContainer = styled.div`
    padding-top: 1.5em;
    text-align:center;
`

export const SignUpLinkAnchor = styled.a`
    color: #0065ff; 
    text-decoration: none;
`
