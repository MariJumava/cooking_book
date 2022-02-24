import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrap = styled.div`
    position: absolute;
    top: 570px;
    width: 600px;
    height: 250px;
    margin-right: 35px;
    padding: 60px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
`;
const Title = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 24px;
`;

export const UserSettings = () => {
    const user = useSelector((state) => state.user);
    return (
        <Wrap>
            <Title>Personal information</Title>
            <p>Name</p>
            <p>{user.name}</p>
            <p>Email</p>
            <p>{user.email}</p>
        </Wrap>
    );
};
