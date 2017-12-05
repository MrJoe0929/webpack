
import layer from "./com/layer/layer.js";
import ejs from "./com/data/tem.js";

document.body.innerHTML += layer;


// fetch('http://localhost:8888/api/list')
// .then((response) => {
//     return response.json();
// })
// .then((res) => {
//     document.body.innerHTML += ejs({data: res})
// })

// fetch('/web20/customer/address/default/autonew.do?device_id=3a8e4bceb289af47e600f477461850c3&env=web&fromSource=zhuye&platform=web&uuid=3a8e4bceb289af47e600f477461850c3&version=4.0.0.1')
// .then((response) => {
//     return response.json();
// })
// .then((res) => {
//     console.log(res);
//     document.body.innerHTML += ejs({data: res})
// })



let txt = document.getElementById('serach_text');
let serach = document.getElementById('serach');
serach.addEventListener('click', function() {
    fetch(`/rexxar/api/v2/book/${txt.value}`)
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        console.log(res);
    })
}, false)
