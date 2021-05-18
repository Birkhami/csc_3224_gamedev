gdjs.Game_32Over_32Code = {};
gdjs.Game_32Over_32Code.GDViewObjects1= [];
gdjs.Game_32Over_32Code.GDViewObjects2= [];
gdjs.Game_32Over_32Code.GDViewObjects3= [];
gdjs.Game_32Over_32Code.GDQuitButtonObjects1= [];
gdjs.Game_32Over_32Code.GDQuitButtonObjects2= [];
gdjs.Game_32Over_32Code.GDQuitButtonObjects3= [];
gdjs.Game_32Over_32Code.GDRestartButtonObjects1= [];
gdjs.Game_32Over_32Code.GDRestartButtonObjects2= [];
gdjs.Game_32Over_32Code.GDRestartButtonObjects3= [];

gdjs.Game_32Over_32Code.conditionTrue_0 = {val:false};
gdjs.Game_32Over_32Code.condition0IsTrue_0 = {val:false};
gdjs.Game_32Over_32Code.condition1IsTrue_0 = {val:false};


gdjs.Game_32Over_32Code.mapOfGDgdjs_46Game_9532Over_9532Code_46GDQuitButtonObjects2Objects = Hashtable.newFrom({"QuitButton": gdjs.Game_32Over_32Code.GDQuitButtonObjects2});gdjs.Game_32Over_32Code.mapOfGDgdjs_46Game_9532Over_9532Code_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.Game_32Over_32Code.GDRestartButtonObjects1});gdjs.Game_32Over_32Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Game_32Over_32Code.GDQuitButtonObjects2);

gdjs.Game_32Over_32Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Over_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32Over_32Code.mapOfGDgdjs_46Game_9532Over_9532Code_46GDQuitButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Game_32Over_32Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.Game_32Over_32Code.GDRestartButtonObjects1);

gdjs.Game_32Over_32Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Over_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32Over_32Code.mapOfGDgdjs_46Game_9532Over_9532Code_46GDRestartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32Over_32Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Game_32Over_32Code.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32Over_32Code.condition0IsTrue_0.val = false;
{
gdjs.Game_32Over_32Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32Over_32Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32Over_32Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32Over_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Over_32Code.GDViewObjects1.length = 0;
gdjs.Game_32Over_32Code.GDViewObjects2.length = 0;
gdjs.Game_32Over_32Code.GDViewObjects3.length = 0;
gdjs.Game_32Over_32Code.GDQuitButtonObjects1.length = 0;
gdjs.Game_32Over_32Code.GDQuitButtonObjects2.length = 0;
gdjs.Game_32Over_32Code.GDQuitButtonObjects3.length = 0;
gdjs.Game_32Over_32Code.GDRestartButtonObjects1.length = 0;
gdjs.Game_32Over_32Code.GDRestartButtonObjects2.length = 0;
gdjs.Game_32Over_32Code.GDRestartButtonObjects3.length = 0;

gdjs.Game_32Over_32Code.eventsList1(runtimeScene);
return;

}

gdjs['Game_32Over_32Code'] = gdjs.Game_32Over_32Code;
