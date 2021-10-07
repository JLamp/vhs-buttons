import styled from "styled-components";
import { LoadingButton } from "./LoadingButton";
import { Switch } from "@mui/material";
import { useState } from "react";

const SectionContainer = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & Button {
    margin-right: 16px;
  }
`;

export function LoadingButtonSection() {
  const [loading, changeLoading] = useState(false);

  function handleChange() {
    const STATE = loading;
    changeLoading(!STATE);
  }

  return (
    <SectionContainer>
      <h3>Loading Button</h3>
      <Switch onChange={handleChange} />
      <ButtonGroup>
        <LoadingButton
          variant="outlined"
          loading={loading}
          loadingText="Saving"
        />
      </ButtonGroup>
    </SectionContainer>
  );
}
