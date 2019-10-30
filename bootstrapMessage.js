function Message(type, message, time = 2000, isClose = false) {
    if (!message) {
        message = type;
    }
    let closeHTML = '';
    if (isClose) {
        closeHTML = '<a href="#" class="close" data-dismiss="alert">&times;</a>';
    }
    let messageHTML = '<div id="alertM" style="position: fixed; width: 100%; top: 34px; left:0; text-align: center;">' +
        '<div class="alert alert-warning fade in" style="min-width: 200px; margin: 0 auto; display: inline-block;">' +
        closeHTML + message +
        '</div></div>';
    //必须先放入body里，否则removeClass和addClass失效
    $('body').append(messageHTML);
    switch (type) {
        case 'success':
            success();
            break;
        case 'info':
            info();
            break;
        case 'warning':
            warning();
            break;
        case 'error':
            error();
            break;
        default:
            info();
    }
    delayClose(message, time);
}

function success() {
    $('.alert').removeClass().addClass('alert alert-success');
}

function info() {
    $('.alert').removeClass().addClass('alert alert-info');
}

function warning() {
    $('.alert').removeClass().addClass('alert alert-warning');
}

function error() {
    $('.alert').removeClass().addClass('alert alert-danger');
}

//延迟两秒关闭
function delayClose(message, time) {
    if (time !== 0) {
        setTimeout(function () {
            $(".alert").alert('close');
        }, time);
    }
}

