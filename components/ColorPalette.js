import styled from "styled-components";

export default function ColorPalette({ colors }) {
  return (
    <div>
      <h3>Color Palette</h3>
      <ColorList>
        {colors.map((color) => (
          <li key={color}>
            <ColorCircle $color={color} />
            <p>{color}</p>
          </li>
        ))}
      </ColorList>
    </div>
  );
}
const ColorList = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
`;

const ColorCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;
