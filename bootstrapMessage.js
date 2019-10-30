function Message(type, message, time = 2000, isClose = false) {
    if (!message) {
        message = type;
    }
    let closeHTML = '';
    if (isClose) {
        closeHTML = '<a href="#" class="close" data-dismiss="alert">&times;</a>';
    }
    let messageHTML = '<div class="alert alert-warning fade in" style="position: absolute; top: 34px; left: 50%; min-width: 200px;">' +
        closeHTML + message +
        '</div>';
    //必须先放入body里，否则removeClass和addClass失效
    $('body').append(messageHTML);
    $('.alert').css('margin-left',-$('.alert').outerWidth()/2+"px");
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

