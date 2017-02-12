$(document).ready(function(){
    $.ajax({
       url: "http://localhost/chartjs/record-count.php",
       method: "GET",
       success: function(data){
           console-log(data);
           $("#recordCound").html("Vastauksia: " + 
                   data[0].record_count + " kpl");
       },
       error:function(data) {
           console.log(data);
       }
    });
});


