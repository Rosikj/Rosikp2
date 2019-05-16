$(function(){

	//Arr for results
	let arrFlags = [1,2,5,6,2,3,5,6,123,123123];

	function sortElementsLow(){
		let sortedArr = arrFlags.sort((a, b)=> a-b);
		console.log(sortedArr);
	};
	function sortElementsHigh(){
		let sortedArr = arrFlags.sort((a, b)=> a-b);
		let reversedArr = sortedArr.reverse();
		console.log(reversedArr);
	};

	$('.high').on('click', sortElementsHigh);
	$('.low').on('click', sortElementsLow);
});