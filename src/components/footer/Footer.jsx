import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../utils/context';
import { advanced, basic } from '../utils/constants';

const Footer = () => {
  const { state, checkedSave, checkedDiscard, setCheckedSave, stateDefault, setCheckedDiscard, setCheckedBasic, setDisableBasic, setTimeBasic,
    setWaitMinutes, setNumberOfDay, setCheckedMain, setCheckedGB, setCheckedPercent, setDisable, setDisableGB, setDisablePercent,
    setTime } = useContext(UserContext);

  const handleChange = () => {
    localStorage.setItem('state', JSON.stringify(state));
    setCheckedSave(true);
    setCheckedDiscard(true);
  };

  const handleChangeDiscard = () => {
    localStorage.setItem('state', JSON.stringify(stateDefault));
    setCheckedBasic(true);
    setDisableBasic(false);
    setTimeBasic("07:30");
    setWaitMinutes(60);
    setNumberOfDay('1');
    setCheckedMain(true);
    setCheckedGB(true);
    setCheckedPercent(false);
    setDisable(false);
    setDisableGB(false);
    setDisablePercent(false);
    setTime("07:30");
    setCheckedDiscard(true);
    setCheckedSave(true);
  };

  return (
    <div className="container-fluid p-2 ps-2 mt-4">
      <Stack direction="row" spacing={9} className = ' animate__animated animate__pulse'>
        
        <Stack direction="row" spacing={2}>
          <Button onClick={handleChange} sx={{ borderRadius: '40px' }} variant="contained" disabled={checkedSave} >Save</Button>
          <Button onClick={handleChangeDiscard} sx={{ borderRadius: '40px' }} variant="contained" disabled={checkedDiscard}>Discard</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Link to={basic}><Button sx={{ borderRadius: '40px' }} variant="outlined" > Basic</Button></Link>
          <Link to={advanced}><Button sx={{ borderRadius: '40px' }} variant="outlined"> Advanced</Button></Link>
        </Stack>
      </Stack>
    </div>
  )
}

export default Footer