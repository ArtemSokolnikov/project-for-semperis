import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdvancedUser from '../advancedUser/AdvancedUser';
import BasicUser from '../basicUser/BasicUser';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { advanced, basic, checkedBasicLocal, checkedGBLocal, checkedMainLocal, checkedPercentLocal, disableBasicLocal, disableGBLocal, disableLocal, disablePercentLocal, elem, numberOfDayLocal, stateDefault, timeBasicLocal, timeLocal, waitMinutesLocal } from '../utils/constants';
import { UserContext } from '../utils/context';

const HomePage = () => {

  const [numberOfDay, setNumberOfDay] = useState(numberOfDayLocal || '1');
  const [time, setTime] = useState(timeLocal || "07:30");
  const [checkedMain, setCheckedMain] = useState(checkedMainLocal || true);
  const [checkedGB, setCheckedGB] = useState(checkedGBLocal && true);
  const [checkedPercent, setCheckedPercent] = useState(checkedPercentLocal || false);
  const [disable, setDisable] = useState(disableLocal || false);
  const [disableGB, setDisableGB] = useState(disableGBLocal || false);
  const [disablePercent, setDisablePercent] = useState(disablePercentLocal || false);
  const [checkedBasic, setCheckedBasic] = useState(checkedBasicLocal || true);
  const [disableBasic, setDisableBasic] = useState(disableBasicLocal || false);
  const [timeBasic, setTimeBasic] = useState(timeBasicLocal || "07:30");
  const [waitMinutes, setWaitMinutes] = useState(waitMinutesLocal || 60);
  const [checkedSave, setCheckedSave] = useState(true);
  const [checkedDiscard, setCheckedDiscard] = useState(true);

  const state = {
    basicMode: {
      checkedBasic: checkedBasic,
      disableBasic: disableBasic,
      timeBasic: timeBasic,
      waitMinutes: waitMinutes
    },
    advancedMode: {
      numberOfDay: numberOfDay,
      checkedMain: checkedMain,
      checkedGB: checkedGB,
      checkedPercent: checkedPercent,
      disable: disable,
      disableGB: disableGB,
      disablePercent: disablePercent,
      time: time
    }
  };
  
  useEffect(() => {
    if (checkedBasic === true && disableBasic === true) {
      setCheckedBasic(false);
      setDisableBasic(true);
      setCheckedSave(true);
      setCheckedDiscard(true);
    }
    if (checkedMain === true && disable === true && disableGB === true && disablePercent === true) {
      setCheckedMain(false);
      setDisable(true);
      setDisableGB(true);
      setDisablePercent(true);
      setCheckedSave(true);
      setCheckedDiscard(true);
    }window.history.pushState(null, '', elem)}, [])

  return (
    <UserContext.Provider value={{
      state, numberOfDay, time, checkedMain, checkedGB, checkedPercent, disable, disableGB, disablePercent,
      setNumberOfDay, setTime, setCheckedMain, setCheckedGB, setCheckedPercent, setDisable,
      setDisableGB, setDisablePercent, checkedBasic, disableBasic, timeBasic, waitMinutes, setCheckedBasic,
      setDisableBasic, setTimeBasic, setWaitMinutes, checkedSave, setCheckedSave, checkedDiscard, setCheckedDiscard, numberOfDayLocal,
      timeLocal, checkedMainLocal, checkedGBLocal, checkedPercentLocal, disableLocal, disableGBLocal, disablePercentLocal,
      checkedBasicLocal, disableBasicLocal, timeBasicLocal, waitMinutesLocal,stateDefault
    }}>
      <Header />
      <Routes>
        {['/', basic].map(path => <Route key={path} path={path} element={<BasicUser />} />)}
        <Route path={advanced} element={<AdvancedUser />} />
      </Routes>
      <Footer />
    </UserContext.Provider>
  )
}
export default HomePage