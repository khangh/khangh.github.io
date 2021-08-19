setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'ca468e25ab244249a78ffb9d397d2fa6',
                comparisonItems:[{name : 'cmp', value : 22572456},{name : 'plmt', value : 22674603}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_485120371841');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);$dvbs.pubSub.subscribe("AfterDecisionRender",'ca468e25ab244249a78ffb9d397d2fa6',"PerformanceCollector", 
                function() { 
                    try { 
                        if (typeof(_dv_win) == 'undefined' || typeof($dvbs) == 'undefined' || typeof($dvbs.tags) == 'undefined' || typeof($dvbs.tags['ca468e25ab244249a78ffb9d397d2fa6']) == 'undefined' || typeof($dvbs.tags['ca468e25ab244249a78ffb9d397d2fa6'].perf) == 'undefined') return; 
                        var perf = {}; 
                        for (var i = 0; i < $dvbs.tags['ca468e25ab244249a78ffb9d397d2fa6'].perf.count; i++) { 
                            perf['dvp_r' + i] = $dvbs.tags['ca468e25ab244249a78ffb9d397d2fa6'].perf['r' + i] 
                        } 

                        var guid = '485120371841'; 
                        if (window.performance && typeof(window.performance.getEntries) === 'function') 
                            var perfEntries = window.performance.getEntries(); 
                        var duration = -1; 
                        if (perfEntries) { 
                            for (var i = 0; i < perfEntries.length; i++) { 
                                var entry = perfEntries[i]; 
                                var regexStr = 'verify\.js.*' + guid; 
                                if ((new RegExp(regexStr, 'i')).test(entry.name)) 
                                    duration = Math.floor(entry.duration); 
                            } 
                        } 
                        perf.dvp_fetchd = duration; 
                        $dvbs.registerEventCall('ca468e25ab244249a78ffb9d397d2fa6', perf, 0) 
                    } catch (e) {} 
                });var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};if (a['pltfrm'])dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("ca468e25ab244249a78ffb9d397d2fa6",false);$dvbs.pubSub.subscribe('BeforeDecisionRender', 'ca468e25ab244249a78ffb9d397d2fa6', 'wpdc', function() {try { var result = 0; var cur = window; var tryNum = 0; try {    while (!result && tryNum < 10) {        if (cur.maple != undefined) {            result = 1;            break;        }        if (cur == cur.parent)            break;        tryNum++;        cur = cur.parent;    } } catch (er) {}	if (result) {		$dvbs.registerEventCall('ca468e25ab244249a78ffb9d397d2fa6', { dvp_maple: result});	}} catch (e) {}});


try{__tagObject_callback_485120371841({ImpressionID:"ca468e25ab244249a78ffb9d397d2fa6", ServerPublicDns:"tps723.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "ca468e25ab244249a78ffb9d397d2fa6");}catch(e){}
try{__verify_callback_485120371841({
ResultID:2,
Passback:"",
AdWidth:320,
AdHeight:50});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "ca468e25ab244249a78ffb9d397d2fa6");}catch(e){}
