chartout.bangsim=function(chart){
	return chart;
}
chartout.bangsimv1=function(chart){
	var t=chart.split('\n');
	var result=[t[0],t[1]];
	for(var i=2;t[i];i++){
		if(t[i].split('/')[1]=="31"){
			alert(i18n.bsv1skillnosupport);
			t[i]=t[i].split('/')[0]+'/21/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="32"){
			alert(i18n.bsv1skillnosupport);
			t[i]=t[i].split('/')[0]+'/25/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="33"){
			alert(i18n.bsv1skillnosupport);
			t[i]=t[i].split('/')[0]+'/3/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="34"){
			alert(i18n.bsv1skillnosupport);
			t[i]=t[i].split('/')[0]+'/5/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="35"){
			alert(i18n.bsv1skillnosupport);
			t[i]=t[i].split('/')[0]+'/6/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="36"){
			alert(i18n.bsv1skillnosupport);
			t[i]=t[i].split('/')[0]+'/8/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="41"){
			continue;
		}
		if(t[i].split('/')[1]=="42"){
			continue;
		}
		if(t[i].split('/')[1]=="51"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="52"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="53"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="54"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="55"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="56"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="57"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="61"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="62"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="63"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="64"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="65"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="66"){
			throw i18n.bsv1dflnosupport;
		}
		if(t[i].split('/')[1]=="67"){
			throw i18n.bsv1dflnosupport;
		}
		result.push(t[i]);
	}
	var finalresult="";
	for(var i=0;i<result.length;i++){
		finalresult=finalresult+result[i]+"\n";
	}
	return finalresult.trim();
}