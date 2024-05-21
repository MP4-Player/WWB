1
/* @charset "utf-8"; CSS Document */
var letter = ["A", "B", "C", "D", "E", "F", "G", "K", "L", "M"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/* РњР°СЃСЃРёРІ РІРєР»СЋС‡Р°РµС‚ РІСЃРµ СЏС‡РµР№РєРё РёРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ */
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
    /* Р’Р•Р РҐРќР•Р• Рё РќРР–РќР•Р• РїРѕР»Рµ - РўР•РљРЎРў */
    message_up: function(msg) {
        var message = document.getElementById("messageArea_up");
        message.innerHTML = msg;
    },
    message_up_pc: function(msg) {
        var message = document.getElementById("messageArea_up_pc");
        message.innerHTML = msg;
    },
    /* Р’Р•Р РҐРќР•Р• РїРѕР»Рµ - РћР‘Р©РР™ Р¤РћРќ Р–РµР»С‚С‹Р№ User Рё Р—РµР»РµРЅС‹Р№ PC*/
    backup_yellow: function() {
        var backup_yellow = document.getElementById("messageArea_up");
        backup_yellow.setAttribute('class', 'background_yellow');
    },
    backup_green: function() {
        var backup_green = document.getElementById("messageArea_up_pc");
        backup_green.setAttribute('class', 'background_green');
    },
    /* Р’Р•Р РҐРќР•Р• РїРѕР»Рµ - РљР РђРЎРќР«Р™ Р¤РћРќ User Рё PC */
    backGR_red_up: function() {
        var backGR_red = document.getElementById("messageArea_up");
        backGR_red.setAttribute('class', 'background_red');
    },
    backGR_red_up_pc: function() {
        var backGR_red = document.getElementById("messageArea_up_pc");
        backGR_red.setAttribute('class', 'background_red');
    },
    /* Р’Р•Р РҐРќР•Р• РїРѕР»Рµ - РћР РђРќР–Р•Р’Р«Р™ Р¤РћРќ User Рё PC */
    backGR_orange_up: function() {
        var backGR_orange = document.getElementById("messageArea_up");
        backGR_orange.setAttribute('class', 'background_orange');
    },
    backGR_orange_up_pc: function() {
        var backGR_orange = document.getElementById("messageArea_up_pc");
        backGR_orange.setAttribute('class', 'background_orange');
    },
    /* РќР•Рў Р¤РћРќРђ Сѓ РІРµСЂС…РЅРµРіРѕ РїРѕР»РµР№ User Рё PC */
    back_up_epmty: function() {
        var back_up_epmty = document.getElementById("messageArea_up");
        back_up_epmty.setAttribute('class', 'background_none');
    },
    back_up_epmty_pc: function() {
        var back_up_epmty = document.getElementById("messageArea_up_pc");
        back_up_epmty.setAttribute('class', 'background_none');
    },
    /* РљР›Р•РўРљР РїСЂРѕРјР°С…Рё Рё РїРѕРїР°РґР°РЅРёСЏ РІ РР“Р РћР’Р«РҐ РїРѕР»СЏС… */
    hits: function(cell) {
        var hit = document.getElementById(cell);
        hit.setAttribute("class", "hit");
    },
    hits_gray: function(cell) { /* РџРѕР·РёС†РёРё РєРѕСЂР°Р±Р»РµР№ РІ РїРѕР»Рµ - РЎРµСЂС‹Р№ С†РІРµС‚ */
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
    /* РљР’РђР”Р РђРўР« РЅРёР¶Рµ РРіСЂРѕРІС‹С… РїРѕР»РµР№ */
    div_ship: function(id) { /* DIV РґР»СЏ РєРѕСЂР°Р±Р»РµР№ РЅРёР¶Рµ РРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ */
        var div = document.getElementById(id); /* РџРѕР»СѓС‡Р°РµРј РґРѕСЃС‚СѓРї Рє DIV СЃ id 0, 1, 2 Рё С‚.Рґ. РёР»Рё Р¶Рµ 0.pc, 1.pc, 2.pc Рё ....*/
        div.setAttribute("class", "down_position_div");
    },
    p_deck_ship: function(id) { /* РђР±Р·Р°С†С‹ РґР»СЏ РїР°Р»СѓР± РєРѕСЂР°Р±Р»РµР№ РЅРёР¶Рµ РРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ - Р–РµР»С‚С‹Рµ РєРІР°РґСЂР°С‚С‹*/
        var div_p = document.getElementById(id); /* РџРѕР»СѓС‡Р°РµРј РґРѕСЃС‚СѓРї Рє РђР±Р·Р°С†Р°Рј СЃ id 0.0, 0.1, 0.2 */
        div_p.setAttribute("class", "down_position_div_p");
    },
    p_deck_ship_end: function(id) { /* РџРѕРјРµС‡Р°РµРј Р–РµР»С‚С‹Р№ РєРІР°РґСЂР°С‚ РљСЂР°СЃРЅС‹Рј РєСЂРµСЃС‚РѕРј */
        var div_p = document.getElementById(id);
        div_p.setAttribute("class", "down_position_div_p_end");
    },
    p_deck_ship_pc: function(id) { /* РђР±Р·Р°С†С‹ РґР»СЏ РїР°Р»СѓР± РєРѕСЂР°Р±Р»РµР№ РЅРёР¶Рµ РРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ PC - РљСЂР°СЃРЅС‹Рµ РєРІР°РґСЂР°С‚С‹*/
        var div_p = document.getElementById(id); /* РџРѕР»СѓС‡Р°РµРј РґРѕСЃС‚СѓРї Рє РђР±Р·Р°С†Р°Рј СЃ id 0.0.pc, 0.1.pc, 0.2.pc */
        div_p.setAttribute("class", "down_position_pc_div_p");
    },
    p_deck_ship_pc_end: function(id) { /* РџРѕРјРµС‡Р°РµРј РљСЂР°СЃРЅС‹Р№ РєРІР°РґСЂР°С‚ Р–РµР»С‚С‹Рј РєСЂРµСЃС‚РѕРј */
        var div_p = document.getElementById(id);
        div_p.setAttribute("class", "down_position_pc_div_p_end");
    },
}

2
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
    /* 	1. РћР±СЉРµРєС‚ model
    	2. default_position - СЃРІРѕР№СЃС‚РІРѕ РѕР±СЉРµРєС‚Р° model
    	3. Р·РЅР°С‡РµРЅРёРµ СЃРІРѕР№СЃС‚РІР° default_position - СЌС‚Рѕ РјР°СЃСЃРёРІ РёР· РѕР±СЉРµРєС‚РѕРІ
    	4. РєР°Р¶РґС‹Р№ РѕР±СЉРµРєС‚ РјР°СЃСЃРёРІР° СЃРѕРґРµСЂР¶РёС‚ РѕРґРЅРѕРёРјРµРЅРЅС‹Рµ СЃРІРѕР№СЃС‚РІР°. Рў.Рѕ. РєР°Р¶РґС‹Р№ РѕР±СЉРµРєС‚ - СЌС‚Рѕ РєРѕСЂР°Р±Р»СЊ
    */
    /*  Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№:
    		position -  РїРѕР·РёС†РёРё РєРѕСЂР°Р±Р»РµР№ РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ
    		zero_one - 0 or 1 - РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅРѕРµ РёР»Рё РІРµСЂС‚РёРєР°Р»СЊРЅРѕРµ РїРѕР»РѕР¶РµРЅРёРµ РєРѕСЂР°Р±Р»СЏ
    		ip200 - РёРЅРґРµРєСЃС‹ РєРѕСЂР°Р±Р»СЏ РёР· РјР°СЃСЃРёРІР° pole_100 РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ РєРѕРѕСЂРґРёРЅР°С‚Р°РјРё РёР· РјР°СЃСЃРёРІР° position
    		near_position - СЃРѕСЃРµРґРЅРёРµ РёРЅРґРµРєСЃС‹ РєРѕСЂР°Р±Р»СЏ "Р·Р°СЂР°РЅРµРµ РїРѕСЂРµРґРµР»СЏРµРјС‹Рµ РїСЂРѕРјР°С…Рё" РёР· РјР°СЃСЃРёРІР° pole_100
    		excludes_position - ip200 + near_position
    		
    		РЎРѕСЃРµРґРЅРёРµ РёРЅРґРµРєСЃС‹ Р·РґРµСЃСЊ РЅСѓР¶РЅС‹, С‡С‚Рѕ РІС‹РґРµСЂР¶РёРІР°С‚СЊ СЂР°СЃСЃС‚РѕСЏРЅРёСЏ РјРµР¶РґСѓ РєРѕСЂР°Р±Р»СЏРјРё
    */
    excludes_position: [],
    /*	РђРЅР°Р»РёР· РІС‹СЃС‚СЂРµР»РѕРІ
    		ok_shots -  РєРѕРѕСЂРґРёРЅР°С‚С‹ РєР»РµС‚РѕРє, РІ РєРѕС‚РѕСЂС‹С… СѓР¶Рµ РѕС‚РјРµС‡РµРЅС‹ РїРѕРїР°РґР°РЅРёСЏ
    		ip100 - РёРЅРґРµРєСЃС‹ РєРѕРѕСЂРґРёРЅР°С‚ РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРёРё СЃ ok_shots
    		near_index - СЃРѕСЃРµРґРЅРёРµ РёРЅРґРµРєСЃС‹ СЃ СѓР¶Рµ РїРѕРґР±РёС‚С‹Рј РєРѕСЂР°Р±Р»РµРј
    		all_near_index - РІСЃРµ СЃРѕСЃРµРґРЅРёРµ РёРЅРґРµРєСЃС‹
    		missing_coordinate - СѓР¶Рµ РѕР±РѕР·РЅР°С‡РµРЅРЅРёРµ РїСЂРѕРјР°С…Рё
    		
    		Р—РґРµСЃСЊ СЃРѕСЃРµРґРЅРёРµ РёРЅРґРµРєСЃС‹ Р·РґРµСЃСЊ РЅСѓР¶РЅС‹, С‡С‚Рѕ РРіСЂРѕРє РЅРµ СЃС‚СЂРµР»СЏР» Р·СЂСЏ С‚СѓРґР°, РіРґРµ РєРѕСЂР°Р±Р»СЏ Р±С‹С‚СЊ РЅРµ РјРѕР¶РµС‚ 
    	*/
    number_hit_miss: [],
    /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ - СЌС‚Рѕ РїСЂРѕРјР°С…Рё Рё РїРѕРїР°РґР°РЅРёСЏ, РѕС€РёР±РєРё СЃСЋРґР° РЅРµ РІС…РѕРґСЏС‚... */
    number_miss: [],
    /* Р§РёСЃР»Рѕ РїСЂРѕРјР°С…РѕРІ */
    number_hits: [],
    /* Р§РёСЃР»Рѕ РџРѕРїР°РґР°РЅРёР№ */
    missing_coordinate: [],
    all_near_index: [],
    ships_number: 10,
    /* РћР±С‰РµРµ РєРѕР»РёС‡РµСЃС‚РІРѕ РєРѕСЂР°Р±Р»РµР№, РєРѕС‚РѕСЂС‹Рµ РЅСѓР¶РЅРѕ РїРѕС‚РѕРїРёС‚СЊ */
    sunken_ships: [] /*  Р§РёСЃР»Рѕ РїРѕС‚РѕРїР»РµРЅРЅС‹С… РєРѕСЂР°Р±Р»РµР№ */
        /* Р­С‚Рё РґРІР° Р·РЅР°С‡РµРЅРёСЏ СЃСЂР°РІРЅРёРІР°СЋС‚СЃСЏ. Р•СЃР»Рё РѕРЅРё СЂР°РІРЅС‹, С‚Рѕ РёРіСЂР° РћРєРѕРЅС‡РµРЅР° */
}
var mdp = model.default_position;

