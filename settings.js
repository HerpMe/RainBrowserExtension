import { openPopup, closePopup } from './popup.js';
const settingsPopupInfo = {title: "Settings", exitable: false};
const settingGroups = [
    "Rain",
    "Appearance",
    "Volume"
]
class setting {
    constructor(value, name, defValue){
        value = this.value;
        name = this.name;
        defValue = this.defValue;
    }
}
const settingTable = [
    
]

const settingsButton = document.querySelector("#settingsButton");

settingsButton.addEventListener("click", () => {
    openPopup(settingsPopupInfo);
});