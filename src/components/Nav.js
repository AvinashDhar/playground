import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  height: 25px;
  margin: 0 10px;
`;
function Nav() {
  const user = useSelector((state) => state.user.name);
  return (
    <Container>
      <h4>Shopper Stop</h4>
      {user ? (
        <ProfileContainer>
          <ProfileImage src="default.jpg" />
          <span>{user}</span>
        </ProfileContainer>
      ) : null}
    </Container>
  );
}

export default Nav;

// .profileContainer{
//   position: relative;
//   margin-left: 20px;
// }
// .profileContainer img{
//   border-radius: 50%;
//   height: 25px;
//   position: absolute;
//   left: -18px;
//   top:-20px
// }
// .username{
//   color: white;
//   font-size: 17px;
// }
