function bestdoricommunity(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=(function(xhr){
		if(xhr.readyState==4 && xhr.status == 200){
			try{
				var resp=JSON.parse(xhr.responseText).chart;
				if(!resp || !(resp instanceof Array)){
					alert(i18n.communitycharterror);
				}else{
					document.getElementById("chartinput").value=JSON.stringify(resp);
					document.getElementById("inputformat").value="bestdori";
					try{window.l2de && window.l2de.startMotion('c2',0);}catch(f){}
				}
			}catch(e){
				alert(i18n.communitycharterror);
			}
		}else if(xhr.readyState==4){
			alert(i18n.communitycharterror);
		} 
	}).bind(null,xhr);
	xhr.open("GET","https://proxy.ayachan.fun/post/bestdori/"+document.getElementById("communityid").value+"/chart",true);
	xhr.send();
}
function bestdoriofficial(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=(function(xhr){
		if(xhr.readyState==4 && xhr.status == 200){
			try{
				var resp=JSON.parse(xhr.responseText).chart;
				if(!resp || !(resp instanceof Array)){
					alert(i18n.officialcharterror);
				}else{
					document.getElementById("chartinput").value=JSON.stringify(resp);
					document.getElementById("inputformat").value="bestdori";
					try{window.l2de && window.l2de.startMotion('c2',0);}catch(f){}
				}
			}catch(e){
				alert(i18n.officialcharterror);
			}
		}else if(xhr.readyState==4){
			alert(i18n.officialcharterror);
		} 
	}).bind(null,xhr);
	xhr.open("GET","https://proxy.ayachan.fun/post/bandori/"+document.getElementById("officialid").value+"/chart?diff="+document.getElementById("officialdiff").value,true);
	xhr.send();
}