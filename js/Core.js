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

function getRatio() {
    var Goods = $("#Goods").val();
    var Num = $("#Number").val();
    var Start = $("#Start").val();
    var End = $("#End").val();
    var Ratio = $("#Ratio");
    var Result = $("#Result");
    var Formula = $("#Formula");
    var StartNum , EndNum, Distance = 0;
    if (Start == End ){
        return false;
    }
    if (!Num){
        console.log(Num);
        Num = 0;
    }
    $.each(Place,function (key,val) {
        if (val.val == Start){
            StartNum = Start.split('-')[0];
        }
        if (val.val == End){
            EndNum = End.split('-')[0];
        }
    })
    $.each(RatioVal,function (a, b) {
        if (b.key == Number(StartNum)){
            $.each(b.to,function(key , val){
                $.each(val.num, function(c,d){
                    if (d == Number(EndNum)){
                        Distance = val.val;
                    }
                })
            })
        }
    })
    Ratio.html(Distance);
    Result.html(((Num/Goods)*Distance).toFixed(2));
    Formula.html('('+Num+'/'+Goods+')*'+Distance);
}


