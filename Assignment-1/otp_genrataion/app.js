let otp = document.getElementsByClassName('otp')
console.log(otp)


let otp_element = '';
for (let i = 0; i < 4; i++) {
    otp_element += Math.floor(Math.random() *10);
}
alert(`otp is ${otp_element}`)

setTimeout(() => {
    otp[0].innerHTML = otp_element[0]
}, 500);

setTimeout(() => {
    otp[1].innerHTML = otp_element[1]
}, 1000);

setTimeout(() => {
    otp[2].innerHTML = otp_element[2]
}, 1500);

setTimeout(() => {
    otp[3].innerHTML = otp_element[3]
}, 2000);