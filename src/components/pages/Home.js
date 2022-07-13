import React from 'react'
import Nav from '../Nav';
import Posts from '../Posts';
import ProfileEdit from '../ProfileEdit';
import Todos from '../Todos';
import styled from 'styled-components';
const NavbarContainer = styled.div`
height:10vh;
width:100%;
background-color:#3f75d9;
/* padding:5px; */
text-align:center;
font-weight:600;
display: flex;
align-items: center;
justify-content: center;
`;
const Container = styled.div`
background-color:#b4c8ed;
height: 90vh;
`;
const Wrapper = styled.div`
/* padding: 10px; */
display: flex;
height: 100%;
`;
const ProfileContainer = styled.div`
flex: 1;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const PostContainer = styled.div`
border-left: 1px solid #ddd;
border-right: 1px solid #ddd;
padding: 0 5px;
flex: 2;
height: 100%;
overflow-y: auto;
  &::-webkit-scrollbar {
        width:3px;
    }
`;
const TodoContainer = styled.div`
flex: 2;
height: 100%;
`;

function Home() {
  return (
    <div>
        <NavbarContainer>
            <Nav/>
        </NavbarContainer>
        <Container>
            <Wrapper>
                <ProfileContainer>
                    <ProfileEdit />
                </ProfileContainer>
                <PostContainer >
                    <Posts />
                </PostContainer>
                {/* <TodoContainer>
                    <Todos />
                </TodoContainer> */}
            </Wrapper>
        </Container>
    </div>
  )
}

export default Home