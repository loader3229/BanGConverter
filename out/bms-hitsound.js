chartout.bms_hitsound=function(chart){
	return BanGSimToBMSHitSound(chart,false);
}
function BanGSimToBMSHitSound(chart,extended_bms){
	//01:bgm.wav
	//03:bd.wav
	//04:flick.wav
	//05:skill.wav
	//06:directional_fl_1.wav
	//07:directional_fl_2.wav
	//08:directional_fl_3.wav
	
	var getBmsBpmIndex=function(a){
		var b=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
		a=Math.round(a);
		return b[Math.floor(a/16)]+b[a%16];
	};
	var t=chart.split('\n'),bms={
		"01":[1],"03":[],"04":[],"05":[],"06":[],"07":[],"08":[],
	},bmsspecial={
		"03":[],"08":[],
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
		var lines="";
		var exist=1;
		while(exist){
			exist=0;
			var gyx=768;
			for(var k=0;k<768;k++){
			if((bms[j][i*768+k]||0)>0){
					exist=1;
					gyx=gcd(gyx,k);
				}
			}
			if(exist==0){
				return lines;
			}
			var line="\n#"+Math.floor(i/100)+(Math.floor(i/10)%10)+(i%10)+"01:";
			for(var k=0;k<768/gyx;k++){
				if(bms[j][i*768+k*gyx]){
					line+=j;
					bms[j][i*768+k*gyx]--;
				}else line+="00";
			}
			lines+=line;
		}
		return lines;
	};
	var getBmsLineSpecial=function(i,j){
		var gyx=768;
		var exist=0;
		for(var k=0;k<768;k++){
			if(bmsspecial[j][i*768+k]){
				exist=1;
				gyx=gcd(gyx,k);
			}
		}
		if(exist==0){
			return "";
		}
		var line="\n#"+Math.floor(i/100)+(Math.floor(i/10)%10)+(i%10)+j+":";
		for(var k=0;k<768/gyx;k++){
			line+=(bmsspecial[j][i*768+k*gyx] || "00");
		}
		return line;
	};
	var update=function(i,j){
		if(!bms[i][j])bms[i][j]=0;
		bms[i][j]++;
	}
	var bpms=[];
	var initialbpm=120;
	if(parseFloat(t[1])&&t[1].split('/')[1]===undefined)initialbpm=parseFloat(t[1]);
	for(var i=2;t[i];i++){
		if(t[i].split('/')[1]=="1"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="2"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("04",beat);
		}
		if(t[i].split('/')[1]=="3"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="4"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="5"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="6"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="7"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="8"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="10"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="11"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("05",beat);
		}
		if(t[i].split('/')[1]=="12"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("04",beat);
		}
		if(t[i].split('/')[1]=="13"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("04",beat);
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
			if(bmsspecial[lane][beat]){
				throw i18n.bmsdupbpm(t[i].split('/')[0]);
			}
			bmsspecial[lane][beat]=wav;
		}
		if(t[i].split('/')[1]=="21"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="25"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("03",beat);
		}
		if(t[i].split('/')[1]=="26"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("04",beat);
		}
		if(t[i].split('/')[1]=="31"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("05",beat);
		}
		if(t[i].split('/')[1]=="32"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("05",beat);
		}
		if(t[i].split('/')[1]=="33"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("05",beat);
		}
		if(t[i].split('/')[1]=="34"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("05",beat);
		}
		if(t[i].split('/')[1]=="35"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("05",beat);
		}
		if(t[i].split('/')[1]=="36"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			update("05",beat);
		}
		if(t[i].split('/')[1]=="41"){
		}
		if(t[i].split('/')[1]=="42"){
		}
		if(t[i].split('/')[1]=="51"||t[i].split('/')[1]=="52"||t[i].split('/')[1]=="53"||t[i].split('/')[1]=="54"||t[i].split('/')[1]=="55"||t[i].split('/')[1]=="56"||t[i].split('/')[1]=="57"||t[i].split('/')[1]=="61"||t[i].split('/')[1]=="62"||t[i].split('/')[1]=="63"||t[i].split('/')[1]=="64"||t[i].split('/')[1]=="65"||t[i].split('/')[1]=="66"||t[i].split('/')[1]=="67"){
			var beat=Math.round(parseFloat(t[i].split('/')[0])*192);
			if(beat>=768000){
				throw i18n.bmscharttoolong;
			}
			if(t[i].split('/')[1]=="51"||t[i].split('/')[1]=="61")update("06",beat);
			else if(t[i].split('/')[1]=="52"||t[i].split('/')[1]=="62")update("07",beat);
			else update("08",beat);
		}
	}
	var bmsoutput=`
*---------------------- HEADER FIELD

#PLAYER 1
#GENRE 
#TITLE BanG Converter Output Hitsound BMS
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
#WAV06 directional_fl_1.wav
#WAV07 directional_fl_2.wav
#WAV08 directional_fl_3.wav`;
	bmsoutput+="\n";
	for(var i=0;i<bpms.length;i++){
		bmsoutput+="\n#BPM"+getBmsBpmIndex(i+1)+" "+bpms[i];
	}
	bmsoutput+=`

*---------------------- MAIN DATA FIELD

`;
	for(var i=0;i<=999;i++){
		for(var j in bmsspecial){
			bmsoutput+=getBmsLineSpecial(i,j);
		}
		for(var j in bms){
			bmsoutput+=getBmsLine(i,j);
		}
	}
	bmsoutput+="\n";
	return bmsoutput;
}