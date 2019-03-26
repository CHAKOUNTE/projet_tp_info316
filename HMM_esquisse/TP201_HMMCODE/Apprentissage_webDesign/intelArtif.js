	/*début découpage du code source*/	
		var texte =["public_class_etudiant_extends_person_{_private_string_nom_;_private_int_age_;_public_string_getnom_(_)_{_}_}"],
		pre=["public","private","class","int"],
		tar=["etudiant","string","nom","age","getnom","person"],
		pos=["extends"],
		oth=["{",";","(",")","}"],
		
		preP=[/*pre*/"public private class int",/*tar*/"etudiant string nom age getnom person"],
		tarP=[/*tar*/"etudiant string nom age getnom person",/*pos*/"extends",/*oth*/"{ ; ( ) }"],
		posP=[/*tar*/"etudiant string nom age getnom person"];
		othP=[/*oth*/"{ ; ( ) } ",/*pre*/"public private class int"];
		
		txtsp =texte[0].split('_');
	/*fin découpage du code source*/
		var ext=document.getElementById('ext');
			 
		
	/*évènement pour l'extraction du code source*/
		ext.addEventListener('click', function() {
		
			var parent, enfant, children=[];
			var i=0,j=0,k=0, MIN=0, MAX=0,N=0, k=0, prob=0, t=[],n=0, m0=0, m1=0, m2=0, m3=0, m4=0, v=0 ;
		/*recupération des id*/
			prePRE=document.getElementById('prePRE');//prepre
			preTAR=document.getElementById('preTAR');//pretar
			prePOS=document.getElementById('prePOS');//prepos
			preOTH=document.getElementById('preOTH');//preoth

			tarPRE=document.getElementById('tarPRE');//tarpre
			tarTAR=document.getElementById('tarTAR');//tartar
			tarPOS=document.getElementById('tarPOS');//tarpos
			tarOTH=document.getElementById('tarOTH');//taroth

			posPRE=document.getElementById('posPRE');//pospre
			posTAR=document.getElementById('posTAR');//postar
			posPOS=document.getElementById('posPOS');//pospos
			posOTH=document.getElementById('posOTH');//posoth
		
			othPRE=document.getElementById('othPRE');//pospre
			othTAR=document.getElementById('othTAR');//postar
			othPOS=document.getElementById('othPOS');//pospos
			othOTH=document.getElementById('othOTH');//posoth
		
			prePRE1=document.getElementById('prePRE1');//prepre
			tarPRE1=document.getElementById('tarPRE1');//prepre
			posPRE1=document.getElementById('posPRE1');//prepre
			othPRE1=document.getElementById('othPRE1');//prepre
		/*fin recupeartion des id*/
		
				
		parent = document.form1.input.value;/*initialisation du mot à extraire*/
		
		//-----------DEBUT
		//--------------------------------------------------------------------------------------->PRE
		if(parent=="public" || parent=="class" || parent=="private" || parent=="int"){
		//alert("cool: "+parent);
		
			for(i=0;i<txtsp.length;i++){
		
				if(parent==txtsp[i]){
				v++;
				//alert("le mot suivant "+parent+" est :"+txtsp[i+1]);
				}
				
			}
				//alert("occurences de :"+parent+" est :"+v);
			for(i=0;i<pre.length;i++){
				for(j=0;j<txtsp.length;j++){
					if(pre[i]==txtsp[j]){
					N=N+1;
					//alert("jai trouver : "+txtsp[j]+" ; le mot suivant est : "+txtsp[j+1]);
					t[n]=txtsp[j+1];
					n=n+1;
					}	
				}
			}	
			//alert(t);
			//alert("le nombre d'occurence des PRE dans le texte est: "+N);
			
			for(i=0;i<preP.length;i=i+1){
				children[i] = preP[i].split(' ');//je recupere les valeurs vers lesquelle peuvent pointer le parent
				}		
					
			for(i=0;i<t.length;i++){
				for(j=0;j<children.length;j++){
						for(k=0;k<children[j].length;k++){
						
							if(t[i]==children[j][k] && j==0){
							m0=m0+1;
							}
							if(t[i]==children[j][k] && j==1){
							m1=m1+1;
							}
							if(t[i]==children[j][k] && j==2){
							m2=m2+1;
							}
							if(t[i]==children[j][k] && j==3){
							m3=m3+1;
							}
							
						}
				}
			
			}
			
			//alert("PRE-->PRE: "+m0+"/"+N);
			prePRE.innerHTML= m0+"/"+N;
			
			//alert("PRE-->TAR: "+m1+"/"+N);
			preTAR.innerHTML= m1+"/"+N;
			
			//alert("PRE-->POS: "+m2+"/"+N);
			prePOS.innerHTML= m2+"/"+N;
			
			//alert("PRE-->OTH: "+m3+"/"+N);
			preOTH.innerHTML= m3+"/"+N;
			
			//alert("OBSERVE: "+parent+" --> "+v+"/"+N);
			prePRE1.innerHTML= parent+" --> "+v+"/"+N;
		}
		
		//--------------------------------------------------------------------------------------->TAR
		if(parent=="etudiant" || parent=="string" || parent=="nom" 
		|| parent=="age" || parent=="getnom" || parent=="person"){
		
			for(i=0;i<txtsp.length;i++){	
				if(parent==txtsp[i]){
				v++;
				//alert("le mot suivant "+parent+" est :"+txtsp[i+1]);
				}			
			}
				//alert("occurences de :"+parent+" est :"+v);
		
			for(i=0;i<tar.length;i++){
				for(j=0;j<txtsp.length;j++){
					if(tar[i]==txtsp[j]){
					N=N+1;
					//alert("jai trouver : "+txtsp[j]+" ; le mot suivant est : "+txtsp[j+1]);
					t[n]=txtsp[j+1];
					n=n+1;
					}	
				}
			}
			//alert(t);		
			//alert("le nombre d'occurence des TAR dans le texte est: "+N);
				
			for(i=0;i<tarP.length;i=i+1){
			children[i] = tarP[i].split(' ');//je recupere les valeurs vers lesquelle peuvent pointer le parent
			}		
			
			for(i=0;i<t.length;i++){
				for(j=0;j<children.length;j++){
						for(k=0;k<children[j].length;k++){
						
						//if(j==1)alert("stop: t= "+t[i]+"ch= "+children[j][k]);
							if(t[i]==children[j][k] && j==0){
							m0=m0+1;
							}
							if(t[i]==children[j][k] && j==1){
							m1=m1+1;
							}
							if(t[i]==children[j][k] && j==2){
							m2=m2+1;
							}
							if(t[i]==children[j][k] && j==3){
							m3=m3+1;
							}
							
							
						}
				}
			
			}
			//alert("TAR-->TAR: "+m0+"/"+N);
			tarTAR.innerHTML= m0+"/"+N;
			
			//alert("TAR-->POS: "+m1+"/"+N);
			tarPOS.innerHTML= m1+"/"+N;
			
			//alert("TAR-->OTH: "+m2+"/"+N);
			tarOTH.innerHTML= m2+"/"+N;
			
			//alert("TAR-->PRE: "+m3+"/"+N);	
			tarPRE.innerHTML= m3+"/"+N;			
			
			//alert("OBSERVE: "+parent+" --> "+v+"/"+N);
			tarPRE1.innerHTML= parent+" --> "+v+"/"+N;
		}
		
		//--------------------------------------------------------------------------------------->POS
		if(parent=="extends"){
		
			for(i=0;i<txtsp.length;i++){
		
				if(parent==txtsp[i]){
				v++;
				//alert("le mot suivant "+parent+" est :"+txtsp[i+1]);
				}
				
		}
				//alert("occurences de :"+parent+" est :"+v);
		
		for(i=0;i<pos.length;i++){
				for(j=0;j<txtsp.length;j++){
					if(pos[i]==txtsp[j]){
					N=N+1;
					//alert("jai trouver : "+txtsp[j]+" ; le mot suivant est : "+txtsp[j+1]);
					t[n]=txtsp[j+1];
					n=n+1;
					}	
				}
			}
			//alert(t);
			//alert("le nombre d'occurence des POS dans le texte est: "+N);
				
		for(i=0;i<posP.length;i=i+1){
			children[i] = posP[i].split(' ');//je recupere les valeurs vers lesquelle peuvent pointer le parent
			}		
					
			for(i=0;i<t.length;i++){
				for(j=0;j<children.length;j++){
						for(k=0;k<children[j].length;k++){
						
						//if(j==1)alert("stop: t= "+t[i]+"ch= "+children[j][k]);
							if(t[i]==children[j][k] && j==0){
							m0=m0+1;
							}
							if(t[i]==children[j][k] && j==1){
							m1=m1+1;
							}
							if(t[i]==children[j][k] && j==2){
							m2=m2+1;
							}
							if(t[i]==children[j][k] && j==3){
							m3=m3+1;
							}						
						}
				}
			}
			//alert("POS-->TAR: "+m0+"/"+N);
			posTAR.innerHTML= m0+"/"+N;
			
			//alert("POS-->POS: "+m1+"/"+N)
			posPOS.innerHTML= m1+"/"+N;
			
			//alert("POS-->OTH: "+m2+"/"+N);
			posOTH.innerHTML= m2+"/"+N;
			
			//alert("POS-->PRE: "+m3+"/"+N);		
			posPRE.innerHTML= m3+"/"+N;
			
			//alert("OBSERVE: "+parent+" --> "+v+"/"+N);
			posPRE1.innerHTML= parent+" --> "+v+"/"+N;
		}
		
		//--------------------------------------------------------------------------------------->OTH
		if(parent=="{" || parent==";" || parent=="(" || parent==")" || parent=="}"){
		
			for(i=0;i<txtsp.length;i++){
		
				if(parent==txtsp[i]){
				v++;
				//alert("le mot suivant "+parent+" est :"+txtsp[i+1]);
				}		
		}
				//alert("occurences de :"+parent+" est :"+v);
		
			for(i=0;i<oth.length;i++){
				for(j=0;j<txtsp.length;j++){
					if(oth[i]==txtsp[j]){
					N=N+1;
					//alert("jai trouver : "+txtsp[j]+" ; le mot suivant est : "+txtsp[j+1]);
					t[n]=txtsp[j+1];
					n=n+1;
					}	
				}
			}
			//alert(t);	
			//alert("le nombre d'occurence des OTH dans le texte est: "+N);
				
			for(i=0;i<othP.length;i=i+1){
				children[i] = othP[i].split(' ');//je recupere les valeurs vers lesquelle peuvent pointer le parent
				}		
				
			for(i=0;i<t.length;i++){
				for(j=0;j<children.length;j++){
						for(k=0;k<children[j].length;k++){
						
							if(t[i]==children[j][k] && j==0){
							m0=m0+1;
							}
							if(t[i]==children[j][k] && j==1){
							m1=m1+1;
							}
							if(t[i]==children[j][k] && j==2){
							m2=m2+1;
							}
							if(t[i]==children[j][k] && j==3){
							m3=m3+1;
							}		
						}
				}
			
			}
			//alert("OTH-->OTH: "+m0+"/"+N);
			othOTH.innerHTML= (m0+1)+"/"+N;
			
			//alert("OTH-->PRE: "+m1+"/"+N);
			othPRE.innerHTML= m1+"/"+N;
			
			//alert("OTH-->TAR: "+m2+"/"+N);
			othTAR.innerHTML= m2+"/"+N;

			//alert("OTH-->POS: "+m3+"/"+N);	
			othPOS.innerHTML= m3+"/"+N;
			
			//alert("OBSERVE: "+parent+" --> "+v+"/"+N);
			othPRE1.innerHTML= parent+" --> "+v+"/"+N;
		}
		
		//-----------FIN
		/*réinitialisation des variables*/
		var parent, enfant, children=[];
		var i=0,j=0,k=0, MIN=0, MAX=0,N=0, k=0, prob=0, t=[],n=0, m0=0, m1=0, m2=0, m3=0, m4=0, v=0 ;
		/*fin réinitialisation des variables*/
		
			document.form1.input.value ="";
			
 }, false);
 /*fin évènement pour l'extraction du code source*/