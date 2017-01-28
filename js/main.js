jQuery(function ($) {
    $('.more-desti-btn').on('click', function () {
        $('.destinations .more-destinations:first').removeClass('more-destinations');
        if (!$('.destinations .row').hasClass('more-destinations')) {
            $('.more-desti-btn').hide()
        }
    });

    $('.more-boats-btn').on('click', function () {
        $('.featured-boats .more-boats:first').removeClass('more-boats');
        if (!$('.featured-boats .row').hasClass('more-boats')) {
            $('.more-boats-btn').hide()
        }
    });

    $('.modal-destination').on('click', function () {
        var a = $('h2', this).text(),
            b = $('p', this).text(),
            c = $("<p></p>").text(b);

        $('#destination h2').text(a);
        $('#destination h2').append(c)
    })
});

