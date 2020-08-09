// Doughnut Chart 
$(document).ready(function(){
	var options = {
		// legend: false,
		responsive: true
	};
	new Chart($("#canvas1"), {
		type: 'doughnut',
		tooltipFillColor: "rgba(51, 51, 51, 0.55)",
		data: {
		labels: [
			"Consultancy",
			"CoreIT",
			"Analytics",
			"Finance"
		],
		datasets: [{
		data: [300, 60, 45, 93],
		backgroundColor: [
			"#3498DB",
			"#9B59B6",
			"#E74C3C",
			"#26B99A"
		],
		hoverBackgroundColor: [
			"#49A9EA",
			"#B370CF",
			"#E95E4F",
			"#36CAAB"
		]
		}]
	},
		options: { responsive: true}
	});           
});
// Doughnut Chart 