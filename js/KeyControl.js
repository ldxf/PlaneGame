var keyCode = {
    keyUp: 38,
    keyDown: 40,
    keyLeft: 37,
    keyRight: 39,
    keyW: 87,
    keyS: 83,
    keyA: 65,
    keyD: 68,
    keySpace: 32,
    keyEnter: 13,
    keyEsc: 27,
    key0: 96


}

var keyStatus = {
    keyUpStatus: false,
    keyDownStatus: false,
    keyLeftStatus: false,
    keyRightStatus: false,
    keyWStatus: false,
    keySStatus: false,
    keyAStatus: false,
    keyDStatus: false,
    keySpaceStatus: false,
    keyEnterStatus: false,
    keyEscStatus: false,
    key0Status: false
}

function KeyControl(director) {
    // this.director = director;
    var stringControl="";
    $(document).keydown(function (e) {
        console.log(e.which);
        stringControl+=e.which;
        switch (e.which) {
            case keyCode.keyLeft:
                keyStatus.keyLeftStatus = true;
                break;
            case keyCode.keyRight:
                keyStatus.keyRightStatus = true;
                break;
            case keyCode.keyUp:
                keyStatus.keyUpStatus = true;
                break;
            case keyCode.keyDown:
                keyStatus.keyDownStatus = true;
                break;
            case keyCode.keyA:
                keyStatus.keyAStatus = true;
                break;
            case keyCode.keyD:
                keyStatus.keyDStatus = true;
                break;
            case keyCode.keyW:
                keyStatus.keyWStatus = true;
                break;
            case keyCode.keyS:
                keyStatus.keySStatus = true;
                break;
            case keyCode.keyEnter:
                keyStatus.keyEnterStatus = true;
                director.onPrepare(stringControl);
                stringControl="";
                break;
            case keyCode.keySpace:
                keyStatus.keySpaceStatus = true;
                break;
            case keyCode.key0:
                keyStatus.key0Status = true;
                break;
            case keyCode.keyEsc:
                keyStatus.keyEscStatus = true;
                logout();
                break;

        }
    }).keyup(function (e) {
        switch (e.which) {
            case keyCode.keyLeft:
                keyStatus.keyLeftStatus = false;
                break;
            case keyCode.keyRight:
                keyStatus.keyRightStatus = false;
                break;
            case keyCode.keyUp:
                keyStatus.keyUpStatus = false;
                break;
            case keyCode.keyDown:
                keyStatus.keyDownStatus = false;
                break;
            case keyCode.keyA:
                keyStatus.keyAStatus = false;
                break;
            case keyCode.keyD:
                keyStatus.keyDStatus = false;
                break;
            case keyCode.keyW:
                keyStatus.keyWStatus = false;
                break;
            case keyCode.keyS:
                keyStatus.keySStatus = false;
                break;
            case keyCode.keyEnter:
                keyStatus.keyEnterStatus = false;
                break;
            case keyCode.keySpace:
                keyStatus.keySpaceStatus = false;
                break;
            case keyCode.key0:
                keyStatus.key0Status = false;
                break;
            case keyCode.keyEsc:
                keyStatus.keyEscStatus = false;
                break;
        }
    });
}
