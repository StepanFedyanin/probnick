const headerBurger = document.getElementById("header__burger");
const headerMenu = document.getElementById("header__menu");
const headerDop = document.getElementById("header__dopmenu");
const HeaderInner = document.getElementById("header__inner");
const HeaderList = document.getElementById("header__list");
const HeaderDopList = document.getElementById("header__drp--list");
const Headerinfo = document.querySelectorAll("eader__list--info");
const HeaderLogo = document.getElementById("header__logo");
headerBurger.onclick= function(){
	console.log(Headerinfo)
	if(headerBurger.classList.contains("active"))
	{
		headerBurger.classList.remove("active");
		headerMenu.classList.remove("active");
		headerDop.classList.remove("active");
		HeaderInner.classList.remove("active");
		HeaderList.classList.remove("active");
		HeaderLogo.classList.remove("active");
		HeaderDopList.classList.remove("active");


	}
	else{
		headerBurger.classList.add("active");
		headerMenu.classList.add("active");
		headerDop.classList.add("active");
		HeaderInner.classList.add("active");
		HeaderList.classList.add("active");
		HeaderLogo.classList.add("active");
		HeaderDopList.classList.add("active");




	}
}
// Footer адаптив адаптив Footer адаптив адаптив Footer адаптив адаптив
var company = document.getElementById("company__footer");
var companyList = document.getElementById("company__list");
company.onclick= function(){
	if(companyList.classList.contains("active")){
		companyList.classList.remove("active")
		company.classList.remove("border")
	}else{
		companyList.classList.add("active")
		company.classList.add("border")
	}
}
var buyer = document.getElementById("buyer__footer");
var buyerList = document.getElementById("buyer__list");
buyer.onclick= function(){
	if(buyerList.classList.contains("active")){
		buyerList.classList.remove("active")
		buyer.classList.remove("border") 
	}else{
		buyerList.classList.add("active")
		buyer.classList.add("border") 
	}
}


const CategoriesSlide = document.getElementById("categories__slide");
CategoriesSlide.addEventListener("click", e=>{
	CategoriesSlideClick(e)
})
let i=1;
CategoriesSlideWhow(i)
function CategoriesSlideClick(e){
	let obj = e.target;
	const charrCatalog = document.querySelectorAll(".categories__item")
	if(obj.classList.contains("categories__next--count")){
		i++
		console.log(i)
		if(i>charrCatalog.length-4){
			i=1;	
		}
		CategoriesSlideWhow(i)
	}
	if(obj.classList.contains("categories__pref--count")){
		i--;
		if(i<0){
			i=charrCatalog.length-5
		}
		console.log(i)

		CategoriesSlideWhow(i)
	}
}
function CategoriesSlideWhow(i){
	const charrCatalog = document.querySelectorAll(".categories__item")

// 	if (i < 4) {
// 		i = slides.length
//   }
	// if(i4){
	// 	i=3;
	// }
	// if(i>3){
	// 	charrCatalog[i].classList.add("show");
	// 	charrCatalog[i-4].classList.remove("show");
	// 	let count =i;

	// }
	// if(i<count){
	// 	charrCatalog[i+4].classList.remove("show");
	// 	charrCatalog[i].classList.add("show");
	// }
	for(let j=0;j<charrCatalog.length;j++){
		charrCatalog[j].classList.remove("show");
	}
	for(let count=i;count<i+4;count++){
		charrCatalog[count].classList.add("show");
	}


}

