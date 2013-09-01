$(function () {

    var infoLink1   = $('.about'),
        infoLink2   = $('.code'),
        infoLink3   = $('.follow'),
        about       = $('.intro'),
        social      = $('.social-icon-holder'),
        code        = $('.code-holder'),
        button      = $('.about, .code, .follow'),
        infoLinks   = [ $(infoLink1), $(infoLink2), $(infoLink3) ],
        infos       = [ $(about), $(code), $(social) ],
        i;

    function locateInfoLinks($infoLinks, type) {
      i = 1;
      $(infoLinks).each(function() {
        $(this).attr('data-'+type,i);
        i++;
      });
    }

    function locateInfos($infos, type) {
        i = 1;
        $(infos).each(function() {
            $(this).attr('data-'+type,i);
            i++;
        });
    }

    locateInfoLinks(infoLinks,  'ui-controller-id');
    locateInfos(infos, 'ui-controller-id');

    $(button).on('click', function() {
        var id     = $(this).attr('data-ui-controller-id');
        var open   = $(button).parent().next().find('*[data-ui-controller-id="'+id+'"]');
        var match  = $(open).attr('data-ui-controller-id');
        var others = $(button).parent().next().find('*[data-ui-controller-id]').not(open);
        var b      = $('.info-link').not(this);

        $(this).addClass('active');
        $(b).removeClass('active');

        if (id === match) {
            $(open).slideDown().fadeIn();
            $(others).slideUp().fadeOut();
        }
    });
});