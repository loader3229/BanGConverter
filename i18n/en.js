var i18n={
	error:"Error: ",
	error2:"An error occurred when converting chart",
	notripleslide:"Triple or more slides at the same time is not allowed in this converter.",
	detectedv1format:"Bestdori! v1 format detected. Would you like to use the v1 format mode?",
	bsv1skillnosupport:"Warning: BanG! Simulator 1 format doesn't support skill notes in slides. It will convert to normal note.",
	bsv1dflnosupport:"BanG! Simulator 1 format doesn't support Directional notes",
	communitycharterror:"An error occurred when getting community chart",
	officialcharterror:"An error occurred when getting official chart",
	slidedoesnotend:"Warning: Slide doesn't end: ",
	unexpectedslidenote:function(b){
		let ret="Warning: Unexpected slide ";
		let a=b.split('/')[1];
		if(a==3||a==33)ret+="A start";
		if(a==4)ret+="A among";
		if(a==5||a==12||a==34)ret+="A end";
		if(a==41)ret+="A hidden";
		if(a==6||a==35)ret+="B start";
		if(a==7)ret+="B among";
		if(a==8||a==13||a==36)ret+="B end";
		if(a==42)ret+="B hidden";
		ret+=": "+b;
		return ret;
	},
	bmscharttoolong:"Chart is too long to convert to official BMS.",
	bmsdupnote:function(a,b){
		return "There are two notes at lane "+a+", beat "+b+".";
	},
	bmsdflout:"Directional notes outside the playfield was detected.",
	bmsdupbpm:function(a){
		return "There are two BPM markers at beat"+a+".";
	},
	bmstoomanybpm:"Too many decimal BPMs or BPMs greater than 255.",
	bmsskillnosupport:"Warning: Official BMS format doesn't support skill notes in slides. It will convert to normal note.",
}