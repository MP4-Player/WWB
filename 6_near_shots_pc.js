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