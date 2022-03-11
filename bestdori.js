function bestdoricommunity(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=(function(xhr){
		if(xhr.readyState==4 && xhr.status == 200){
			try{
				var resp=JSON.parse(xhr.responseText).post.chart;
				if(!resp || !(resp instanceof Array)){
					alert();
				}else{
					document.getElementById("chartinput").value=JSON.stringify(resp);
					document.getElementById("inputformat").value="bestdori";
				}
			}catch(e){
				alert(i18n.communitycharterror);
			}
		}else if(xhr.readyState==4){
			alert(i18n.communitycharterror);
		} 
	}).bind(null,xhr);
	xhr.open("GET","https://bestdori.reikohaku.fun/api/post/details?id="+document.getElementById("communityid").value,true);
	xhr.send();
}
function bestdoriofficial(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=(function(xhr){
		if(xhr.readyState==4 && xhr.status == 200){
			try{
				var resp=JSON.parse(xhr.responseText);
				if(!resp || !(resp instanceof Array)){
					alert(i18n.officialcharterror);
				}else{
					document.getElementById("chartinput").value=JSON.stringify(resp);
					document.getElementById("inputformat").value="bestdori";
				}
			}catch(e){
				alert(i18n.officialcharterror);
			}
		}else if(xhr.readyState==4){
			alert(i18n.officialcharterror);
		} 
	}).bind(null,xhr);
	xhr.open("GET","https://bestdori.reikohaku.fun/api/charts/"+document.getElementById("officialid").value+"/"+document.getElementById("officialdiff").value+".json",true);
	xhr.send();
}