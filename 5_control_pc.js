/* START control object - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ */
var control = {
	
    /* 
        1.  - Access to the button Fire - If the button Fire is pressed - Get access to the function get_value. 
            - function get_value it is a event handler - РћР±СЂР°Р±РѕС‚С‡РёРє СЃРѕР±С‹С‚РёР№
            Р¤-РёСЏ get_value - СЂР°Р±РѕС‚Р°РµС‚ РїСЂРё РЅР°Р¶Р°С‚РёРё РЅР° РєРЅРѕРїРєСѓ fire
        
        2.  - guessInput - field for input coordinate - РџРѕР»Рµ РґР»СЏ РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚
            - key Enter - page 385
            - function handleKeyPress it is a event handler - pushing key in the guessInput - field for input coordinate
            
              РџСЂРё РЅР°Р¶Р°С‚РёРё РЅР° РєРЅРѕРїРєСѓ Enter РІ РїРѕР»Рµ РґР»СЏ РІРІРѕРґР°, СЃСЂР°Р±Р°С‚С‹РІР°РµС‚ РєРЅРѕРїРєР° fire
        3. 
        4.
    */		
        
        buttom: function(){
        /* 1. */	var click_fire = document.getElementById("fireButton_pc"); 
                    click_fire.onclick = get_value; 
                    
        /* 2. */    /*var guessInput = document.getElementById("guessInput_pc"); 
                    guessInput.onkeypress = handleKeyPress;*/ /* see below in this file */
                    
                    
                    function get_value(){
                        
                        var input_value = document.getElementById("guessInput_pc"); /* we are geting access to tag input */
                        var coordinate = input_value.value.toUpperCase(); /* converting value to upper case */
                        
                        var regular = /^[ABCDEFGKLM]\d$/; /* searching value in regular expression */
                        var result = coordinate.search(regular);
                        
                        if(coordinate == ''){
                            view.message_up_pc('Введите координаты: A0, D7, L3...');
                        }					
                        else if(result == -1){
                            view.message_up_pc('Вы неверно ввели координаты!!!');
                            input_value.value = ""; /* reset the text field */
                        }
                        
                        else { /* Р”Рѕ 24.11.2018 СЃРј. control.js */
                                        
                        /* Cycle в„–1 - for analysis ot the entered Coordinates */
                        for(i = 0; i < mdp.length; i ++){
                            /* Search of the coordinate in the array position - Return of the index of the coordinate */
                            var look = mdp[i].position.indexOf(coordinate);
                            
                            if(look !== -1) /* if the coordinate is FOUND */
                            {	
        /* 	Search of the coordinate in the array ok_shots - Return of the index of the coordinate; 
            Array of ok_shots includes the already existing hits */
                                var look_2 = mdp[i].ok_shots.indexOf(coordinate);
                                
                                if(look_2 !== -1){
                                    view.backGR_red_up(); /* РРіСЂРѕРє 1 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up('В Клетке «' + coordinate + '»- Уже обозначен Промах'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 
                                }
                                
                                else{
                                view.hits(coordinate); /* Cell hits - Red_Ship - РџРѕРїР°РґР°РЅРёРµ */
                                
                                var look_3 = mdp[i].position.indexOf(coordinate); /* РС‰РµРј РёРЅРґРµРєСЃ СЌС‚РѕР№ РєРѕРѕСЂРґРёРЅР°С‚С‹ */
                                view.p_deck_ship_end(i + "." + look_3);			/* i + look_3 - СЌС‚Рѕ id Р–РµР»С‚РѕРіРѕ РєРІР°РґСЂР°С‚Р° РЅРёР¶Рµ РёРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ */
                                
                                mdp[i].ok_shots.push(coordinate); /* Enter of the coordinate to the array ok_shots */
                                    
                                    if(mdp[i].position.length !== mdp[i].ok_shots.length){
                                        
                                        view.backGR_red_up_pc(); /* РРіСЂРѕРє 2 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up_pc('Клетка«' + coordinate + '» - Вы Промахнулись'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                        view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                        view.message_up('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                        model_pc.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                        number_hits_pc();
                                        model_pc.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                        
                                        /* РЈСЃР»РѕРІРёРµ РґР»СЏ СЃРјРµРЅС‹ РѕС‡РµСЂРµРґРЅРѕСЃС‚Рё РІС‹СЃС‚СЂРµР»РѕРІ - РђРєС‚РёРІРёСЂСѓРµРј Р–РµР»С‚РѕРµ РїРѕР»Рµ*/
                                        if(model_pc.number_hit_miss.length == model.number_hit_miss.length){
                                            red_in_gray();
                                            gray_in_yellow();
                                        }
                                        else if(model_pc.number_hit_miss.length > model.number_hit_miss.length){
                                            red_in_gray();
                                            gray_in_yellow();
                                        }
                                        /* РљСЂР°СЃРЅСѓСЋ РїСѓС€РєСѓ РјРµРЅСЏРµРј РЅР° РЎРµСЂСѓСЋ, РІС‚РѕСЂСѓСЋ РЎРµСЂСѓСЋ РЅР° Р–РµР»С‚СѓСЋ */
                                        start.change_id('gun', 'push_green', 'push_green_none');
                                        start.change_id('gun', 'push_yellow_none', 'push_yellow');
                                    }
                                    else if(mdp[i].position.length == 1){   
                                        view.backGR_red_up_pc(); /* РРіСЂРѕРє 2 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up_pc('Вы потопили ' + mdp[i].position.length + '-но палубный корабль'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                        view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                        view.message_up('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                        input_value.value = "";
                                        
                                        model_pc.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                        number_hits_pc();
                                        model_pc.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                        near_shots_one();
                                        end_game();
                                    }
                                    /* for horizontally ship */
                                    else if(mdp[i].zero_one[0] == 0){
                                        if(mdp[i].position.length > 1){ 
                                            view.backGR_red_up_pc(); /* РРіСЂРѕРє 2 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up_pc('Вы потопили ' + mdp[i].position.length + '-х палубный корабль'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                            view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                            view.message_up('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                            input_value.value = "";
                                            
                                            model_pc.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                            number_hits_pc();
                                            model_pc.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                            near_shots_horiz();
                                            end_game(); /* see below in this file */
                                        }
                                    }
                                    /* for two decks of vertically ship */
                                    else if(mdp[i].zero_one[0] == 1){
                                        if(mdp[i].position.length > 1){   
                                            view.backGR_red_up_pc(); /* РРіСЂРѕРє 2 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up_pc('Вы потопили ' + mdp[i].position.length + '-х палубный корабль'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                            view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                            view.message_up('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                            input_value.value = "";
                                            
                                            model_pc.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                            number_hits_pc();
                                            model_pc.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                            near_shots_vertic();
                                            end_game();
                                        }
                                    }
                                }
    
                                input_value.value = ""; /* reset the text field */
                                return true;
                            } 
                            /* END If в„–1 */
                        } 
                        /* END Cycle в„–1 */
                        
                        /* if entered coordinate which no FOUND in the default position .... */
                            var look_3 = model.missing_coordinate.indexOf(coordinate);
                            var look_4 = model.all_near_index.indexOf(pole_100.indexOf(coordinate));	
                                /* РЈР¶Рµ РѕР±РѕР·РЅР°С‡РµРЅ РїСЂРѕРјР°С…, Р»РёР±Рѕ РєР»РµС‚РєР° РµСЃС‚СЊ РІ РјР°СЃСЃРёРІРµ all_near_index */
                                if(look_4 !== -1 || look_3 !== -1){
                                    view.backGR_orange_up(); /* РРіСЂРѕРє 1 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up('В Клетке «' + coordinate + '» - - Уже обозначен Промах…'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 
                                }
                                /*  */
                                else{
                                    view.missing(coordinate); /* РљР»РµС‚РєР° - РџСЂРѕРјР°С… */
                                    model.missing_coordinate.push(coordinate); /* Р—Р°РЅРѕСЃРёРј РІ РјР°СЃСЃРёРІ "РџСЂРѕРјР°С…РѕРІ" РљРѕРѕСЂРґРёРЅР°С‚Сѓ */
                                    
                                    view.backGR_orange_up_pc(); /* РРіСЂРѕРє 2 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('Клетка«' + coordinate + '» - Вы Промахнулись'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                    view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                    view.message_up('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                    
                                    model_pc.number_hit_miss.push(1); /* Число выстрелов */
                                    model_pc.number_miss.push(1); 	  /* Число промахов */
                                    number_miss_pc();				  /* Функция число промахов + 1 в поле input */
                                    input_value.value = "";
                                    
                                        /* РЈСЃР»РѕРІРёРµ РґР»СЏ СЃРјРµРЅС‹ РѕС‡РµСЂРµРґРЅРѕСЃС‚Рё РІС‹СЃС‚СЂРµР»РѕРІ - РђРєС‚РёРІРёСЂСѓРµРј Р–РµР»С‚РѕРµ РїРѕР»Рµ */
                                        if(model_pc.number_hit_miss.length == model.number_hit_miss.length){
                                            red_in_gray();
                                            gray_in_yellow();
                                        }
                                        else if(model_pc.number_hit_miss.length > model.number_hit_miss.length){
                                            red_in_gray();
                                            gray_in_yellow();
                                        }
                                        /* Р—РµР»РµРЅСѓСЋ РџСѓС€РєСѓ РЈР±РёСЂР°РµРј, Р–РµР»С‚СѓСЋ РђРєС‚РёРІРёСЂСѓРµРј */
                                        start.change_id('gun', 'push_green', 'push_green_none');
                                        start.change_id('gun', 'push_yellow_none', 'push_yellow');
                                        
                                    return false;			
                                }
                            } /* РљРѕРЅРµС† else РґРѕ 24.11.2018 */	
                    }  /* END function get_value */
                } /* buttom: function */
    }
    /* END control object - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ */
    
    control.buttom(); /* Called functions for analysis of shots - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ */
    
    /* Function key Enter - page 385 */
        /*function handleKeyPress(r) {
            var fireButton = document.getElementById("fireButton");
            if (r.keyCode === 13) {
                fireButton.click();
                return false;*/ /* Р’РѕР·РІСЂР°С‰Р°РµРј false, С‡С‚РѕР±С‹ С„РѕСЂРјР° РЅРµ РґРµР»Р°Р»Р° РЅРёС‡РµРіРѕ Р»РёС€РЅРµРіРѕ. РќР°РїСЂРёРјРµСЂ, РЅРµ РїС‹С‚Р°Р»Р°СЃСЊ РїРµСЂРµРґР°С‚СЊ РґР°РЅРЅС‹Рµ. */
        /*	}
        }*/
        
        function end_game(){
            model.sunken_ships.push(1);
            if(model.sunken_ships.length == model.ships_number){ /* Р•СЃР»Рё РРіСЂР° РѕРєРѕРЅС‡РµРЅР°, С‚Рѕ РІСЃРµ Р·РЅР°С‡РєРё Рё РїРѕР»СЏ СЃРµСЂС‹Рµ */
                view.backGR_red_up();
                view.message_up('Вы Проиграли - ВСЕ Ваши корабли потопленны‹');
                red_in_gray();
                view.back_up_epmty_pc(); /* РќРµС‚ С„РѕРЅР° Сѓ User */
                view.message_up_pc('');
                start.change_id('icon_user', 'icon_user_gray', 'icon_user_end'); /* РњРµРЅСЏРµРј РЎРµСЂСѓСЋ РёРєРѕРЅРєСѓ User_1 РЅР° РљСЂР°СЃРЅСѓСЋ */
                start.change_id('gun', 'push_green', 'push_green_none');		/* Р—РµР»РµРЅСѓСЋ РїСѓС€РєСѓ РјРµРЅСЏРµРј РЅР° РћС‚СЃСѓС‚СЃС‚РІРёРµ */
            }
            else{ /* РРЅР°С‡Рµ СЃРјРµРЅР° РѕС‡РµСЂРµРґРЅРѕСЃС‚Рё РІС‹СЃС‚СЂРµР»РѕРІ - РђРєС‚РёРІРёСЂСѓРµРј Р–РµР»С‚РѕРµ РїРѕР»Рµ */
                if(model_pc.number_hit_miss.length == model.number_hit_miss.length){
                    red_in_gray();
                    gray_in_yellow();
                    /* Р—РµР»РµРЅСѓСЋ РџСѓС€РєСѓ РЈР±РёСЂР°РµРј, Р–РµР»С‚СѓСЋ РђРєС‚РёРІРёСЂСѓРµРј */
                    start.change_id('gun', 'push_green', 'push_green_none');
                    start.change_id('gun', 'push_yellow_none', 'push_yellow');
                }
                else if(model_pc.number_hit_miss.length > model.number_hit_miss.length){
                    red_in_gray();
                    gray_in_yellow();
                    /* Р—РµР»РµРЅСѓСЋ РџСѓС€РєСѓ РЈР±РёСЂР°РµРј, Р–РµР»С‚СѓСЋ РђРєС‚РёРІРёСЂСѓРµРј */
                    start.change_id('gun', 'push_green', 'push_green_none');
                    start.change_id('gun', 'push_yellow_none', 'push_yellow');
                }
            }
        }
        
        /* функция получает доступ к кнопке "Число выстрелов", т.е. к тегу input и меняет значение value в соответсвтии с длиной массива "Общее число выстрелов */
        function number_shot_pc(){
            var number = document.getElementById('pc_shot');
            number.value = model_pc.number_hit_miss.length;
        }
        function number_miss_pc(){
            var number = document.getElementById('pc_miss');
            number.value = model_pc.number_miss.length;
        }
        /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
        function number_hits_pc(){
            var number = document.getElementById('pc_hits');
            number.value = model_pc.number_hits.length;
        }
        
        /* Р¤-РёРё РґР»СЏ СЃРјРµРЅС‹ РРєРѕРЅРѕРє Рё Р¤РѕСЂРј USER Рё PC - СЃРјРµРЅР° РѕС‡РµСЂРµРґРЅРѕСЃС‚Рё РІС‹СЃС‚СЂРµР»РѕРІ */
        var gray_in_yellow = function (){ /* РЎРµСЂР°СЏ-Р–РµР»С‚Р°СЏ */
            var icon_user = document.getElementById('icon_user_gray'); 
            icon_user.setAttribute("id",'icon_user');
                                    
            var user_form = document.getElementById('user_form'); 
            user_form.setAttribute("class", 'yellow_form');
        }
        var yellow_in_gray = function (){ /* Р–РµР»С‚Р°СЏ-РЎРµСЂР°СЏ */
            var icon_user = document.getElementById('icon_user'); 
            icon_user.setAttribute("id",'icon_user_gray');
                                    
            var user_form = document.getElementById('user_form'); 
            user_form.setAttribute("class", 'gray_form');
        }
        var gray_in_red = function (){  /* РЎРµСЂР°СЏ-РљСЂР°СЃРЅР°СЏ */
            var icon_pc = document.getElementById('icon_pc_gray'); 
            icon_pc.setAttribute("id",'icon_pc');
                                        
            var pc_form = document.getElementById('pc_form'); 
            pc_form.setAttribute("class",'green_form');	
        }
        var red_in_gray = function (){	/* РљСЂР°СЃРЅР°СЏ-РЎРµСЂР°СЏ */
            var icon_pc = document.getElementById('icon_pc'); 
            icon_pc.setAttribute("id",'icon_pc_gray');
                                        
            var pc_form = document.getElementById('pc_form'); 
            pc_form.setAttribute("class",'gray_form');	
        }