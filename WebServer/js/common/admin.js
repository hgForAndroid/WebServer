$(function () {
    $(document).on("click", ".logout", function () {
        $.ajax({
            type: "GET",
            url: "/Account/Logout",
            dataType: "json",
            success: function (respond) {
                setStatus(respond);
                if (respond.Code == 0) {
                    window.location.href = "/Account/Index";
                }
            }
        });
    });
});

//=================================
function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0;
}
function setStatus(respond) {
    $("#Status").text(respond.Message);
    if (respond.Code) {
        if (typeof (respond.Result) == undefined) {
            return;
        }
        $("#Status").append("<br/>");
        $.each(respond.Result, function () {
            var str = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + JSON.stringify($(this)[0]) + "<br/>";
            $("#Status").append(str);
        });
    }
}

//=================================   //---------------新增------------------//
//========================================================
//在列表中查询
var searchlist = new Array();
var first = 1;
function search(searchStr) {
    searchStr = $.trim(searchStr);
    console.log("搜索词:");
    console.log(searchStr);
    if (searchStr.length == 0) {
        searchlist.each(function () {
            $(this).show();
        });
        return;
    }
    searchlist.each(function () {
        var item = $(this);
        console.log(item.find(".searchStr").text());
        var name = item.find(".searchStr").text();
        var position = name.indexOf(searchStr);
        if (position >= 0) {
            item.show();
        } else {
            item.hide();
        }
    });

}

$(function () {
    $(document).on("click", "#searchBtn", function () {
        var searchStr = $("#searchInput").val();
        if (first) {
            searchlist = $(".list_index");
            first = 0;
        }
        search(searchStr);
    });
});

