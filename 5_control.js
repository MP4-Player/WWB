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
        /* 1. */	var click_fire = document.getElementById("fireButton"); 
                    click_fire.onclick = get_value; 
                    
        /* 2. */   /* var guessInput = document.getElementById("guessInput"); 
                    guessInput.onkeypress = handleKeyPress;*/ /* key Enter - see below in this file */
                    
                    
                    function get_value(){
                        
                        var input_value = document.getElementById("guessInput"); /* Get access to the field to enter coordinates */
                        var coordinate = input_value.value.toUpperCase(); /* converting value to upper case */
                        
                        var regular = /^[ABCDEFGKLM]\d$/; /* searching value in regular expression */
                        var result = coordinate.search(regular);
                        
                        if(coordinate == ''){
                            view.message_up('Введите координаты: A0, D7, L3...');
                        }					
                        else if(result == -1){
                            view.message_up('Вы неверно ввели координаты!!!');
                            input_value.value = ""; /* reset the text field */
                        }
                        
                        else { /* Р”Рѕ 24.11.2018 СЌС‚РѕРіРѕ else РЅРµ Р±С‹Р»Рѕ Рё Р±РµР· РЅРµРіРѕ РїСЂРё РІРІРѕРґРµ РІ РїРѕР»Рµ Р»СЋР±РѕР№ С†РёС„СЂС‹, СЏ РїРѕР»СѓС‡Р°Р» РџСЂРѕРјР°С…, 
                        С…РѕС‚СЏ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ 'Вы неверно ввели координаты!!!" РЎ СЌС‚РёРј else РІСЃРµ СЂР°Р±РѕС‚Р°РµС‚ РЅРѕСЂРјР°Р»СЊРЅРѕ */
                        
                        var coordinate_pc = coordinate + '.pc';
                        /*console.log(coordinate_pc);*/
                                        
                        /* Cycle в„–1 - for analysis ot the entered Coordinates */
                        for(i = 0; i < mdp_pc.length; i ++){
                            /* Search of the coordinate in the array position - Return of the index of the coordinate */
                            var look = mdp_pc[i].position.indexOf(coordinate_pc);
                            
                            if(look !== -1) /* if the coordinate is FOUND */
                            {	
        /* 	Search of the coordinate in the array ok_shots - Return of the index of the coordinate; 
            Array of ok_shots includes the already existing hits */
                                var look_2 = mdp_pc[i].ok_shots.indexOf(coordinate_pc);
                                
                                if(look_2 !== -1){
                                    view.backGR_red_up_pc(); /* РРіСЂРѕРє 2 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('В Клетке «' + coordinate + '» - - Уже обозначен Промах'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                    view.message_up('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 	
                                }
                                
                                else{
                                view.hits(coordinate_pc); /* Cell hits - Red_Ship */
                                
                                var look_3 = mdp_pc[i].position.indexOf(coordinate_pc); /* РС‰РµРј РёРЅРґРµРєСЃ СЌС‚РѕР№ РєРѕРѕСЂРґРёРЅР°С‚С‹ */
                                view.p_deck_ship_pc_end(i + "." + look_3 + ".pc");	/* i + look_3 + .pc - СЌС‚Рѕ id РљСЂР°СЃРЅРѕРіРѕ РєРІР°РґСЂР°С‚Р° РЅРёР¶Рµ РёРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ */
                                
                                mdp_pc[i].ok_shots.push(coordinate_pc); /* Enter of the coordinate to the array ok_shots */
                                    
                                    if(mdp_pc[i].position.length !== mdp_pc[i].ok_shots.length){
                                        
                                        view.backGR_red_up(); /* РРіСЂРѕРє 1 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up('Клетка«' + coordinate + '» - Вы Промахнулись'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                        view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up_pc('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */									
                                        model.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                        number_hits();
                                        model.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                        
                                        /* РЈСЃР»РѕРІРёРµ РґР»СЏ СЃРјРµРЅС‹ РѕС‡РµСЂРµРґРЅРѕСЃС‚Рё РІС‹СЃС‚СЂРµР»РѕРІ - РђРєС‚РёРІРёСЂСѓРµРј РєСЂР°СЃРЅРѕРµ РїРѕР»Рµ */
                                        if(model.number_hit_miss.length > model_pc.number_hit_miss.length){
                                            gray_in_red();
                                            yellow_in_gray();
                                        }
                                        else if(model.number_hit_miss.length == model_pc.number_hit_miss.length){
                                            gray_in_red();
                                            yellow_in_gray();
                                        }
                                        /* Р–РµР»С‚СѓСЋ РїСѓС€РєСѓ РјРµРЅСЏРµРј РЅР° РЎРµСЂСѓСЋ, РІС‚РѕСЂСѓСЋ РЎРµСЂСѓСЋ РЅР° Р—РµР»РµРЅСѓСЋ */
                                        start.change_id('gun', 'push_yellow', 'push_yellow_none');
                                        start.change_id('gun', 'push_green_none', 'push_green');
                                    }
                                    else if(mdp_pc[i].position.length == 1){   
                                        view.backGR_red_up(); /* РРіСЂРѕРє 1 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up('Вы потопили ' + mdp_pc[i].position.length + '-но палубный корабль'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                        view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up_pc('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                        input_value.value = "";
                                        
                                        model.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                        number_hits();
                                        model.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                        near_shots_one_pc();
                                        
                                        end_game_pc();
                                    }
                                    /* for horizontally ship */
                                    else if(mdp_pc[i].zero_one[0] == 0){
                                        if(mdp_pc[i].position.length > 1){ 
                                            view.backGR_red_up(); /* РРіСЂРѕРє 1 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up('Вы потопили ' + mdp_pc[i].position.length + '-х палубный корабль'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                            view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up_pc('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */											
                                            input_value.value = "";
                                            
                                            model.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                            number_hits();
                                            model.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                            near_shots_horiz_pc();
                                            end_game_pc(); /* see below in this file */
                                        }
                                    }
                                    /* for two decks of vertically ship */
                                    else if(mdp_pc[i].zero_one[0] == 1){
                                        if(mdp_pc[i].position.length > 1){   
                                            view.backGR_red_up(); /* РРіСЂРѕРє 1 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up('Вы потопили ' + mdp_pc[i].position.length + '-х палубный корабль'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                            view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up_pc('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                            input_value.value = "";
                                            
                                            model.number_hits.push(1);	   /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
                                            number_hits();
                                            model.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                            near_shots_vertic_pc();
                                            end_game_pc();
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
                            var look_3 = model_pc.missing_coordinate.indexOf(coordinate_pc);
                            var look_4 = model_pc.all_near_index.indexOf(pole_100_pc.indexOf(coordinate_pc));	
                                /* РЈР¶Рµ РѕР±РѕР·РЅР°С‡РµРЅ РїСЂРѕРјР°С…, Р»РёР±Рѕ РєР»РµС‚РєР° РµСЃС‚СЊ РІ РјР°СЃСЃРёРІРµ all_near_index */
                                if(look_4 !== -1 || look_3 !== -1){
                                    view.backGR_orange_up_pc(); /* РРіСЂРѕРє 2 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('В Клетке «' + coordinate + '» - - Уже обозначен Промах…'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                    view.message_up('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 	
                                }
                                /* РџР РћРњРђРҐ */
                                else{
                                    view.missing_pc(coordinate_pc); /* РљР»РµС‚РєР° - РџСЂРѕРјР°С… */
                                    model_pc.missing_coordinate.push(coordinate_pc); /* Р—Р°РЅРѕСЃРёРј РІ РјР°СЃСЃРёРІ "РџСЂРѕРјР°С…РѕРІ" РљРѕРѕСЂРґРёРЅР°С‚Сѓ */
                                    
                                    view.backGR_orange_up(); /* РРіСЂРѕРє 1 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up('Клетка«' + coordinate + '» - Вы Промахнулись'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('Ваш Выстрел. Введите координаты'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    
                                    model.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                    model.number_miss.push(1);	   /* Р§РёСЃР»Рѕ РїСЂРѕРјР°С…РѕРІ */
                                    number_miss();				   /* Р¤СѓРЅРєС†РёСЏ С‡РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ +1 РІ РїРѕР»Рµ input */
                                    input_value.value = ""; 
                                    
                                    /* РЈСЃР»РѕРІРёРµ РґР»СЏ СЃРјРµРЅС‹ РѕС‡РµСЂРµРґРЅРѕСЃС‚Рё РІС‹СЃС‚СЂРµР»РѕРІ */
                                        if(model.number_hit_miss.length > model_pc.number_hit_miss.length){
                                            gray_in_red();
                                            yellow_in_gray();	
                                        }
                                        else if(model.number_hit_miss.length == model_pc.number_hit_miss.length){
                                            gray_in_red();
                                            yellow_in_gray();	
                                        }
                                        /* Р–РµР»С‚СѓСЋ РїСѓС€РєСѓ РЈР‘РР РђР•Рњ, Р—РµР»РµРЅСѓСЋ РђРєС‚РёРІРёСЂСѓРµРј */
                                        start.change_id('gun', 'push_yellow', 'push_yellow_none');
                                        start.change_id('gun', 'push_green_none', 'push_green');
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
            var fireButton = document.getElementById("fireButton_pc");
            if (r.keyCode === 13) {
                fireButton.click();
                return false;
            }
        }*/
        
        function end_game_pc(){
            model_pc.sunken_ships.push(1); 
            /* Р”Р°Р»РµРµ - Р•СЃР»Рё РРіСЂР° РѕРєРѕРЅС‡РµРЅР°, С‚Рѕ РІСЃРµ Р·РЅР°С‡РєРё Рё РїРѕР»СЏ СЃРµСЂС‹Рµ */
            if(model_pc.sunken_ships.length == model_pc.ships_number){ /* Р•СЃР»Рё С‡РёСЃР»Рѕ РїРѕС‚РѕРїР»РµРЅРЅС‹С… РєРѕСЂР°Р±Р»РµР№ СЂР°РІРЅРѕ РћР±С‰РµРјСѓ С‡РёСЃР»Сѓ РєРѕСЂР°Р±Р»РµР№ */
                view.backGR_red_up_pc();
                view.message_up_pc('Вы Проиграли - ВСЕ Ваши корабли потопленны‹');
                yellow_in_gray(); /* РёР· Р–РµР»С‚РѕР№ РІ РЎРµСЂСѓСЋ РРєРѕРЅРєСѓ Рё Р¤РѕСЂРјСѓ */
                view.back_up_epmty(); /* РќРµС‚ С„РѕРЅР° Сѓ User */
                view.message_up('');
                start.change_id('icon_pc', 'icon_pc_gray', 'icon_pc_end'); /* РњРµРЅСЏРµРј РЎРµСЂСѓСЋ РёРєРѕРЅРєСѓ User_2 РЅР° РљСЂР°СЃСѓСЋ */
                start.change_id('gun', 'push_yellow', 'push_yellow_none');	/* Р–РµР»С‚СѓСЋ РїСѓС€РєСѓ РјРµРЅСЏРµРј РЅР° РћС‚СЃСѓС‚СЃС‚РІРёРµ */
            }
            else{
                /* РЈСЃР»РѕРІРёРµ РґР»СЏ СЃРјРµРЅС‹ РѕС‡РµСЂРµРґРЅРѕСЃС‚Рё РІС‹СЃС‚СЂРµР»РѕРІ - РђРєС‚РёРІРёСЂСѓРµРј Р·РµР»РµРЅРѕРµ РїРѕР»Рµ */
                if(model.number_hit_miss.length > model_pc.number_hit_miss.length){/* Р§РёСЃР»Рѕ РїСЂРѕРјР°С…РѕРІ/РїРѕРїР°РґР°РЅРёР№ РРіСЂРѕРєРѕРІ 1 Рё 2 */
                    gray_in_red();
                    yellow_in_gray();
                    start.change_id('gun', 'push_yellow', 'push_yellow_none');
                    start.change_id('gun', 'push_green_none', 'push_green');
                }
                else if(model.number_hit_miss.length == model_pc.number_hit_miss.length){
                    gray_in_red();
                    yellow_in_gray();
                    start.change_id('gun', 'push_yellow', 'push_yellow_none');
                    start.change_id('gun', 'push_green_none', 'push_green');	
                }
            }
        }
        
        /* С„СѓРЅРєС†РёСЏ РїРѕР»СѓС‡Р°РµС‚ РґРѕСЃС‚СѓРї Рє РєРЅРѕРїРєРµ "Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ", С‚.Рµ. Рє С‚РµРіСѓ input Рё РјРµРЅСЏРµС‚ Р·РЅР°С‡РµРЅРёРµ value РІ СЃРѕРѕС‚РІРµС‚СЃРІС‚РёРё СЃ РґР»РёРЅРѕР№ РјР°СЃСЃРёРІР° "РћР±С‰РµРµ С‡РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ" */
        function number_shot(){
            var number = document.getElementById('user_shot');
            number.value = model.number_hit_miss.length;
        }
        /* Р§РёСЃР»Рѕ РїСЂРѕРјР°С…РѕРІ */
        function number_miss(){
            var number = document.getElementById('user_miss');
            number.value = model.number_miss.length;
        }
        /* Р§РёСЃР»Рѕ РїРѕРїР°РґР°РЅРёР№ */
        function number_hits(){
            var number = document.getElementById('user_hits');
            number.value = model.number_hits.length;
        }
    
        /* Р¤-РёРё РґР»СЏ СЃРјРµРЅС‹ РРєРѕРЅРѕРє Рё Р¤РѕСЂРј USER Рё PC */
        var gray_in_yellow = function (){ /* РЎРµСЂР°СЏ-Р–РµР»С‚Р°СЏ - РРєРѕРЅРєР° Рё Р¤РѕСЂРјР°*/
            var icon_user = document.getElementById('icon_user_gray'); 
            icon_user.setAttribute("id",'icon_user');
                                    
            var user_form = document.getElementById('user_form'); 
            user_form.setAttribute("class", 'yellow_form');
        }
        var yellow_in_gray = function (){ /* РР· Р–РµР»С‚РѕР№ РРєРѕРЅРєРё Рё Р¤РѕСЂРјС‹ РІ РЎРµСЂС‹Рµ */
            var icon_user = document.getElementById('icon_user'); 
            icon_user.setAttribute("id",'icon_user_gray');
                                    
            var user_form = document.getElementById('user_form'); 
            user_form.setAttribute("class", 'gray_form');
        }
        var gray_in_red = function (){  /* РЎРµСЂР°СЏ-РљСЂР°СЃРЅР°СЏ - РРєРѕРЅРєР° Рё Р¤РѕСЂРјР° */
            var icon_pc = document.getElementById('icon_pc_gray'); 
            icon_pc.setAttribute("id",'icon_pc');
                                        
            var pc_form = document.getElementById('pc_form'); 
            pc_form.setAttribute("class",'green_form');	
        }
        var red_in_gray = function (){	/* РљСЂР°СЃРЅР°СЏ-РЎРµСЂР°СЏ - РРєРѕРЅРєР° Рё Р¤РѕСЂРјР° */
            var icon_pc = document.getElementById('icon_pc'); 
            icon_pc.setAttribute("id",'icon_pc_gray');
                                        
            var pc_form = document.getElementById('pc_form'); 
            pc_form.setAttribute("class",'gray_form');	
        }