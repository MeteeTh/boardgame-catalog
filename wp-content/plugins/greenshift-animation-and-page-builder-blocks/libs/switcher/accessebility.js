let gspb_switchers=document.querySelectorAll(".gspb__switcher-element");for(let i=0;i<gspb_switchers.length;i++)gspb_switchers[i].addEventListener("keydown",function(e){let t=void 0!==e.key?e.key:e.keyCode;("Enter"===t||13===t||["Spacebar"," "].indexOf(t)>=0||32===t)&&(e.preventDefault(),this.click())});