3
/* any object - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ */
var any = {
    /* Generating random number from 0 to 2 and rounding number in the less side */
        ver_hor: function(){									/* РЎР»СѓС‡Р°Р№РЅРѕРµ С‡РёСЃР»Рѕ 0 РёР»Рё 1 */
             var zero_one = Math.floor(Math.random()*2); 
             return zero_one;
             
        },
        
        check: function (){					/* Р¤-РёСЏ РїСЂРѕРІРµСЂРєРё РІРІРµРґРµРЅРЅРѕР№ РєРѕРѕСЂРґРёРЅР°С‚С‹: РµСЃС‚СЊ Р»Рё РµРµ РРЅРґРµРєСЃ РІ excludes_position:[] */
            for(l = 0; l < mdp[i].position.length; l++){
                var look = model.excludes_position.indexOf(pole_100.indexOf(mdp[i].position[l]));
                if(look !== -1){								/* Р•СЃР»Рё РµСЃС‚СЊ - РІРѕР·РІСЂР°С‰Р°РµРј false */
                    return false;	
                }
            }
        },
        
        view_hits_gray: function (){
            for(k = 0; k < mdp[i].position.length; k++){
                view.hits_gray(mdp[i].position[k]);
            }
            console.log(mdp[i].position);
        },
        
    /* Р¤-РёСЏ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РїСѓСЃС‚С‹С… РєР»РµС‚РѕРє РІРЅРёР·Сѓ РёРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ, Рє-СЂС‹Рµ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ С‡РёСЃР»Сѓ РєРѕСЂР°Р±Р»РµР№ Рё С‡РёСЃР»Сѓ РёС… РїР°Р»СѓР± */
        view_position_ships: function (){ 
            /*console.log(i);*/
            for(k = 0; k < mdp[i].position.length; k++){
                view.div_ship(i); 							/* id РєР°Р¶РґРѕРіРѕ DIVР° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ РёРЅРґРµРєСЃСѓ РєРѕСЂР°Р±Р»СЏ РІ model.default_position*/
                view.p_deck_ship(i + "." + k);				/* id РђР±Р·Р°С†Р° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ РёРЅРґРµРєСЃСѓ РєРѕСЂР°Р±Р»СЏ + РёРЅРґРµРєСЃ РµРіРѕ РїР°Р»СѓР±С‹ */
                /*console.log(i + "." + k);*/
            }
        },
        
        /* P.S. - РљРѕРіРґР° С„СѓРЅРєС†РёРё check Рё view_hits_gray Р±С‹Р»Рё РІС‹РЅРµСЃРµРЅС‹ Р·Р° РїСЂРµРґРµР»С‹ РѕР±СЉРµРєС‚Р° any, С‚Рѕ  С„СѓРЅС†РёСЏ go_game (СЃРј. РјРµС‚РѕРґ start_play) РЅРµ РјРѕРіР»Р° РёС… РІРѕСЃРїСЂРёРЅСЏС‚СЊ РїСЂРё РЅР°Р¶Р°С‚РёРёРё РЅР° РєРЅРѕРїРєРµ "РќР°С‡Р°С‚СЊ РРіСЂСѓ"
            РџРѕСЌС‚РѕРјСѓ С„СѓРЅРєС†РёРё check Рё view_hits_gray РІРєР»СЋС‡РµРЅС‹ РІ РѕР±СЉРµРєС‚ any Рё РІРЅСѓС‚СЂРё С„СѓРЅРєС†РёРё random_number РјС‹ РїРѕР»СѓС‡Р°РµРј Рє РЅРёРј РґРѕСЃС‚СѓРї С‡РµСЂРµР· this */
        random_number: function (){
            /* Start for */
            for(i = 0; i < mdp.length; i ++){
                
                /* horizontal ship */
                if(this.ver_hor() == 0){ 
                    
                    mdp[i].zero_one.push(0);
    
    /* 
        1. generating random number from 0 to 9 for getting letter from A to M 
        2. generating random number for horizontally ships different lengths: 10 - 0 for one_desk ship, 10 - 1 for two_desk ship and next... 
        3. receiving a mdp[i].position array  - С„РѕСЂРјРёСЂСѓРµРј 
        4. checking a mdp[i].position array 
        5. view.hits_gray  
        6. if mdp[i].position array are ok - then .....  
    */		
    
                    do{
                        
            /* 1. */	var random_number_1 = Math.floor(Math.random()*10); 
                        var random_letter = letter[random_number_1]; /* getting letter from array letter */
                        
            /* 2. */  	var random_number_2 = Math.floor(Math.random()*(10 - (mdp[i].position.length - 1)));
                        
                            
            /* 3. */	for(j = 0; j < mdp[i].position.length; j ++){
                            mdp[i].position[j] = random_letter + (random_number_2 + j);
                        }
                        
            /* 4. */	this.check(); /* see below in this file */
                        
                    } 
                    
                    while(this.check() == false)
                    
                    /*console.log(mdp[i].zero_one[0]);*/
                    
            /* 5. */	/*this.view_hits_gray();*/
                        this.view_position_ships();
                                          
            /* 6. */	near_position_one();
                        near_position_horiz();	
                }
                
    /* Vertical ship */			
                    else{
                
                    mdp[i].zero_one.push(1);
    
    /* 1. generating random number for vertically ships different heights:  10 - 0 for one_desk ship, 10 - 1 for two_desk ship and next... 
       2. generating random number from 0 to 9
       3. receiving a mdp[i].position array  - С„РѕСЂРјРёСЂСѓРµРј  */
    
                    do{
                        
        /* 1. */		var random_number_1 = Math.floor(Math.random()*(10 - (mdp[i].position.length - 1))); 
                        
        /* 2. */		var random_number_2 = Math.floor(Math.random()*10);
                        
        /* 3. */		for(j = 0; j < mdp[i].position.length; j ++){
                            mdp[i].position[j] = letter[random_number_1 + j] + random_number_2;
                        }
                        
                        this.check();
                        
                    } /* END do */
                    
                    while(this.check() == false)
                    
                    /*console.log(mdp[i].zero_one[0]);*/
                    
                    /*this.view_hits_gray();*/
                    this.view_position_ships();
                    
                    near_position_one();
                    near_position_vertic();	
                }
                
            }/* The End for */
        }/* The End are random_number function  */
    } 
    /* END any object ------------------------------------------------------------------------------------------------------------- */

4
/* ONE desk - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№*/
var near_position_one = function(){

	for(k = 0; k < mdp[i].position.length; k++){
		
		/*view.hits_gray(mdp[i].position[k]);*/
				
		/*model.excludes_position.push(mdp[i].position[k]);*/
		mdp[i].ip200.push(pole_100.indexOf(mdp[i].position[k]));
		
				/* 1 */
				if	(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/A[0-9]|M[0-9]|[ABCDEFGKLM]0|[ABCDEFGKLM]9/) == false)
				{mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					
					/* Entered in excludes_position indexes of near_position  */
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]); 
					}	
					/* full excludes positions: index of the hit +  indexes of near_position  */
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* 1: A0 */
				else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'A0'){
					mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* 1: A1 - A8 */
				else if(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/A[1-8]/) == true)
				{mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* 1: A9 */
				else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'A9'){
					mdp[i].near_position = [mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* 1: M0 */
				else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'M0'){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* 1: M1 - M8 */
				else if(mdp[i].position.length == 1  && from_to(mdp[i].position[0],/M[1-8]/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] - 1];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* 1: M9 */
				else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'M9'){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 1];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* 1: B0 - L0 */
				else if	(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}			
				
				/* 1: B9 - L9 */
				else if	(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/[BCDEFGKL]9/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}	
					model.excludes_position.push(mdp[i].ip200[0]); 
				}
				
				/* missing near_position */
				/*for(h = 0; h < mdp[i].near_position.length; h ++){
					view.missing(pole_100[mdp[i].near_position[h]]);
				}	*/	
				
	}
}
/* Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ РѕРґРЅРѕРїР°Р»СѓР±РЅС‹С… РєРѕСЂР°Р±Р»РµР№ - ONE desk END */

