var box=$(".checkbox");
box.change(function()
{
    $(this).parent().toggleClass("strikethrough");
});
var clickall=$(".checkall");
clickall.click(function()
{
    $(".tasklist").toggleClass("strikethrough");
    $(".checkbox").prop("checked", function(index,currentvalue)
    {
        return !currentvalue;
    });
});
