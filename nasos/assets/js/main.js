

// onblur 
// InputEvent


function logKey(e) {
    document.getElementById('log').innerHTML = "";
    log.textContent += ` ${e.code}`;
  }
document.addEventListener('keydown', logKey);
document.getElementsByClassName('btn')[0].addEventListener('mousedown', logKey);
// document.getElementsByClassName('btn').onclick = logKey(this);

let term = "dfghdföÅ";


function comparing(params) {
        let re = new RegExp("^[a-zA-ZäöåÄÖÅ]+$");
    if (re.test(term)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}


