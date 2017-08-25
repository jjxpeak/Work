/**
 * Created by Peak on 2017/8/25.
 */
$(document).ready(function () {
    $.each(Goods,function (key,val) {
        $("#Goods").append('<option value="'+val.val+'" >'+val.name+'</option>');
    })
    $.each(Place,function (key,val) {
        $("#Start").append('<option value="'+val.val+'" >'+val.name+'</option>');
        $("#End").append('<option value="'+val.val+'" >'+val.name+'</option>');
    })
})

function getRatio(a) {
    var _this = $(a);
}