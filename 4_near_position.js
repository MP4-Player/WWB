/* ONE desk - formation arrays of ip200 and excludes_position - pасстановка кораблей*/
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
/* pасстановка кораблей однопалубных кораблей- ONE desk END */

/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - pасстановка кораблей*/
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
/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - pасстановка кораблей END  */

/* 2-4 DECK Vertic - formation arrays of ip200 and excludes_position - pасстановка кораблей */
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
/* 2-4 DECK Vertic - formation arrays of ip200 and excludes_position - pасстановка кораблей END  */

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