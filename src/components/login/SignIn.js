import { useState } from 'react';
import login from '../../pictures/login.png';
import { baseTheme } from '../../style/baseTheme';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px;
`;
const Img = styled.img`
    width: 700px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 450px;
    position: absolute;
    right: 20%;
    padding: 50px;
    background: ${baseTheme.colors.primary};
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;
const Title = styled.h2`
    font-weight: ${baseTheme.fontWeight.weight};
    font-size: ${baseTheme.fontSize.title}px;
`;
const Input = styled.input`
    width: 300px;
    height: 40px;
    border: 1px solid ${baseTheme.colors.border};
    box-sizing: border-box;
    border-radius: 8px;
`;
const Button = styled.button`
    height: 40px;
    background: ${baseTheme.colors.secondary};
    border-radius: 10px;
    border: none;
`;
const ButtonClear = styled.button`
    height: 40px;
    background: ${baseTheme.colors.primary};
    border-radius: 10px;
    border: 1px solid ${baseTheme.colors.border};
`;

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userEmail = (event) => {
        setEmail(event.target.value);
    };

    const userPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'test' && password === 'password') {
            localStorage.setItem('isAuthenticated', 'true');
            window.location.pathname = '/';
        }
    };

    const clearForm = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <Wrap>
            <Img src={login} />
            <Form>
                <Title>Welcome back</Title>
                <Input
                    type="next"
                    placeholder="Email"
                    onChange={userEmail}
                    value={email}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={userPassword}
                    value={password}
                />
                <ButtonClear onClick={clearForm}>clear</ButtonClear>
                <Button type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Wrap>
    );
};
