gdjs.TitleCode = {};
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDButtonObjects1= [];
gdjs.TitleCode.GDButtonObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};
gdjs.TitleCode.condition3IsTrue_0 = {val:false};
gdjs.TitleCode.condition4IsTrue_0 = {val:false};
gdjs.TitleCode.condition5IsTrue_0 = {val:false};
gdjs.TitleCode.conditionTrue_1 = {val:false};
gdjs.TitleCode.condition0IsTrue_1 = {val:false};
gdjs.TitleCode.condition1IsTrue_1 = {val:false};
gdjs.TitleCode.condition2IsTrue_1 = {val:false};
gdjs.TitleCode.condition3IsTrue_1 = {val:false};
gdjs.TitleCode.condition4IsTrue_1 = {val:false};
gdjs.TitleCode.condition5IsTrue_1 = {val:false};


gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.TitleCode.GDButtonObjects1});gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.TitleCode.GDButtonObjects1});gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.TitleCode.GDButtonObjects1});gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.TitleCode.GDButtonObjects1});gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TitleCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.TitleCode.GDTitleObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
gdjs.TitleCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDTitleObjects1[i].getAnimation() == 0 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDTitleObjects1[k] = gdjs.TitleCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDTitleObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition2IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition3IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8976540);
}
}}
}
}
if (gdjs.TitleCode.condition3IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].setAnimation(gdjs.TitleCode.GDTitleObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ClickBuffer");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Page Turn 1.mp3", false, 40, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TitleCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.TitleCode.GDTitleObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
gdjs.TitleCode.condition3IsTrue_0.val = false;
gdjs.TitleCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDTitleObjects1[i].getAnimation() == 1 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDTitleObjects1[k] = gdjs.TitleCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDTitleObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition2IsTrue_0.val ) {
{
gdjs.TitleCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ClickBuffer");
}if ( gdjs.TitleCode.condition3IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition4IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8978044);
}
}}
}
}
}
if (gdjs.TitleCode.condition4IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].setAnimation(gdjs.TitleCode.GDTitleObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ClickBuffer");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Page Turn 2.mp3", false, 40, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TitleCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.TitleCode.GDTitleObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
gdjs.TitleCode.condition3IsTrue_0.val = false;
gdjs.TitleCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDTitleObjects1[i].getAnimation() == 2 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDTitleObjects1[k] = gdjs.TitleCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDTitleObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition2IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition3IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8979708);
}
}if ( gdjs.TitleCode.condition3IsTrue_0.val ) {
{
gdjs.TitleCode.condition4IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ClickBuffer");
}}
}
}
}
if (gdjs.TitleCode.condition4IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].setAnimation(gdjs.TitleCode.GDTitleObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ClickBuffer");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Page Turn 3.mp3", false, 40, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.TitleCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.TitleCode.GDTitleObjects1);

gdjs.TitleCode.condition0IsTrue_0.val = false;
gdjs.TitleCode.condition1IsTrue_0.val = false;
gdjs.TitleCode.condition2IsTrue_0.val = false;
gdjs.TitleCode.condition3IsTrue_0.val = false;
gdjs.TitleCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleCode.GDTitleObjects1.length;i<l;++i) {
    if ( gdjs.TitleCode.GDTitleObjects1[i].getAnimation() == 3 ) {
        gdjs.TitleCode.condition0IsTrue_0.val = true;
        gdjs.TitleCode.GDTitleObjects1[k] = gdjs.TitleCode.GDTitleObjects1[i];
        ++k;
    }
}
gdjs.TitleCode.GDTitleObjects1.length = k;}if ( gdjs.TitleCode.condition0IsTrue_0.val ) {
{
gdjs.TitleCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TitleCode.condition1IsTrue_0.val ) {
{
gdjs.TitleCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition2IsTrue_0.val ) {
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition3IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8981948);
}
}if ( gdjs.TitleCode.condition3IsTrue_0.val ) {
{
gdjs.TitleCode.condition4IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ClickBuffer");
}}
}
}
}
if (gdjs.TitleCode.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDButtonObjects1.length = 0;
gdjs.TitleCode.GDButtonObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