/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ */
var near_position_horiz = function(){

	for(k = 0; k < mdp[i].position.length; k++){
				
			/*view.hits(mdp[i].position[k]);*/
				
				mdp[i].ip200.push(pole_100.indexOf(mdp[i].position[k]));
				
				/* 2_h */
				if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[0-8]|M[0-8]|[ABCDEFGKLM]0|[ABCDEFGKLM]8/) == false){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] + 2, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					/* forming array model.excludes_position */
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: A0 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A0'){
					mdp[i].near_position = [mdp[i].ip200[0] + 2, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: A1 - A7 */
				else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[1-7]/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] + 2, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: A8 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A8'){
					mdp[i].near_position = [mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: M0 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'M0'){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] + 2];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: M1 - M7 */
				else if	(mdp[i].position.length == 2  && from_to(mdp[i].position[0],/M[1-7]/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] + 2, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: M8 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'M8'){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: B0 - L0 */
				else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] + 2, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_h: B8 - L8 */
				else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGKL]8/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* ------------- 3_h ---------------- */
				else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[0-7]|M[0-7]|[ABCDEFGKLM]0|[ABCDEFGKLM]7/) == false){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] + 3, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					/* forming array model.excludes_position */
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: A0 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A0'){
					mdp[i].near_position = [mdp[i].ip200[0] + 3, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: A1 - A6 */
				else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[1-6]/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] + 3, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: A7 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A7'){
					mdp[i].near_position = [mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: M0 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'M0'){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] + 3];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: M1 - M6 */
				else if	(mdp[i].position.length == 3  && from_to(mdp[i].position[0],/M[1-6]/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] + 3, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: M7 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'M7'){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: B0 - L0 */
				else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] + 3, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_h: B7 - L7 */
				else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFGKL]7/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* ------------- 4_h ---------------- */
				else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[0-6]|M[0-6]|[ABCDEFGKLM]0|[ABCDEFGKLM]6/) == false){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] - 6, mdp[i].ip200[0] + 4, mdp[i].ip200[0] + 14, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					/* forming array model.excludes_position */
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: A0 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A0'){
					mdp[i].near_position = [mdp[i].ip200[0] + 4, mdp[i].ip200[0] + 14, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: A1 - A5 */
				else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[1-5]/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] + 4, mdp[i].ip200[0] + 14, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: A6 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A6'){
					mdp[i].near_position = [mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: M0 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'M0'){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] - 6, mdp[i].ip200[0] + 4];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: M1 - M5 */
				else if	(mdp[i].position.length == 4  && from_to(mdp[i].position[0],/M[1-5]/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] - 6, mdp[i].ip200[0] + 4, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: M6 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'M6'){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: B0 - L0 */
				else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] - 6, mdp[i].ip200[0] + 4, mdp[i].ip200[0] + 14, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_h: B6 - L6 */
				else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEFGKL]6/) == true){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] - 8, mdp[i].ip200[0] - 7, mdp[i].ip200[0] + 13, mdp[i].ip200[0] + 12, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
											
				/* missing near_position */
				/*for(h = 0; h < mdp[i].near_position.length; h ++){
					view.missing(pole_100[mdp[i].near_position[h]]);
				}*/
			}	
}
/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ END  */

/* 2-4 DECK Vertic - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ */
var near_position_vertic = function(){

	for(k = 0; k < mdp[i].position.length; k++){
				
				/*view.hits(mdp[i].position[k]);*/
				
				/*model.excludes_position.push(mdp[i].position[k]);*/
				mdp[i].ip200.push(pole_100.indexOf(mdp[i].position[k]));
				
				/* 2_v */
				if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[0-9]|L[0-9]|[BCDEFGK]0|[BCDEFGK]9/) == false){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 20, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: A0 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A0'){
					mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 20];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: A1 - A8 */
				else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[1-8]/) == true /*&& from_to(mdp[i].position[0],/(A0|A9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 20, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: A9 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A9'){
					mdp[i].near_position = [mdp[i].ip200[0] + 20, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: L0 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'L0'){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: L1 - L8 */
				else if	(mdp[i].position.length == 2  && from_to(mdp[i].position[0],/L[1-8]/) == true /*&& from_to(mdp[i].position[0],/(L0|L9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: L9 */
				else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'L9'){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: B0 - K0 */
				else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGK]0/) == true /*&& from_to(mdp[i].position[0],/(A0|L0)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 20];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 2_v: B9 - K9 */
				else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGK]9/) == true /*&& from_to(mdp[i].position[0],/(A9|L9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] + 20, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* -------------------- 3_v -----------------------*/
				else if (mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[0-9]|K[0-9]|[BCDEFG]0|[BCDEFG]9/) == false){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 30, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: A0 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A0'){
					mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 30];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: A1 - A8 */
				else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[1-8]/) == true /*&& from_to(mdp[i].position[0],/(A0|A9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 30, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: A9 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A9'){
					mdp[i].near_position = [mdp[i].ip200[0] + 30, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: K0 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'K0'){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: K1 - K8 */
				else if	(mdp[i].position.length == 3  && from_to(mdp[i].position[0],/K[1-8]/) == true /*&& from_to(mdp[i].position[0],/(L0|L9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: K9 */
				else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'K9'){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: B0 - G0 */
				else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFG]0/) == true /*&& from_to(mdp[i].position[0],/(A0|L0)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 30];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 3_v: B9 - G9 */
				else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFG]9/) == true /*&& from_to(mdp[i].position[0],/(A9|L9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] + 30, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
					/* -------------------- 4_v -----------------------*/
				else if (mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[0-9]|G[0-9]|[BCDEF]0|[BCDEF]9/) == false){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 41, mdp[i].ip200[0] + 40, mdp[i].ip200[0] + 39, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: A0 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A0'){
					mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 41, mdp[i].ip200[0] + 40];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: A1 - A8 */
				else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[1-8]/) == true /*&& from_to(mdp[i].position[0],/(A0|A9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 41, mdp[i].ip200[0] + 40, mdp[i].ip200[0] + 39, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: A9 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A9'){
					mdp[i].near_position = [mdp[i].ip200[0] + 40, mdp[i].ip200[0] + 39, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: G0 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'G0'){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: G1 - G8 */
				else if	(mdp[i].position.length == 4  && from_to(mdp[i].position[0],/G[1-8]/) == true /*&& from_to(mdp[i].position[0],/(L0|L9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: G9 */
				else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'G9'){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: B0 - F0 */
				else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEF]0/) == true /*&& from_to(mdp[i].position[0],/(A0|L0)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 10, mdp[i].ip200[0] - 9, mdp[i].ip200[0] + 1, mdp[i].ip200[0] + 11, mdp[i].ip200[0] + 21, mdp[i].ip200[0] + 31, mdp[i].ip200[0] + 41, mdp[i].ip200[0] + 40];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
				
				/* 4_v: B9 - F9 */
				else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEF]9/) == true /*&& from_to(mdp[i].position[0],/(A9|L9)/) == false*/){
					mdp[i].near_position = [mdp[i].ip200[0] - 11, mdp[i].ip200[0] - 10, mdp[i].ip200[0] + 40, mdp[i].ip200[0] + 39, mdp[i].ip200[0] + 29, mdp[i].ip200[0] + 19, mdp[i].ip200[0] + 9, mdp[i].ip200[0] - 1];
					for(m = 0; m < mdp[i].near_position.length; m ++){
						model.excludes_position.push(mdp[i].near_position[m]);
					}
					for(n = 0; n < mdp[i].ip200.length; n ++){
							model.excludes_position.push(mdp[i].ip200[n]);
					}
				}
											
				/* missing near_position */
				/*for(h = 0; h < mdp[i].near_position.length; h ++){
					view.missing(pole_100[mdp[i].near_position[h]]);
				}*/
			}	
}
/* 2-4 DECK Vertic - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ END  */

var from_to = function(value,range){
			var regular = range; 
			var result = value.search(regular);
			if(result !== -1){ /* if found */
				return true;	
			}
			else{ 
				return false;	
			}
	}// JavaScript Document

