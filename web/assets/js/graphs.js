$(document).ready(function() {

    $('.pop-gitgraph').popover({
        html: true,
        content: $('#project-gitgraph').html(),
        placement: function (popover_element) {
            if ($(window).width() < 768) {
                return 'bottom';
            } else {
                return 'right';
            }
        }
    });

    $('.pop-polymath').popover({
        html: true,
        content: $('#project-polymath').html(),
        placement: function (popover_element) {
            if ($(window).width() < 768) {
                return 'bottom';
            } else {
                return 'right';
            }
        }
    });

    $('.pop-api').popover({
        html: true,
        content: $('#project-api').html(),
        placement: function (popover_element) {
            if ($(window).width() < 768) {
                return 'bottom';
            } else {
                return 'right';
            }
        }
    });

    $('.pop-angularexpress').popover({
        html: true,
        content: $('#project-angularexpress').html(),
        placement: function (popover_element) {
            if ($(window).width() < 768) {
                return 'bottom';
            } else {
                return 'right';
            }
        }
    });

    $('.pop-gitgraph').on('click', function () {

        $("#chartgitgraph").gitGraph({
            html: "chartgitgraph",
            user: "sanderblue",
            repo: "gitgraph"
        });

        $('.close-popover').on('click', function () {
            $('.pop-gitgraph').popover('toggle');
        });

        $('.pop-polymath, .pop-api, .pop-angularexpress').popover('hide');
    });

    $('.pop-polymath').on('click', function () {

        $('#chartpolymath').gitGraph({
            html: 'chartpolymath',
            user: 'sanderblue',
            repo: 'polymath'
        });

        $('.close-popover').on('click', function () {
            $('.pop-polymath').popover('toggle');
        });

        $('.pop-gitgraph, .pop-api, .pop-angularexpress').popover('hide');
    });

    $('.pop-api').on('click', function () {

        $("#chartapi").gitGraph({
            html: 'chartapi',
            user: 'sanderblue',
            repo: 'javascript-rest-api'
        });

        $('.close-popover').on('click', function () {
            $('.pop-api').popover('toggle');
        });

        $('.pop-gitgraph, .pop-polymath, .pop-angularexpress').popover('hide');
    });

    $('.pop-angularexpress').on('click', function () {

        $("#chartangularexpress").gitGraph({
            html: 'chartangularexpress',
            user: 'sanderblue',
            repo: 'angular-express-mysql'
        });

        $('.close-popover').on('click', function () {
            $('.pop-angularexpress').popover('toggle');
        });

        $('.pop-gitgraph, .pop-polymath, .pop-api').popover('hide');
    });
});