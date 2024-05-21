
var any_pc = {
    /* Генерация случайного числа от 0 до 2 и округление числа в меньшую сторону*/
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
    
    
        view_position_ships: function (){ 
            /*console.log(i);*/
            for(k = 0; k < mdp_pc[i].position.length; k++){
                view.div_ship(i + ".pc"); 						
                view.p_deck_ship_pc(i + "." + k + ".pc"); 	
                /*console.log(i + "." + k);*/
            }
        },
            
        random_number: function (){
            /* Начните с*/
            for(i = 0; i < mdp_pc.length; i ++){
                
                /* горизонтальный корабль */
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