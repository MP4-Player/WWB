var start = { 
	
	start_play: function() {
	
		var start =	document.getElementById('start_play'); 
		start.onclick = go_game;						   
				
		function go_game(){	
			
			priority_shot(); 
		
			any.random_number();		/*  random_number  */
			any_pc.random_number();							
			
			var stop_play = document.getElementById('start_play'); 	
			stop_play.setAttribute("class", 'outline');	
			stop_play.setAttribute("value", 'Выйти из игры');		
			stop_play.setAttribute("id", 'stop_play');				
			
			var Stop_Play = document.getElementById('stop_play');	
			Stop_Play.onclick = refreshPage;					
			
			function refreshPage(){
				window.location.reload();	
			} 
			
/*			this.priority_shot();*/
				
		} /* go_game() - END */
				
	},
	/* Метод смены id на id */
	change_id: function(variable, id_1, id_2){
		var variable = document.getElementById(id_1); /* id_1  id_2 */
		variable.setAttribute("id",id_2);		
	},
	/*Метод смены id на class */
	change_id_class: function(any_var, id_1, class_1){
		var any_var = document.getElementById(id_1); /* id_1  class_1 */
		any_var.setAttribute("class", class_1);		
	}		
	
}

var ver_hor = function(){		/* 1 */
		var zero_one = Math.floor(Math.random()*2); 
		return zero_one;
	};

	
var	priority_shot = function(){			
		
		var any_number = ver_hor();
							
		if(any_number == 0){
			
			var input_value = document.getElementById("guessInput"); 
			input_value.value = ""; 
			var input_value = document.getElementById("guessInput_pc");
			input_value.value = "";
			
			start.change_id('icon_user', 'icon_user_gray', 'icon_user'); 
			start.change_id('gun', 'push_yellow_none', 'push_yellow'); 
								
			start.change_id_class('user_form', 'user_form', 'yellow_form');	
			view.message_up('Ваш Выстрел. Введите координаты');
			view.backup_yellow(); 
		}
		else {
			var input_value = document.getElementById("guessInput"); 
			input_value.value = ""; /* Очищаем поле */
			var input_value = document.getElementById("guessInput_pc");
			input_value.value = "";
			
			start.change_id('icon_pc', 'icon_pc_gray', 'icon_pc'); 
			start.change_id('gun', 'push_green_none', 'push_green');
									
			start.change_id_class('pc_form', 'pc_form', 'green_form'); 
			view.message_up_pc('Ваш Выстрел. Введите координаты');
			view.backup_green();
			
		}
	};

start.start_play();