
export const stateDefault = {
  basicMode: {
    checkedBasic: true,
    disableBasic: false,
    timeBasic: "07:30",
    waitMinutes: 60
  },
  advancedMode: {
    numberOfDay: '1',
    checkedMain: true,
    checkedGB: true,
    checkedPercent: false,
    disable: false,
    disableGB: false,
    disablePercent: false,
    time: "07:30"
  }
};

export const basic = '1';
export const advanced= '2';

if (!localStorage.getItem('type')) {
  let typeArr = ['1', '2'];
  localStorage.setItem('type', JSON.stringify(typeArr));
}
if (!localStorage.getItem('state')) {
  localStorage.setItem('state', JSON.stringify(stateDefault));
}

let stateLocal = JSON.parse(localStorage.getItem('state'));
export let numberOfDayLocal = stateLocal.advancedMode.numberOfDay;
export let timeLocal = stateLocal.advancedMode.time;
export let checkedMainLocal = stateLocal.advancedMode.checkedMain;
export let checkedGBLocal = stateLocal.advancedMode.checkedGB;
export let checkedPercentLocal = stateLocal.advancedMode.checkedPercent;
export let disableLocal = stateLocal.advancedMode.disable;
export let disableGBLocal = stateLocal.advancedMode.disableGB;
export let disablePercentLocal = stateLocal.advancedMode.disablePercent;
export let checkedBasicLocal = stateLocal.basicMode.checkedBasic;
export let disableBasicLocal = stateLocal.basicMode.disableBasic;
export let timeBasicLocal = stateLocal.basicMode.timeBasic;
export let waitMinutesLocal = stateLocal.basicMode.waitMinutes;

let types = JSON.parse(localStorage.getItem('type'));
export let elem = types[Math.trunc(Math.random() * types.length)];