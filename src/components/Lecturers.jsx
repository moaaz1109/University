import styled from "styled-components";
import { LecturerDoc } from "../data";
import Lectrurer from "./Lectrurer";

const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Lecturers = () => {
  return (
    <Container>
      {LecturerDoc.map((item) => (
        <Lectrurer item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Lecturers;
