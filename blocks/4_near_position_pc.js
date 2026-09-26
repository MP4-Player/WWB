/* ONE desk - formation arrays of ip200 and excludes_position -pасстановка кораблей*/
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
/* pасстановка кораблей однопалубных кораблей - ONE desk END */

/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - pасстановка кораблей*/
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
/* 2-4 DECK Horiz - formation arrays of ip200 and excludes_position - pасстановка кораблей END  */

/* 2-4 DECK Vertic - formation arrays of ip200 and excludes_position - pасстановка кораблей */
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
	}