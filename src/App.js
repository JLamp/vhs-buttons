import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import styled from 'styled-components';
import {useState} from 'react';

import { Icon } from './components/Icon/Icon';
import { FavoriteButton } from './components/FavoriteButton';
import { ToggleButton } from './components/ToggleButton';
import { MakeButton } from './components/MakeButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & Button {
    margin-right: 16px;
  }
`;

const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px;
  background-color: #37373c;
  width: 240px;
  border-radius: 8px;
  & :not(:last-child){
    margin-right: 8px;
  }
`;

function App() {
  return (
    <Container>
      <h3>Button Examples</h3>
      <h4>Large</h4>
      <ButtonGroup>
        <Button size="lg" buttonStyle='contained' />
        <Button size="lg" buttonStyle='outlined' />
        <Button size="lg" buttonStyle='text' />
        <Button size="lg" buttonStyle='text'  iconPlacement="only"/>
      </ButtonGroup>
      <h4>Medium</h4>
      <ButtonGroup>
        <Button size="md" buttonStyle='contained' />
        <Button size="md" buttonStyle='outlined' />
        <Button size="md" buttonStyle='text' />
        <Button size="md" buttonStyle='text'  iconPlacement="only"/>
      </ButtonGroup>
      <h4>Small</h4>
      <ButtonGroup>
        <Button size="sm" buttonStyle='contained'/>
        <Button size="sm" buttonStyle='outlined'/>
        <Button size="sm" buttonStyle='text'/>
        <Button size="sm" buttonStyle='text'  iconPlacement="only"/>
      </ButtonGroup>
      <MakeButton />
      <FavoriteButton />
      <>
      <h3>Toggle Buttons</h3>
      <ToggleButtonContainer>
      <ToggleButton toggleOffIcon="podcast" toggleOnIcon="mute-audio" toggleOffLabel="Mute Audio" toggleOnLabel="Enable Audio"/>
      <ToggleButton toggleOffIcon="soapbox" toggleOnIcon="mute-video" toggleOffLabel="Disable Video" toggleOnLabel="Enable Video"/>
      <ToggleButton toggleOffIcon="private-user-sessions" toggleOnIcon="mute-screen" toggleOffLabel="Disable Screen Sharing" toggleOnLabel="Enable Screen Sharing"/>
      </ToggleButtonContainer>
      </>
    </Container>
  );
}

export default App;
