chartin.bestdori=function(chart){
	var t=JSON.parse(chart),slides=[];
	var result=["46","120","0/0/0"];
	for(var i=0;t[i];i++){
		if(t[i].type=="System"&&t[i].cmd=="BPM"){
			if(confirm(i18n.detectedv1format)){
				return chartin.bestdoriv1(chart);
			}else break;
		}
	}
	for(var i=0;t[i];i++){
		if(t[i].type=="BPM"&&t[i].beat<=0){
			result[1]=t[i].bpm+"";
			t[i].type=".";
			break;
		}
	}
	for(var i=0;t[i];i++){
		if(t[i].type=="BPM"){
			var type="20";
			var lane=t[i].bpm;
			result.push(t[i].beat+"/"+type+"/"+lane);
			continue;
		}
		if(t[i].type=="Single"){
			var type="1";
			//if(t[i].charge)type="10";
			if(t[i].flick)type="2";
			if(t[i].skill)type="11";
			var lane=t[i].lane+1;
			result.push(t[i].beat+"/"+type+"/"+lane);
			continue;
		}
		if(t[i].type=="Slide"||t[i].type=="Long"){
			if(t[i].connections.length==2 && t[i].connections[0].lane==t[i].connections[1].lane && document.getElementById("noln").checked==false){
				var type="21";
				if(t[i].connections[0].skill)type="31";
				var lane=t[i].connections[0].lane+1;
				result.push(t[i].connections[0].beat+"/"+type+"/"+lane);
				type="25";
				if(t[i].connections[1].flick)type="26";
				if(t[i].connections[1].skill)type="32";
				lane=t[i].connections[1].lane+1;
				result.push(t[i].connections[1].beat+"/"+type+"/"+lane);
				continue;
			}
			slides.push(t[i]);
			continue;
		}
		if(t[i].type=="Directional"){
			var type=50+t[i].width+10*(t[i].direction=="Right")+"";
			var lane=t[i].lane+1;
			result.push(t[i].beat+"/"+type+"/"+lane);
			continue;
		}
	}
	if(slides.length>0){
		for(var i=0;i<slides.length-1;i++){
			for(var j=1;j<slides.length-i;j++){
				if(slides[j-1].connections[0].beat>slides[j].connections[0].beat){
					var temp=slides[j-1];
					slides[j-1]=slides[j];
					slides[j]=temp;
				}
			}
		}
		var a=-1,b=-1;
		for(var i=0;i<slides.length;i++){
			var pos=0;
			if(slides[i].connections[0].beat<=a){
				pos=1;
				if(slides[i].connections[0].beat<=b){
					pos=2;
				}
			}
			if(pos==1){
				b=slides[i].connections[slides[i].connections.length-1].beat;
			}else if(pos==0){
				a=slides[i].connections[slides[i].connections.length-1].beat;
			}
			for(var j=0;j<slides[i].connections.length;j++){
				var type=["4","7","72"];
				if(j==0){
					type=["3","6","71"];
					if(slides[i].connections[j].skill)type=["33","35","75"];
				}else if(j==slides[i].connections.length-1){
					type=["5","8","73"];
					if(slides[i].connections[j].flick)type=["12","13","74"];
					if(slides[i].connections[j].skill)type=["34","36","76"];
				}else{
					if(slides[i].connections[j].hidden)type=["41","42","77"];
				}
				var lane=slides[i].connections[j].lane+1;
				result.push(slides[i].connections[j].beat+"/"+type[pos]+(pos==2?"/"+i:"")+"/"+lane);
			}
		}
	}
	for(var i=0;i<result.length-1;i++){
		for(var j=3;j<result.length-i;j++){
			if(parseFloat(result[j-1].split('/')[0])>parseFloat(result[j].split('/')[0])){
				var temp=result[j-1];
				result[j-1]=result[j];
				result[j]=temp;
			}
		}
	}
	var finalresult="";
	for(var i=0;i<result.length;i++){
		finalresult=finalresult+result[i]+"\n";
	}
	return finalresult.trim();
}
chartin.bestdoriv1=function(chart){
	var t=JSON.parse(chart),slides=[];
	var result=["46","120","0/0/0"];
	for(var i=0;t[i];i++){
		if(t[i].type=="System"&&t[i].cmd=="BPM"&&t[i].beat<=0){
			result[1]=t[i].bpm+"";
			t[i].cmd=".";
			break;
		}
	}
	for(var i=0;t[i];i++){
		if(t[i].type=="System"&&t[i].cmd=="BPM"){
			var type="20";
			var lane=t[i].bpm;
			result.push(t[i].beat+"/"+type+"/"+lane);
			continue;
		}
		if(t[i].type=="Note"&&t[i].note=="Single"){
			var type="1";
			//if(t[i].charge)type="10";
			if(t[i].flick)type="2";
			if(t[i].skill)type="11";
			var lane=t[i].lane;
			result.push(t[i].beat+"/"+type+"/"+lane);
			continue;
		}
		if(t[i].type=="Note"&&t[i].note=="Long"){
			var type="21";
			if(t[i].start){
				type="21";
				if(t[i].skill)type="31";
			}else if(t[i].end){
				type="25";
				if(t[i].flick)type="26";
				if(t[i].skill)type="32";
			}
			var lane=t[i].lane;
			result.push(t[i].beat+"/"+type+"/"+lane);
			continue;
		}
		if(t[i].type=="Note"&&t[i].note=="Slide"){
			var type=["4","7"];
			if(t[i].start){
				type=["3","6"];
				if(t[i].skill)type=["33","35"];
			}else if(t[i].end){
				type=["5","8"];
				if(t[i].flick)type=["12","13"];
				if(t[i].skill)type=["34","36"];
			}else if(t[i].hidden){
				type=["41","42"];
			}
			var pos=(t[i].pos=='B')*1;
			var lane=t[i].lane;
			result.push(t[i].beat+"/"+type[pos]+"/"+lane);
			continue;
		}
	}
	for(var i=0;i<result.length-1;i++){
		for(var j=3;j<result.length-i;j++){
			if(parseFloat(result[j-1].split('/')[0])>parseFloat(result[j].split('/')[0])){
				var temp=result[j-1];
				result[j-1]=result[j];
				result[j]=temp;
			}
		}
	}
	var finalresult="";
	for(var i=0;i<result.length;i++){
		finalresult=finalresult+result[i]+"\n";
	}
	return finalresult.trim();
}