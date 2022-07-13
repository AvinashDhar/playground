import styled from 'styled-components';

export const Input = styled.input`
border: none;
background: transparent;
background-color: #6b7589;
border: 1px solid #444;
color: #fff;
padding: 5px;
margin: 2px;
&:focus{
    outline: none;
}
&::placeholder {
  color: #fff;
}
`;