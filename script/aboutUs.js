const slideInfo = document.getElementById("aboutus__title");
const questionInfo = document.getElementById("question");
const payorderInfo = document.getElementById("payorder");
const returnInfo = document.getElementById("return");
slideInfo.addEventListener("click",e=>{
	slideInfoWork(e)
})
function slideInfoWork(e){
	let objeckt = e.target

	if(objeckt.classList.contains("aboutus__title--question")){
		objeckt.classList.toggle("border")
		questionInfo.classList.remove("show");
		payorderInfo.classList.add("show");
		returnInfo.classList.add("show");
		objeckt.parentNode.classList.add("border");
	}
	if(objeckt.classList.contains("aboutus__title--payorder")){
		objeckt.classList.toggle("border")
		questionInfo.classList.add("show");
		payorderInfo.classList.remove("show");
		returnInfo.classList.add("show");
		objeckt.parentNode.classList.add("border");

	}
	if(objeckt.classList.contains("aboutus__title--return")){
		objeckt.classList.toggle("border")
		questionInfo.classList.add("show");
		payorderInfo.classList.add("show");
		returnInfo.classList.remove("show");
		objeckt.parentNode.classList.add("border");

	}
} 

questionInfo.addEventListener("click",e=>{
	openQuestionInfo(e)
})
function openQuestionInfo(e){
	let obj = e.target;
	if(obj.classList.contains("question__name")){
		obj.parentNode.querySelector('.question__answer').classList.toggle("show")
	}
}