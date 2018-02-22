$( document ).ready(function() {
    if ($(window).width() < 800) {
        $(".nav").addClass('collapsed');
        $(".menuContents").slideUp(0, 'swing');
    }
    var dark = localStorage['dark'];
    if (dark == "true")
    {
        $("#themeswitch").prop("checked", true);
        GoDark();
    }
    else if (dark == "false")
    {
        $("#themeswitch").prop("checked", false);
        GoLight();
    }
    else
    {
        $("#themeswitch").prop("checked", true);
        GoDark();
    }
});
            
$( window ).resize(function() {
    //Fix the nav
    if ($(window).width() > 800)
    {
        if ($(".nav").hasClass('collapsed'))
        {
            $(".nav").removeClass('collapsed');
            $(".menuContents").slideDown(0, 'swing');
        }
    }
    else if ($(window).width() < 800)
    {
        if (!$(".nav").hasClass('collapsed'))
        {
            $(".nav").addClass('collapsed');
            $(".menuContents").slideUp(0, 'swing');
        }
    }
});

function toggleNav()
{
    if ($(".nav").hasClass('collapsed'))
    {
        $(".nav").removeClass('collapsed');
        $(".menuContents").slideDown(500, 'swing');
    }
    else
    {
        $(".menuContents").slideUp(500, 'swing');
        $(".nav").addClass('collapsed');
    }
}

function GoLight()
{
    localStorage['dark'] = "false";
    $( "body" ).removeClass("dark");
    $( "body" ).addClass("light");
}

function GoDark()
{
    localStorage['dark'] = "true";
    $( "body" ).removeClass("light");
    $( "body" ).addClass("dark");
}

function DoTheme()
{
    //REMEMBER TO SET THIS TO YOUR SWITCHERS ID
    if ($('#themeswitch').is(":checked"))
    {
        //Going off
        GoLight();
    }
    else
    {
        //Going on
        GoDark();
    }
}