5
var start = { 
	
	start_play: function() {
	
		var start =	document.getElementById('start_play'); /* Р”РѕСЃС‚СѓРї Рє РєРЅРѕРїРєРµ "РќР°С‡Р°С‚СЊ РРіСЂСѓ" */
		start.onclick = go_game;						   /* РџСЂРё С‰РµР»С‡РєРµ РЅР° РєРЅРѕРїРєРµ: РїРµСЂРµРґР°РµРј СѓРїСЂР°РІР»РµРЅРёРµ РѕР±СЂР°Р±РѕС‚С‡РёРєСѓ */
				
		function go_game(){	/* РћР±СЂР°Р±РѕС‚С‡РёРє */
			
			priority_shot(); /* Р¤СѓРЅРєС†РёСЏ РѕРїСЂРµРґРµР»СЏРµС‚ РїСЂРёРѕСЂРёС‚РµС‚ РІС‹СЃС‚СЂРµР»Р° */
		
			any.random_number();		/* 1. Р’С‹Р·С‹РІР°РµРј С„-РёСЋ random_number - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ */
			any_pc.random_number();							
			
			var stop_play = document.getElementById('start_play'); 	/* Р”РѕСЃС‚СѓРї Рє РєРЅРѕРїРєРµ "РќР°С‡Р°С‚СЊ РРіСЂСѓ" */
			stop_play.setAttribute("class", 'outline');	
			stop_play.setAttribute("value", 'Р’С‹Р№С‚Рё РёР· РРіСЂС‹');		/* 1. Р—Р°РјРµРЅР° РЅР°РґРїРёСЃРё РЅР° "Р’С‹Р№С‚Рё РёР· РРіСЂС‹" */
			stop_play.setAttribute("id", 'stop_play');				/* 2. Р—Р°РјРµРЅР° id  РЅР° 'stop_play' */
			
			var Stop_Play = document.getElementById('stop_play');	/* Р”РѕСЃС‚СѓРї Рє РєРЅРѕРїРєРµ "Р’С‹Р№С‚Рё РёР· РёРіСЂС‹" */
			Stop_Play.onclick = refreshPage;						/* Р’С‹Р·РІРѕРІ С„СѓРЅРєС†РёРё РѕР±РЅРѕРІР»РµРЅРёРµ СЃС‚СЂР°РЅРёС†С‹ */
			
			function refreshPage(){
				window.location.reload();	
			} 
			
/*			this.priority_shot();*/
				
		} /* go_game() - END */
				
	},
	/* РњРµС‚РѕРґ СЃРјРµРЅС‹ id РЅР° id */
	change_id: function(variable, id_1, id_2){
		var variable = document.getElementById(id_1); /* id_1 РјРµРЅСЏРµРј РЅР° id_2 */
		variable.setAttribute("id",id_2);		
	},
	/* РњРµС‚РѕРґ СЃРјРµРЅС‹ id РЅР° class */
	change_id_class: function(any_var, id_1, class_1){
		var any_var = document.getElementById(id_1); /* id_1 РјРµРЅСЏРµРј РЅР° class_1 */
		any_var.setAttribute("class", class_1);		
	}		
	
}

var ver_hor = function(){		/* РЎР»СѓС‡Р°Р№РЅРѕРµ С‡РёСЃР»Рѕ 0 РёР»Рё 1 */
		var zero_one = Math.floor(Math.random()*2); 
		return zero_one;
	};

	
var	priority_shot = function(){			/* Р•СЃР»Рё 0 - Р°РєС‚РёРІРЅРѕ РїРѕР»Рµ User_1, РµСЃР»Рё 1 - РїРѕР»Рµ PC, С‚.Рµ User_2 */
		
		var any_number = ver_hor();
							
		if(any_number == 0){
			
			var input_value = document.getElementById("guessInput"); /* Р”РѕСЃС‚СѓРї Рє РїРѕР»СЋ РІРІРѕРґР° РєРѕРѕСЂРґРёРЅР°С‚ */
			input_value.value = ""; /* РћС‡РёС‰Р°РµРј РїРѕР»Рµ */
			var input_value = document.getElementById("guessInput_pc");
			input_value.value = "";
			
			start.change_id('icon_user', 'icon_user_gray', 'icon_user'); /* РњРµРЅСЏРµРј РЎРµСЂСѓСЋ РёРєРѕРЅРєСѓ User_1 РЅР° Р–РµР»С‚СѓСЋ */
			start.change_id('gun', 'push_yellow_none', 'push_yellow'); /* РњРµРЅСЏРµРј DIV СЃ СЃРµСЂРѕР№ РїСѓС€РєРѕР№ РЅР° DIV СЃ Р–РµР»С‚РѕР№ */
								
			start.change_id_class('user_form', 'user_form', 'yellow_form');	/* РњРµРЅСЏРµРј РЎРµСЂСѓСЋ С„РѕСЂРјСѓ User_1 РЅР° Р–РµР»С‚СѓСЋ */
			view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹');
			view.backup_yellow(); 
		}
		else {
			var input_value = document.getElementById("guessInput"); /* Р”РѕСЃС‚СѓРї Рє РїРѕР»СЋ РІРІРѕРґР° РєРѕРѕСЂРґРёРЅР°С‚ */
			input_value.value = ""; /* РћС‡РёС‰Р°РµРј РїРѕР»Рµ */
			var input_value = document.getElementById("guessInput_pc");
			input_value.value = "";
			
			start.change_id('icon_pc', 'icon_pc_gray', 'icon_pc'); /* РњРµРЅСЏРµРј РЎРµСЂСѓСЋ РёРєРѕРЅРєСѓ User_2 РЅР° Р—РµР»РµРЅСѓСЋ */
			start.change_id('gun', 'push_green_none', 'push_green'); /* РњРµРЅСЏРµРј DIV СЃ СЃРµСЂРѕР№ РїСѓС€РєРѕР№ РЅР° DIV СЃ Р—РµР»РµРЅРѕР№ */
									
			start.change_id_class('pc_form', 'pc_form', 'green_form'); /* РњРµРЅСЏРµРј РЎРµСЂСѓСЋ С„РѕСЂРјСѓ User_1 РЅР° Р—РµР»РµРЅСѓСЋ */
			view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹');
			view.backup_green();
			
		}
	};

start.start_play();

6
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
                            view.message_up('Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹: A0, D7, L3...');
                        }					
                        else if(result == -1){
                            view.message_up('Р’С‹ РЅРµРІРµСЂРЅРѕ РІРІРµР»Рё РєРѕРѕСЂРґРёРЅР°С‚С‹!!!');
                            input_value.value = ""; /* reset the text field */
                        }
                        
                        else { /* Р”Рѕ 24.11.2018 СЌС‚РѕРіРѕ else РЅРµ Р±С‹Р»Рѕ Рё Р±РµР· РЅРµРіРѕ РїСЂРё РІРІРѕРґРµ РІ РїРѕР»Рµ Р»СЋР±РѕР№ С†РёС„СЂС‹, СЏ РїРѕР»СѓС‡Р°Р» РџСЂРѕРјР°С…, 
                        С…РѕС‚СЏ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ 'Р’С‹ РЅРµРІРµСЂРЅРѕ РІРІРµР»Рё РєРѕРѕСЂРґРёРЅР°С‚С‹!!!" РЎ СЌС‚РёРј else РІСЃРµ СЂР°Р±РѕС‚Р°РµС‚ РЅРѕСЂРјР°Р»СЊРЅРѕ */
                        
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
                                    view.message_up_pc('Р’ РљР»РµС‚РєРµ В«' + coordinate + 'В» - РЈР¶Рµ РѕР±РѕР·РЅР°С‡РµРЅРѕ РџРћРџРђР”РђРќРР•'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                    view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 	
                                }
                                
                                else{
                                view.hits(coordinate_pc); /* Cell hits - Red_Ship */
                                
                                var look_3 = mdp_pc[i].position.indexOf(coordinate_pc); /* РС‰РµРј РёРЅРґРµРєСЃ СЌС‚РѕР№ РєРѕРѕСЂРґРёРЅР°С‚С‹ */
                                view.p_deck_ship_pc_end(i + "." + look_3 + ".pc");	/* i + look_3 + .pc - СЌС‚Рѕ id РљСЂР°СЃРЅРѕРіРѕ РєРІР°РґСЂР°С‚Р° РЅРёР¶Рµ РёРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ */
                                
                                mdp_pc[i].ok_shots.push(coordinate_pc); /* Enter of the coordinate to the array ok_shots */
                                    
                                    if(mdp_pc[i].position.length !== mdp_pc[i].ok_shots.length){
                                        
                                        view.backGR_red_up(); /* РРіСЂРѕРє 1 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up('РљР»РµС‚РєР° В«' + coordinate + 'В» - Р’С‹ РїРѕРїР°Р»Рё РІ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                        view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */									
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
                                        view.message_up('Р’С‹ РїРѕС‚РѕРїРёР»Рё ' + mdp_pc[i].position.length + '-РЅРѕ РїР°Р»СѓР±РЅС‹Р№ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                        view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
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
                                            view.message_up('Р’С‹ РїРѕС‚РѕРїРёР»Рё ' + mdp_pc[i].position.length + '-С… РїР°Р»СѓР±РЅС‹Р№ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                            view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */											
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
                                            view.message_up('Р’С‹ РїРѕС‚РѕРїРёР»Рё ' + mdp_pc[i].position.length + '-С… РїР°Р»СѓР±РЅС‹Р№ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                            view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                            view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
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
                                    view.message_up_pc('Р’ РљР»РµС‚РєРµ В«' + coordinate + 'В» - РЈР¶Рµ РѕР±РѕР·РЅР°С‡РµРЅ РџСЂРѕРјР°С…'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                    view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 	
                                }
                                /* РџР РћРњРђРҐ */
                                else{
                                    view.missing_pc(coordinate_pc); /* РљР»РµС‚РєР° - РџСЂРѕРјР°С… */
                                    model_pc.missing_coordinate.push(coordinate_pc); /* Р—Р°РЅРѕСЃРёРј РІ РјР°СЃСЃРёРІ "РџСЂРѕРјР°С…РѕРІ" РљРѕРѕСЂРґРёРЅР°С‚Сѓ */
                                    
                                    view.backGR_orange_up(); /* РРіСЂРѕРє 1 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up('РљР»РµС‚РєР° В«' + coordinate + 'В» - Р’С‹ РџСЂРѕРјР°С…РЅСѓР»РёСЃСЊ'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    
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
                view.message_up_pc('Р’С‹ РџСЂРѕРёРіСЂР°Р»Рё - Р’РЎР• Р’Р°С€Рё РєРѕСЂР°Р±Р»Рё РїРѕС‚РѕРїР»РµРЅС‹');
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


7
/* ONE DECK - formation arrays of ip100, near_index and all_near_index  */

/* Functionin near_shots: the function consider current array Position */
function near_shots_one(){
    for(j = 0; j < mdp[i].position.length; j++){
        
        /* Search of the coordinate of the default position in the array pole_100 - And entering their indixes in the array ip100 */
        mdp[i].ip100.push(pole_100.indexOf(mdp[i].position[j])); 
        
            /* 1 */
            if	(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/A[0-9]|M[0-9]|[ABCDEFGKLM]0|[ABCDEFGKLM]9/) == false)
            {mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                /* neighboring cells in which no ships - missing */	
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 1: A0 */
            else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'A0'){
                mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 1: A1 - A8 */
            else if(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/A[1-8]/) == true /*&& from_to(mdp[i].position[0],/(A0|A9)/) == false*/)
            {mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 1: A9 */
            else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'A9'){
                mdp[i].near_index = [mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 1: M0 */
            else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'M0'){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 1: M1 - M8 */
            else if(mdp[i].position.length == 1  && from_to(mdp[i].position[0],/M[1-8]/) == true/* && from_to(mdp[i].position[0],/(M0|M9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 1: M9 */
            else if(mdp[i].position.length == 1 && mdp[i].position[0] == 'M9'){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 1: B0 - L0 */
            else if	(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true && from_to(mdp[i].position[0],/(A0|M0)/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }			
            
            /* 1: B9 - L9 */
            else if	(mdp[i].position.length == 1 && from_to(mdp[i].position[0],/[BCDEFGKL]9/) == true && from_to(mdp[i].position[0],/(A9|M9)/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
    }
}
/* ONE DECK - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ END */

/* 2, 3, 4 DECK HORIZ - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ */
function near_shots_horiz(){
    for(j = 0; j < mdp[i].position.length; j++){
        
        /* Search of the coordinate of the default position in the array pole_100 - And entering their indixes in the array ip100 */
        mdp[i].ip100.push(pole_100.indexOf(mdp[i].position[j])); 
        
            /* 2_h */
            if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[0-8]|M[0-8]|[ABCDEFGKLM]0|[ABCDEFGKLM]8/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] + 2, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 2_h: A0 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A0'){
                mdp[i].near_index = [mdp[i].ip100[0] + 2, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 2_h: A1 - A7 */
            else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[1-7]/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] + 2, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 2_h: A8 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A8'){
                mdp[i].near_index = [mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 2_h: M0 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'M0'){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] + 2];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 2_h: M1 - M7 */
            else if	(mdp[i].position.length == 2  && from_to(mdp[i].position[0],/M[1-7]/)){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] + 2, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_h: M8 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'M8'){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* 2_h: B0 - L0 */
            else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] + 2, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_h: B8 - L8 */
            else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGKL]8/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]);
                    model.all_near_index.push(mdp[i].near_index[k]); 
                }
            }
            
            /* ------------- 3_h ---------------- */
            else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[0-7]|M[0-7]|[ABCDEFGKLM]0|[ABCDEFGKLM]7/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] + 3, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: A0 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A0'){
                mdp[i].near_index = [mdp[i].ip100[0] + 3, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: A1 - A6 */
            else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[1-6]/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] + 3, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: A7 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A7'){
                mdp[i].near_index = [mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: M0 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'M0'){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] + 3];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: M1 - M6 */
            else if	(mdp[i].position.length == 3  && from_to(mdp[i].position[0],/M[1-6]/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] + 3, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: M7 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'M7'){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: B0 - L0 */
            else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] + 3, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_h: B7 - L7 */
            else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFGKL]7/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* ------------- 4_h ---------------- */
            else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[0-6]|M[0-6]|[ABCDEFGKLM]0|[ABCDEFGKLM]6/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] - 6, mdp[i].ip100[0] + 4, mdp[i].ip100[0] + 14, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: A0 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A0'){
                mdp[i].near_index = [mdp[i].ip100[0] + 4, mdp[i].ip100[0] + 14, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: A1 - A5 */
            else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[1-5]/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] + 4, mdp[i].ip100[0] + 14, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: A6 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A6'){
                mdp[i].near_index = [mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: M0 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'M0'){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] - 6, mdp[i].ip100[0] + 4];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: M1 - M5 */
            else if	(mdp[i].position.length == 4  && from_to(mdp[i].position[0],/M[1-5]/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] - 6, mdp[i].ip100[0] + 4, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: M6 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'M6'){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: B0 - L0 */
            else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEFGKL]0/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] - 6, mdp[i].ip100[0] + 4, mdp[i].ip100[0] + 14, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_h: B6 - L6 */
            else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEFGKL]6/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] - 8, mdp[i].ip100[0] - 7, mdp[i].ip100[0] + 13, mdp[i].ip100[0] + 12, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }

    }
}
/* 2, 3, 4 DECK HORIZ - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ END */

