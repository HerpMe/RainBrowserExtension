const template = {title: "", exitable: true};
const popupContainer = document.querySelector(".popup");
const popupTitle = document.querySelector("#popupTitle");
const popupClose = document.querySelector("#popupClose");
let open = true;

export function openPopup(obj)
{
    if(!open)
    {
        popupContainer.style.visibility = "visible"
        popupContainer.classList.add("popupOpen")
        popupTitle.innerHTML = obj.title;
        if(obj.exitable)
        {
            popupClose.style.visibility = "hidden"
        }

        setTimeout(() => popupContainer.classList.remove("popupOpen"), 500);
        open = true;
    }
}

export function closePopup()
{
    if(open)
    {
        popupContainer.classList.add("popupClose")
        setTimeout(() => {
            popupContainer.classList.remove("popupClose");
            popupContainer.style.visibility = "hidden";
        }, 500);
        open = false;
    } 
}


popupClose.addEventListener("click", closePopup);
closePopup();