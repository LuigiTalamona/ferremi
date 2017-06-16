function popup(pFile, pName, pWidth, pHeight, pLocation, pToolbars, pScrollBar, pMenuBar, pStatus){
		theWindow = window.open(pFile,pName,"fullscreen=1,scrollbars=yes");
		theWindow.resizeTo(parseInt(pWidth),parseInt(pHeight));
		theWindow.moveTo(20,20);
}
function fixedpopup(pFile, pName, pWidth, pHeight, pLocation, pToolbars, pScrollBar, pMenuBar, pStatus){
		theWindow = window.open(pFile,pName,"fullscreen=1,scrollbars=yes,toolbar=no,menubar=yes");
		theWindow.resizeTo(parseInt(600),parseInt(600));
		theWindow.moveTo(20,20);
}

function closepopup(){
    if(false == theWindow.closed){
        theWindow.close();
    }
}
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=600,height=400');");
}