/* 2, 3, 4 DECK VERTIC - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ */
function near_shots_vertic(){
    for(j = 0; j < mdp[i].position.length; j++){
        
        /* Search of the coordinate of the default position in the array pole_100 - And entering their indixes in the array ip100 */
        mdp[i].ip100.push(pole_100.indexOf(mdp[i].position[j])); 
        
            /* 2 */
            if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[0-9]|L[0-9]|[BCDEFGK]0|[BCDEFGK]9/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 20, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v: A0 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A0'){
                mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 20];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v: A1 - A8 */
            else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/A[1-8]/) == true /*&& from_to(mdp[i].position[0],/(A0|A9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 20, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v: A9 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'A9'){
                mdp[i].near_index = [mdp[i].ip100[0] + 20, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v: L0 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'L0'){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v L1 - L8 */
            else if	(mdp[i].position.length == 2  && from_to(mdp[i].position[0],/L[1-8]/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v: L9 */
            else if	(mdp[i].position.length == 2 && mdp[i].position[0] == 'L9'){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v: B0 - K0 +++++++ */
            else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGK]0/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 20];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 2_v: B9 - K9 +++++++ */
            else if	(mdp[i].position.length == 2 && from_to(mdp[i].position[0],/[BCDEFGK]9/) == true){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] + 20, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* -------------------- 3_v -----------------------*/
            else if (mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[0-9]|K[0-9]|[BCDEFG]0|[BCDEFG]9/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 30, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: A0 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A0'){
                mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 30];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: A1 - A8 */
            else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/A[1-8]/) == true /*&& from_to(mdp[i].position[0],/(A0|A9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 30, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: A9 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'A9'){
                mdp[i].near_index = [mdp[i].ip100[0] + 30, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: K0 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'K0'){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: K1 - K8 */
            else if	(mdp[i].position.length == 3  && from_to(mdp[i].position[0],/K[1-8]/) == true /*&& from_to(mdp[i].position[0],/(L0|L9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: K9 */
            else if	(mdp[i].position.length == 3 && mdp[i].position[0] == 'K9'){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: B0 - G0 */
            else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFG]0/) == true /*&& from_to(mdp[i].position[0],/(A0|L0)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 30];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 3_v: B9 - G9 */
            else if	(mdp[i].position.length == 3 && from_to(mdp[i].position[0],/[BCDEFG]9/) == true /*&& from_to(mdp[i].position[0],/(A9|L9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] + 30, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
                /* -------------------- 4_v -----------------------*/
            else if (mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[0-9]|G[0-9]|[BCDEF]0|[BCDEF]9/) == false){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 41, mdp[i].ip100[0] + 40, mdp[i].ip100[0] + 39, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: A0 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A0'){
                mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 41, mdp[i].ip100[0] + 40];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: A1 - A8 */
            else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/A[1-8]/) == true /*&& from_to(mdp[i].position[0],/(A0|A9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 41, mdp[i].ip100[0] + 40, mdp[i].ip100[0] + 39, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: A9 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'A9'){
                mdp[i].near_index = [mdp[i].ip100[0] + 40, mdp[i].ip100[0] + 39, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: G0 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'G0'){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: G1 - G8 */
            else if	(mdp[i].position.length == 4  && from_to(mdp[i].position[0],/G[1-8]/) == true /*&& from_to(mdp[i].position[0],/(L0|L9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: G9 */
            else if	(mdp[i].position.length == 4 && mdp[i].position[0] == 'G9'){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: B0 - F0 */
            else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEF]0/) == true /*&& from_to(mdp[i].position[0],/(A0|L0)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] - 10, mdp[i].ip100[0] - 9, mdp[i].ip100[0] + 1, mdp[i].ip100[0] + 11, mdp[i].ip100[0] + 21, mdp[i].ip100[0] + 31, mdp[i].ip100[0] + 41, mdp[i].ip100[0] + 40];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
            
            /* 4_v: B9 - F9 */
            else if	(mdp[i].position.length == 4 && from_to(mdp[i].position[0],/[BCDEF]9/) == true /*&& from_to(mdp[i].position[0],/(A9|L9)/) == false*/){
                mdp[i].near_index = [mdp[i].ip100[0] - 11, mdp[i].ip100[0] - 10, mdp[i].ip100[0] + 40, mdp[i].ip100[0] + 39, mdp[i].ip100[0] + 29, mdp[i].ip100[0] + 19, mdp[i].ip100[0] + 9, mdp[i].ip100[0] - 1];
                for(k = 0; k < mdp[i].near_index.length; k++){
                    view.missing(pole_100[mdp[i].near_index[k]]); 
                    model.all_near_index.push(mdp[i].near_index[k]);
                }
            }
    }
}
/* 2, 3, 4 DECK VERTIC - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ END */

