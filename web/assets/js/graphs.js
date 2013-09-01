$(document).ready(function() {

    var gitgraph = '<div class="project-title gitgraph-title">GitGraph.js</div><a href="https://github.com/sanderblue/gitGraph" target="_blank" class="github-page gitgraph-github"></a><span class="close-popover" rel="popover">&#215;</span><div class="project-description">' + "This is a jQuery plugin I built using Morris.js, Moment.js, and GitHub's developer API. It displays a GitHub repository's previous seven days of commit activity. It powers each of these graphs in this section. It is currently in development with future releases planned." + '</div><div id="chartgitgraph" /><div class="recent">' + "Recent GitHub Activity" + '</div>';
    var polymath = '<div class="project-title polymath-title">Polymath</div><a href="https://github.com/sanderblue/polymath" target="_blank" class="github-page polymath-github"></a><span class="close-popover" rel="popover">&#215;</span><div class="project-description">' + "Polymath is a multi-purpose PHP 5.3 Mathematics Library. Contains conversions, random number generators, and other interesting calculations." + '</div><div id="chartpolymath" /><div class="recent">' + "Recent GitHub Activity" + '</div>';
    var api      = '<div class="project-title api-title">REST API</div><a href="https://github.com/sanderblue/javascript-rest-api" target="_blank" class="github-page api-github"></a><span class="close-popover" rel="popover">&#215;</span><div class="project-description">' + "A REST API written in JavaScript using the Express.js framework for Node." + '</div><div id="chartapi" /><div class="recent">' + "Recent GitHub Activity" + '</div>';

    $('.pop-gitgraph').popover({
      html: true,
      content: gitgraph
    });

    $('.pop-polymath').popover({
      html: true,
      content: polymath
    });

    $('.pop-api').popover({
      html: true,
      content: api
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