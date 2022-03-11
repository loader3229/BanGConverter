chartout.bms=function(chart){
	return BanGSimToBMS(chart,false);
}
chartout.bmsex=function(chart){
	return BanGSimToBMS(chart,true);
}
function BanGSimToBMS(chart,extended_bms){
	//01:bgm.wav
	//03:bd.wav
	//04:flick.wav
	//05:skill.wav
	//06:slide_a.wav
	//07:slide_end_a.wav
	//08:slide_end_flick_a.wav
	//09:slide_b.wav
	//0A:slide_end_b.wav
	//0B:slide_end_flick_b.wav
	//0C:cmd_fever_ready.wav
	//0D:cmd_fever_start.wav
	//0E:cmd_fever_end.wav
	//0F:fever_note.wav
	//0G:directional_fl_l.wav
	//0H:directional_fl_r.wav
	
	var getBmsBpmIndex=function(a){
		var b=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
		a=Math.round(a);
		return b[Math.floor(a/16)]+b[a%16];
	};
	var t=chart.split('\n'),bms={
		"01":["01"],"03":[],"08":[],"09":[],
		"16":[],"11":[],"12":[],"13":[],"14":[],"15":[],"18":[],
		"36":[],"31":[],"32":[],"33":[],"34":[],"35":[],"38":[],
		"56":[],"51":[],"52":[],"53":[],"54":[],"55":[],"58":[],
	};
	var gcd=function(a,b){
		if(b==0)return a;
		c=a%b;
		while(c){
			a=b;b=c;c=a%b;
		}
		return b;
	};
	var getBmsLine=function(i,j){
		var gyx=768;
		var exist=0;
		for(var k=0;k<768;k++){
			if(bms[j][i*768+k]){
				exist=1;
				gyx=gcd(gyx,k);
			}
		}
		if(exist==0){
			return "";
		}
		var line="\n#"+Math.floor(i/100)+(Math.floor(i/10)%10)+(i%10)+j+":";
		for(var k=0;k<768/gyx;k++){
			line+=(bms[j][i*768+k*gyx] || "00");
		}
		return line;
	};
	var bpms=[];
	var lanenumbers=["6","1","2","3","4","5","8"];
	var initialbpm=120;
	var newsp=false;
	var wavnewspa=[];
	var wavnewspb=[];
	wavnewspa[50]="06";
	wavnewspb[50]="09";
	for(var i=1;i<=25;i++){
		wavnewspa[50+i]="1"+String.fromCharCode(64+i);
		wavnewspa[75+i]="2"+String.fromCharCode(64+i);
		wavnewspa[50-i]="3"+String.fromCharCode(64+i);
		wavnewspa[25-i]="4"+String.fromCharCode(64+i);
		wavnewspb[50+i]="5"+String.fromCharCode(64+i);
		wavnewspb[75+i]="6"+String.fromCharCode(64+i);
		wavnewspb[50-i]="7"+String.fromCharCode(64+i);
		wavnewspb[25-i]="8"+String.fromCharCode(64+i);
	}
	if(parseFloat(t[1])&&t[1].split('/')[1]===undefined)initialbpm=parseFloat(t[1]);
	for(var i=2;t[i];i++){
		if(t[i].split('/')[1]=="1"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0]);
			}
			bms[lane][beat]="03";
		}
		if(t[i].split('/')[1]=="2"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="04";
		}
		if(t[i].split('/')[1]=="3"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="06";
		}
		if(t[i].split('/')[1]=="4"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="06";
		}
		if(t[i].split('/')[1]=="5"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="07";
		}
		if(t[i].split('/')[1]=="6"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="09";
		}
		if(t[i].split('/')[1]=="7"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="09";
		}
		if(t[i].split('/')[1]=="8"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="0A";
		}
		if(t[i].split('/')[1]=="10"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="0F";
		}
		if(t[i].split('/')[1]=="11"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="05";
		}
		if(t[i].split('/')[1]=="12"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="08";
		}
		if(t[i].split('/')[1]=="13"){
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="0B";
		}
		if(t[i].split('/')[1]=="20"){
			var lane="03";
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			var bpm=parseFloat(t[i].split('/')[2]);
			var wav="";
			if(bpm==Math.floor(bpm) && bpm<=255){
				wav=getBmsBpmIndex(bpm);
			}else{
				lane="08";
				var k=0;
				for(k=0;k<bpms.length;k++){
					if(bpms[k]==bpm)break;
				}
				if(k>99){
					throw i18n.bmstoomanybpm;
				}
				bpms[k]=bpm;
				wav=getBmsBpmIndex(k+1);
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupbpm(t[i].split('/')[0]);
			}
			bms[lane][beat]=wav;
		}
		if(t[i].split('/')[1]=="21"){
			var lane="5"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="03";
		}
		if(t[i].split('/')[1]=="25"){
			var lane="5"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="03";
		}
		if(t[i].split('/')[1]=="26"){
			var lane="5"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="04";
		}
		if(t[i].split('/')[1]=="31"){
			var lane="5"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="05";
		}
		if(t[i].split('/')[1]=="32"){
			var lane="5"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]="05";
		}
		if(t[i].split('/')[1]=="33"){
			if(!extended_bms)alert(i18n.bmsskillnosupport);
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]=(extended_bms?"0I":"06");
		}
		if(t[i].split('/')[1]=="34"){
			if(!extended_bms)alert(i18n.bmsskillnosupport);
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]=(extended_bms?"0J":"07");
		}
		if(t[i].split('/')[1]=="35"){
			if(!extended_bms)alert(i18n.bmsskillnosupport);
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]=(extended_bms?"0K":"09");
		}
		if(t[i].split('/')[1]=="36"){
			if(!extended_bms)alert(i18n.bmsskillnosupport);
			var lane="1"+lanenumbers[Math.round(parseFloat(t[i].split('/')[2])-1)];
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[lane][beat]){
				throw i18n.bmsdupnote(Math.round(parseFloat(t[i].split('/')[2])),t[i].split('/')[0])
			}
			bms[lane][beat]=(extended_bms?"0L":"0A");
		}
		if(t[i].split('/')[1]=="41"){
			newsp=true;
			var lane=Math.round((parseFloat(t[i].split('/')[2])-1)*100);
			var reallane=Math.round(lane/100);
			if(reallane<0)reallane=0;
			if(reallane>6)reallane=6;
			lane-=reallane*100;
			reallane="3"+lanenumbers[reallane];
			if(lane>50)lane=50;
			if(lane<-50)lane=-50;
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[reallane][beat]){
				throw i18n.bmsdupnote((reallane+1),t[i].split('/')[0])
			}
			bms[reallane][beat]=wavnewspa[lane+50];
		}
		if(t[i].split('/')[1]=="42"){
			newsp=true;
			var lane=Math.round((parseFloat(t[i].split('/')[2])-1)*100);
			var reallane=Math.round(lane/100);
			if(reallane<0)reallane=0;
			if(reallane>6)reallane=6;
			lane-=reallane*100;
			reallane="3"+lanenumbers[reallane];
			if(lane>50)lane=50;
			if(lane<-50)lane=-50;
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(bms[reallane][beat]){
				throw i18n.bmsdupnote((reallane+1),t[i].split('/')[0])
			}
			bms[reallane][beat]=wavnewspb[lane+50];
		}
		if(t[i].split('/')[1]=="51"||t[i].split('/')[1]=="52"||t[i].split('/')[1]=="53"||t[i].split('/')[1]=="54"||t[i].split('/')[1]=="55"||t[i].split('/')[1]=="56"||t[i].split('/')[1]=="57"){
			newsp=true;
			var width=parseInt(t[i].split('/')[1].slice(1));
			var lanei=Math.round(parseFloat(t[i].split('/')[2])-1);
			for(var k=0;k<width;k++){
				var lane="1"+lanenumbers[lanei-k];
				if(lane=="1undefined"){
					throw i18n.bmsdflout;
				}
				var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
				if(beat>=768000){
					throw i18n.bmscharttoolong;
				}
				if(bms[lane][beat]){
					throw i18n.bmsdupnote((lanei-k),t[i].split('/')[0])
				}
				bms[lane][beat]="0G";
			}
		}
		if(t[i].split('/')[1]=="61"||t[i].split('/')[1]=="62"||t[i].split('/')[1]=="63"||t[i].split('/')[1]=="64"||t[i].split('/')[1]=="65"||t[i].split('/')[1]=="66"||t[i].split('/')[1]=="67"){
			newsp=true;
			var width=parseInt(t[i].split('/')[1].slice(1));
			var lanei=Math.round(parseFloat(t[i].split('/')[2])-1);
			for(var k=0;k<width;k++){
				var lane="1"+lanenumbers[lanei+k];
				if(lane=="1undefined"){
					throw i18n.bmsdflout;
				}
				var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
				if(beat>=768000){
					throw i18n.bmscharttoolong;
				}
				if(bms[lane][beat]){
					throw i18n.bmsdupnote((lanei+k),t[i].split('/')[0])
				}
				bms[lane][beat]="0H";
			}
		}
	}
	var bmsoutput=`
*---------------------- HEADER FIELD

#PLAYER 1
#GENRE 
#TITLE BanG Converter Output Chart
#ARTIST 
#BPM ${initialbpm}
#PLAYLEVEL 
#RANK 3
#STAGEFILE 
#DIFFICULTY 
#LNTYPE 1


#WAV01 bgm.wav
#WAV03 bd.wav
#WAV04 flick.wav
#WAV05 skill.wav
#WAV06 slide_a.wav
#WAV07 slide_end_a.wav
#WAV08 slide_end_flick_a.wav
#WAV09 slide_b.wav
#WAV0A slide_end_b.wav
#WAV0B slide_end_flick_b.wav
#WAV0C cmd_fever_ready.wav
#WAV0D cmd_fever_start.wav
#WAV0E cmd_fever_end.wav
#WAV0F fever_note.wav`;
	if(newsp)bmsoutput+=`
#WAV0G directional_fl_l.wav
#WAV0H directional_fl_r.wav`;
	if(extended_bms)bmsoutput+=`
#WAV0I slide_a_skill.wav
#WAV0J slide_end_a_skill.wav
#WAV0K slide_b_skill.wav
#WAV0L slide_end_b_skill.wav`;
	if(newsp){
		for(var i=1;i<=50;i++){
			bmsoutput+="\n#WAV"+wavnewspa[50+i]+" slide_a_RS"+(Math.floor(i/10)%10)+(i%10)+".wav";
		}
		for(var i=1;i<=50;i++){
			bmsoutput+="\n#WAV"+wavnewspa[50-i]+" slide_a_LS"+(Math.floor(i/10)%10)+(i%10)+".wav";
		}
		for(var i=1;i<=50;i++){
			bmsoutput+="\n#WAV"+wavnewspb[50+i]+" slide_b_RS"+(Math.floor(i/10)%10)+(i%10)+".wav";
		}
		for(var i=1;i<=50;i++){
			bmsoutput+="\n#WAV"+wavnewspb[50-i]+" slide_b_LS"+(Math.floor(i/10)%10)+(i%10)+".wav";
		}
	}
	bmsoutput+="\n";
	for(var i=0;i<bpms.length;i++){
		bmsoutput+="\n#BPM"+getBmsBpmIndex(i+1)+" "+bpms[i];
	}
	bmsoutput+=`

*---------------------- MAIN DATA FIELD

`;
	for(var i=0;i<=999;i++){
		for(var j in bms){
			bmsoutput+=getBmsLine(i,j);
		}
	}
	bmsoutput+="\n";
	return bmsoutput;
}