8
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
    /* 1. MODEL - it's object
    	2. DEFAULT_POSITION - it's property of object the MODEL
    	3. value of DEFAULT_POSITION it's a array  from objects 
    */
    /*  THE ALIGNMENT OF THE SHIPS - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№:
    		position -  default position of ships
    		zero_one - 0 or 1 - horizont or vertical
    		ip200 - indexses of ship from array pole_100 in accordance with ARRAY position
    		near_position - near indexses of ship from array pole_100 
    		excludes_position - ip200 + near_position*/
    excludes_position: [],
    /*	ANALYSIS OF SHOTS
    		ok_shots -  coordinates of the position that have already been hit
    		ip100 - indexes of the hits
    		near_index - near indexes with indexes of the hits
    		all_near_index - all near indexes
    		missing_coordinate - allready existing missing's
    	*/
    number_hit_miss: [],
    /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ - СЌС‚Рѕ РїСЂРѕРјР°С…Рё Рё РїРѕРїР°РґР°РЅРёСЏ, РѕС€РёР±РєРё СЃСЋРґР° РЅРµ РІС…РѕРґСЏС‚... */
    number_miss: [],
    /* Р§РёСЃР»Рѕ РїСЂРѕРјР°С…РѕРІ */
    number_hits: [],
    /* Р§РёСЃР»Рѕ РџРѕРїР°РґР°РЅРёР№ */
    missing_coordinate: [],
    all_near_index: [],
    ships_number: 10,
    /* the total number of ships */
    sunken_ships: [],
    /* number of sunken ships - Р§РёСЃР»Рѕ РїРѕС‚РѕРїР»РµРЅРЅС‹С… РєРѕСЂР°Р±Р»РµР№ */
    new_array: []
}
var mdp_pc = model_pc.default_position;

9
/* any object - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ */
var any_pc = {
    /* Generating random number from 0 to 2 and rounding number in the less side */
        ver_hor: function(){
             var zero_one = Math.floor(Math.random()*2); 
             
             return zero_one;
        },
        
        check: function (){
            for(l = 0; l < mdp_pc[i].position.length; l++){
                var look = model_pc.excludes_position.indexOf(pole_100_pc.indexOf(mdp_pc[i].position[l]));
                if(look !== -1){
                        return false;	
                }
            }
        },
    
        view_hits_gray: function (){
            for(k = 0; k < mdp_pc[i].position.length; k++){
                view.hits_gray(mdp_pc[i].position[k]);
            }
            console.log(mdp_pc[i].position);	
        },
    
    /* Р¤-РёСЏ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РїСѓСЃС‚С‹С… РєР»РµС‚РѕРє РІРЅРёР·Сѓ РёРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ, Рє-СЂС‹Рµ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‚ С‡РёСЃР»Сѓ РєРѕСЂР°Р±Р»РµР№ Рё С‡РёСЃР»Сѓ РёС… РїР°Р»СѓР± */
        view_position_ships: function (){ 
            /*console.log(i);*/
            for(k = 0; k < mdp_pc[i].position.length; k++){
                view.div_ship(i + ".pc"); 							/* id РєР°Р¶РґРѕРіРѕ DIVР° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ РёРЅРґРµРєСЃСѓ РєРѕСЂР°Р±Р»СЏ РІ model.default_position*/
                view.p_deck_ship_pc(i + "." + k + ".pc"); 			/* id РђР±Р·Р°С†Р° СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ РёРЅРґРµРєСЃСѓ РєРѕСЂР°Р±Р»СЏ + РёРЅРґРµРєСЃ РµРіРѕ РїР°Р»СѓР±С‹ */
                /*console.log(i + "." + k);*/
            }
        },
            
        random_number: function (){
            /* Start for */
            for(i = 0; i < mdp_pc.length; i ++){
                
                /* horizontal ship */
                if(this.ver_hor() == 0){ 
                    
                    mdp_pc[i].zero_one.push(0);
                    /*console.log(mdp_pc[i].zero_one);*/
                    
                    do{
                        
                        var random_number_1 = Math.floor(Math.random()*10); 
                        var random_letter = letter[random_number_1];
                        
                          var random_number_2 = Math.floor(Math.random()*(10 - (mdp_pc[i].position.length - 1)));
                        
                        for(j = 0; j < mdp_pc[i].position.length; j ++){
                            mdp_pc[i].position[j] = random_letter + (random_number_2 + j) + '.pc';
                        }
                                            
                        this.check(); 
                        
                    } /* END do */
                    
                    while(this.check() == false)
                    
                    /*console.log(mdp[i].zero_one[0]);*/
                    
                    /*this.view_hits_gray();*/
                    this.view_position_ships();
                        
                        near_position_one_pc();
                        near_position_horiz_pc();
        
                } /* END if */
                
            
                else{
                
                    mdp_pc[i].zero_one.push(1);
                    /*console.log(mdp_pc[i].zero_one);*/
                    
                    do{
                        
                        var random_number_1 = Math.floor(Math.random()*(10 - (mdp_pc[i].position.length - 1))); 
                        
                        var random_number_2 = Math.floor(Math.random()*10);
                        
                        for(j = 0; j < mdp_pc[i].position.length; j ++){
                            mdp_pc[i].position[j] = letter[random_number_1 + j] + random_number_2 + '.pc';
                        }
                        /*console.log(mdp_pc[i].position);*/
                        
                        this.check();
                        
                    } /* END do */
                    
                    while(this.check() == false)
                    
                    /*this.view_hits_gray();*/
                    this.view_position_ships();
                    
                    near_position_one_pc();
                    near_position_vertic_pc();
    
                } /* END else */
                
            }/* The End for */
        }/* The End are random_number function  */
    } 
    /* END any object ------------------------------------------------------------------------------------------------------------- */

10
/* ONE desk - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№*/
var near_position_one_pc = function(){

	for(k = 0; k < mdp_pc[i].position.length; k++){
		
		/*view.hits_gray(mdp_pc[i].position[k]);*/
				
		/*model_pc.excludes_position.push(mdp_pc[i].position[k]);*/
		mdp_pc[i].ip200.push(pole_100_pc.indexOf(mdp_pc[i].position[k]));
		/*console.log(mdp_pc[i].ip200);*/
		
				/* 1 */
				if	(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/A[0-9]\.pc|M[0-9]\.pc|[ABCDEFGKLM]0\.pc|[ABCDEFGKLM]9\.pc/) == false)
				{mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]); 
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}
				
				/* 1: A0 */
				else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'A0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}
				
				/* 1: A1 - A8 */
				else if(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true)
				{mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}
				
				/* 1: A9 */
				else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'A9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}
				
				/* 1: M0 */
				else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'M0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}
				
				/* 1: M1 - M8 */
				else if(mdp_pc[i].position.length == 1  && from_to(mdp_pc[i].position[0],/M[1-8].pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] - 1];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}
				
				/* 1: M9 */
				else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'M9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 1];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}
				
				/* 1: B0 - L0 */
				else if	(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}			
				
				/* 1: B9 - L9 */
				else if	(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]9.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}	
					model_pc.excludes_position.push(mdp_pc[i].ip200[0]); 
				}		
				
				/*for(h = 0; h < mdp_pc[i].near_position.length; h ++){
					view.missing(pole_100_pc[mdp_pc[i].near_position[h]]);
				}*/
				
	}
}
/* Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ РѕРґРЅРѕРїР°Р»СѓР±РЅС‹С… РєРѕСЂР°Р±Р»РµР№ - ONE desk END */

/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ */
var near_position_horiz_pc = function(){

	for(k = 0; k < mdp_pc[i].position.length; k++){
				
			/*view.hits(mdp_pc[i].position[k]);*/
				
				mdp_pc[i].ip200.push(pole_100_pc.indexOf(mdp_pc[i].position[k]));
				
				/* 2_h */
				if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[0-8].pc|M[0-8].pc|[ABCDEFGKLM]0.pc|[ABCDEFGKLM]8.pc/) == false){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] + 2, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					/* forming array model_pc.excludes_position */
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: A0 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 2, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: A1 - A7 */
				else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[1-7].pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 2, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: A8 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A8.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: M0 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'M0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] + 2];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: M1 - M7 */
				else if	(mdp_pc[i].position.length == 2  && from_to(mdp_pc[i].position[0],/M[1-7].pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] + 2, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: M8 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'M8.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: B0 - L0 */
				else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] + 2, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_h: B8 - L8 */
				else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]8.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* ------------- 3_h ---------------- */
				else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[0-7].pc|M[0-7].pc|[ABCDEFGKLM]0.pc|[ABCDEFGKLM]7.pc/) == false){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] + 3, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					/* forming array model_pc.excludes_position */
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: A0 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 3, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: A1 - A6 */
				else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[1-6].pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 3, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: A7 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A7.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: M0 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'M0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] + 3];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: M1 - M6 */
				else if	(mdp_pc[i].position.length == 3  && from_to(mdp_pc[i].position[0],/M[1-6].pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] + 3, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: M7 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'M7.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: B0 - L0 */
				else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] + 3, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_h: B7 - L7 */
				else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]7.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* ------------- 4_h ---------------- */
				else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[0-6].pc|M[0-6].pc|[ABCDEFGKLM]0.pc|[ABCDEFGKLM]6.pc/) == false){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] - 6, mdp_pc[i].ip200[0] + 4, mdp_pc[i].ip200[0] + 14, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					/* forming array model_pc.excludes_position */
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: A0 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 4, mdp_pc[i].ip200[0] + 14, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: A1 - A5 */
				else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[1-5].pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 4, mdp_pc[i].ip200[0] + 14, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: A6 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A6.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: M0 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'M0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] - 6, mdp_pc[i].ip200[0] + 4];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: M1 - M5 */
				else if	(mdp_pc[i].position.length == 4  && from_to(mdp_pc[i].position[0],/M[1-5].pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] - 6, mdp_pc[i].ip200[0] + 4, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: M6 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'M6.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: B0 - L0 */
				else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] - 6, mdp_pc[i].ip200[0] + 4, mdp_pc[i].ip200[0] + 14, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_h: B6 - L6 */
				else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]6.pc/) == true){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] - 8, mdp_pc[i].ip200[0] - 7, mdp_pc[i].ip200[0] + 13, mdp_pc[i].ip200[0] + 12, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
											
				/* missing near_position */
				/*for(h = 0; h < mdp_pc[i].near_position.length; h ++){
					view.missing(pole_100_pc[mdp_pc[i].near_position[h]]);
				}*/
			}	
}
/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ END  */

