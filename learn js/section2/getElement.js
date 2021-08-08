//          Таблицу с id="age-table".
//          Все элементы label внутри этой таблицы (их три).
//          Первый td в этой таблице (со словом «Age»).
//          Форму form с именем name="search".
//          Первый input в этой форме.
//          Последний input в этой форме.

 let ageTable = document.getElementById(age-table);
 let labels = ageTable.querySelectorAll("label");
 let firstTd = ageTable.querySelector("td");
 let forms = document.querySelectorAll("form");
 let formSearch = formAge.getElementsByName("search");
 let firstInput = formSearch.querySelector("input");
 let lastInput = formSearch.querySelector("input:lastChild");
