//const list_items = [
//	"Item 01",
//	"Item 02",
//	"Item 03",
//	"Item 04",
//	"Item 05",
//	"Item 06",
//	"Item 07",
//	"Item 08",
//	"Item 09",
//	"Item 10",
//	"Item 11",
//	"Item 12",
//	"Item 13",
//	"Item 14",
//	"Item 15",
//	"Item 16",
//	"Item 17",
//	"Item 18",
//	"Item 19",
//	"Item 20",
//	"Item 21",
//	"Item 22",
//	"Item 23",
//	"Item 24",
//	"Item 25"
//];
//
//const list_element = document.getElementById('list');
//const pagination_element = document.getElementById('pagination');
//
//let current_page = 1;
//let rows = 9;
//
//function DisplayList(items, wrapper=list_element, rows_per_page=rows, page=current_page) {
//	wrapper.innerHTML = "";
//	page--;
//
//	let start = rows_per_page * page;
//	let end = start + rows_per_page;
//	let paginatedItems = items.slice(start, end);
//
//	for (let i = 0; i < paginatedItems.length; i++) {
//		let item = paginatedItems[i];
//
//		let item_element = document.createElement('div');
//		item_element.classList.add('item');
//		item_element.innerText = item;
//
//		wrapper.appendChild(item_element);
//	}
//}
//
//function SetupPagination(items, wrapper=pagination_element, rows_per_page=rows) {
//	wrapper.innerHTML = "";
//
//	let page_count = Math.ceil(items.length / rows_per_page);
//	for (let i = 1; i < page_count + 1; i++) {
//		let btn = PaginationButton(i, items);
//		wrapper.appendChild(btn);
//	}
//}
//
//function PaginationButton(page, items) {
//	let button = document.createElement('button');
//	button.innerText = page;
//
//	if (current_page == page) button.classList.add('active');
//
//	button.addEventListener('click', function () {
//		current_page = page;
//		DisplayList(items, list_element, rows, current_page);
//
//		let current_btn = document.querySelector('.pagenumbers button.active');
//		current_btn.classList.remove('active');
//
//		button.classList.add('active');
//	});
//
//	return button;
//}
//
// DisplayList(list_items, list_element, rows, current_page);
// SetupPagination(list_items, pagination_element, rows);

const list_items = [
	"Item 01",
	"Item 02",
	"Item 03",
	"Item 04",
	"Item 05",
	"Item 06",
	"Item 07",
	"Item 08",
	"Item 09",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22",
	"Item 23",
	"Item 24",
	"Item 25"
];
const list_element = document.getElementById('list');
//const list_element = document.getElementById('list-container');
//const pagination_element = document.getElementById('pagination-container');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 9;

function DisplayList(items, wrapper=list_element, rows_per_page=rows, page=current_page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;

		wrapper.appendChild(item_element);
	}
}

function SetupPagination(items, wrapper=pagination_element, rows_per_page=rows) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton(page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            DisplayList(data, list_element, rows, current_page);
            SetupPagination(data, pagination_element, rows);

        });
});


// document.addEventListener('DOMContentLoaded', function() {
//     fetch('/data')
//         .then(response => response.json())
//         .then(data => {
//             print(data)
//             const itemsPerPage = 3; // عدد العناصر في كل صفحة
//             let currentPage = 1; // الصفحة الحالية
//
//
//             function displayItems() {
//                 const listContainer = document.getElementById('list-container');
//                 listContainer.innerHTML = '';
//
//                 const startIndex = (currentPage - 1) * itemsPerPage;
//                 const endIndex = startIndex + itemsPerPage;
//                 const itemsToShow = data.slice(startIndex, endIndex);
//
//                 itemsToShow.forEach(item => {
//                     const listItem = document.createElement('li');
//                     listItem.className = 'list-item';
//                     listItem.textContent = item;
//                     listContainer.appendChild(listItem);
//                 });
//             }
//
//             function displayPagination() {
//                 const paginationContainer = document.getElementById('pagination-container');
//                 paginationContainer.innerHTML = '';
//
//                 const totalPages = Math.ceil(data.length / itemsPerPage);
//
//                 for (let i = 1; i <= totalPages; i++) {
//                     const pageLink = document.createElement('a');
//                     pageLink.className = 'page-link';
//                     pageLink.textContent = i;
//
//                     if (i === currentPage) {
//                         pageLink.classList.add('active');
//                     }
//
//                     pageLink.addEventListener('click', function() {
//                         currentPage = i;
//                         displayItems();
//                         displayPagination();
//                     });
//
//                     paginationContainer.appendChild(pageLink);
//                 }
//             }
//
//             displayItems();
//             displayPagination();
//         });
// });