/* 2-4 DECK Vertic - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ */
var near_position_vertic_pc = function(){

	for(k = 0; k < mdp_pc[i].position.length; k++){
				
				/*view.hits(mdp_pc[i].position[k]);*/
				
				/*model_pc.excludes_position.push(mdp_pc[i].position[k]);*/
				mdp_pc[i].ip200.push(pole_100_pc.indexOf(mdp_pc[i].position[k]));
				
				/* 2_v */
				if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[0-9].pc|L[0-9].pc|[BCDEFGK]0.pc|[BCDEFGK]9.pc/) == false){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 20, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: A0 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 20];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: A1 - A8 */
				else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|A9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 20, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: A9 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 20, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: L0 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'L0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: L1 - L8 */
				else if	(mdp_pc[i].position.length == 2  && from_to(mdp_pc[i].position[0],/L[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(L0|L9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: L9 */
				else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'L9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: B0 - K0 */
				else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGK]0.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|L0)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 20];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 2_v: B9 - K9 */
				else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGK]9.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A9|L9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] + 20, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* -------------------- 3_v -----------------------*/
				else if (mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[0-9].pc|K[0-9].pc|[BCDEFG]0.pc|[BCDEFG]9.pc/) == false){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 30, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: A0 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 30];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: A1 - A8 */
				else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|A9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 30, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: A9 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 30, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: K0 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'K0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: K1 - K8 */
				else if	(mdp_pc[i].position.length == 3  && from_to(mdp_pc[i].position[0],/K[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(L0|L9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: K9 */
				else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'K9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: B0 - G0 */
				else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFG]0.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|L0)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 30];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 3_v: B9 - G9 */
				else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFG]9.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A9|L9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] + 30, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
					/* -------------------- 4_v -----------------------*/
				else if (mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[0-9].pc|G[0-9].pc|[BCDEF]0.pc|[BCDEF]9.pc/) == false){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 41, mdp_pc[i].ip200[0] + 40, mdp_pc[i].ip200[0] + 39, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: A0 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 41, mdp_pc[i].ip200[0] + 40];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: A1 - A8 */
				else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|A9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 41, mdp_pc[i].ip200[0] + 40, mdp_pc[i].ip200[0] + 39, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: A9 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] + 40, mdp_pc[i].ip200[0] + 39, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: G0 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'G0.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: G1 - G8 */
				else if	(mdp_pc[i].position.length == 4  && from_to(mdp_pc[i].position[0],/G[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(L0|L9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: G9 */
				else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'G9.pc'){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: B0 - F0 */
				else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEF]0.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|L0)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] - 9, mdp_pc[i].ip200[0] + 1, mdp_pc[i].ip200[0] + 11, mdp_pc[i].ip200[0] + 21, mdp_pc[i].ip200[0] + 31, mdp_pc[i].ip200[0] + 41, mdp_pc[i].ip200[0] + 40];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
				
				/* 4_v: B9 - F9 */
				else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEF]9.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A9|L9)/) == false*/){
					mdp_pc[i].near_position = [mdp_pc[i].ip200[0] - 11, mdp_pc[i].ip200[0] - 10, mdp_pc[i].ip200[0] + 40, mdp_pc[i].ip200[0] + 39, mdp_pc[i].ip200[0] + 29, mdp_pc[i].ip200[0] + 19, mdp_pc[i].ip200[0] + 9, mdp_pc[i].ip200[0] - 1];
					for(m = 0; m < mdp_pc[i].near_position.length; m ++){
						model_pc.excludes_position.push(mdp_pc[i].near_position[m]);
					}
					for(n = 0; n < mdp_pc[i].ip200.length; n ++){
							model_pc.excludes_position.push(mdp_pc[i].ip200[n]);
					}
				}
											
				/* missing near_position */
				/*for(h = 0; h < mdp_pc[i].near_position.length; h ++){
					view.missing(pole_100_pc[mdp_pc[i].near_position[h]]);
				}*/
			}	
}
/* 2-4 DECK Vertic - formation arrays of ip200 and excludes_position - Р Р°СЃСЃС‚Р°РЅРѕРІРєР° РєРѕСЂР°Р±Р»РµР№ END  */

var from_to = function(value,range){
			var regular = range; 
			var result = value.search(regular);
			if(result !== -1){ /* if found */
				return true;	
			}
			else{ 
				return false;	
			}
	}

