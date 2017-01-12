$(function(){
   $(":input").focus(function(){
     $(this).addClass("focus");  
   }).blur(function(){
      $(this).removeClass("focus"); 
   });
});

$(function () {
    $(document).on("click", ".returnIndex", function () {
        var meetingID = $(".meetingID").val();
        window.location.href = "/Agenda/Index_organizor?meetingID=" + meetingID;
    });

    $(document).on("click", ".keep", function () {
        var meetingID = $(".meetingID").val();
        var agendaName = $(".agendaName").val();
        var agendaDuration = $(".agendaDuration").val();
        var userID = $(".userID option:selected").val();
        var test = "";
        $.ajax({
            type: "POST",
            url: "/Agenda/Add_organizor",
            data:{
                meetingID : meetingID,
                agendaName : agendaName,
                agendaDuration :agendaDuration,
                userID : userID
            },
            dataType: "json",
            success: function (respond) {
                console.log(respond.Message);
                $("#Status").text(respond.Message);
                if (respond.Code == 0) {
                    window.location.href = "/Agenda/Index_organizor?meetingID=" + meetingID;
                }
            }
        });
    });
});
