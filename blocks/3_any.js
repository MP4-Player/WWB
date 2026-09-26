/* any object -расстановка кораблей */
var any = {
    /* Генерация случайного числа от 0 до 2 и округление числа в меньшую сторону*/
        ver_hor: function(){									/* Случайное число 0 или 1 */
             var zero_one = Math.floor(Math.random()*2); 
             return zero_one;
             
        },
        
        check: function (){					/* Ф-ия проверки введенной координаты: есть ли ее индекс в excludes_position:[] */
            for(l = 0; l < mdp[i].position.length; l++){
                var look = model.excludes_position.indexOf(pole_100.indexOf(mdp[i].position[l]));
                if(look !== -1){								/* Если есть - возвращаем false */
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
        
    /* Ф-ия для отображения пустых клеток внизу игрового поля, к-рые соответствуют числу кораблей и числу их палуб */
        view_position_ships: function (){ 
            /*console.log(i);*/
            for(k = 0; k < mdp[i].position.length; k++){
                view.div_ship(i); 							/* id каждого DIVа соответствует индексу корабля в model.default_position*/
                view.p_deck_ship(i + "." + k);				/* id Абзаца соответствует индексу корабля + индекс его палубы */
                /*console.log(i + "." + k);*/
            }
        },
        
        /* P.S. - Когда функции check и view_hits_gray были вынесены за пределы объекта any, то фунция go_game (см. метод start_play) не могла их воспринять при нажатиии на кнопке "Начать игру"
Поэтому функции check и view_hits_gray включены в объект any и внутри функции random_number мы получаем к ним доступ через this */
        random_number: function (){
            /* Start for */
            for(i = 0; i < mdp.length; i ++){
                
                /* horizontal ship */
                if(this.ver_hor() == 0){ 
                    
                    mdp[i].zero_one.push(0);
    
    /* 
        1. generating random number from 0 to 9 for getting letter from A to M 
        2. generating random number for horizontally ships different lengths: 10 - 0 for one_desk ship, 10 - 1 for two_desk ship and next... 
        3. receiving a mdp[i].position array  - формируем 
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
       3. receiving a mdp[i].position array  - формируем  */
    
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