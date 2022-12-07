chartout.bangcraft=function(chart){
	var t=chart.split('\n');
	var result=`<Save name="BGCdate">
  <info>
    <music>1</music>
    <bpm>${t[1]}</bpm>
    <delay>0</delay>
    <bpmP1>
    </bpmP1>
    <bpmD1>0</bpmD1>
    <bpmP2>
    </bpmP2>
    <bpmD2>0</bpmD2>
    <bpmP3>
    </bpmP3>
    <bpmD3>0</bpmD3>
  </info>
`;
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
		if(t[i].split('/')[1]=="20"){
			throw i18n.bcrnobpmchange;
		}
		if(t[i].split('/')[1]=="1"){
			result+=`  <noteN>
    <lineN>${(parseFloat(t[i].split('/')[2])-4)}</lineN>
    <posN>${parseFloat(t[i].split('/')[0])*2}</posN>
    <typeN>N</typeN>
  </noteN>
`;
		}
		if(t[i].split('/')[1]=="2"){
			result+=`  <noteF>
    <lineF>${(parseFloat(t[i].split('/')[2])-4)}</lineF>
    <posF>${parseFloat(t[i].split('/')[0])*2}</posF>
    <typeF>F</typeF>
  </noteF>
`;
		}
		if(t[i].split('/')[1]=="3"||t[i].split('/')[1]=="33"){
			var temp=`    <startlineL>${(parseFloat(t[i].split('/')[2])-4)}</startlineL>
    <startposL>${parseFloat(t[i].split('/')[0])*2}</startposL>
  </noteL>
`;
			result+=`  <noteL>
    <lineL>${(parseFloat(t[i].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[i].split('/')[0])*2}</posL>
    <typeL>LS</typeL>
`+temp;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[1]=="4"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LM</typeL>
`+temp;
					t[j]=" ";
				}
				if(t[j].split('/')[1]=="5"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LE</typeL>
`+temp;
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="12"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LF</typeL>
`+temp;
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="34"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LE</typeL>
`+temp;
					t[j]=" ";
					break;
				}
			}
			if(!t[j])throw i18n.slidedoesnotend2+"A";
		}
		if(t[i].split('/')[1]=="6"||t[i].split('/')[1]=="35"){
			var temp=`    <startlineL>${(parseFloat(t[i].split('/')[2])-4)}</startlineL>
    <startposL>${parseFloat(t[i].split('/')[0])*2}</startposL>
  </noteL>
`;
			result+=`  <noteL>
    <lineL>${(parseFloat(t[i].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[i].split('/')[0])*2}</posL>
    <typeL>LS</typeL>
`+temp;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[1]=="7"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LM</typeL>
`+temp;
					t[j]=" ";
				}
				if(t[j].split('/')[1]=="8"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LE</typeL>
`+temp;
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="13"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LF</typeL>
`+temp;
					t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="36"){
			result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LE</typeL>
`+temp;
					t[j]=" ";
					break;
				}
			}
			if(!t[j])throw i18n.slidedoesnotend2+"B";
		}
		if(t[i].split('/')[1]=="21"||t[i].split('/')[1]=="31"){
			var temp=`    <startlineL>${(parseFloat(t[i].split('/')[2])-4)}</startlineL>
    <startposL>${parseFloat(t[i].split('/')[0])*2}</startposL>
  </noteL>
`;
			result+=`  <noteL>
    <lineL>${(parseFloat(t[i].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[i].split('/')[0])*2}</posL>
    <typeL>LS</typeL>
`+temp;
			for(var j=i+1;t[j];j++){
				if(t[j].split('/')[2]!=t[i].split('/')[2])continue;
				if(t[j].split('/')[1]=="25"){
					result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LE</typeL>
`+temp;t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="26"){
					result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LF</typeL>
`+temp;t[j]=" ";
					break;
				}
				if(t[j].split('/')[1]=="32"){
					result+=`  <noteL>
    <lineL>${(parseFloat(t[j].split('/')[2])-4)}</lineL>
    <posL>${parseFloat(t[j].split('/')[0])*2}</posL>
    <typeL>LE</typeL>
`+temp;t[j]=" ";
					break;
				}
			}
			if(!t[j])throw i18n.longnotedoesnotend2;
		}
		if(t[i].split('/')[1]=="10"){
			result+=`  <noteN>
    <lineN>${(parseFloat(t[i].split('/')[2])-4)}</lineN>
    <posN>${parseFloat(t[i].split('/')[0])*2}</posN>
    <typeN>N</typeN>
  </noteN>
`;
		}
		if(t[i].split('/')[1]=="11"){
			result+=`  <noteN>
    <lineN>${(parseFloat(t[i].split('/')[2])-4)}</lineN>
    <posN>${parseFloat(t[i].split('/')[0])*2}</posN>
    <typeN>N</typeN>
  </noteN>
`;
		}
		if(t[i].split('/')[1]=="41"){
			continue;
		}
		if(t[i].split('/')[1]=="42"){
			continue;
		}
		if(t[i].split('/')[1]=="51"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="52"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="53"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="54"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="55"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="56"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="57"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="61"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="62"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="63"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="64"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="65"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="66"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="67"){
			throw i18n.bcrdflnosupport;
		}
		if(t[i].split('/')[1]=="71"){
			throw i18n.notripleslide;
		}
		if(t[i].split('/')[1]=="72"){
			throw i18n.notripleslide;
		}
		if(t[i].split('/')[1]=="73"){
			throw i18n.notripleslide;
		}
		if(t[i].split('/')[1]=="74"){
			throw i18n.notripleslide;
		}
		if(t[i].split('/')[1]=="75"){
			throw i18n.notripleslide;
		}
		if(t[i].split('/')[1]=="76"){
			throw i18n.notripleslide;
		}
		if(t[i].split('/')[1]=="77"){
			throw i18n.notripleslide;
		}
	}
	return result+"</Save>";
}