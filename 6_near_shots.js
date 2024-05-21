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