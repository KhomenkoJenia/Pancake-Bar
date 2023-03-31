new AirDatepicker("#airdatepicker", {
	autoClose: true,
	locale: {
		days: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
		months: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		monthsShort: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		today: "Today",
		clear: "Clear",
		dateFormat: "dd.MM.yyyy",
		timeFormat: "hh:mm aa",
		firstDay: 0,
	},
});

// получаем элементы списка и кнопку
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");
const dropdownButton = document.querySelector(".dropdown-toggle");

// добавляем обработчик события на элементы списка
dropdownItems.forEach((item) => {
	item.addEventListener("click", () => {
		// обновляем значение кнопки
		dropdownButton.textContent = item.textContent;
	});
});

const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("close-popup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", () => {
	popup.classList.add("show");
});

closePopupButton.addEventListener("click", () => {
	popup.classList.remove("show");
});

$(".slider-template").slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: ".slider-template-second",
});
$(".slider-template-second").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: ".slider-template",
	dots: false,

	focusOnSelect: true,
});

const form = document.getElementById("myForm");
form.action = "javascript:void(0)";

$(".timepicker").timepicker({
	timeFormat: "h:mm",
	interval: 60,
	minTime: "10",
	maxTime: "6:00pm",

	startTime: "10:00",
	dynamic: false,
	dropdown: true,
	scrollbar: true,
});

const input1 = document.getElementById("phone-imput");
const input2 = document.getElementById("name-imput");
const mySelect = document.getElementById("openPopup");

input1.addEventListener("input", validateInputs);
input2.addEventListener("input", validateInputs);

function validateInputs() {
	if (input1.value && input2.value) {
		mySelect.disabled = false;
	} else {
		mySelect.disabled = true;
	}
}
const textPerson = document.querySelector(".preson-text");
var mediaQueryList = window.matchMedia("screen and (max-width: 991px)");

// Добавляем обработчик события, который будет вызван, когда состояние MediaQueryList изменится
mediaQueryList.addListener(function (mql) {
	if (mql.matches) {
		textPerson.innerHTML = "Person";
	} else {
		textPerson.innerHTML = "How much person";
	}
});

// Вызываем обработчик события, чтобы проверить текущее состояние MediaQueryList
if (mediaQueryList.matches) {
	textPerson.innerHTML = "Person";
} else {
	textPerson.innerHTML = "How much person";
}
