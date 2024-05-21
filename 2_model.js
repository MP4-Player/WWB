var model = {
    default_position: [{
        position: ['', '', '', ''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: ['', '', ''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: ['', '', ''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: ['', ''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: ['', ''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: ['', ''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: [''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: [''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: [''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }, {
        position: [''],
        ok_shots: [],
        ip100: [],
        near_index: [],
        near_position: [],
        ip200: [],
        zero_one: []
    }],
    /* 1. Объект model
2. default_position - свойство объекта model
3. значение свойства default_position - это массив из объектов
4. каждый объект массива содержит одноименные свойства. Т.о. каждый объект - это корабль
*/
/* pасстановка кораблей:
position - позиции кораблей по умолчанию
zero_one - 0 or 1 - горизонтальное или вертикальное положение корабля
ip200 - индексы корабля из массива pole_100 в соответствии с координатами из массива position
near_position - соседние индексы корабля "заранее поределяемые промахи" из массива pole_100
excludes_position - ip200 + near_position

Соседние индексы здесь нужны, что выдерживать расстояния между кораблями
*/
    excludes_position: [],
    /*Анализ выстрелов
ok_shots - координаты клеток, в которых уже отмечены попадания
ip100 - индексы координат в соответствиии с ok_shots
near_index - соседние индексы с уже подбитым кораблем
all_near_index - все соседние индексы
missing_coordinate - уже обозначенние промахи

Здесь соседние индексы здесь нужны, чтоб игрок не стрелял зря туда, где корабля быть не может
*/
    number_hit_miss: [],
    /* Число выстрелов - это промахи и попадания, ошибки сюда не входят... */
    number_miss: [],
    /* Число промахов*/
    number_hits: [],
    /* Число Попаданий */
    missing_coordinate: [],
    all_near_index: [],
    ships_number: 10,
    /* Общее количество кораблей, которые нужно потопить */
    sunken_ships: [] /*  Число потопленных кораблей */
        /* Эти два значения сравниваются. Если они равны, то игра Окончена */
}
var mdp = model.default_position;