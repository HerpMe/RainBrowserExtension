const rainContainer = document.querySelector(".rain");

function spawnRain()
{
    let drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    drop.style.top =  + "px";
    rainContainer.append(drop);
    setTimeout(() => rainContainer.removeChild(drop), 500)
    requestAnimationFrame(spawnRain);
}

spawnRain();