11
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
                            view.message_up_pc('Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹: A0, D7, L3...');
                        }					
                        else if(result == -1){
                            view.message_up_pc('Р’С‹ РЅРµРІРµСЂРЅРѕ РІРІРµР»Рё РєРѕРѕСЂРґРёРЅР°С‚С‹!!!');
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
                                    view.message_up('Р’ РљР»РµС‚РєРµ В«' + coordinate + 'В» - РЈР¶Рµ РѕР±РѕР·РЅР°С‡РµРЅРѕ РџРћРџРђР”РђРќРР•'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 
                                }
                                
                                else{
                                view.hits(coordinate); /* Cell hits - Red_Ship - РџРѕРїР°РґР°РЅРёРµ */
                                
                                var look_3 = mdp[i].position.indexOf(coordinate); /* РС‰РµРј РёРЅРґРµРєСЃ СЌС‚РѕР№ РєРѕРѕСЂРґРёРЅР°С‚С‹ */
                                view.p_deck_ship_end(i + "." + look_3);			/* i + look_3 - СЌС‚Рѕ id Р–РµР»С‚РѕРіРѕ РєРІР°РґСЂР°С‚Р° РЅРёР¶Рµ РёРіСЂРѕРІРѕРіРѕ РїРѕР»СЏ */
                                
                                mdp[i].ok_shots.push(coordinate); /* Enter of the coordinate to the array ok_shots */
                                    
                                    if(mdp[i].position.length !== mdp[i].ok_shots.length){
                                        
                                        view.backGR_red_up_pc(); /* РРіСЂРѕРє 2 - РљР РђРЎРќРћР• Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                        view.message_up_pc('РљР»РµС‚РєР° В«' + coordinate + 'В» - Р’С‹ РїРѕРїР°Р»Рё РІ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                        view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                        view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
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
                                        view.message_up_pc('Р’С‹ РїРѕС‚РѕРїРёР»Рё ' + mdp[i].position.length + '-РЅРѕ РїР°Р»СѓР±РЅС‹Р№ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                        view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                        view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
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
                                            view.message_up_pc('Р’С‹ РїРѕС‚РѕРїРёР»Рё ' + mdp[i].position.length + '-С… РїР°Р»СѓР±РЅС‹Р№ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                            view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                            view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
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
                                            view.message_up_pc('Р’С‹ РїРѕС‚РѕРїРёР»Рё ' + mdp[i].position.length + '-С… РїР°Р»СѓР±РЅС‹Р№ РєРѕСЂР°Р±Р»СЊ'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                            view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                            view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
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
                                    view.message_up('Р’ РљР»РµС‚РєРµ В«' + coordinate + 'В» - РЈР¶Рµ РѕР±РѕР·РЅР°С‡РµРЅ РџСЂРѕРјР°С…'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ  */	
                                    view.backup_green(); /* РРіСЂРѕРє 2 - Р—РµР»РµРЅРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */
                                    input_value.value = ""; 
                                }
                                /*  */
                                else{
                                    view.missing(coordinate); /* РљР»РµС‚РєР° - РџСЂРѕРјР°С… */
                                    model.missing_coordinate.push(coordinate); /* Р—Р°РЅРѕСЃРёРј РІ РјР°СЃСЃРёРІ "РџСЂРѕРјР°С…РѕРІ" РљРѕРѕСЂРґРёРЅР°С‚Сѓ */
                                    
                                    view.backGR_orange_up_pc(); /* РРіСЂРѕРє 2 - РћСЂР°РЅР¶РµРІРѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */	
                                    view.message_up_pc('РљР»РµС‚РєР° В«' + coordinate + 'В» - Р’С‹ РџСЂРѕРјР°С…РЅСѓР»РёСЃСЊ'); /* РРіСЂРѕРє 2 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                    view.backup_yellow(); /* РРіСЂРѕРє 1 - Р–РµР»С‚РѕРµ Р’РµСЂС…РЅРµРµ РїРѕР»Рµ */
                                    view.message_up('Р’Р°С€ Р’С‹СЃС‚СЂРµР». Р’РІРµРґРёС‚Рµ РєРѕРѕСЂРґРёРЅР°С‚С‹'); /* РРіСЂРѕРє 1 - РўРµРєСЃС‚ РІ Р’РµСЂС…РЅРµРј РїРѕР»Рµ */	
                                    
                                    model_pc.number_hit_miss.push(1); /* Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ */
                                    model_pc.number_miss.push(1); 	  /* Р§РёСЃР»Рѕ РїСЂРѕРјР°С…РѕРІ */
                                    number_miss_pc();				  /* Р¤СѓРЅРєС†РёСЏ С‡РёСЃР»Рѕ РїСЂРѕРјР°С…РѕРІ + 1 РІ РїРѕР»Рµ input */
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
                view.message_up('Р’С‹ РџСЂРѕРёРіСЂР°Р»Рё - Р’РЎР• Р’Р°С€Рё РєРѕСЂР°Р±Р»Рё РїРѕС‚РѕРїР»РµРЅС‹');
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
        
        /* С„СѓРЅРєС†РёСЏ РїРѕР»СѓС‡Р°РµС‚ РґРѕСЃС‚СѓРї Рє РєРЅРѕРїРєРµ "Р§РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ", С‚.Рµ. Рє С‚РµРіСѓ input Рё РјРµРЅСЏРµС‚ Р·РЅР°С‡РµРЅРёРµ value РІ СЃРѕРѕС‚РІРµС‚СЃРІС‚РёРё СЃ РґР»РёРЅРѕР№ РјР°СЃСЃРёРІР° "РћР±С‰РµРµ С‡РёСЃР»Рѕ РІС‹СЃС‚СЂРµР»РѕРІ" */
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

12
/* ONE DECK - formation arrays of ip100, near_index and all_near_index  */

/* Functionin near_shots: the function consider current array Position */
function near_shots_one_pc(){
    for(j = 0; j < mdp_pc[i].position.length; j++){
        
        /* Search of the coordinate of the default position in the array pole_100_pc - And entering their indixes in the array ip100 */
        mdp_pc[i].ip100.push(pole_100_pc.indexOf(mdp_pc[i].position[j])); 
        
            /* 1 */
            if	(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/A[0-9].pc|M[0-9].pc|[ABCDEFGKLM]0.pc|[ABCDEFGKLM]9.pc/) == false)
            {mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                /* neighboring cells in which no ships - missing */	
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 1: A0 */
            else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'A0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 1: A1 - A8 */
            else if(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|A9)/) == false*/)
            {mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 1: A9 */
            else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'A9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 1: M0 */
            else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'M0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 1: M1 - M8 */
            else if(mdp_pc[i].position.length == 1  && from_to(mdp_pc[i].position[0],/M[1-8].pc/) == true/* && from_to(mdp_pc[i].position[0],/(M0|M9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 1: M9 */
            else if(mdp_pc[i].position.length == 1 && mdp_pc[i].position[0] == 'M9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 1: B0 - L0 */
            else if	(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true && from_to(mdp_pc[i].position[0],/(A0|M0)/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }			
            
            /* 1: B9 - L9 */
            else if	(mdp_pc[i].position.length == 1 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]9.pc/) == true && from_to(mdp_pc[i].position[0],/(A9|M9)/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
    }
}
/* ONE DECK - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ END */

/* 2, 3, 4 DECK HORIZ - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ */
function near_shots_horiz_pc(){
    for(j = 0; j < mdp_pc[i].position.length; j++){
        
        /* Search of the coordinate of the default position in the array pole_100_pc - And entering their indixes in the array ip100 */
        mdp_pc[i].ip100.push(pole_100_pc.indexOf(mdp_pc[i].position[j])); 
        
            /* 2_h */
            if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[0-8].pc|M[0-8].pc|[ABCDEFGKLM]0.pc|[ABCDEFGKLM]8.pc/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] + 2, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 2_h: A0 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 2, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 2_h: A1 - A7 */
            else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[1-7].pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 2, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 2_h: A8 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A8.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 2_h: M0 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'M0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] + 2];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 2_h: M1 - M7 */
            else if	(mdp_pc[i].position.length == 2  && from_to(mdp_pc[i].position[0],/M[1-7].pc/)){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] + 2, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_h: M8 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'M8.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* 2_h: B0 - L0 */
            else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] + 2, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_h: B8 - L8 */
            else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]8.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]);
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]); 
                }
            }
            
            /* ------------- 3_h ---------------- */
            else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[0-7].pc|M[0-7].pc|[ABCDEFGKLM]0.pc|[ABCDEFGKLM]7.pc/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] + 3, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: A0 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 3, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: A1 - A6 */
            else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[1-6].pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 3, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: A7 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A7.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: M0 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'M0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] + 3];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: M1 - M6 */
            else if	(mdp_pc[i].position.length == 3  && from_to(mdp_pc[i].position[0],/M[1-6].pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] + 3, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: M7 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'M7.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: B0 - L0 */
            else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] + 3, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_h: B7 - L7 */
            else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]7.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* ------------- 4_h ---------------- */
            else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[0-6].pc|M[0-6].pc|[ABCDEFGKLM]0.pc|[ABCDEFGKLM]6.pc/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] - 6, mdp_pc[i].ip100[0] + 4, mdp_pc[i].ip100[0] + 14, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: A0 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 4, mdp_pc[i].ip100[0] + 14, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: A1 - A5 */
            else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[1-5].pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 4, mdp_pc[i].ip100[0] + 14, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: A6 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A6.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: M0 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'M0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] - 6, mdp_pc[i].ip100[0] + 4];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: M1 - M5 */
            else if	(mdp_pc[i].position.length == 4  && from_to(mdp_pc[i].position[0],/M[1-5].pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] - 6, mdp_pc[i].ip100[0] + 4, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: M6 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'M6.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: B0 - L0 */
            else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]0.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] - 6, mdp_pc[i].ip100[0] + 4, mdp_pc[i].ip100[0] + 14, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_h: B6 - L6 */
            else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEFGKL]6.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] - 8, mdp_pc[i].ip100[0] - 7, mdp_pc[i].ip100[0] + 13, mdp_pc[i].ip100[0] + 12, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }

    }
}
/* 2, 3, 4 DECK HORIZ - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ END */

/* 2, 3, 4 DECK VERTIC - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ */
function near_shots_vertic_pc(){
    for(j = 0; j < mdp_pc[i].position.length; j++){
        
        /* Search of the coordinate of the default position in the array pole_100_pc - And entering their indixes in the array ip100 */
        mdp_pc[i].ip100.push(pole_100_pc.indexOf(mdp_pc[i].position[j])); 
        
            /* 2 */
            if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[0-9].pc|L[0-9].pc|[BCDEFGK]0.pc|[BCDEFGK]9.pc/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 20, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v: A0 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 20];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v: A1 - A8 */
            else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|A9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 20, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v: A9 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'A9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 20, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v: L0 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'L0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v L1 - L8 */
            else if	(mdp_pc[i].position.length == 2  && from_to(mdp_pc[i].position[0],/L[1-8].pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v: L9 */
            else if	(mdp_pc[i].position.length == 2 && mdp_pc[i].position[0] == 'L9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v: B0 - K0 +++++++ */
            else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGK]0.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 20];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 2_v: B9 - K9 +++++++ */
            else if	(mdp_pc[i].position.length == 2 && from_to(mdp_pc[i].position[0],/[BCDEFGK]9.pc/) == true){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] + 20, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* -------------------- 3_v -----------------------*/
            else if (mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[0-9].pc|K[0-9].pc|[BCDEFG]0.pc|[BCDEFG]9.pc/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 30, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: A0 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 30];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: A1 - A8 */
            else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|A9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 30, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: A9 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'A9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 30, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: K0 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'K0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: K1 - K8 */
            else if	(mdp_pc[i].position.length == 3  && from_to(mdp_pc[i].position[0],/K[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(L0|L9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: K9 */
            else if	(mdp_pc[i].position.length == 3 && mdp_pc[i].position[0] == 'K9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: B0 - G0 */
            else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFG]0.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|L0)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 30];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 3_v: B9 - G9 */
            else if	(mdp_pc[i].position.length == 3 && from_to(mdp_pc[i].position[0],/[BCDEFG]9.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A9|L9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] + 30, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
                /* -------------------- 4_v -----------------------*/
            else if (mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[0-9].pc|G[0-9].pc|[BCDEF]0.pc|[BCDEF]9.pc/) == false){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 41, mdp_pc[i].ip100[0] + 40, mdp_pc[i].ip100[0] + 39, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: A0 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 41, mdp_pc[i].ip100[0] + 40];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: A1 - A8 */
            else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/A[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|A9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 41, mdp_pc[i].ip100[0] + 40, mdp_pc[i].ip100[0] + 39, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: A9 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'A9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] + 40, mdp_pc[i].ip100[0] + 39, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: G0 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'G0.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: G1 - G8 */
            else if	(mdp_pc[i].position.length == 4  && from_to(mdp_pc[i].position[0],/G[1-8].pc/) == true /*&& from_to(mdp_pc[i].position[0],/(L0|L9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: G9 */
            else if	(mdp_pc[i].position.length == 4 && mdp_pc[i].position[0] == 'G9.pc'){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: B0 - F0 */
            else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEF]0.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A0|L0)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] - 9, mdp_pc[i].ip100[0] + 1, mdp_pc[i].ip100[0] + 11, mdp_pc[i].ip100[0] + 21, mdp_pc[i].ip100[0] + 31, mdp_pc[i].ip100[0] + 41, mdp_pc[i].ip100[0] + 40];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
            
            /* 4_v: B9 - F9 */
            else if	(mdp_pc[i].position.length == 4 && from_to(mdp_pc[i].position[0],/[BCDEF]9.pc/) == true /*&& from_to(mdp_pc[i].position[0],/(A9|L9)/) == false*/){
                mdp_pc[i].near_index = [mdp_pc[i].ip100[0] - 11, mdp_pc[i].ip100[0] - 10, mdp_pc[i].ip100[0] + 40, mdp_pc[i].ip100[0] + 39, mdp_pc[i].ip100[0] + 29, mdp_pc[i].ip100[0] + 19, mdp_pc[i].ip100[0] + 9, mdp_pc[i].ip100[0] - 1];
                for(k = 0; k < mdp_pc[i].near_index.length; k++){
                    view.missing_pc(pole_100_pc[mdp_pc[i].near_index[k]]); 
                    model_pc.all_near_index.push(mdp_pc[i].near_index[k]);
                }
            }
    }
}
/* 2, 3, 4 DECK VERTIC - formation arrays of ip100, near_index and all_near_index - РђРЅР°Р»РёР· РІРІРµРґРµРЅРЅС‹С… РєРѕРѕСЂРґРёРЅР°С‚ END */