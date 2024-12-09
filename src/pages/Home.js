import { Link } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.color};
`;
const Home = () => {
  const { userId, password } = useContext(UserContext);
  return (
    <Container>
      <h1>여기는 홈 입니다.</h1>
      <p>가장 먼저 보이는 페이지입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <br />
      <Link to="/profile/frontend">Frontend 프로필</Link>
      <br />
      <Link to="/profile/backend">Backend 프로필</Link>
      <br />
      <Link to="/profile/dba">DBA 프로필</Link>
      <br />
      <Link to="/articles">게시판 목록</Link>
      <p>아이디 : {userId}</p>
      <p>패스워드 : {password}</p>
      <Link to="/setting">설정</Link>
      <br />
      <Link to="/firebase">이미지 올리기</Link>
      <br />
      <Link to="/material">Material-UI</Link>
      <br />
    </Container>
  );
};

export default Home;
