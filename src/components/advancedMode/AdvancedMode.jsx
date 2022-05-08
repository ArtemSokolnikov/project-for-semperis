import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useContext, useEffect } from 'react';
import style from '../../css_modules/advancedMode.module.css';
import { UserContext } from '../utils/context';

const AdvancedMode = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { numberOfDay, time, checkedMain, checkedGB, checkedPercent, disable, disableGB, disablePercent,
        setNumberOfDay, setTime, setCheckedMain, setCheckedGB, setCheckedPercent, setDisable,
        setDisableGB, setDisablePercent, checkedBasic, disableBasic, timeBasic, waitMinutes, setCheckedSave, setCheckedDiscard, numberOfDayLocal,
        timeLocal, checkedMainLocal, checkedGBLocal, checkedPercentLocal, disableLocal, disableGBLocal, disablePercentLocal,
        checkedBasicLocal, disableBasicLocal, timeBasicLocal, waitMinutesLocal } = useContext(UserContext);

    const handleChangeDay = (e) => {
        setNumberOfDay(e.target.value);
    };
    const handleChangeTime = (e) => {
        setTime(e.target.value);
    };

    const handleCheckMainChange = () => {
        if (checkedMain) {
            setCheckedMain(false);
            setCheckedGB(false);
            setCheckedPercent(false);
            setDisable(true);
            setDisableGB(true);
            setDisablePercent(true);
            setCheckedDiscard(false);
            setCheckedSave(false);
        } else {
            setCheckedMain(true);
            setCheckedGB(true);
            setDisable(false);
            setDisableGB(false);
            setDisablePercent(false);
            setCheckedDiscard(false);
            setCheckedSave(false);
        }
    };

    const handleCheckGBChange = () => {
        if (!checkedGB && checkedPercent) {
            setCheckedGB(true);
            setCheckedPercent(false);
            setDisable(false);
            setCheckedDiscard(false);
            setCheckedSave(false);
        } else {
            setCheckedGB(false);
            setCheckedPercent(true);
            setDisable(false);
            setCheckedDiscard(false);
            setCheckedSave(false);
        } 
    };

    const handleCheckPercentChange = () => {
        if (!checkedPercent && checkedGB) {
            setCheckedPercent(true);
            setCheckedGB(false);
            setDisable(false);
            setCheckedDiscard(false);
            setCheckedSave(false);
        } else {
            setCheckedPercent(false);
            setCheckedGB(true);
            setDisable(false);
            setCheckedDiscard(false);
            setCheckedSave(false);
        } 
    };

    useEffect(
        () => {
            if (numberOfDay !== numberOfDayLocal || time !== timeLocal || checkedMain !== checkedMainLocal ||
                checkedGB !== checkedGBLocal || checkedPercent !== checkedPercentLocal || disable !== disableLocal ||
                disableGB !== disableGBLocal || disablePercent !== disablePercentLocal || checkedBasic !== checkedBasicLocal ||
                disableBasic !== disableBasicLocal || timeBasic !== timeBasicLocal || waitMinutes !== waitMinutesLocal) {
                setCheckedSave(false);
                setCheckedDiscard(false);
            }
        }, [numberOfDay, numberOfDayLocal, setCheckedSave, setCheckedDiscard, time, timeLocal, checkedMain, checkedMainLocal,
        checkedGB, checkedGBLocal, checkedPercent, checkedPercentLocal, disable, disableLocal, disableGB, disableGBLocal,
        disablePercent, disablePercentLocal, checkedBasic, checkedBasicLocal, disableBasic, disableBasicLocal, timeBasic,
        timeBasicLocal, waitMinutes, waitMinutesLocal
    ])

    return (
        <>
            <div className={style.title}>Server data disk space</div>
            <span className={style.report}>
                <Checkbox {...label}
                    checked={checkedMain}
                    onChange={handleCheckMainChange} />
                <span className={style.time}>Send weekly disk space alert at </span>
                <FormControl variant="standard" sx={{ ml: 3, mt: 0.5, minWidth: 120 }} disabled={disable}>
                    <InputLabel id="demo-simple-select-standard-label">Day of week</InputLabel>
                    <Select
                        sx={{ mb: 3 }}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={numberOfDay}
                        onChange={handleChangeDay}
                        label="Tickets">
                        <MenuItem value={1}>Sunday</MenuItem>
                        <MenuItem value={2}>Monday</MenuItem>
                        <MenuItem value={3}>Tuesday</MenuItem>
                        <MenuItem value={4}>Wednesday</MenuItem>
                        <MenuItem value={5}>Thursday</MenuItem>
                        <MenuItem value={6}>Friday</MenuItem>
                        <MenuItem value={7}>Saturday</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="time"
                    label="Time"
                    type="time"
                    value={time}
                    onChange={handleChangeTime}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{ width: 100, ml: 3 }}
                    disabled={disable}
                />
                <span className={style.time}>when disk space has dropped below:</span>
            </span>
            <div>
                <Checkbox {...label}
                    sx={{ ml: 5 }}
                    checked={checkedGB}
                    onChange={handleCheckGBChange}
                    disabled={disableGB} />
                <span className={style.time}>1 GB </span>
            </div>
            <div>
                <Checkbox {...label}
                    sx={{ ml: 5 }}
                    checked={checkedPercent}
                    onChange={handleCheckPercentChange}
                    disabled={disablePercent} />
                <span className={style.time}>5 % </span>
            </div>

        </>
    )
}

export default AdvancedMode