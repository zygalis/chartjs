$(document).ready(function(){
	$.ajax({
		url: "http://localhost/chartjs/distributions.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var age = [0,0,0];
			var gender = [0,0];
//                        var experience_years = [0,0,0,0,0];
//                        var programming = [0,0,0,0,0];
//                        var web_frontend = [0,0,0,0,0];
//                        var web_backend = [0,0,0,0,0];
//                        var mobile_navite = [0,0,0,0,0];
//                        var mobile_hybrid = [0,0,0,0,0];
                       
                        
			for(var i in data) {
                           
                            if(parseInt(data[i].gender) === 1){
                                gender[0]++;
                            }
                            if(parseInt(data[i].gender) === 2){
                                gender[1]++;
                            }
                            if(parseInt(data[i].age) >= 30 && parseInt(data[i].age) < 51){
                                age[0]++;
                            }
                            if(parseInt(data[i].age) >= 15 && parseInt(data[i].age) < 30){
                                age[1]++;
                            }
                            if(parseInt(data[i].age) >= 51 && parseInt(data[i].age) < 61){
                                age[2]++;
                            }
			}
			var chartdata = {
				labels: ["Mies", "Nainen"],
				datasets : [
					{
						backgroundColor: [
                                                    "#FF6384",
                                                    "#36A2EB"
                                                ],
						borderColor: [
                                                    "#FF6384",
                                                    "#36A2EB"
                                                ],
						hoverBackgroundColor: [
                                                    "#FF6384",
                                                    "#36A2EB"
                                                ],
						hoverBorderColor: [
                                                    "#FF6384",
                                                    "#564544"
                                                ],
						data: gender
					}
				]
			};
                        
                        var chartdata2 = {
				labels: ["15-30", "31-50", "51-65"],
				datasets : [
					{
						backgroundColor: [
                                                    "#FF6384",
                                                    "#36A2EB",
                                                    "#FFCE56"
                                                ],
						borderColor: [
                                                    "#FF6384",
                                                    "#36A2EB",
                                                    "#FFCE56"
                                                ],
						hoverBackgroundColor: [
                                                    "#FF6384",
                                                    "#36A2EB",
                                                    "#FFCE56"
                                                ],
						hoverBorderColor: [
                                                    "#FF6384",
                                                    "#564544",
                                                    "#FFCE56"
                                                ],
						data: age
					}
				]
			};

			var ctx = $("#mycanvas");
                        var ctx2 = $("#mycanvas2");

			var myPieChart = new Chart(ctx, {
				type: 'pie',
				data: chartdata
   
			});
                        
                        var myDoughnutChart = new Chart(ctx2, {
				type: 'doughnut',
				data: chartdata2
   
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});