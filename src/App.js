import './App.css';
import { Button } from './components/Button';
import styled from 'styled-components';
import { FavoriteButton } from './components/FavoriteButton';
import { ToggleButton } from './components/ToggleButton';
import { MakeButton } from './components/MakeButton';
import { LoadingButton } from './components/LoadingButton';
import { Switch } from '@mui/material';
import { LoadingButtonSection } from './components/LoadingButtonSection';

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
        <Button size="lg" variant='contained'/>
        <Button size="lg" variant='outlined' />
        <Button size="lg" variant='text' />
        <Button size="lg" variant='text'  iconPlacement="only"/>
      </ButtonGroup>
      <h4>Medium</h4>
      <ButtonGroup>
        <Button size="md" variant='contained' />
        <Button size="md" variant='outlined' />
        <Button size="md" variant='text' />
        <Button size="md" variant='text'  iconPlacement="only"/>
      </ButtonGroup>
      <h4>Small</h4>
      <ButtonGroup>
        <Button size="sm" variant='contained'/>
        <Button size="sm" variant='outlined'/>
        <Button size="sm" variant='text'/>
        <Button size="sm" variant='text'  iconPlacement="only"/>
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
