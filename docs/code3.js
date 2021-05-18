gdjs.VictoryCode = {};
gdjs.VictoryCode.GDVictoryViewObjects1= [];
gdjs.VictoryCode.GDVictoryViewObjects2= [];
gdjs.VictoryCode.GDQuitButtonObjects1= [];
gdjs.VictoryCode.GDQuitButtonObjects2= [];
gdjs.VictoryCode.GDTimeToCompleteObjects1= [];
gdjs.VictoryCode.GDTimeToCompleteObjects2= [];
gdjs.VictoryCode.GDTimeObjects1= [];
gdjs.VictoryCode.GDTimeObjects2= [];
gdjs.VictoryCode.GDMinutesObjects1= [];
gdjs.VictoryCode.GDMinutesObjects2= [];
gdjs.VictoryCode.GDPlayerSpriteObjects1= [];
gdjs.VictoryCode.GDPlayerSpriteObjects2= [];

gdjs.VictoryCode.conditionTrue_0 = {val:false};
gdjs.VictoryCode.condition0IsTrue_0 = {val:false};
gdjs.VictoryCode.condition1IsTrue_0 = {val:false};
gdjs.VictoryCode.condition2IsTrue_0 = {val:false};
gdjs.VictoryCode.condition3IsTrue_0 = {val:false};
gdjs.VictoryCode.conditionTrue_1 = {val:false};
gdjs.VictoryCode.condition0IsTrue_1 = {val:false};
gdjs.VictoryCode.condition1IsTrue_1 = {val:false};
gdjs.VictoryCode.condition2IsTrue_1 = {val:false};
gdjs.VictoryCode.condition3IsTrue_1 = {val:false};


gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.VictoryCode.GDQuitButtonObjects1});gdjs.VictoryCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.VictoryCode.GDQuitButtonObjects1);

gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
gdjs.VictoryCode.condition2IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDQuitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.VictoryCode.condition1IsTrue_0.val ) {
{
{gdjs.VictoryCode.conditionTrue_1 = gdjs.VictoryCode.condition2IsTrue_0;
gdjs.VictoryCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9117524);
}
}}
}
if (gdjs.VictoryCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.VictoryCode.condition0IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VictoryCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.VictoryCode.GDTimeObjects1);
{for(var i = 0, len = gdjs.VictoryCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.VictoryCode.GDTimeObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) / 60000) * 100) / 100));
}
}}

}


};

gdjs.VictoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VictoryCode.GDVictoryViewObjects1.length = 0;
gdjs.VictoryCode.GDVictoryViewObjects2.length = 0;
gdjs.VictoryCode.GDQuitButtonObjects1.length = 0;
gdjs.VictoryCode.GDQuitButtonObjects2.length = 0;
gdjs.VictoryCode.GDTimeToCompleteObjects1.length = 0;
gdjs.VictoryCode.GDTimeToCompleteObjects2.length = 0;
gdjs.VictoryCode.GDTimeObjects1.length = 0;
gdjs.VictoryCode.GDTimeObjects2.length = 0;
gdjs.VictoryCode.GDMinutesObjects1.length = 0;
gdjs.VictoryCode.GDMinutesObjects2.length = 0;
gdjs.VictoryCode.GDPlayerSpriteObjects1.length = 0;
gdjs.VictoryCode.GDPlayerSpriteObjects2.length = 0;

gdjs.VictoryCode.eventsList0(runtimeScene);
return;

}

gdjs['VictoryCode'] = gdjs.VictoryCode;
