$(function () {


	//Stavete gi po red taka se povrzani under 1 year , 1-4 year ,4-7year, 7-10 year, 10+years
	let BySalary = [3, 3, 9, 2, 3];
	let ByTech = [];
	let ByDefinition = [];
	let ByTeam = [];
	let ByIndustry = [];
	let ByProduct = [];
	let ByOptions = [];
	let ByLocation = [];
	let ByCommute = [];
	let ByOrgSize = [];
	let ByBenefits = [];
	let ByGender = [];



	//1
	let myChart1 = document.querySelector("#myChart1").getContext('2d');
	if ($(window).width() > 1000) {
		document.querySelector('#myChart1').height = 350;
		document.querySelector('#myChart2').height = 350;
		document.querySelector('#myChart3').height = 350;
		document.querySelector('#myChart4').height = 350;
		document.querySelector('#myChart5').height = 350;
		document.querySelector('#myChart6').height = 350;
		document.querySelector('#myChart7').height = 350;
		document.querySelector('#myChart8').height = 350;
		document.querySelector('#myChart9').height = 350;
		document.querySelector('#myChart10').height = 350;
		document.querySelector('#myChart11').height = 350;
	} else if ($(window).width() < 993) {
		document.querySelector('#myChart1').height = 150;
		document.querySelector('#myChart2').height = 150;
		document.querySelector('#myChart3').height = 150;
		document.querySelector('#myChart4').height = 150;
		document.querySelector('#myChart5').height = 150;
		document.querySelector('#myChart6').height = 150;
		document.querySelector('#myChart7').height = 150;
		document.querySelector('#myChart8').height = 150;
		document.querySelector('#myChart9').height = 150;
		document.querySelector('#myChart10').height = 150;
		document.querySelector('#myChart11').height = 150;
	} else if ($(window).width() < 500) {
		document.querySelector('#myChart1').height = 100;
		document.querySelector('#myChart2').height = 100;
		document.querySelector('#myChart3').height = 100;
		document.querySelector('#myChart4').height = 100;
		document.querySelector('#myChart5').height = 100;
		document.querySelector('#myChart6').height = 100;
		document.querySelector('#myChart7').height = 100;
		document.querySelector('#myChart8').height = 100;
		document.querySelector('#myChart9').height = 100;
		document.querySelector('#myChart10').height = 100;
		document.querySelector('#myChart11').height = 100;
	}
	document.querySelector('#myChart1').width = window.innerWidth;

	let chart = new Chart(myChart1, {
		type: 'line',
		data: {

			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${BySalary[0]}`,
					`${BySalary[1]}`,
					`${BySalary[2]}`,
					`${BySalary[3]}`,
					`${BySalary[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
				fontSize: '5'
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//2
	let myChart2 = document.querySelector("#myChart2").getContext('2d');

	document.querySelector('#myChart2').width = window.innerWidth;

	let chart2 = new Chart(myChart2, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByTech[0]}`,
					`${ByTech[1]}`,
					`${ByTech[2]}`,
					`${ByTech[3]}`,
					`${ByTech[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {

			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//3
	let myChart3 = document.querySelector("#myChart3").getContext('2d');

	document.querySelector('#myChart3').width = window.innerWidth;

	let chart3 = new Chart(myChart3, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByDefinition[0]}`,
					`${ByDefinition[1]}`,
					`${ByDefinition[2]}`,
					`${ByDefinition[3]}`,
					`${ByDefinition[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//4
	let myChart4 = document.querySelector("#myChart4").getContext('2d');

	document.querySelector('#myChart4').width = window.innerWidth;

	let chart4 = new Chart(myChart4, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByTeam[0]}`,
					`${ByTeam[1]}`,
					`${ByTeam[2]}`,
					`${ByTeam[3]}`,
					`${ByTeam[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//5
	let myChart5 = document.querySelector("#myChart5").getContext('2d');
	document.querySelector('#myChart5').width = window.innerWidth;

	let chart5 = new Chart(myChart5, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByIndustry[0]}`,
					`${ByIndustry[1]}`,
					`${ByIndustry[2]}`,
					`${ByIndustry[3]}`,
					`${ByIndustry[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//6
	let myChart6 = document.querySelector("#myChart6").getContext('2d');
	document.querySelector('#myChart6').width = window.innerWidth;

	let chart6 = new Chart(myChart6, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByProduct[0]}`,
					`${ByProduct[1]}`,
					`${ByProduct[2]}`,
					`${ByProduct[3]}`,
					`${ByProduct[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//7
	let myChart7 = document.querySelector("#myChart7").getContext('2d');
	document.querySelector('#myChart7').width = window.innerWidth;

	let chart7 = new Chart(myChart7, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByOptions[0]}`,
					`${ByOptions[1]}`,
					`${ByOptions[2]}`,
					`${ByOptions[3]}`,
					`${ByOptions[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//8
	let myChart8 = document.querySelector("#myChart8").getContext('2d');
	document.querySelector('#myChart8').width = window.innerWidth;

	let chart8 = new Chart(myChart8, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByLocation[0]}`,
					`${ByLocation[1]}`,
					`${ByLocation[2]}`,
					`${ByLocation[3]}`,
					`${ByLocation[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//9
	let myChart9 = document.querySelector("#myChart9").getContext('2d');
	document.querySelector('#myChart9').width = window.innerWidth;

	let chart9 = new Chart(myChart9, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByCommute[0]}`,
					`${ByCommute[1]}`,
					`${ByCommute[2]}`,
					`${ByCommute[3]}`,
					`${ByCommute[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//10
	let myChart10 = document.querySelector("#myChart10").getContext('2d');
	document.querySelector('#myChart10').width = window.innerWidth;

	let chart10 = new Chart(myChart10, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByOrgSize[0]}`,
					`${ByOrgSize[1]}`,
					`${ByOrgSize[2]}`,
					`${ByOrgSize[3]}`,
					`${ByOrgSize[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//11
	let myChart11 = document.querySelector("#myChart11").getContext('2d');
	document.querySelector('#myChart11').width = window.innerWidth;

	let chart11 = new Chart(myChart11, {
		type: 'line',
		data: {
			labels: ['Under 1 year', '1-4 years', '4-7 years', '7-10 years', '10+ years'],
			datasets: [{
				label: '',
				data: [
					`${ByBenefits[0]}`,
					`${ByBenefits[1]}`,
					`${ByBenefits[2]}`,
					`${ByBenefits[3]}`,
					`${ByBenefits[4]}`
				],
				backgroundColor: '#6630D8',
				borderWidth: 1,
				borderColor: "black",
			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});
	//doughnut CHART
	if ($(window).width() > 2559) {
		document.getElementById('myChartD').height = 500;
	} else if ($(window).width() < 1921) {
		document.getElementById('myChartD').height = 300;
	} else if ($(window).width() < 1000) {
		document.getElementById('myChartD').height = 170;
	} else if ($(window).width() < 549) {
		document.getElementById('myChartD').height = 70;
	}

	let myChartD = document.querySelector("#myChartD").getContext('2d');

	document.getElementById('myChartD').width = window.innerWidth;

	let chartD = new Chart(myChartD, {
		type: 'doughnut',
		data: {
			labels: ['MALE', 'FEMALE', 'OTHER'],
			datasets: [{
				label: '',
				data: [
					`${ByGender[0]}`,
					`${ByGender[1]}`,
					`${ByGender[2]}`
				],
				backgroundColor: [
					`#7738ff`,
					`#9be4ef`,
					`#fe6382`
				],
				borderWidth: 1,

			}]
		},
		options: {
			title: {
				display: false,
			},
			legend: {
				display: false

			},
			tooltips: {
				enabled: true
			},
		}
	});

});
