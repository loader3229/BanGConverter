chartout.bangbangboomv1=function(chart){
	var t=chart.split('\n');
	var result="\n+|0|"+t[1]+"|4\n";
	var offset=0;var offset2=0;var bpm=parseFloat(t[1]);
	for(var i=0;t[i];i++){
		if(t[i].split('/')[1]=="4"){
			t[i]=t[i].split('/')[0]+'/3/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="7"){
			t[i]=t[i].split('/')[0]+'/6/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="5"){
			alert(i18n.unexpectedslidenote(t[i]));
			t[i]=t[i].split('/')[0]+'/1/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="8"){
			alert(i18n.unexpectedslidenote(t[i]));
			t[i]=t[i].split('/')[0]+'/1/'+t[i].split('/')[2];
		}
		var beat=parseFloat(t[i].split('/')[0]);
		if(t[i].split('/')[1]=="20"){
			offset2+=(beat-offset)*(60/bpm);
			offset=beat;
			bpm=parseFloat(t[i].split('/')[2]);
			result+="\n\n+|"+offset2+"|"+bpm+"|4\n";
		}
		if(t[i].split('/')[1]=="1"){
			result+="\ns|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="2"){
			result+="\nf|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="3"||t[i].split('/')[1]=="33"){
			var temp="|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
			var temp2=0;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[1]=="4"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
				}
				if(t[j].split('/')[1]=="5"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="12"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2=1;
					break;
				}
				if(t[j].split('/')[1]=="34"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
			}
			if(!t[j])throw i18n.slidedoesnotend2+"A";
			result+="\nl|"+temp2+temp;
		}
		if(t[i].split('/')[1]=="6"||t[i].split('/')[1]=="35"){
			var temp="|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
			var temp2=0;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[1]=="7"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
				}
				if(t[j].split('/')[1]=="8"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="13"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2=1;
					break;
				}
				if(t[j].split('/')[1]=="36"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
			}
			if(!t[j])throw i18n.slidedoesnotend2+"B";
			result+="\nl|"+temp2+temp;
		}
		if(t[i].split('/')[1]=="21"||t[i].split('/')[1]=="31"){
			var temp="|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
			var temp2=0;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[2]!=t[i].split('/')[2])continue;
				if(t[j].split('/')[1]=="25"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="26"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2=1;
					break;
				}
				if(t[j].split('/')[1]=="32"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
			}
			if(!t[j])throw i18n.longnotedoesnotend2;
			result+="\nl|"+temp2+temp;
		}
		if(t[i].split('/')[1]=="10"){
			result+="\ns|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="11"){
			result+="\ns|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="41"){
			continue;
		}
		if(t[i].split('/')[1]=="42"){
			continue;
		}
		if(t[i].split('/')[1]=="51"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="52"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="53"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="54"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="55"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="56"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="57"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="61"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="62"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="63"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="64"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="65"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="66"){
			throw i18n.bbbdflnosupport;
		}
		if(t[i].split('/')[1]=="67"){
			throw i18n.bbbdflnosupport;
		}
	}
	return result;
}
chartout.bangbangboomv1ex=function(chart){
	var t=chart.split('\n');
	var result="\n+|0|"+t[1]+"|4\n";
	var offset=0;var offset2=0;var bpm=parseFloat(t[1]);
	for(var i=0;t[i];i++){
		if(t[i].split('/')[1]=="4"){
			t[i]=t[i].split('/')[0]+'/3/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="7"){
			t[i]=t[i].split('/')[0]+'/6/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="5"){
			alert(i18n.unexpectedslidenote(t[i]));
			t[i]=t[i].split('/')[0]+'/1/'+t[i].split('/')[2];
		}
		if(t[i].split('/')[1]=="8"){
			alert(i18n.unexpectedslidenote(t[i]));
			t[i]=t[i].split('/')[0]+'/1/'+t[i].split('/')[2];
		}
		var beat=parseFloat(t[i].split('/')[0]);
		if(t[i].split('/')[1]=="20"){
			offset2+=(beat-offset)*(60/bpm);
			offset=beat;
			bpm=parseFloat(t[i].split('/')[2]);
			result+="\n\n+|"+offset2+"|"+bpm+"|4\n";
		}
		if(t[i].split('/')[1]=="1"){
			result+="\ns|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="2"){
			result+="\nf|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="3"||t[i].split('/')[1]=="33"){
			var temp="|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
			var temp2=0;if(t[i].split('/')[1]=="33")temp2=3;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[1]=="4"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
				}
				if(t[j].split('/')[1]=="5"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="12"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2+=1;
					break;
				}
				if(t[j].split('/')[1]=="34"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2+=2;
					break;
				}
			}
			if(!t[j])throw i18n.slidedoesnotend2+"A";
			result+="\nl|"+temp2+temp;
		}
		if(t[i].split('/')[1]=="6"||t[i].split('/')[1]=="35"){
			var temp="|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
			var temp2=0;if(t[i].split('/')[1]=="35")temp2=3;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[1]=="7"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
				}
				if(t[j].split('/')[1]=="8"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="13"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2+=1;
					break;
				}
				if(t[j].split('/')[1]=="36"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2+=2;
					break;
				}
			}
			if(!t[j])throw i18n.slidedoesnotend2+"B";
			result+="\nl|"+temp2+temp;
		}
		if(t[i].split('/')[1]=="21"||t[i].split('/')[1]=="31"){
			var temp="|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
			var temp2=0;if(t[i].split('/')[1]=="31")temp2=3;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[2]!=t[i].split('/')[2])continue;
				if(t[j].split('/')[1]=="25"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="26"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2+=1;
					break;
				}
				if(t[j].split('/')[1]=="32"){
					temp+="|"+((parseFloat(t[j].split('/')[0])-offset)*24)+":"+(parseFloat(t[j].split('/')[2])-1);
					t[j]=" ";
					temp2+=2;
					break;
				}
			}
			if(!t[j])throw i18n.longnotedoesnotend2;
			result+="\nl|"+temp2+temp;
		}
		if(t[i].split('/')[1]=="10"){
			result+="\ns|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="11"){
			result+="\nk|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="41"){
			continue;
		}
		if(t[i].split('/')[1]=="42"){
			continue;
		}
		if(t[i].split('/')[1]=="51"){
			result+="\nd|-1|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="52"){
			result+="\nd|-2|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="53"){
			result+="\nd|-3|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="54"){
			result+="\nd|-4|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="55"){
			result+="\nd|-5|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="56"){
			result+="\nd|-6|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="57"){
			result+="\nd|-7|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="61"){
			result+="\nd|1|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="62"){
			result+="\nd|2|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="63"){
			result+="\nd|3|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="64"){
			result+="\nd|4|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="65"){
			result+="\nd|5|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="66"){
			result+="\nd|6|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
		if(t[i].split('/')[1]=="67"){
			result+="\nd|7|"+((beat-offset)*24)+":"+(parseFloat(t[i].split('/')[2])-1);
		}
	}
	return result;
}