$(document).ready(function() {

    $('.pop-gitgraph').popover({
      html: true,
      content: $('#project-gitgraph').html()
    });

    $('.pop-polymath').popover({
      html: true,
      content: $('#project-polymath').html()
    });

    $('.pop-api').popover({
      html: true,
      content: $('#project-api').html()
    });

    $('.pop-gitgraph').on('click', function () {

        $("#chartgitgraph").gitGraph({
            html: "chartgitgraph",
            user: "sanderblue",
            repo: "gitgraph"
        });

        $('.close-popover').on('click', function () {
            $('.pop-gitgraph').popover('hide');
        });

        $('.pop-polymath, .pop-api').popover('hide');
    });

    $('.pop-polymath').on('click', function () {

        $('#chartpolymath').gitGraph({
            html: 'chartpolymath',
            user: 'sanderblue',
            repo: 'polymath'
        });

        $('.close-popover').on('click', function () {
            $('.pop-polymath').popover('hide');
        });

        $('.pop-gitgraph, .pop-api').popover('hide');
    });

    $('.pop-api').on('click', function () {

        $("#chartapi").gitGraph({
            html: 'chartapi',
            user: 'sanderblue',
            repo: 'javascript-rest-api'
        });

        $('.close-popover').on('click', function () {
            $('.pop-api').popover('hide');
        });

        $('.pop-gitgraph, .pop-polymath').popover('hide');
    });
});