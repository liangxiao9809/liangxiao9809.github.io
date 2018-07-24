function addChild(o){
	var id = o.id;
	var name = o.name;
	var nature = o.nature;
	var style = o.style;
	var moc = o.moc;
	var moc_s = o.moc_s;
	var moc_o = o.moc_o;
	var moc_1 = o.moc_1;
	var moc_2 = o.moc_2;
	var moc_3 = o.moc_3;
	
//	var html = '<div class="tzylkd" style="float: left; text-align: center; background: rgba(240, 240, 240, 0.8); border-radius: 10px;; padding: 5px;">';
//	html += '<table style="width: 100%"><tbody>';
//	html += '<tr><td style="height: 100px"><div style="position: relative; display: inline-block;">';
//	html += '<div class="center"><div class="floatnone">';
//	html += '<a href="#" class="'+id+'">';
//	html += '<img src="icos/'+id+'.png" width="45" height="45"></a></div></div>';
//	
//	html += '<div style="position: absolute; bottom: 5px; right: 5px;"><p>';
//	html += '<a href="#" class="'+id+'">';
//	html += '<img src="icos/'+style+'.png" width="10" height="10"></a></p></div></div></td></tr>';
//	
//	html += '<tr><td style="height: 20px">';
//	html += '<a href="#" class="'+id+'">'+name+'</a>';
//	html += '</td></tr></tbody></table></div>';	
	
	
	var html = '<div class="col-2"><table style="width: 100%"><tbody>';
	html += '<tr><td style="height: 50px"><div style="position: relative; display: inline-block;">';
	html += '<div class="center"><div class="floatnone">';
	html += '<a href="#" class="'+id+'">';
	html += '<img src="childs/icos/'+id+'.png" width="45" height="45"></a></div></div>';
	
	html += '</td></tr>';
	
	html += '</tbody></table></div>';	
	
	$("#"+nature).append(html);
}

map.forEach(function(element, index, array){
	addChild(element);
	$("."+element.id).click(function(){
		LAppDefine.MODEL_ACTIVE = element.moc;
		changeModel();
		
		var chooseSkinView = "";
		if(element.moc_o){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_o">人型</button>';
		}
		if(element.moc){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc">一般</button>';
		}
		if(element.moc_s){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_s">S好感</button>';
		}
		if(element.moc_1){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_1">皮肤1</button>';
		}
		if(element.moc_2){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_2">皮肤2</button>';
		}
		if(element.moc_3){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_3">皮肤3</button>';
		}
		if(element.moc_4){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_4">皮肤4</button>';
		}
		if(element.moc_5){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_5">皮肤5</button>';
		}
		if(element.moc_w){
			chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary skin" moc="moc_w">温泉</button>';
		}
		chooseSkinView += '<div id="actionBtn"><br/><br/>'
		chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary" onclick="thisRef.live2DMgr.idleEvent(0, 0);">空闲1</button>';
		chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary" onclick="thisRef.live2DMgr.idleLsEvent(0, 0);">空闲2</button>';
		chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary" onclick="thisRef.live2DMgr.attackEvent(0, 0);">攻击</button>';
		chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary" onclick="thisRef.live2DMgr.hitEvent(0, 0);">被攻击</button>';
		chooseSkinView += '<br/><button class="btn btn-sm btn-outline-secondary" onclick="thisRef.live2DMgr.bannerEvent(0, 0);">banner</button>';
		chooseSkinView += '</div>';
		$("#skinChoose").html(chooseSkinView);
		$(".skin").click(function(){
			LAppDefine.MODEL_ACTIVE = element[$(this).attr("moc")];
			//L2DExpressionMotion.loadJson(LAppDefine.MODEL_ACTIVE);
			changeModel();
		});
	});
});