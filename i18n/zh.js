var i18n={
	error:"错误：",
	error2:"谱面转换出现错误",
	notripleslide:"不允许同时出现三个以上的滑条",
	detectedv1format:"检测到Bestdori! v1谱面。是否要以v1模式转换它？",
	bsv1skillnosupport:"警告：BanG! Simulator 1不支持滑条头和滑条尾的技能键，滑条头和滑条尾的技能键将被转换为普通键",
	bsv1dflnosupport:"BanG! Simulator 1谱面格式不支持方向滑键",
	bbbdflnosupport:"bangbangboom谱面格式不支持方向滑键",
	bcrdflnosupport:"BanG!Craft谱面格式不支持方向滑键",
	communitycharterror:"获取自制谱时出现错误",
	officialcharterror:"获取官谱时出现错误",
	slidedoesnotend:"警告：滑条没有结束：",
	slidedoesnotend2:"滑条没有结束：",
	longnotedoesnotend2:"长条没有结束",
	unexpectedslidenote:function(b){
		let ret="警告：意外出现的滑条";
		let a=b.split('/')[1];
		if(a==3||a==33)ret+="A开始";
		if(a==4)ret+="A节点";
		if(a==5||a==12||a==34)ret+="A结束";
		if(a==41)ret+="A隐藏节点";
		if(a==6||a==35)ret+="B开始";
		if(a==7)ret+="B节点";
		if(a==8||a==13||a==36)ret+="B结束";
		if(a==42)ret+="B隐藏节点";
		ret+="Note："+b;
		return ret;
	},
	bmscharttoolong:"谱面时长过长",
	bmsdupnote:function(a,b){
		return "在第"+a+"轨第"+b+"拍出现重复位置的Note";
	},
	bmsdflout:"方向滑键出界",
	bmsdupbpm:function(a){
		return "在第"+a+"拍出现重复位置的BPM";
	},
	bmstoomanybpm:"过多的小数BPM或超过255的BPM",
	bmsskillnosupport:"警告：出现官谱BMS不支持的技能键，将被转换为普通键。要保留这些技能键请选择“官谱BMS-Ex”转换模式",
}