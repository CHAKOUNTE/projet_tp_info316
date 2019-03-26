var word, parent,motParent=[],i=0,j=0, tester,phrase, jouer=false,a=1,t=[],n=0,s=0,m=0,K=[],v=0, Q=[],min=0, max=0,k=0,N=0,f=0,s=0,tmp,b=0,x,y,z,i1=0,j1=0,
pre,target,post,other,Mpre,Mtarget,Mpost,Mother,Epre,Etarget,Epost,Eother,Ppre,Ptarget,Ppost,Pother; 

word=document.getElementById('word');
tester=document.getElementById('tester');
message=document.getElementById('message');


Mpre=document.getElementById('Mpre');
Mtarget=document.getElementById('Mtarget');
Mpost=document.getElementById('Mpost');
Mother=document.getElementById('Mother');


Epre=document.getElementById('Epre');
Etarget=document.getElementById('Etarget');
Epost=document.getElementById('Epost');
Eother=document.getElementById('Eother');

Ppre=document.getElementById('Ppre');
Ptarget=document.getElementById('Ptarget');
Ppost=document.getElementById('Ppost');
Pother=document.getElementById('Pother');



document.addEventListener('keyup',function controle(form1) {
	
	parent = document.form1.input.value;	
	motParent[i]=parent;//JE Stocke mes nom ici
	
	if(form1.keyCode==32){
	
		
			//alert("jai noté " +parent);		
			//les mots sont en mémoire--------------------------------------->
			if(parent==" ")parent="~";
			
			i=i+1;
			
			//alert(motParent);
			//alert(pre);
			
		//__________________________________________________________________
		
		for(i=0;i<motParent.length;i++){
			if(parent==motParent[i]){
			//alert("le mot suivant "+parent+" est :"+motParent[i+1]);
			
			if(motParent[i+1]!=undefined){
	
			t[n]=motParent[i+1];
			//alert("t["+n+"]= "+t[n]);
			n++;
			}
			
			}
		}
		 //alert("voici les enfants de "+parent+" : "+t);
		 
		 //alert("JE DOIS TROUVER LES OCCURENCES ICI !!!!");
		 //----------------------------------------------------------------->
		 
		 // alert("t["+0+"]= "+t[0]);
		// alert("t["+1+"]= "+t[1]);
		//alert("taille :" +t.length);
		
		for(i1=0;i1<t.length;i1++){
		 
		 
			if(t[i1]!="x"){
					tmp=t[i1];
					//alert("à la position "+i1+"; t["+i1+"]= "+t[i1]+" n'est pas marqué tmp ="+tmp);
					a=1;
					//alert(t[i1]);
			}
			if(t[i1]=="x"){
					//alert("à la position "+i1+"; t["+i1+"]= "+t[i1]+" est marqué tmp ="+tmp);
					a=0;
			}
		 
		 
			for(j1=0;j1<t.length;j1++){
				if(t[j1]==tmp&&a==1){
						s=s+1;
						//alert("occurence de "+tmp+" = "+s);
						t[j1]="x";
						//alert("j'ai marqué "+tmp+" à la position j= "+j1);
				}
						//alert("i = "+i1+"; et j = "+j1);
				if(j1==t.length-1&&a==1){
						//alert("j = "+j1+" la valeur "+tmp+" a été visité dans tout le tableau");
						K[m]=tmp;
						Q[m]=s;
						//alert("nom k["+m+"]  = '' "+tmp+" '' ; et occurences Q["+m+"]  ="+s);
						m=m+1;
						s=0;
			
				}
					
			}
		 
		}
		//alert(Q);
		//alert("parent = "+parent);
		
		  //JE TRIE LE TABLEAU POUR AVOIR OCCURENCE MAX
		 //----------------------------------------------------------------->
		 
		 for(i1=0;i1<Q.length;i1++){
			for(j1=0;j1<Q.length;j1++){
				if(Q[i1]>Q[j1]){//ON POURRAIT  METTRE LE SYMBOLE > si(T[j]>T[i])
				
				x=Q[i1];
				Q[i1]=Q[j1];
				Q[j1]=x;
		
				y=K[i1];
				K[i1]=K[j1];
				K[j1]=y;
		
				}
			}
		}
		
		//alert(Q+"\n"+K);
		min=0, max=motParent.length-1;
		//alert(max);
		f=Math.random() * (max - min) + min, f=Math.round(f);
		//alert("aleat " +f);
		//alert("PRE : "+parent+ ";\n TARGET  : "+K[0]+ "("+Q[0]+");\n POST : "+K[1]+ "("+Q[1]+")\nOTHER : "+motParent[f]);	
		
		Mpre.innerHTML=parent;
		Mtarget.innerHTML=K[0];
		Mpost.innerHTML=K[1];
		Mother.innerHTML=K[2];
		if(Mtarget.innerHTML==" ")Mtarget.innerHTML="~";
		if(Mpost.innerHTML==" ")Mpost.innerHTML="~";
		if(Mother.innerHTML==" ")Mother.innerHTML="~";
		
		Epre.innerHTML=n;
		Etarget.innerHTML=Q[0];
		Epost.innerHTML=Q[1];
		Eother.innerHTML=Q[2];
		
		if(n==0){
		Mtarget.innerHTML=" ";
		Mpost.innerHTML=" ";
		Mother.innerHTML=" ";
	
	
		Etarget.innerHTML="";
		Epost.innerHTML="";
		Eother.innerHTML="";
		
		Ptarget.innerHTML="";
		Ppost.innerHTML="";
		Pother.innerHTML="";
		
		}
		
		if(n!=0){
		
		Ppre.innerHTML=n/n;
		Ptarget.innerHTML=""+Q[0]+"/"+n;
		Ppost.innerHTML=""+Q[1]+"/"+n;
		Pother.innerHTML=""+Q[2]+"/"+n;
		}
		
				//other.innerHTML=motParent[f];
		
		//phrase.innerHTML=motParent;	//IMPORTANT POUR CACHER !!!! 
		//------------------------------------------------------------------>		 
				 
		// alert("le nombre d'occurence de <"+parent+"> dans le texte est: "+n);
			m=0;
			n=0;
			t=[];
			K=[];
			
			
		if(K[0]==undefined)Q[0]=0;
		if(K[1]==undefined)Q[1]=0;
		if(K[2]==undefined)Q[2]=0;
		
		document.form1.input.value ="";
	}
	
	},false);