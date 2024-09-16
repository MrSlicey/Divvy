let opacitySlider = document.getElementById('opacity');
let opacityLabel = document.getElementById('opacityPercentage');
let refDiv = document.getElementById('referenceDiv');
let color = document.getElementById('colorInput');
let radius = document.getElementById('radius');
let radiusP = document.getElementById('radiusPx');
let blurr = document.getElementById('blur');
let blurPx = document.getElementById('blurPx');
let shadowX = document.getElementById('shadowX');
let shadowY = document.getElementById('shadowY');
let shadowXP = document.getElementById('shadowxp');
let shadowYP = document.getElementById('shadowyp');
let shadowDiff = document.getElementById('shadowdiff');
let shadowDiffP = document.getElementById('shadowdiffp');

let blurSpot = document.getElementById('blurSpot');
let colorSpot = document.getElementById('colorSpot');
let radiusSpot = document.getElementById('radiusSpot');
let shadowSpot = document.getElementById('shadowSpot');

let red = 255;
let green = 255;
let blue = 255;
let a = 1;
let shadX = 0;
let shadY = 0;
let shadDiff = 0;
let styleAttrs = '';
let colorValue = 'rgba(255,255,255,1)';
let blurValue = '';
let shadowValues = '';
let radiusValue = '';

opacitySlider.addEventListener('input', () => {
    opacityLabel.innerHTML = `${opacitySlider.value}%`;
    a = opacitySlider.value / 100;
    colorValue = `background-color: rgba(255,255,255,${a})<br>`;
    colorSpot.innerHTML = colorValue;
    styleAttrs = styleAttrs + `background-color: rgba(${red}, ${green}, ${blue}, ${a});`;
    refDiv.setAttribute('style', `${styleAttrs}`);
})

color.addEventListener('input', () => {
    let hex = color.value;
    red = parseInt(hex.substring(1,3), 16);
    green = parseInt(hex.substring(3,5), 16);
    blue = parseInt(hex.substring(5,7), 16);
    console.log(color.value, red, green, blue);
    colorValue = `background-color: rgba(${red}, ${green}, ${blue}, ${a});<br>`;
    colorSpot.innerHTML = colorValue;
    styleAttrs = styleAttrs + `background-color: rgba(${red}, ${green}, ${blue}, ${a});`;
    refDiv.setAttribute('style', styleAttrs);
})

radius.addEventListener('input', () => {
    radiusP.innerHTML = `${radius.value}px`;
    styleAttrs = styleAttrs + `border-radius: ${radius.value}px;`;
    radiusValue = `border-radius: ${radius.value}px;<br>`;
    radiusSpot.innerHTML = radiusValue;
    refDiv.setAttribute('style', styleAttrs);
})

blurr.addEventListener('input', () => {
    blurPx.innerHTML = `${blurr.value}px`;
    styleAttrs = styleAttrs + `backdrop-filter:blur(${blurr.value}px);`;
    blurValue = `backdrop-filter:blur(${blurr.value}px);<br>`;
    blurSpot.innerHTML = blurValue;
    refDiv.setAttribute('style', styleAttrs);
})

shadowX.addEventListener('input', () => {
    shadX = shadowX.value;
    styleAttrs = styleAttrs + `box-shadow: ${shadX}px ${shadY}px ${shadDiff}px black;`;
    shadowValues = `box-shadow: ${shadX}px ${shadY}px ${shadDiff}px black;<br>`;
    shadowSpot.innerHTML = shadowValues;
    shadowXP.innerHTML = `${shadowX.value}px`
    refDiv.setAttribute('style', styleAttrs);
})

shadowY.addEventListener('input', () => {
    shadY = shadowY.value;
    styleAttrs = styleAttrs + `box-shadow: ${shadX}px ${shadY}px ${shadDiff}px black;`;
    shadowValues = `box-shadow: ${shadX}px ${shadY}px ${shadDiff}px black;<br>`;
    shadowSpot.innerHTML = shadowValues;
    shadowYP.innerHTML = `${shadowY.value}px`
    refDiv.setAttribute('style', styleAttrs);
})

shadowDiff.addEventListener('input', () => {
    shadDiff = shadowDiff.value;
    styleAttrs = styleAttrs + `box-shadow: ${shadX}px ${shadY}px ${shadDiff}px black;`;
    shadowValues = `box-shadow: ${shadX}px ${shadY}px ${shadDiff}px black;<br>`;
    shadowSpot.innerHTML = shadowValues;
    shadowDiffP.innerHTML = `${shadowDiff.value}px`
    refDiv.setAttribute('style', styleAttrs);
})

