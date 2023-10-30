var chartin={};
var chartout={};
function update(){
	if(document.getElementById("inputformat").value=="bestdori" && document.getElementById("outputformat").value=="bangsim"){
		document.getElementById("nolnspan").style.display="initial";
	}else if(document.getElementById("inputformat").value=="bestdori" && document.getElementById("outputformat").value=="bangsimv1"){
		document.getElementById("nolnspan").style.display="initial";
	}else if(document.getElementById("inputformat").value=="bestdori" && document.getElementById("outputformat").value=="bms"){
		document.getElementById("nolnspan").style.display="initial";
	}else if(document.getElementById("inputformat").value=="bestdori" && document.getElementById("outputformat").value=="bmsex"){
		document.getElementById("nolnspan").style.display="initial";
	}else{
		document.getElementById("nolnspan").style.display="none";
		document.getElementById("noln").checked=false;
	}
}
setInterval(update,30);
function convert(){
	try{
		var ch=document.getElementById("chartinput").value;
		ch=chartin[document.getElementById("inputformat").value](ch);
		var offset=parseFloat(document.getElementById("chartoffset").value)||0;
		var speed=parseFloat(document.getElementById("chartspeed").value)||1;
		ch=offsetter(ch,offset,speed);
		ch=chartout[document.getElementById("outputformat").value](ch);
		document.getElementById("chartoutput").value=ch;
		ch=ch.replaceAll(/\n/g,"\r\n");
		var blob=new Blob([ch], {type: 'text/plain'});
		var url=URL.createObjectURL(blob);
		document.getElementById("downloadchart").href=url;
		document.getElementById("downloadchart").style.display="initial";
		try{window.l2de && window.l2de.startMotion('c2',0);}catch(f){}
	}catch(e){alert(i18n.error+e);console.log(e);}
}
function offsetter(chart,offset,speed){
	var t=chart.split('\n');
	var result=[t[0],t[1],t[2]];
	for(var i=3;t[i];i++){
		t[i]=t[i].split("/");
		var temp=((parseFloat(t[i][0])+offset)/speed).toString();
		for(var j=1;t[i][j];j++){
			temp=temp+"/"+t[i][j];
		}
		result[i]=temp;
	}
	var finalresult="";
	for(var i=0;i<result.length;i++){
		finalresult=finalresult+result[i]+"\n";
	}
	return finalresult.trim();
}