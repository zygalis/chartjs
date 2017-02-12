$(document).ready(function(){
	$.ajax({
		url: "http://localhost/chartjs/distributions.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var age = [0,0,0];
			var gender = [0,0];
                        var experience_years = [0,0,0,0];
                        var programming = [0,0,0,0,0];
                        var web_frontend = [0,0,0,0,0];
                        var web_backend = [0,0,0,0,0];
                        var mobile_native = [0,0,0,0,0];
                        var mobile_hybrid = [0,0,0,0,0];
                        var relational_database = [0,0,0,0,0];
                        var nosql_database = [0,0,0,0,0];
                        
			for(var i in data) {
                           
                            //Gender
                            if(parseInt(data[i].gender) === 1){
                                gender[0]++;
                            }
                            if(parseInt(data[i].gender) === 2){
                                gender[1]++;
                            }
                            //Age
                            if(parseInt(data[i].age) >= 15 && parseInt(data[i].age) < 30){
                                age[0]++;
                            }
                            if(parseInt(data[i].age) >= 30 && parseInt(data[i].age) < 51){
                                age[1]++;
                            }
                            if(parseInt(data[i].age) >= 51 && parseInt(data[i].age) < 61){
                                age[2]++;
                            }
                            //Experience Years
                            if(parseInt(data[i].experience_years) >= 0 && parseInt(data[i].experience_years) < 6){
                                experience_years[0]++;
                            }
                            if(parseInt(data[i].experience_years) >= 6 && parseInt(data[i].experience_years) < 11){
                                experience_years[1]++;
                            }
                            if(parseInt(data[i].experience_years) >= 11 && parseInt(data[i].experience_years) < 16){
                                experience_years[2]++;
                            }
                            if(parseInt(data[i].experience_years) >= 15){
                                experience_years[3]++;
                            }
                            //Programming
                            if(parseInt(data[i].programming) === 1){
                                programming[0]++;
                            }
                            if(parseInt(data[i].programming) === 2){
                                programming[1]++;
                            }
                            if(parseInt(data[i].programming) === 3){
                                programming[2]++;
                            }
                            if(parseInt(data[i].programming) === 4){
                                programming[3]++;
                            }
                            if(parseInt(data[i].programming) === 5){
                                programming[4]++;
                            }
                            //Web frontend
                            if(parseInt(data[i].web_frontend) === 1){
                                web_frontend[0]++;
                            }
                            if(parseInt(data[i].web_frontend) === 2){
                                web_frontend[1]++;
                            }
                            if(parseInt(data[i].web_frontend) === 3){
                                web_frontend[2]++;
                            }
                            if(parseInt(data[i].web_frontend) === 4){
                                web_frontend[3]++;
                            }
                            if(parseInt(data[i].web_frontend) === 5){
                                web_frontend[4]++;
                            }
                            //Web backend
                            if(parseInt(data[i].web_backend) === 1){
                                web_backend[0]++;
                            }
                            if(parseInt(data[i].web_backend) === 2){
                                web_backend[1]++;
                            }
                            if(parseInt(data[i].web_backend) === 3){
                                web_backend[2]++;
                            }
                            if(parseInt(data[i].web_backend) === 4){
                                web_backend[3]++;
                            }
                            if(parseInt(data[i].web_backend) === 5){
                                web_backend[4]++;
                            }
                            //Natiivi mobiili
                            if(parseInt(data[i].mobile_native) === 1){
                                mobile_native[0]++;
                            }
                            if(parseInt(data[i].mobile_native) === 2){
                                mobile_native[1]++;
                            }
                            if(parseInt(data[i].mobile_native) === 3){
                                mobile_native[2]++;
                            }
                            if(parseInt(data[i].mobile_native) === 4){
                                mobile_native[3]++;
                            }
                            if(parseInt(data[i].mobile_native) === 5){
                                mobile_native[4]++;
                            }
                            //Hybridi mobiili
                            if(parseInt(data[i].mobile_hybrid) === 1){
                                mobile_hybrid[0]++;
                            }
                            if(parseInt(data[i].mobile_hybrid) === 2){
                                mobile_hybrid[1]++;
                            }
                            if(parseInt(data[i].mobile_hybrid) === 3){
                                mobile_hybrid[2]++;
                            }
                            if(parseInt(data[i].mobile_hybrid) === 4){
                                mobile_hybrid[3]++;
                            }
                            if(parseInt(data[i].mobile_hybrid) === 5){
                                mobile_hybrid[4]++;
                            }
                            //Relaatiotietokannat
                            if(parseInt(data[i].relational_database) === 1){
                                relational_database[0]++;
                            }
                            if(parseInt(data[i].relational_database) === 2){
                                relational_database[1]++;
                            }
                            if(parseInt(data[i].relational_database) === 3){
                                relational_database[2]++;
                            }
                            if(parseInt(data[i].relational_database) === 4){
                                relational_database[3]++;
                            }
                            if(parseInt(data[i].relational_database) === 5){
                                relational_database[4]++;
                            }
                            //NoSQL-tietokannat
                            if(parseInt(data[i].nosql_database) === 1){
                                nosql_database[0]++;
                            }
                            if(parseInt(data[i].nosql_database) === 2){
                                nosql_database[1]++;
                            }
                            if(parseInt(data[i].nosql_database) === 3){
                                nosql_database[2]++;
                            }
                            if(parseInt(data[i].nosql_database) === 4){
                                nosql_database[3]++;
                            }
                            if(parseInt(data[i].nosql_database) === 5){
                                nosql_database[4]++;
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
                        var chartdata3 = {
				labels: ["0-5", "6-10", "11-15", "Yli 15"],
				datasets : [
					{
						backgroundColor: [
                                                    "#FF6384",
                                                    "#36A2EB",
                                                    "#FFCE56",
                                                    "#d43f3a"
                                                ],
						borderColor: [
                                                    "#FF6384",
                                                    "#36A2EB",
                                                    "#FFCE56",
                                                    "#d43f3a"
                                                ],
						hoverBackgroundColor: [
                                                    "#FF6384",
                                                    "#36A2EB",
                                                    "#FFCE56",
                                                    "#d43f3a"
                                                ],
						hoverBorderColor: [
                                                    "#FF6384",
                                                    "#564544",
                                                    "#FFCE56",
                                                    "#d43f3a"
                                                ],
						data: experience_years
					}
				]
			};
                        var chartdata4 = {
				labels: ["1", "2", "3", "4", "5"],
				datasets : [
					{
                                                label: "Ohjelmointi yleisellä tasolla",
                                                datasets :[{
                                                    backgroundColor: [
                                                        "#FF6384"
                                                    ]
                                                }],
						backgroundColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                    
                                                ],
						borderColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                   
                                                ],
						hoverBackgroundColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                    
                                                ],
						hoverBorderColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                ],
						data: programming
					}
				]
			};
                        var chartdata5 = {
				labels: ["1", "2", "3", "4", "5"],
				datasets : [
					{
                                                label: "Web frontend",
						backgroundColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                    
                                                ],
						borderColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                   
                                                ],
						hoverBackgroundColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                    
                                                ],
						hoverBorderColor: [
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384",
                                                    "#FF6384"
                                                ],
						data: web_frontend
					}
				]
			};
                        var chartdata6 = {
				labels: ["1", "2", "3", "4", "5"],
				datasets : [
					{
                                                label: "Web backend",
						backgroundColor: [
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB"
                                                ],
						borderColor: [
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB"
                                                   
                                                ],
						hoverBackgroundColor: [
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB"
                                                    
                                                ],
						hoverBorderColor: [
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB",
                                                    "#36A2EB"
                                                ],
						data: web_backend
					}
				]
			};
                        var chartdata7 = {
				labels: ["1", "2", "3", "4", "5"],
				datasets : [
					{
                                                label: "Natiivi mobiili",
						backgroundColor: [
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56"
                                                ],
						borderColor: [
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56"
                                                ],
						hoverBackgroundColor: [
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56"
                                                    
                                                ],
						hoverBorderColor: [
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56",
                                                    "#FFCE56"
                                                ],
						data: mobile_native
					}
				]
			};
                        var chartdata8 = {
				labels: ["1", "2", "3", "4", "5"],
				datasets : [
					{
                                                label: "Hybridi modiili",
						backgroundColor: [
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a"
                                                ],
						borderColor: [
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a"
                                                   
                                                ],
						hoverBackgroundColor: [
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a"
                                                    
                                                ],
						hoverBorderColor: [
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a"
                                                ],
						data: mobile_hybrid
					}
				]
			};
                        var chartdata9 = {
				labels: ["1", "2", "3", "4", "5"],
				datasets : [
					{
                                                label: "Relaatiotietokannat",
						backgroundColor: [
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168"
                                                ],
						borderColor: [
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168"
                                                   
                                                ],
						hoverBackgroundColor: [
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168"
                                                    
                                                ],
						hoverBorderColor: [
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168",
                                                    "#67b168"
                                                ],
						data: relational_database
					}
				]
			};
                        var chartdata10 = {
				labels: ["1", "2", "3", "4", "5"],
				datasets : [
					{
                                                label: "NoSQL-tietokannat",
						backgroundColor: [
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b"
                                                ],
						borderColor: [
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b"
                                                   
                                                ],
						hoverBackgroundColor: [
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a",
                                                    "#d43f3a"
                                                    
                                                ],
						hoverBorderColor: [
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b",
                                                    "#c0a16b"
                                                ],
						data: nosql_database
					}
				]
			};
			var ctx = $("#mycanvas");
                        var ctx2 = $("#mycanvas2");
                        var ctx3 = $("#mycanvas3");
                        var ctx4 = $("#mycanvas4");
                        var ctx5 = $("#mycanvas5");
                        var ctx6 = $("#mycanvas6");
                        var ctx7 = $("#mycanvas7");
                        var ctx8 = $("#mycanvas8");
                        var ctx9 = $("#mycanvas9");
                        var ctx10 = $("#mycanvas10");

			var genderChart = new Chart(ctx, {
				type: 'pie',
				data: chartdata
   
			});
                        
                        var ageChart = new Chart(ctx2, {
				type: 'doughnut',
				data: chartdata2
   
			});
                        
                        var experienceChart = new Chart(ctx3, {
				type: 'doughnut',
				data: chartdata3
   
			});
                        var programmingChart = new Chart(ctx4, {
				type: 'bar',
				data: chartdata4,
                                options:{ 
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min:0,
                                                max:20,
                                                stepSize:2
                                            }
                                        }]
                                    }
                                }
			});
                        var web_frontendChart = new Chart(ctx5, {
				type: 'bar',
				data: chartdata5,
                                options:{ 
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min:0,
                                                max:20,
                                                stepSize:2
                                            }
                                        }]
                                    }
                                }
			});
                        var web_backendChart = new Chart(ctx6, {
				type: 'bar',
				data: chartdata6,
                                options:{ 
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min:0,
                                                max:20,
                                                stepSize:2
                                            }
                                        }]
                                    }
                                }
			});
                        var mobile_naviteChart = new Chart(ctx7, {
				type: 'bar',
				data: chartdata7,
                                options:{ 
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min:0,
                                                max:20,
                                                stepSize:2
                                            }
                                        }]
                                    }
                                }
			});
                        var mobile_hybridChart = new Chart(ctx8, {
				type: 'bar',
				data: chartdata8,
                                options:{ 
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min:0,
                                                max:20,
                                                stepSize:2
                                            }
                                        }]
                                    }
                                }
			});
                        var relational_databaseChart = new Chart(ctx9, {
				type: 'bar',
				data: chartdata9,
                                options:{ 
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min:0,
                                                max:20,
                                                stepSize:2
                                            }
                                        }]
                                    }
                                }
			});
                        var nosql_databaseChart = new Chart(ctx10, {
				type: 'bar',
				data: chartdata10,
                                options:{ 
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                min:0,
                                                max:20,
                                                stepSize:2
                                            }
                                        }]
                                    }
                                }
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});