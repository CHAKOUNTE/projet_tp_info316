		var parent, enfant, children=[];
		var i=0,j=0,k=0,c=1, MIN=0, MAX=0,N=0, k=0, prob=0, t=[],n=0, m0=0, m1=0, m2=0, m3=0, m4=0, v=0 ;
		
	var	prePRE=document.getElementById('prePRE'),//prepre
		preTAR=document.getElementById('preTAR'),//pretar
		prePOS=document.getElementById('prePOS'),//prepos
		preOTH=document.getElementById('preOTH'),//preoth

		tarPRE=document.getElementById('tarPRE'),//tarpre
		tarTAR=document.getElementById('tarTAR'),//tartar
		tarPOS=document.getElementById('tarPOS'),//tarpos
		tarOTH=document.getElementById('tarOTH'),//taroth

		posPRE=document.getElementById('posPRE'),//pospre
		posTAR=document.getElementById('posTAR'),//postar
		posPOS=document.getElementById('posPOS'),//pospos
		posOTH=document.getElementById('posOTH'),//posoth
		
		othPRE=document.getElementById('othPRE'),//pospre
		othTAR=document.getElementById('othTAR'),//postar
		othPOS=document.getElementById('othPOS'),//pospos
		othOTH=document.getElementById('othOTH'),//posoth
		
		prePRE1=document.getElementById('prePRE1'),//prepre
		tarPRE1=document.getElementById('tarPRE1'),//prepre
		posPRE1=document.getElementById('posPRE1'),//prepre
		othPRE1=document.getElementById('othPRE1');//prepre
		
		
		
		
		
		
		
				
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

		
	document.addEventListener('keyup',function controle(form1) {
	
	parent = document.form1.input.value;	
	
	alert("mot = '"+parent+"' = 'public '");
	if(parent=="public ")alert("ok");
	
	
	
	
	document.form1.input.value ="";
	

	},false);
		
		
		
		