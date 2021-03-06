function LAppLive2DManager()
{
    // console.log("--> LAppLive2DManager()");
    
    
    this.models = [];  
    
    
    this.count = -1;
    this.reloadFlg = false; 
    
    Live2D.init();
    Live2DFramework.setPlatformManager(new PlatformManager);
    
}

LAppLive2DManager.prototype.createModel = function()
{
    
    
    var model = new LAppModel();
    this.models.push(model);
    
    return model;
}


LAppLive2DManager.prototype.changeModel = function(gl)
{
    // console.log("--> LAppLive2DManager.update(gl)");
    
    if (this.reloadFlg)
    {
        
        this.reloadFlg = false;
        var no = parseInt(this.count % 4);

        var thisRef = this;
		this.releaseModel(1, gl);
        this.releaseModel(0, gl);
        this.createModel();
        this.models[0].load(gl, LAppDefine.MODEL_ACTIVE);
        
    }
};


LAppLive2DManager.prototype.getModel = function(no)
{
    // console.log("--> LAppLive2DManager.getModel(" + no + ")");
    
    if (no >= this.models.length) return null;
    
    return this.models[no];
};



LAppLive2DManager.prototype.releaseModel = function(no, gl)
{
    // console.log("--> LAppLive2DManager.releaseModel(" + no + ")");
    
    if (this.models.length <= no) return;

    this.models[no].release(gl);
    
    delete this.models[no];
    this.models.splice(no, 1);
};



LAppLive2DManager.prototype.numModels = function()
{
    return this.models.length;
};



LAppLive2DManager.prototype.setDrag = function(x, y)
{
    for (var i = 0; i < this.models.length; i++)
    {
        this.models[i].setDrag(x, y);
    }
}



LAppLive2DManager.prototype.maxScaleEvent = function()
{
    if (LAppDefine.DEBUG_LOG)
        console.log("Max scale event.");
    for (var i = 0; i < this.models.length; i++)
    {
        this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_PINCH_IN,
                                         LAppDefine.PRIORITY_NORMAL);
    }
}
		


LAppLive2DManager.prototype.minScaleEvent = function()
{
    if (LAppDefine.DEBUG_LOG)
        console.log("Min scale event.");
    for (var i = 0; i < this.models.length; i++)
    {
        this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_PINCH_OUT,
                                         LAppDefine.PRIORITY_NORMAL);
    }
}



LAppLive2DManager.prototype.tapEvent = function(x, y)
{    
    if (LAppDefine.DEBUG_LOG)
        console.log("tapEvent view x:" + x + " y:" + y);
    for (var i = 0; i < this.models.length; i++)
    {
    	if(this.models[i].modelSetting.json.motions.tap_body)
    	this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_TAP_BODY,
                LAppDefine.PRIORITY_FORCE);
    	
//        if (this.models[i].hitTest(LAppDefine.HIT_AREA_HEAD, x, y))
//        {
//            
//            if (LAppDefine.DEBUG_LOG)
//                console.log("Tap face.");
//
//            this.models[i].setRandomExpression();
//        }
//        else if (this.models[i].hitTest(LAppDefine.HIT_AREA_BODY, x, y))
//        {
//            
//            if (LAppDefine.DEBUG_LOG)
//                console.log("Tap body." + " models[" + i + "]");
//
//            this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_TAP_BODY,
//                                             LAppDefine.PRIORITY_NORMAL);
//        }
    }

    return true;
};

LAppLive2DManager.prototype.hitEvent = function(x, y)
{    
    for (var i = 0; i < this.models.length; i++)
    {
    	if(this.models[i].modelSetting.json.motions.hit)
    	this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_HIT,
                LAppDefine.PRIORITY_FORCE);
    }

    return true;
};

LAppLive2DManager.prototype.attackEvent = function(x, y)
{    
    for (var i = 0; i < this.models.length; i++)
    {
    	if(this.models[i].modelSetting.json.motions.attack)
    	this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_ATTACK,
                LAppDefine.PRIORITY_FORCE);
    }

    return true;
};

LAppLive2DManager.prototype.idleLsEvent = function(x, y)
{    
    for (var i = 0; i < this.models.length; i++)
    {
    	if(this.models[i].modelSetting.json.motions.idle_ls){
    		LAppDefine.MOTION_GROUP_ACTIVE = LAppDefine.MOTION_GROUP_IDLE_LS;
    		this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_IDLE_LS,
                    LAppDefine.PRIORITY_FORCE);
    	}   	
    }

    return true;
};

LAppLive2DManager.prototype.idleEvent = function(x, y)
{    
    for (var i = 0; i < this.models.length; i++)
    {
    	if(this.models[i].modelSetting.json.motions.idle){
    		LAppDefine.MOTION_GROUP_ACTIVE = LAppDefine.MOTION_GROUP_IDLE;
    		this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_IDLE,
                    LAppDefine.PRIORITY_FORCE);
    	}   	
    }

    return true;
};

LAppLive2DManager.prototype.bannerEvent = function(x, y)
{    
    for (var i = 0; i < this.models.length; i++)
    {
    	if(this.models[i].modelSetting.json.motions.banner){
    		this.models[i].startRandomMotion(LAppDefine.MOTION_GROUP_BANNER,
                    LAppDefine.PRIORITY_FORCE);
    	}   	
    }

    return true;
};
