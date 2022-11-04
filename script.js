function getCurrentDateTime() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (day < 10) {
        day = "0" + day;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    switch (month) {
        case 1: month = "Jan";
            break;
        case 2: month = "Feb";
            break;
        case 3: month = "Mar";
            break;
        case 4: month = "Apr";
            break;
        case 5: month = "May";
            break;
        case 6: month = "Jun";
            break;
        case 7: month = "Jul";
            break;
        case 8: month = "Aug";
            break;
        case 9: month = "Sep";
            break;
        case 10: month = "Oct";
            break;
        case 11: month = "Nov";
            break;
        case 12: month = "Dec";
            break;
        default: break;
    }

    document.getElementById("dateTime").innerHTML = month + ": " + day + " " + hours + ":" + minutes + ":" + seconds;
    setTimeout("getCurrentDateTime();", 1000);

}

getCurrentDateTime();

function changeColor(object) {
    let rgbColor = object.style.backgroundColor;
    let r = "", g = "", b = "";
    let k = 1;
    for (let i = 4; i < rgbColor.length; i++) {
        if (k == 1) {
            r = r + rgbColor[i];
            if (rgbColor[i + 1] == ",") {
                i += 2;
                k++;
            }
        }

        if (k == 2) {
            g = g + rgbColor[i];
            if (rgbColor[i + 1] == ",") {
                i += 2;
                k++;
            }
        }

        if (k == 3) {
            b = b + rgbColor[i];
            if (rgbColor[i + 1] == ")") {
                break;
            }
        }
    }

    let hexValues = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    let h = isNaN(r) ? "00" : hexValues[(r - r % 16) / 16] + hexValues[r % 16];
    let e = isNaN(g) ? "00" : hexValues[(g - g % 16) / 16] + hexValues[g % 16];
    let x = isNaN(b) ? "00" : hexValues[(b - b % 16) / 16] + hexValues[b % 16];

    let color = "#" + h + e + x;

    return document.getElementById("nail1").style.backgroundColor = color,
        document.getElementById("nail2").style.backgroundColor = color,
        document.getElementById("nail3").style.backgroundColor = color,
        document.getElementById("tile").style.backgroundColor = color;
}

function changeAdvice(object) {
    let text;

    switch (object.id) {
        case "firstAdvice": text = "If you are doing an uncut manicure, remove the burrs and push the cuticle away with an orange stick. Another option is to make an edged manicure and then maintain a neat appearance of the nail plate, regularly pushing the cuticle with an orange stick.";
            break;
        case "secondAdvice": text = "Massage improves the health of nails and makes them strong. A few drops of nourishing oil are enough for massage. Leave the oil on for a few minutes so that it starts to work, then treat your fingers with a cotton swab soaked in tonic.";
            break;
        case "thirdAdvice": text = "Before applying the nail polish, first go over the nail with a nutrient base (usually it is sold complete with varnish) and let it dry. This process is very important to protect the nail from the aggressive effects of harmful substances.";
            break;
        case "fourthAdvice": text = "Always wear latex or rubber gloves for housework. Many women consider it unnecessary to use them for housework and, in particular, for washing dishes. But this puts the nails in danger, for example, they can be scratched or broken.";
            break;
        default: text = "Unknown problem. Try reload this page and continue work. If not work after reload send massge for us manager.";
            break;
    }

    return document.getElementById("adviceText").innerHTML = text;
}

function showMenu() {
    let pop = document.getElementById("burgerMenuFrameId");
    let matchMediaQuery = window.matchMedia("(max-width: 639px)");
    if (matchMediaQuery.matches) {
        console
        pop.style.cssText = "position: absolute; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px;";
    } else {
        pop.style.cssText = "display: none; overflow: hidden;";
    }
    matchMediaQuery.addListener(showMenu);
}

function closeMenu() {
    let pop = document.getElementById("burgerMenuFrameId");
    pop.style.cssText = "display: none; overflow: hidden;";
}

function sendEmail() {
    console.log("Sending");
}