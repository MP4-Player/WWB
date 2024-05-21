/* @charset "utf-8"; CSS Document */
var letter = ["A", "B", "C", "D", "E", "F", "G", "K", "L", "M"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Массив включает все ячейки игрового поля*/
var pole_100 = [];
for (i = 0; i < letter.length; i++) {
    for (j = 0; j < letter.length; j++) {
        pole_100.push(letter[i] + number[j]);
    }
}
var pole_100_pc = [];
for (i = 0; i < letter.length; i++) {
    for (j = 0; j < letter.length; j++) {
        pole_100_pc.push(letter[i] + number[j] + '.pc');
    }
}
/*console.log(pole_100);
console.log(pole_100_pc);
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
*/
/* view object */
var view = {
    /* ВpxнеЕ и ниЖНЕЕ поле - ТЕКСТ */
    message_up: function(msg) {
        var message = document.getElementById("messageArea_up");
        message.innerHTML = msg;
    },
    message_up_pc: function(msg) {
        var message = document.getElementById("messageArea_up_pc");
        message.innerHTML = msg;
    },
    /* ВрХНЕЕ поле - ОБЩиЙ ФОН Желтый User и Зеленый PC*/
    backup_yellow: function() {
        var backup_yellow = document.getElementById("messageArea_up");
        backup_yellow.setAttribute('class', 'background_yellow');
    },
    backup_green: function() {
        var backup_green = document.getElementById("messageArea_up_pc");
        backup_green.setAttribute('class', 'background_green');
    },
    /* ВрХНЕЕ поле - КрАСНЫЙ ФОН User и PC */
    backGR_red_up: function() {
        var backGR_red = document.getElementById("messageArea_up");
        backGR_red.setAttribute('class', 'background_red');
    },
    backGR_red_up_pc: function() {
        var backGR_red = document.getElementById("messageArea_up_pc");
        backGR_red.setAttribute('class', 'background_red');
    },
    /* ВрХНЕЕ поле - ОрАНЖЕВЫЙ ФОН User и PC */
    backGR_orange_up: function() {
        var backGR_orange = document.getElementById("messageArea_up");
        backGR_orange.setAttribute('class', 'background_orange');
    },
    backGR_orange_up_pc: function() {
        var backGR_orange = document.getElementById("messageArea_up_pc");
        backGR_orange.setAttribute('class', 'background_orange');
    },
    /* НЕТ ФОНА у верхнего полей User и PC*/
    back_up_epmty: function() {
        var back_up_epmty = document.getElementById("messageArea_up");
        back_up_epmty.setAttribute('class', 'background_none');
    },
    back_up_epmty_pc: function() {
        var back_up_epmty = document.getElementById("messageArea_up_pc");
        back_up_epmty.setAttribute('class', 'background_none');
    },
    /* КЛЕТКи промахи и попадания в ГОВЫХ полях */
    hits: function(cell) {
        var hit = document.getElementById(cell);
        hit.setAttribute("class", "hit");
    },
    hits_gray: function(cell) { /* Позиции кораблей в поле - Серый цвет */
        var hit = document.getElementById(cell);
        hit.setAttribute("class", "hit_gray");
    },
    missing: function(cell) {
        var miss = document.getElementById(cell);
        miss.setAttribute("class", "miss");
    },
    missing_pc: function(cell) {
        var miss = document.getElementById(cell);
        miss.setAttribute("class", "miss_pc");
    },
    /* КВАДрАТЫ ниже готовых полей*/
    div_ship: function(id) { /* DIV для кораблей ниже готового поля */
        var div = document.getElementById(id); /* Получаем доступ к DIV с id 0, 1, 2 и т.д. или же 0.pc, 1.pc, 2.pc и ....*/
        div.setAttribute("class", "down_position_div");
    },
    p_deck_ship: function(id) { /* Абзацы для палуб кораблей ниже готового поля - Желтые квадраты*/
        var div_p = document.getElementById(id); /*  Получаем доступ к Абзацам с id 0.0, 0.1, 0.2 */
        div_p.setAttribute("class", "down_position_div_p");
    },
    p_deck_ship_end: function(id) { /* Помечаем Желтый квадрат Красным крестом*/
        var div_p = document.getElementById(id);
        div_p.setAttribute("class", "down_position_div_p_end");
    },
    p_deck_ship_pc: function(id) { /* Абзацы для палуб кораблей ниже готового поля PC - Красные квадраты*/
        var div_p = document.getElementById(id); /*  Получаем доступ к Абзацам с id 0.0.pc, 0.1.pc, 0.2.pc  */
        div_p.setAttribute("class", "down_position_pc_div_p");
    },
    p_deck_ship_pc_end: function(id) { /* Помечаем Красный квадрат Желтым крестом */
        var div_p = document.getElementById(id);
        div_p.setAttribute("class", "down_position_pc_div_p_end");
    },
}