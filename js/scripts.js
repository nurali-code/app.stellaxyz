$('.btn-menu').on('click', function () {
    $(this).toggleClass('is__active');
    $('header nav, body').toggleClass('is__active');
})

$('.tab__btn').on('click', function (e) {
    $('.tab__btn').removeClass('is__active');
    $(this).addClass('is__active');
    const trId = $(this).attr('data-filter');
    $('.MuiStack-root .css-fjcmtc').hide()
    if (trId == 1) { $('.MuiStack-root .css-fjcmtc').fadeIn() }
    else {
        $('.MuiStack-root .css-fjcmtc').hide()
        $('[data-id=' + trId + ']').fadeIn()
    }
});

$('.position__btn').on('click', function (e) {
    $('.position__btn').removeClass('is__active');
    $(this).addClass('is__active');
    const trId = $(this).attr('data-possbtn');
    $('.position-title').css('display', 'none');
    $('[data-position=' + trId + ']').css('display', 'flex');
});
$('.leaderboard__tab').on('click', function (e) {
    if (window.innerWidth <= 1000) {
        $('.leaderboard__tab').removeClass('is__active');
        $(this).addClass('is__active');
        const trId = $(this).attr('data-boardbtn');
        $('[data-board]').hide();
        $('[data-board=' + trId + ']').fadeIn();
    } else { $('[data-board]').fadeIn(); }
});

function hideModals() {
    $('.modal').removeClass('is__active').fadeOut(300);
    $('body, .modal').removeClass('is__active');
};

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
        console.log(id);
        $('body').addClass('is__active');
    }

    $('.modal-close').on('click', () => { hideModals(); });

    $('[data-id], a.css-1fn1rmh, .css-16k6ata').on('click', () => { showModal('#modalWallet'); });

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.nav__item').length) ||
            ($(e.target).parents('.css-fjcmtc').length) ||
            ($(e.target).parents('.css-1fn1rmh').length) ||
            ($(e.target).parents('.css-16k6ata').length) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('css-fjcmtc')) ||
            ($(e.target).hasClass('css-16k6ata')) ||
            ($(e.target).hasClass('css-1fn1rmh')) ||
            ($(e.target).hasClass('modal-content'))
        )) { hideModals(); }
    });
});



