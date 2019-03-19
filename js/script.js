const container = document.querySelector('.colors-container');
const colorAmountSubmit = document.querySelector('.color-amount-submit');
const btn = document.querySelector("button");
btn.addEventListener("click",colorGenerator);

function colorGenerator() {
        let colorAmount = colorAmountSubmit.value;
        container.innerHTML = '';
        for (i = 1; i <= colorAmount; i++) {
                let box = document.createElement("div");
                let color = randomHexaNumberGenerator();
                box.style.backgroundColor = color;
                box.className = "box";
                box.innerHTML = color;
                box.addEventListener("click",copyToClipboard);
                container.appendChild(box);
        }
        }

function randomHexaNumberGenerator() {
        var hexaNumber = '#';
        var possible = "abcdef0123456789";
        for (j = 0; j < 6; j++) {
          hexaNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return hexaNumber;
        }

const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = event.target.innerHTML;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showCopiedText();
        };

function showCopiedText() {

        let message = document.createElement("h1");
        message.innerHTML = 'COPIED';
        message.className = 'message';
        document.body.appendChild(message);
        fadeOutEffect(message);
}

function fadeOutEffect(target) {
        let fadeTarget = target;
        let fadeEffect = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                        fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                        fadeTarget.style.opacity -= 0.03;
                } else {
                        clearInterval(fadeEffect);
                }
        }, 45);
        setTimeout(function(){
                document.querySelector('.message').remove();
                },1500);
}

