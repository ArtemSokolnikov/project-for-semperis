import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import React, { useContext } from 'react';
import style from '../../css_modules/basicMode.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { UserContext } from '../utils/context';

const BasicMode = () => {
    const { checkedBasic, disableBasic, timeBasic, waitMinutes, setCheckedBasic,
        setDisableBasic, setTimeBasic, setWaitMinutes,setCheckedDiscard,setCheckedSave } = useContext(UserContext);

    const handleChange = () => {
        if (checkedBasic) {
            setCheckedBasic(false);
            setDisableBasic(true);
            setCheckedDiscard(false);
            setCheckedSave(false);
        } else {
            setCheckedBasic(true);
            setDisableBasic(false);
            setCheckedDiscard(false);
            setCheckedSave(false);
        }
    };
    
    const handleChangeTime = (e) => {
        setTimeBasic(e.target.value);
        setCheckedDiscard(false);
        setCheckedSave(false);
    };
    const handleChangeMinutes = (e) => {
        setWaitMinutes(e.target.value);
        setCheckedDiscard(false);
        setCheckedSave(false);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
            <div className={style.title}>Daily health report</div>
            <span className={style.report}>
                <Checkbox {...label}
                    checked={checkedBasic}
                    onChange={handleChange}
                />
                <span className={style.time}>Send daily health report at:</span>
                <TextField
                    disabled={disableBasic}
                    id="time"
                    label="Time"
                    type="time"
                    value={timeBasic}
                    onChange={handleChangeTime}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{ width: 100, ml: 3 }}
                />
            </span>

            <div className={style.title}>Monitor service</div>
            <span className={style.report}>
                <span className={style.time}>Wait</span>
                <Box sx={{ width: 150, ml: 3, mr: 3, mt: 1 }}>
                    <Slider
                        aria-label="Time"
                        value={waitMinutes}
                        onChange={handleChangeMinutes}
                        valueLabelDisplay="auto"
                        step={30}
                        marks
                        min={30}
                        max={120}
                        disabled={disableBasic}
                    />
                </Box>
                <span className={style.time}>minutes before sending repetitive email alerts</span>
            </span>
        </>
    )
}

export default BasicMode