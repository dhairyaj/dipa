import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Header = styled.div`
    text-align: center;
    height: 20vh;
    background: #f5f5f5;
    padding: 3rem;
    color: teal;
    font-weight: 700;
    width: 100%;
`;

export const CreateTask = styled(Button)`
    background: linear-gradient(to right, teal, blue);
    margin-top: 1rem;
`;