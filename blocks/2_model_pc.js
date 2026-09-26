var model_pc = {
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
    /* 1. MODEL - это объект
 2. DEFAULT_POSITION - это свойство объекта МОДЕЛИ
 3. значение DEFAULT_POSITION - это массив из объектов
    */
    /*  РАССТАНОВКА КОРАБЛЕЙ - по умолчанию:
position - положение кораблей
по умолчанию zero_one - 0 или 1 - по горизонтали или вертикали
ip200 - индексы кораблей из массива pole_100 в соответствии с МАССИВОМ position
near_position - ближние индексы кораблей из массива pole_100 
 исключение_позиции - ip200 + близкая_позиция*/
    excludes_position: [],
    /*	АНАЛИЗ СНИМКОВ
 ok_shots - координаты позиций, которые уже были поражены
ip100 - индексы попаданий
near_index - индексы, близкие к индексам попаданий
all_near_index - все ближайшие индексы
missing_coordinate - все уже существующие пропущенные
    	*/
    number_hit_miss: [],
    
    number_miss: [],
    
    number_hits: [],
    
    missing_coordinate: [],
    all_near_index: [],
    ships_number: 10,
    
    sunken_ships: [],
    
    new_array: []
}
var mdp_pc = model_pc.default_position;