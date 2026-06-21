chartin.bms=function(chart){
    let t = chart.split("\n");
    let wav={};
    let bpm=0;
    let bpms={};
    let stop={};
	let result1 = [];
	let result = [];
    let longnotes = {};
    t.forEach(function(i){
        try{
            i = i.trim();
            if(i.startsWith("#")){
                if(i.startsWith("#WAV")){
                    wav[i.slice(4,6)]=i.slice(6).trim();
                    return;
                }
                if(i.startsWith("#BPM")){
                    if(i.slice(4,5)==" "){
                        bpm=parseFloat(i.slice(4).trim());
                    }else{
                        bpms[i.slice(4,6)]=parseFloat(i.slice(6).trim());
                    }
                    return;
                }
                if(i.startsWith("#STOP")){
                    stop[i.slice(5,7)]=parseFloat(i.slice(7).trim());
                    return;
                }
                let measure = parseInt(i.slice(1,4));
                if(measure != measure){
                    return;
                }
                let lanestring = i.slice(4,6);
                let notestring = i.slice(7).trim();
                let baselane = 0;
                if(lanestring.slice(1)=="6")baselane = 1;
                if(lanestring.slice(1)=="1")baselane = 2;
                if(lanestring.slice(1)=="2")baselane = 3;
                if(lanestring.slice(1)=="3")baselane = 4;
                if(lanestring.slice(1)=="4")baselane = 5;
                if(lanestring.slice(1)=="5")baselane = 6;
                if(lanestring.slice(1)=="8")baselane = 7;
                if(lanestring.slice(1)=="9")baselane = 8;
                if(lanestring == "04")return;
                if(lanestring == "06")return;
                if(lanestring == "07")return;
                for (let j = 0; j < notestring.length; j+=2){
                    let note = notestring.slice(j,j+2);
                    let type = "normal";
                    if(note != "00"){
                        if(lanestring == "01"){
                            result1.push({
                                "beat": (measure+j/notestring.length)*4,
                                "wav": wav[note],
                                "type": "special"
                            })
                            continue;
                        }
                        if(lanestring == "03"){
                            result1.push({
                                "beat": (measure+j/notestring.length)*4,
                                "wav": "bpmchange",
                                "type": "special",
                                "bpm": parseInt(note,16)
                            })
                            continue;
                        }
                        if(lanestring == "08"){
                            result1.push({
                                "beat": (measure+j/notestring.length)*4,
                                "wav": "bpmchange",
                                "type": "special",
                                "bpm": bpms[note]
                            })
                            continue;
                        }
                        if(lanestring == "09"){
                            result1.push({
                                "beat": (measure+j/notestring.length)*4,
                                "wav": "stop",
                                "type": "special",
                                "stop": stop[note]
                            })
                            continue;
                        }
                        if(lanestring.slice(0,1)=="3"){
                            type = "hidden";
                        }
                        if(lanestring.slice(0,1)=="5"){
                            type = "long";
                        }
                        result1.push({
                            "beat": (measure+j/notestring.length)*4,
                            "wav": wav[note],
                            "type": type,
                            "lane": baselane
                        })
                    }
                }
            }
        }catch(e){
            console.log(e);
        }
    });
    result1.sort(function(a,b){
        if(a.beat < b.beat){
            return -1;
        }
        if(a.beat > b.beat){
            return 1;
        }
        if(a.type != "special" && b.type == "special"){
            return 1;
        }
        if(a.type == "special" && b.type != "special"){
            return -1;
        }
        let aisslideend = 0;
        let bisslideend = 0;
        if(a.wav.indexOf("slide") != -1 && a.wav.indexOf("end") != -1){
            aisslideend = 1;
        }
        if(b.wav.indexOf("slide") != -1 && b.wav.indexOf("end") != -1){
            bisslideend = 1;
        }
        if(aisslideend && !bisslideend){
            return -1;
        }
        if(!aisslideend && bisslideend){
            return 1;
        }
        if(a.wav < b.wav){
            return -1;
        }
        if(a.wav > b.wav){
            return 1;
        }
        if(a.wav == "directional_fl_r.wav"){
            if(a.lane < b.lane){
                return -1;
            }
            if(a.lane > b.lane){
                return 1;
            }
        }
        if(a.wav == "directional_fl_l.wav"){
            if(a.lane > b.lane){
                return -1;
            }
            if(a.lane < b.lane){
                return 1;
            }
        }
        return 0;
    });
    console.log(result1);
    result.push("46");
    result.push(bpm);
    result.push("0/0/0");
    for(let j=0;j<result1.length;j++){
        let i = result1[j];
        if(i.type == "special"){
            if(i.wav == "bpmchange"){
                result.push(i.beat+"/20/"+i.bpm);
                continue;
            }
            if(i.wav == "cmd_fever_ready.wav"){
                result.push(i.beat+"/45/0");
                continue;
            }
            if(i.wav == "cmd_fever_start.wav"){
                result.push(i.beat+"/46/0");
                continue;
            }
            if(i.wav == "cmd_fever_end.wav"){
                result.push(i.beat+"/47/0");
                continue;
            }
            if(i.wav == "cmd_fever_checkpoint.wav"){
                result.push(i.beat+"/48/0");
                continue;
            }
            continue;
        }
        if(i.type == "long"){
            if(longnotes[i.lane]){
                longnotes[i.lane] = false;
                if(i.wav.indexOf("skill") != -1){
                    result.push(i.beat+"/32/"+i.lane);
                    continue;
                }
                if(i.wav.indexOf("flick") != -1){
                    result.push(i.beat+"/26/"+i.lane);
                    continue;
                }
                result.push(i.beat+"/25/"+i.lane);
                continue;
            }else{
                longnotes[i.lane] = true;
                if(i.wav.indexOf("skill") != -1){
                    result.push(i.beat+"/31/"+i.lane);
                    continue;
                }
                result.push(i.beat+"/21/"+i.lane);
                continue;
            }
            continue;
        }
        if(i.type == "hidden"){
            if(i.wav=="slide_a.wav"){
                result.push(i.beat+"/41/"+i.lane);
                continue;
            }
            if(i.wav=="slide_b.wav"){
                result.push(i.beat+"/42/"+i.lane);
                continue;
            }
            if(i.wav=="slide_a_end.wav"){
                result.push(i.beat+"/17/"+i.lane);
                continue;
            }
            if(i.wav=="slide_b_end.wav"){
                result.push(i.beat+"/18/"+i.lane);
                continue;
            }
            if(i.wav.startsWith("slide_a_LS")){
                result.push(i.beat+"/41/"+(i.lane-parseInt(i.wav.slice(10,12))/100));
                continue;
            }
            if(i.wav.startsWith("slide_b_LS")){
                result.push(i.beat+"/42/"+(i.lane-parseInt(i.wav.slice(10,12))/100));
                continue;
            }
            if(i.wav.startsWith("slide_a_RS")){
                result.push(i.beat+"/41/"+(i.lane+parseInt(i.wav.slice(10,12))/100));
                continue;
            }
            if(i.wav.startsWith("slide_b_RS")){
                result.push(i.beat+"/42/"+(i.lane+parseInt(i.wav.slice(10,12))/100));
                continue;
            }
            continue;
        }
        if(i.wav == "directional_fl_l.wav"){
            let k=j+1;
            for(;k<result1.length;k++){
                if(result1[k].wav == "directional_fl_l.wav" && i.lane - result1[k].lane == k-j){
                    continue;
                }else{
                    break;
                }
            }
            k--;
            result.push(i.beat+"/"+(51+k-j)+"/"+i.lane);
            j=k;
            continue;
        }
        if(i.wav == "directional_fl_r.wav"){
            let k=j+1;
            for(;k<result1.length;k++){
                if(result1[k].wav == "directional_fl_r.wav" && result1[k].lane - i.lane == k-j){
                    continue;
                }else{
                    break;
                }
            }
            k--;
            result.push(i.beat+"/"+(61+k-j)+"/"+i.lane);
            j=k;
            continue;
        }
        if(i.wav == "bd.wav"){
            result.push(i.beat+"/1/"+i.lane);
            continue;
        }
        if(i.wav == "flick.wav"){
            result.push(i.beat+"/2/"+i.lane);
            continue;
        }
        if(i.wav == "skill.wav"){
            result.push(i.beat+"/11/"+i.lane);
            continue;
        }
        if(i.wav == "slide_a.wav"){
            result.push(i.beat+"/4/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_a.wav"){
            result.push(i.beat+"/5/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_a_flick.wav"){
            result.push(i.beat+"/12/"+i.lane);
            continue;
        }
        if(i.wav == "slide_b.wav"){
            result.push(i.beat+"/7/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_b.wav"){
            result.push(i.beat+"/8/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_b_flick.wav"){
            result.push(i.beat+"/13/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note.wav"){
            result.push(i.beat+"/10/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note_flick.wav"){
            result.push(i.beat+"/2/"+i.lane);
            continue;
        }
        if(i.wav == "fever_slide_a.wav"){
            result.push(i.beat+"/4/"+i.lane);
            continue;
        }
        if(i.wav == "fever_slide_end_a.wav"){
            result.push(i.beat+"/5/"+i.lane);
            continue;
        }
        if(i.wav == "fever_slide_end_a_flick.wav"){
            result.push(i.beat+"/12/"+i.lane);
            continue;
        }
        if(i.wav == "fever_slide_b.wav"){
            result.push(i.beat+"/7/"+i.lane);
            continue;
        }
        if(i.wav == "fever_slide_end_b.wav"){
            result.push(i.beat+"/8/"+i.lane);
            continue;
        }
        if(i.wav == "fever_slide_end_b_flick.wav"){
            result.push(i.beat+"/13/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note_slide_a.wav"){
            result.push(i.beat+"/4/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note_slide_end_a.wav"){
            result.push(i.beat+"/5/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note_slide_end_a_flick.wav"){
            result.push(i.beat+"/12/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note_slide_b.wav"){
            result.push(i.beat+"/7/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note_slide_end_b.wav"){
            result.push(i.beat+"/8/"+i.lane);
            continue;
        }
        if(i.wav == "fever_note_slide_end_b_flick.wav"){
            result.push(i.beat+"/13/"+i.lane);
            continue;
        }
        if(i.wav == "slide_a_skill.wav"){
            result.push(i.beat+"/33/"+i.lane);
            continue;
        }
        if(i.wav == "slide_b_skill.wav"){
            result.push(i.beat+"/34/"+i.lane);
            continue;
        }
        if(i.wav == "slide_skill_a.wav"){
            result.push(i.beat+"/33/"+i.lane);
            continue;
        }
        if(i.wav == "slide_skill_b.wav"){
            result.push(i.beat+"/34/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_a_skill.wav"){
            result.push(i.beat+"/35/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_b_skill.wav"){
            result.push(i.beat+"/36/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_skill_a.wav"){
            result.push(i.beat+"/35/"+i.lane);
            continue;
        }
        if(i.wav == "slide_end_skill_b.wav"){
            result.push(i.beat+"/36/"+i.lane);
            continue;
        }
        if(i.wav == "slide_skill_end_a.wav"){
            result.push(i.beat+"/35/"+i.lane);
            continue;
        }
        if(i.wav == "slide_skill_end_b.wav"){
            result.push(i.beat+"/36/"+i.lane);
            continue;
        }
        if(i.wav == "skill2.wav"){
            result.push(i.beat+"/40/"+i.lane);
            continue;
        }
    }
    return result.join("\n");
}