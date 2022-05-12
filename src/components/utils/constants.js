
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

const stateLocal = JSON.parse(localStorage.getItem('state'));
export const numberOfDayLocal = stateLocal.advancedMode.numberOfDay;
export const timeLocal = stateLocal.advancedMode.time;
export const checkedMainLocal = stateLocal.advancedMode.checkedMain;
export const checkedGBLocal = stateLocal.advancedMode.checkedGB;
export const checkedPercentLocal = stateLocal.advancedMode.checkedPercent;
export const disableLocal = stateLocal.advancedMode.disable;
export const disableGBLocal = stateLocal.advancedMode.disableGB;
export const disablePercentLocal = stateLocal.advancedMode.disablePercent;
export const checkedBasicLocal = stateLocal.basicMode.checkedBasic;
export const disableBasicLocal = stateLocal.basicMode.disableBasic;
export const timeBasicLocal = stateLocal.basicMode.timeBasic;
export const waitMinutesLocal = stateLocal.basicMode.waitMinutes;

const types = JSON.parse(localStorage.getItem('type'));
export const elem = types[Math.trunc(Math.random() * types.length)];