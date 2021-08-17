(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,120);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,126);


(lib.pin = function() {
	this.initialize(img.pin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,22);


(lib.polaroid_1 = function() {
	this.initialize(img.polaroid_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,398);


(lib.polaroid_2 = function() {
	this.initialize(img.polaroid_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,260);


(lib.polaroid_3 = function() {
	this.initialize(img.polaroid_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,242);


(lib.polaroid_5 = function() {
	this.initialize(img.polaroid_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,139);


(lib.yarn_1 = function() {
	this.initialize(img.yarn_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,22);


(lib.yarn_2 = function() {
	this.initialize(img.yarn_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,4);


(lib.yarn_3 = function() {
	this.initialize(img.yarn_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,10);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.strinng = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.yarn_3();
	this.instance.setTransform(2551,461);

	this.instance_1 = new lib.yarn_1();
	this.instance_1.setTransform(120,23);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.yarn_2, null, new cjs.Matrix2D(0.982,-0.187,0.187,0.982,-245.8,44)).s().p("Egm+AHDIAAAAIAAAAMBNpgOtIAeAMIgQAbMhOBAOug");
	this.shape.setTransform(2302.85,509.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.yarn_2, null, new cjs.Matrix2D(0.879,0.477,-0.477,0.879,-218.9,-121.5)).s().p("EgirgSgIAAgoMBFXAlpIAAAAIAAAAIAAAAIgKAog");
	this.shape_1.setTransform(1831.375,435.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.yarn_2, null, new cjs.Matrix2D(1,-0.007,0.007,1,-250.4,-0.4)).s().p("EgnXAAjIAAgJIAMgcIAAgCIgCABIAAgBIABAAMBOkgAfIAAACIAAAnMhOvAAeg");
	this.shape_2.setTransform(1357.35,316.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.yarn_2, null, new cjs.Matrix2D(0.889,0.459,-0.459,0.889,-222,-117)).s().p("Egi7gRsIAAgBIAFgKIAHgdIgCAAIAAgCMBFsAkFIgBAAIAAABIACgBIAAACIgMAcIAAAJg");
	this.shape_3.setTransform(882.95,202.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.yarn_2, null, new cjs.Matrix2D(0.996,0.088,-0.088,0.996,-250.1,-24.3)).s().p("EgnHgDKIADgnMBOKAG8IACAAIgGAdIgFAKg");
	this.shape_4.setTransform(410.075,65.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.strinng, new cjs.Rectangle(120,23,2468,535.4), null);


(lib.porlaroid_3_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.polaroid_3();
	this.instance.setTransform(4,2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.porlaroid_3_mc, new cjs.Rectangle(-4,0,181,135), null);


(lib.polaroid_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmA8IgLgaIg2AAIgLAaIgcAAIA1h3IAaAAIA2B3gAATANIgTgtIgSAtIAlAAg");
	this.shape.setTransform(131.125,71.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXA8IgXghIAAAAIgYAAIAAAhIgcAAIAAh3IA0AAQAXAAAOAMQAOAMAAATQAAAbgZAKIAbAngAgYAEIAWAAQAZABAAgVQAAgUgZAAIgWAAg");
	this.shape_1.setTransform(119.125,71.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7A8IAAh3IA2AAQAcAAATAQQASARAAAaQAAAbgSAQQgTAQgcABgAggAlIAaAAQAQAAALgKQALgKAAgRQAAgQgLgKQgLgKgQAAIgaAAg");
	this.shape_2.setTransform(106.15,71.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_3.setTransform(96.275,71.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_4.setTransform(91.025,71.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcA8IgcgqIgcAqIgfAAIAsg8Igqg7IAfAAIAbAnIAagnIAeAAIgpA6IAsA9g");
	this.shape_5.setTransform(82.525,71.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNA8IAAhgIgmAAIAAgXIBnAAIAAAXIgmAAIAABgg");
	this.shape_6.setTransform(67,71.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmAuQgPgOAAgaIAAhCIAbAAIAABBQABAgAZAAQAbAAgBggIAAhBIAcAAIAABCQAAAagPAOQgOAOgZABQgYgBgOgOg");
	this.shape_7.setTransform(55.4,72.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguAsQgSgSAAgaQAAgaASgRQATgSAbAAQAcAAATASQASARAAAaQAAAagSASQgTASgcAAQgbAAgTgSgAgagaQgKAKAAAQQAAARAKAKQALALAPAAQAQAAALgLQAKgKAAgRQAAgQgKgKQgLgLgQAAQgPAAgLALg");
	this.shape_8.setTransform(41.875,71.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2A8IAAh3IA5AAQAWAAAMAJQAMAIAAAPQAAARgQAJQAWAGAAAWQAAAQgNAIQgMAJgXAAgAgaAmIAfAAQAWAAAAgOQAAgOgWAAIgfAAgAgagJIAaAAQAVAAAAgPQAAgOgVAAIgaAAg");
	this.shape_9.setTransform(28.875,71.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmA8IgLgaIg2AAIgLAaIgcAAIA1h3IAaAAIA2B3gAATANIgTgtIgSAtIAlAAg");
	this.shape_10.setTransform(15.825,71.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA8IgXgiIAAAAIgYAAIAAAiIgcAAIAAh2IA0AAQAXgBAOAMQAOAMAAATQAAAbgZAKIAbAngAgYAFIAWAAQAZAAAAgVQAAgUgZAAIgWAAg");
	this.shape_11.setTransform(117.875,53.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguAsQgSgSAAgaQAAgZASgSQATgSAbAAQAcAAATASQASASAAAZQAAAagSASQgTARgcAAQgbAAgTgRgAgagbQgKALAAAQQAAARAKAKQALALAPAAQAQAAALgLQAKgKAAgRQAAgQgKgLQgLgKgQAAQgPAAgLAKg");
	this.shape_12.setTransform(104.375,53.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMA8IAAhgIgnAAIAAgWIBnAAIAAAWIgmAAIAABgg");
	this.shape_13.setTransform(92.25,53.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglAsQgTgRAAgbQAAgaATgSQASgRAbAAQAgAAARAWIgSAQQgMgOgSAAQgPAAgLAKQgLALAAAQQAAARALAKQALALAPAAQASAAAMgOIASARQgRAUggAAQgbAAgSgRg");
	this.shape_14.setTransform(81.175,53.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguAsQgSgSAAgaQAAgZASgSQATgSAbAAQAcAAATASQASASAAAZQAAAagSASQgTARgcAAQgbAAgTgRgAgagbQgKALAAAQQAAARAKAKQALALAPAAQAQAAALgLQAKgKAAgRQAAgQgKgLQgLgKgQAAQgPAAgLAKg");
	this.shape_15.setTransform(68.025,53.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag7A8IAAh2IA2AAQAdAAARAPQATARAAAaQAAAbgTAQQgRARgdAAgAggAlIAaAAQARAAAKgKQALgKAAgRQAAgQgLgKQgKgKgRAAIgaAAg");
	this.shape_16.setTransform(54.55,53.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtA8IAAh2IBZAAIAAAVIg+AAIAAAbIA2AAIAAAUIg2AAIAAAbIBAAAIAAAXg");
	this.shape_17.setTransform(37.575,53.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNA8IAAgrIguhLIAeAAIAeA0IAgg0IAbAAIguBLIAAArg");
	this.shape_18.setTransform(26.15,53.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtA8IAAh2IBZAAIAAAVIg+AAIAAAbIA2AAIAAAUIg2AAIAAAbIBAAAIAAAXg");
	this.shape_19.setTransform(15.325,53.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXA8IgXgiIAAAAIgYAAIAAAiIgcAAIAAh2IA0AAQAXAAAOALQAOALAAAVQAAAagZAKIAbAngAgYAFIAWAAQAZgBAAgTQAAgVgZAAIgWAAg");
	this.shape_20.setTransform(94.125,34.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnAvQgOgOAAgbIAAhBIAcAAIAABAQAAAgAZAAQAbAAAAggIAAhAIAbAAIAABBQAAAbgPAOQgNAOgagBQgZABgOgOg");
	this.shape_21.setTransform(81.1,34.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguAsQgSgSAAgaQAAgaASgRQATgRAbAAQAcAAATARQASARAAAaQAAAagSASQgTARgcAAQgbAAgTgRgAgagbQgKALAAAQQAAARAKAKQALALAPAAQAQAAALgLQAKgKAAgRQAAgQgKgLQgLgKgQAAQgPAAgLAKg");
	this.shape_22.setTransform(67.575,34.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNA8IAAgrIguhLIAdAAIAfA1IAgg1IAbAAIgvBLIAAArg");
	this.shape_23.setTransform(55,34.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZA8IglgvIgQARIAAAeIgcAAIAAh2IAcAAIAAA3IAzg3IAfAAIgxA1IA0BBg");
	this.shape_24.setTransform(39.575,34.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbA6QgOgEgIgGIAKgVQARANAWAAQAXgBgBgNQAAgHgLgEIgWgGQgQgEgIgFQgLgJAAgOQAAgRAMgJQAOgLAXAAQAZgBARALIgJAVQgRgKgQABQgWgBABAOQgBAHALAEIAXAGQAQAFAIAFQALAIgBAOQAAAQgMAKQgNAMgYgBQgOAAgNgDg");
	this.shape_25.setTransform(27.4,34.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAmA8IgLgaIg2AAIgLAaIgcAAIA1h2IAaAAIA2B2gAATANIgTgsIgSAsIAlAAg");
	this.shape_26.setTransform(15.825,34.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F8F6F0").ss(8,2,0,3).p("AsunuIZdAAIAAPdI5dAAg");
	this.shape_27.setTransform(71.5,50.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4EB2E5").s().p("AsuHvIAAvdIZdAAIAAPdg");
	this.shape_28.setTransform(71.5,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.polaroid_7, new cjs.Rectangle(-14,-3,171,107), null);


(lib.polaroid_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoA0IAAhoIBPAAIAAAUIg3AAIAAAXIAwAAIAAARIgwAAIAAAZIA5AAIAAATg");
	this.shape.setTransform(151.725,93.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAzQgMgDgHgGIAJgSQAPALATAAQAUAAAAgLQAAgHgKgDIgUgGQgOgDgHgFQgJgHAAgNQAAgPAKgJQAMgKAVAAQAWAAAOAKIgHASQgPgIgOAAQgTAAAAAMQAAAHAJADIAUAFQAOAEAHAEQAKAHAAAOQAAANgLAJQgMALgVgBQgMABgMgEg");
	this.shape_1.setTransform(141.625,93.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA0IgJgWIgwAAIgJAWIgZAAIAvhoIAXAAIAvBogAARALIgRgnIgQAnIAhAAg");
	this.shape_2.setTransform(131.15,93.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA0IAAhoIBPAAIAAAUIg3AAIAAAXIAwAAIAAARIgwAAIAAAZIA5AAIAAATg");
	this.shape_3.setTransform(120.675,93.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAzQgMgDgHgGIAJgSQAPALATAAQAUAAAAgLQAAgHgKgDIgUgGQgOgDgHgFQgJgHAAgNQAAgPAKgJQAMgKAVAAQAWAAAOAKIgHASQgPgIgOAAQgTAAAAAMQAAAHAJADIAUAFQAOAEAHAEQAKAHAAAOQAAANgLAJQgMALgVgBQgMABgMgEg");
	this.shape_4.setTransform(110.575,93.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA0IAAhoIAXAAIAABog");
	this.shape_5.setTransform(103.375,93.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0A0IAAhoIAwAAQAZAAAQAPQAQAPAAAWQAAAXgQAPQgQAOgZAAgAgbAhIAWAAQAOAAAKgJQAJgJAAgPQAAgOgJgJQgKgJgOABIgWAAg");
	this.shape_6.setTransform(95.075,93.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoA0IAAhoIBPAAIAAAUIg3AAIAAAXIAwAAIAAARIgwAAIAAAZIA5AAIAAATg");
	this.shape_7.setTransform(79.625,93.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLA0IAAglIgphDIAaAAIAbAvIAcgvIAYAAIgpBEIAAAkg");
	this.shape_8.setTransform(69.275,93.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA0IAAhoIBPAAIAAAUIg3AAIAAAXIAwAAIAAARIgwAAIAAAZIA5AAIAAATg");
	this.shape_9.setTransform(59.475,93.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLA0IAAglIgphDIAaAAIAbAvIAcgvIAYAAIgpBEIAAAkg");
	this.shape_10.setTransform(44.925,93.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVA0IgVgcIAAAAIgVAAIAAAcIgZAAIAAhoIAuAAQAUABAMAJQANALAAASQgBAXgVAIIAYAigAgVAEIATAAQAWAAAAgRQAAgTgWABIgTAAg");
	this.shape_11.setTransform(34.75,93.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0A0IAAhoIAwAAQAZAAAQAPQAQAPAAAWQAAAXgQAPQgQAOgZAAgAgbAhIAWAAQAOAAAKgJQAJgJAAgPQAAgOgJgJQgKgJgOABIgWAAg");
	this.shape_12.setTransform(23.025,93.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoA0IAAhnIBPAAIAAATIg3AAIAAAXIAwAAIAAARIgwAAIAAAZIA5AAIAAATg");
	this.shape_13.setTransform(151.725,75.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAzQgMgEgHgFIAJgSQAPALATAAQAUAAAAgLQAAgHgKgDIgUgGQgOgEgHgEQgJgIAAgMQAAgPAKgJQAMgJAVgBQAWAAAOAKIgHASQgPgIgOAAQgTAAAAAMQAAAHAJADIAUAGQAOADAHAEQAKAIAAANQAAAOgLAIQgMAKgVAAQgMAAgMgDg");
	this.shape_14.setTransform(141.625,75.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiApQgNgMAAgYIAAg5IAZAAIAAA4QAAAcAXAAQAWAAAAgcIAAg4IAZAAIAAA5QAAAYgNAMQgMAMgXAAQgWAAgMgMg");
	this.shape_15.setTransform(130.95,75.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhA0IgJgWIgvAAIgKAWIgZAAIAvhnIAXAAIAvBngAAQAMIgQgoIgQAoIAgAAg");
	this.shape_16.setTransform(119.35,75.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAnQgQgPAAgYQAAgXAQgPQAQgQAYAAQAcAAAPATIgQAPQgKgMgQAAQgNAAgKAJQgKAJAAAOQAAAPAKAJQAKAJANAAQAQAAAKgMIAQAOQgQAUgbgBQgYAAgQgPg");
	this.shape_17.setTransform(108.25,75.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcA0Igzg+IAAA+IgYAAIAAhnIAUAAIAzA/IAAg/IAYAAIAABng");
	this.shape_18.setTransform(92.425,75.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAhA0IgJgWIgvAAIgKAWIgZAAIAvhnIAXAAIAvBngAAQAMIgQgoIgQAoIAgAAg");
	this.shape_19.setTransform(80.65,75.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAnQgQgPAAgYQAAgXAQgPQAQgQAYAAQAcAAAPATIgQAPQgKgMgQAAQgNAAgKAJQgKAJAAAOQAAAPAKAJQAKAJANAAQAQAAAKgMIAQAOQgQAUgcgBQgXAAgQgPg");
	this.shape_20.setTransform(69.55,75.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLA0IAAhTIgiAAIAAgUIBbAAIAAAUIgiAAIAABTg");
	this.shape_21.setTransform(55.125,75.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAhA0IgJgWIgvAAIgKAWIgZAAIAvhnIAXAAIAvBngAAQAMIgQgoIgQAoIAgAAg");
	this.shape_22.setTransform(44.8,75.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYA0IAAgrIgvAAIAAArIgYAAIAAhnIAYAAIAAApIAvAAIAAgpIAYAAIAABng");
	this.shape_23.setTransform(33.025,75.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLA0IAAhTIgiAAIAAgUIBbAAIAAAUIgiAAIAABTg");
	this.shape_24.setTransform(22.325,75.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA0Igzg+IAAA+IgYAAIAAhnIAUAAIAzA/IAAg/IAYAAIAABng");
	this.shape_25.setTransform(150.425,56.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoAnQgQgPAAgYQAAgXAQgPQAQgPAYAAQAZAAAQAPQARAPAAAXQAAAYgRAPQgQAQgZAAQgYAAgQgQgAgWgXQgKAJAAAOQAAAPAKAJQAIAJAOAAQAOAAAJgJQAKgJAAgPQAAgOgKgJQgJgKgOABQgOgBgIAKg");
	this.shape_26.setTransform(138.05,56.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgLA0IAAhnIAXAAIAABng");
	this.shape_27.setTransform(129.275,56.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLA0IAAhUIgiAAIAAgTIBbAAIAAATIgiAAIAABUg");
	this.shape_28.setTransform(122.175,56.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAhA0IgJgWIgvAAIgKAWIgZAAIAvhnIAXAAIAvBngAAQAMIgQgoIgQAoIAgAAg");
	this.shape_29.setTransform(111.85,56.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAkA0IAAg+IgfAzIgKAAIgfgxIAAA8IgWAAIAAhnIAUAAIAmA/IAng/IAUAAIAABng");
	this.shape_30.setTransform(98.975,56.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAkA0IAAg+IgfAzIgKAAIgfgxIAAA8IgWAAIAAhnIAUAAIAmA/IAng/IAUAAIAABng");
	this.shape_31.setTransform(84.675,56.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAiA0IgKgWIgvAAIgKAWIgZAAIAvhnIAXAAIAvBngAAQAMIgQgoIgQAoIAgAAg");
	this.shape_32.setTransform(71.8,56.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgmA0IAAhnIAZAAIAABTIA0AAIAAAUg");
	this.shape_33.setTransform(62.1,56.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnA0IAAhnIBPAAIAAATIg2AAIAAAcIAvAAIAAASIgvAAIAAAmg");
	this.shape_34.setTransform(52.675,56.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAcA0Igzg+IAAA+IgYAAIAAhnIAUAAIAzA/IAAg/IAYAAIAABng");
	this.shape_35.setTransform(41.425,56.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLA0IAAhnIAXAAIAABng");
	this.shape_36.setTransform(32.925,56.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgnA1IAAhpIBPAAIAAAUIg2AAIAAAcIAvAAIAAASIgvAAIAAAng");
	this.shape_37.setTransform(152.125,38.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgpAnQgQgPAAgYQAAgWAQgQQARgPAYAAQAZAAAQAPQAQAQAAAWQAAAYgQAPQgQAQgZAAQgYAAgRgQgAgXgYQgJAKAAAOQAAAPAJAKQAKAIANABQAOgBAJgIQAJgKAAgPQAAgOgJgKQgJgJgOAAQgNAAgKAJg");
	this.shape_38.setTransform(140.6,38.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoA1IAAhpIBPAAIAAAUIg3AAIAAAXIAwAAIAAASIgwAAIAAAYIA5AAIAAAUg");
	this.shape_39.setTransform(125.325,38.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AghAnQgQgPAAgYQAAgWAQgQQAQgPAYAAQAcgBAPAUIgQANQgKgLgQgBQgNAAgKAJQgKAKABAOQgBAPAKAJQAKAKANAAQAQAAAKgNIAQAPQgQASgcABQgXAAgQgQg");
	this.shape_40.setTransform(114.65,38.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAVA1IgVgeIAAAAIgVAAIAAAeIgZAAIAAhpIAuAAQAUAAAMAKQAMALAAARQAAAXgVAKIAYAigAgVAEIATAAQAWAAAAgSQAAgRgWgBIgTAAg");
	this.shape_41.setTransform(103.95,38.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgiApQgNgNAAgWIAAg7IAZAAIAAA5QAAAdAWAAQAXAAAAgdIAAg5IAZAAIAAA7QAAAWgNANQgMANgXAAQgWAAgMgNg");
	this.shape_42.setTransform(92.15,38.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgpAnQgQgPAAgYQAAgWAQgQQARgPAYAAQAZAAAQAPQAQAQAAAWQAAAYgQAPQgQAQgZAAQgYAAgRgQgAgXgYQgJAKAAAOQAAAPAJAKQAKAIANABQAOgBAJgIQAKgKgBgPQABgOgKgKQgJgJgOAAQgNAAgKAJg");
	this.shape_43.setTransform(79.95,38.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAzQgMgEgHgFIAJgSQAPALATAAQAUAAAAgMQAAgGgKgEIgUgEQgOgFgHgEQgJgHAAgOQAAgOAKgIQAMgLAVABQAWAAAOAJIgHATQgPgJgOAAQgTAAAAAMQAAAGAJAEIAUAFQAOAEAHAEQAKAHAAANQAAAOgLAKQgMAKgVAAQgMgBgMgDg");
	this.shape_44.setTransform(68.825,38.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAhA1IgJgXIgvAAIgKAXIgZAAIAvhpIAXAAIAvBpgAAQALIgQgmIgQAmIAgAAg");
	this.shape_45.setTransform(150.75,20.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYAzQgMgDgHgGIAJgSQAPALATAAQAUAAAAgLQAAgHgKgDIgUgGQgOgDgHgFQgJgHAAgNQAAgPAKgJQAMgKAVAAQAWAAAOAKIgHASQgPgIgOAAQgTAAAAAMQAAAGAJAEIAUAFQAOAEAHAEQAKAHAAANQAAAOgLAJQgMALgVgBQgMAAgMgDg");
	this.shape_46.setTransform(136.025,20.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgLA1IAAhVIgiAAIAAgUIBbAAIAAAUIgiAAIAABVg");
	this.shape_47.setTransform(126.625,20.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgoA1IAAhpIBPAAIAAAUIg3AAIAAAXIAwAAIAAARIgwAAIAAAZIA5AAIAAAUg");
	this.shape_48.setTransform(117.275,20.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgiAnQgQgQAAgXQAAgXAQgPQARgQAYAAQAcAAAQATIgQAOQgLgMgQAAQgOABgKAIQgJAKAAAOQAAAPAJAJQAKAKAOAAQAKgBAJgEIAAgdIAWAAIAAApQgSANgZAAQgXAAgRgPg");
	this.shape_49.setTransform(106.075,20.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAVA1IgVgdIAAAAIgVAAIAAAdIgZAAIAAhpIAuAAQAUABAMAJQAMALAAARQAAAXgVAJIAYAjgAgVAEIATAAQAWAAAAgSQAAgSgWAAIgTAAg");
	this.shape_50.setTransform(95.3,20.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAhA1IgJgXIgvAAIgKAXIgZAAIAvhpIAXAAIAvBpgAAQALIgQgmIgQAmIAgAAg");
	this.shape_51.setTransform(83.7,20.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgLA1IAAhVIgiAAIAAgUIBbAAIAAAUIgiAAIAABVg");
	this.shape_52.setTransform(73.325,20.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLA1IAAhVIgiAAIAAgUIBbAAIAAAUIgiAAIAABVg");
	this.shape_53.setTransform(59.875,20.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLA1IAAhpIAXAAIAABpg");
	this.shape_54.setTransform(52.825,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F8F6F0").ss(8,2,0,3).p("Atgo+IbBAAIAAR9I7BAAg");
	this.shape_55.setTransform(86.5,57.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4EB2E5").s().p("AtgI/IAAx9IbBAAIAAR9g");
	this.shape_56.setTransform(86.5,57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.polaroid_6, new cjs.Rectangle(-4,-4,181,123), null);


(lib.polaroid_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.polaroid_5();
	this.instance.setTransform(1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.polaroid_5_1, new cjs.Rectangle(1,4,152,139), null);


(lib.polaroid_2_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.polaroid_2();
	this.instance.setTransform(1,1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.polaroid_2_mc, new cjs.Rectangle(1,1,126,130), null);


(lib.polaroid_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.polaroid_1();
	this.instance.setTransform(14,-8,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.polaroid_1_1, new cjs.Rectangle(14,-8,159.4,191.1), null);


(lib.pin_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pin();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pin_1, new cjs.Rectangle(0,0,13,22), null);


(lib.peal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EEEEEE","#CFCFCF"],[0,0.953],4.8,-1.6,8.6,10.1).s().p("ABbgeQBUg2AigrQABAiATAZQAOATASAJQAYAMAWgOQALgHALgMQgfAzhqAuQhqAvh4ARQgqAGhnAIQhqAJgrAFQD8gzCnhrg");
	this.shape.setTransform(32.875,12.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.peal, new cjs.Rectangle(0,0,65.8,25.7), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,97,63), null);


(lib.copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMA8IAAgzIgthEIAgAAIAZAtIAbgtIAgAAIgtBEIAAAzg");
	this.shape.setTransform(269.7,57.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA8IAAh3IAbAAIAABfIAwAAIAAAYg");
	this.shape_1.setTransform(262.325,57.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMA8IAAhgIgjAAIAAgXIBfAAIAAAXIgjAAIAABgg");
	this.shape_2.setTransform(252.525,57.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWA8IgzhUIAABUIgbAAIAAh3IAkAAIAyBTIABAAIAAhTIAaAAIAAB3g");
	this.shape_3.setTransform(240.925,57.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IBQAAIAAAYIg2AAIAAAXIAzAAIAAAXIgzAAIAAAZIA5AAIAAAYg");
	this.shape_4.setTransform(229.075,57.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARA8IgZgwIgMAAIAAAwIgbAAIAAh3IAvAAQAIAAAIACQAIABAGAFQAGAEAEAHQADAHABAKQgBANgGAJQgHAIgMACIAeAzgAgUgJIAPAAIAGgBQAFAAACgBQAEgBACgDQACgDAAgFQAAgEgBgDIgGgEIgGgCIgGgBIgRAAg");
	this.shape_5.setTransform(218.75,57.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IBQAAIAAAYIg2AAIAAAXIAzAAIAAAXIgzAAIAAAZIA5AAIAAAYg");
	this.shape_6.setTransform(207.775,57.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnA8IAAh3IBPAAIAAAYIg1AAIAAAZIAxAAIAAAXIgxAAIAAAvg");
	this.shape_7.setTransform(197.725,57.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA8IAAh3IBPAAIAAAYIg1AAIAAAZIAxAAIAAAXIgxAAIAAAvg");
	this.shape_8.setTransform(187.875,57.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMA8IAAh3IAZAAIAAB3g");
	this.shape_9.setTransform(180.225,57.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3A8IAAh3IAoAAQAPAAAMADQANADAJAIQAKAHAGALQAGAMAAAPQAAAPgGALQgGALgJAIQgJAHgMAEQgNAEgMAAgAgcAkIAOAAQAJAAAHgCQAIgCAGgEQAFgFAEgHQADgHAAgJQAAgJgDgGQgEgHgFgEQgGgEgHgCQgHgDgIAAIgQAAg");
	this.shape_10.setTransform(171.775,57.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXA8QgLgEgIgIIATgVQADAGAHADQAGADAGAAIAGgBIAGgCQADgCABgCQACgDAAgDQAAgFgEgDQgEgDgGgDIgNgEQgIgCgGgEQgGgDgEgGQgEgGgBgKQAAgKAFgHQADgHAHgFQAGgFAIgDQAJgCAHAAQALAAAKADQAJADAHAGIgSAUQgDgEgGgCQgFgCgFAAIgGABIgFACIgEAEQgCACAAAEQAAAFAFADIAJAFIANAEQAHACAGAEQAHADADAGQAEAGAAALQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgIAAQgLAAgKgDg");
	this.shape_11.setTransform(270.1,37.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATA8Igwg5IAAA5IgaAAIAAh3IAaAAIAAAyIAugyIAiAAIg0A4IA5A/g");
	this.shape_12.setTransform(260.375,37.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQA8IgYgwIgMAAIAAAwIgbAAIAAh3IAuAAQAJAAAIACQAIABAGAFQAHAEADAHQADAHAAAKQAAANgGAJQgHAIgNACIAgAzgAgUgJIAPAAIAGgBQAFAAACgBQAEgBACgDQACgDAAgFQAAgEgBgDIgGgEIgGgCIgGgBIgRAAg");
	this.shape_13.setTransform(248.65,37.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA7QgMgFgJgIQgIgIgFgMQgFgLAAgPQAAgNAFgMQAFgMAIgIQAJgIAMgFQAMgEANAAQAOAAAMAEQAMAFAJAIQAIAIAFAMQAFAMAAANQAAAPgFALQgFAMgIAIQgJAIgMAFQgMAEgOAAQgNAAgMgEgAgOgjQgHADgFAFQgFAFgDAIQgCAHAAAHQAAAJACAHQADAHAFAFQAFAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgJQAAgHgCgHQgDgIgFgFQgFgFgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_14.setTransform(235.775,37.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaA8IgahSIAAAAIgaBSIgWAAIgkh3IAcAAIATBMIABAAIAZhMIAYAAIAZBOIABAAIAUhOIAbAAIgkB3g");
	this.shape_15.setTransform(220.4,37.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhA8IgKgZIguAAIgKAZIgdAAIA0h3IAVAAIA0B3gAAOAMIgOgkIgOAkIAcAAg");
	this.shape_16.setTransform(201.05,37.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQA8IgXgwIgOAAIAAAwIgbAAIAAh3IAvAAQAIAAAJACQAIABAGAFQAGAEAEAHQADAHAAAKQABANgHAJQgGAIgNACIAeAzgAgVgJIAQAAIAHgBQADAAAEgBQADgBACgDQACgDAAgFQAAgEgCgDIgEgEIgHgCIgHgBIgRAAg");
	this.shape_17.setTransform(190,37.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag3A8IAAh3IAoAAQAPAAAMADQANADAJAIQAKAHAGALQAGAMAAAPQAAAPgGALQgGALgJAIQgJAHgMAEQgNAEgMAAgAgcAkIAOAAQAJAAAHgCQAIgCAGgEQAFgFAEgHQADgHAAgJQAAgJgDgGQgEgHgFgEQgGgEgHgCQgHgDgIAAIgQAAg");
	this.shape_18.setTransform(178.025,37.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMA8IAAh3IAZAAIAAB3g");
	this.shape_19.setTransform(168.975,37.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMA8IAAh3IAZAAIAAB3g");
	this.shape_20.setTransform(164.175,37.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcA8IgcgwIgdAwIggAAIArg+Igog5IAhAAIAZAqIAZgqIAfAAIgmA5IAsA+g");
	this.shape_21.setTransform(155.75,37.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy4, new cjs.Rectangle(147.4,24.4,129.6,47.4), null);


(lib.copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAIIgDgCIgCgDIAAgDIAAgCIACgDIADgCIACAAIADAAIADACIACADIAAACIAAADIgCADIgDACIgDAAIgCAAg");
	this.shape.setTransform(183.175,70.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgEgDIAJgJQABACADACQACABADAAIADgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgEgCIgFgBIgGgCIgEgCQgBgDAAgEQAAgEABgDIAEgEIAGgDIAGgBIAJABQAEABADAEIgIAIQgDgEgFAAIgCABQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIADACIAFABIAGACIAEADQACADAAAEQAAAEgCACQgCAEgDABIgGACIgGABIgKgBg");
	this.shape_1.setTransform(179.975,68.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_2.setTransform(176.475,68.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAWQgDAAgCgCQgDgCAAgDQgCgCAAgDQAAgEACgDIADgDIAGgDIAGgBIAFgBIAHAAQgBgDgCgDQgCgCgEAAIgFACIgFAEIgHgIQAEgEAFgBQAEgCAFAAQAGAAAEABQAEACACADQADADAAAEIABAJIAAAWIgMAAIAAgFQgDADgEABQgCACgFAAIgFgBgAgCADIgEACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACgBIADgBIADgCIABgFIAAgCIgEAAIgEAAg");
	this.shape_3.setTransform(172.2,68.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgCgEQgCgFAAgFQAAgEACgEQACgFAEgCQADgDAEgCQAFgCAEAAQAEAAAEACQAEACACADQAEACABAFQACAEgBAEIAAAEIgeAAQABAEACADQADACADAAQADAAACgBIAFgEIAJAGQgDAEgFADQgFACgFAAQgEAAgFgCgAAJgEQAAgDgDgCQgCgDgDAAIgEAAIgCADIgCACIgBADIARAAIAAAAg");
	this.shape_4.setTransform(167.5,68.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAdIgHgBIgEgCQgCgCgBgCQgCgDABgDIAAgUIgJAAIAAgLIAJAAIAAgNIAMAAIAAANIAMAAIAAALIgMAAIAAANIAAAEIABACIACACIADABIADgBIADgBIAAALIgFACg");
	this.shape_5.setTransform(163.2,68.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAiIAAhDIANAAIAABDg");
	this.shape_6.setTransform(158.075,67.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAWQgDAAgCgCQgDgCAAgDQgCgCAAgDQAAgEACgDIADgDIAGgDIAGgBIAFgBIAHAAQgBgDgCgDQgCgCgEAAIgFACIgFAEIgHgIQAEgEAFgBQAEgCAFAAQAGAAAEABQAEACACADQACADABAEIABAJIAAAWIgMAAIAAgFQgDADgEABQgCACgFAAIgFgBgAgCADIgEACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACgBIADgBIADgCIABgFIAAgCIgEAAIgDAAg");
	this.shape_7.setTransform(154.65,68.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAhIAAgrIANAAIAAArgAgFgSQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_8.setTransform(151.375,67.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAVQgEgBgDgDQgDgDgCgEQgCgFAAgFQAAgEACgEQACgFADgCQADgDAEgCQAFgCAEAAIAIABQAEACAEADIgJAKIgDgDIgEgBQgEAAgCADQgEADAAAEQAAAFAEADQACADAEAAIAEgBIADgCIAJAJQgEADgEACIgIABQgEAAgFgCg");
	this.shape_9.setTransform(148.45,68.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAhIAAgrIANAAIAAArgAgFgSQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_10.setTransform(145.175,67.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAjIAAghIgJAAIAAgKIAJAAIAAgIIABgHQAAgDACgCQACgDACgBQAEgBAFAAIAEAAIAEAAIgBALIgCAAIgCgBQgDABgCABQgBABgBAFIAAAHIAKAAIAAAKIgKAAIAAAhg");
	this.shape_11.setTransform(142.65,67.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAhIAAgrIANAAIAAArgAgFgSQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_12.setTransform(139.975,67.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAIAdIgHgBIgEgCQgCgCgBgCQgCgDABgDIAAgUIgJAAIAAgLIAJAAIAAgNIAMAAIAAANIAMAAIAAALIgMAAIAAANIAAAEIABACIACACIADABIADgBIADgBIAAALIgFACg");
	this.shape_13.setTransform(137.1,68.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_14.setTransform(133.925,68.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAWQgDAAgCgCQgCgCgBgDQgCgCAAgDQAAgEACgDIADgDIAGgDIAGgBIAFgBIAGAAQAAgDgCgDQgCgCgEAAIgFACIgFAEIgHgIQAEgEAEgBQAFgCAFAAQAGAAAEABQADACADADQADADAAAEIABAJIAAAWIgNAAIAAgFQgBADgFABQgCACgFAAIgFgBgAgCADIgEACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACgBIAEgBIACgCIAAgFIAAgCIgCAAIgFAAg");
	this.shape_15.setTransform(129.65,68.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAOIAAgLIAxAAIAAALgAgYgCIAAgLIAxAAIAAALg");
	this.shape_16.setTransform(122.1,68.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgEgDIAJgJQABACADACQACABADAAIADgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgEgCIgFgBIgGgCIgEgCQgBgDAAgEQAAgEABgDIAEgEIAGgDIAGgBIAJABQAEABADAEIgIAIQgDgEgFAAIgCABQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIADACIAFABIAGACIAEADQACADAAAEQAAAEgCACQgCAEgDABIgGACIgGABIgKgBg");
	this.shape_17.setTransform(114.775,68.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAhIAAg/IANAAIAAAFIACgCIADgCIAEgCIADgBQAFAAAEACQAEACADADQADADABAEQACAEAAAFQAAAFgCAEQgBADgDADIgGAFQgEACgEAAIgHgBQgEgBgCgDIAAAZgAgHgRQgDADAAAFQAAAFADADQACACAFAAQAFAAACgCQADgDAAgFQAAgFgDgDQgCgDgFAAQgFAAgCADg");
	this.shape_18.setTransform(110.225,69.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAVQgEgBgEgDQgDgDgBgEQgCgFAAgFQAAgEACgEIAEgHQAEgDAEgCQAFgCAEAAQAFAAAEACQAFACADADQAEACACAFQABAEAAAEQAAAFgBAFQgCAEgEADQgDADgFABQgEACgFAAQgEAAgFgCgAgHgHQgDADAAAEQAAAFADADQADADAEAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_19.setTransform(104.75,68.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_20.setTransform(100.725,68.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAhQgEgBgDgEQgDgDgBgEQgCgEAAgFIACgJIAEgGQACgDAEgCQAEgCAEAAQAEAAADABQAEABACADIAAgdIAOAAIAABEIgNAAIAAgHIgCADIgDADIgEABIgDABQgFgBgEgBgAgGADQgDAEAAAEQAAAGADACQADADAEAAQAFAAADgDQACgCAAgGQAAgEgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_21.setTransform(95.925,67.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgBgEQgCgFAAgFQAAgEACgEQABgFAEgCQADgDAEgCQAEgCAEAAQAGAAADACQAEACACADQADACACAFQABAEABAEIAAAEIgfAAQAAAEAEADQACACADAAQADAAACgBIAEgEIAKAGQgDAEgFADQgFACgGAAQgEAAgEgCgAAJgEQAAgDgDgCQgCgDgEAAIgCAAIgDADIgDACIAAADIARAAIAAAAg");
	this.shape_22.setTransform(88.45,68.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAfIACgLIAGABIAEAAIACgCIACgCIABgDIABgDIgTgrIAPAAIAKAdIAAAAIAKgdIAOAAIgUAyIgDAHIgCAEIgFACIgIACQgFAAgFgCg");
	this.shape_23.setTransform(83.575,69.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgEgDQgDgDgBgEQgCgFgBgFQABgEACgEQABgFADgCQAEgDAEgCQAFgCADAAQAFAAAEACQAEACADADQADACABAFQABAEAAAEIAAAEIgeAAQAAAEADADQADACADAAQAEAAACgBIADgEIAKAGQgDAEgFADQgFACgGAAQgDAAgFgCgAAJgEQAAgDgCgCQgDgDgEAAIgCAAIgEADIgCACIAAADIARAAIAAAAg");
	this.shape_24.setTransform(78.7,68.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_25.setTransform(72.225,68.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgCgEQgBgFAAgFQAAgEABgEQACgFAEgCQADgDAEgCQAEgCAFAAQAFAAADACQAEACACADQADACACAFQABAEABAEIAAAEIgfAAQABAEADADQACACADAAQADAAACgBIAFgEIAJAGQgDAEgFADQgFACgFAAQgFAAgEgCgAAJgEQAAgDgDgCQgCgDgEAAIgCAAIgDADIgDACIAAADIARAAIAAAAg");
	this.shape_26.setTransform(67.85,68.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAHAdIgFgBIgFgCQgCgCgBgCQgBgDAAgDIAAgUIgJAAIAAgLIAJAAIAAgNIAMAAIAAANIAMAAIAAALIgMAAIAAANIAAAEIABACIACACIAEABIACgBIADgBIAAALIgFACg");
	this.shape_27.setTransform(63.55,68.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAIAXIAAgWIAAgDIgBgEIgCgDIgFAAIgDAAIgDADIgBAEIAAACIAAAXIgNAAIAAgrIAMAAIAAAFIABAAIABgCIAEgCIACgBIAFgBQAFAAADACIAFADIACAHIABAJIAAAXg");
	this.shape_28.setTransform(59.45,68.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAVQgEgCgCgDIgBgGIgBgIIAAgXIANAAIAAAVIAAADIABAEIADACIADABIADAAIADgDIABgEIABgDIAAgVIANAAIAAAqIgNAAIAAgGIgCADIgDACIgDACIgEAAQgFAAgDgBg");
	this.shape_29.setTransform(54.5,68.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAVQgEgBgEgDQgDgDgBgEQgCgFAAgFQAAgEACgEIAEgHQAEgDAEgCQAFgCAEAAQAFAAAEACQAFACADADQAEACACAFQABAEAAAEQAAAFgBAFQgCAEgEADQgDADgFABQgEACgFAAQgEAAgFgCgAgHgHQgDADAAAEQAAAFADADQADADAEAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_30.setTransform(49.4,68.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAVQgFgBgDgDQgEgDgBgEQgCgFAAgFQAAgEACgEQABgFAEgCQADgDAFgCQAEgCAEAAIAJABQAEACADADIgJAKIgDgDIgEgBQgEAAgDADQgCADAAAEQAAAFACADQADADAEAAIAEgBIADgCIAJAJQgDADgEACIgJABQgEAAgEgCg");
	this.shape_31.setTransform(44.9,68.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKAGIAAgKIAVAAIAAAKg");
	this.shape_32.setTransform(41.425,68.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgEgDQgDgDgBgEQgCgFgBgFQABgEACgEQABgFADgCQAEgDAEgCQAFgCADAAQAFAAAEACQAEACADADQADACABAFQABAEAAAEIAAAEIgeAAQAAAEADADQADACADAAQAEAAACgBIADgEIAKAGQgDAEgFADQgFACgGAAQgDAAgFgCgAAJgEQAAgDgCgCQgDgDgEAAIgCAAIgEADIgCACIAAADIARAAIAAAAg");
	this.shape_33.setTransform(37.75,68.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAIAiIAAgVIAAgFIgBgDIgDgDIgEgBIgDABIgDADIgBADIAAAEIAAAWIgNAAIAAhDIANAAIAAAeIACgCIADgDIACgBIAEgBQAGAAADACIAFAEIACAGIABAIIAAAYg");
	this.shape_34.setTransform(32.8,67.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAIAdIgHgBIgDgCQgDgCgBgCQgBgDgBgDIAAgUIgIAAIAAgLIAIAAIAAgNIANAAIAAANIAMAAIAAALIgMAAIAAANIABAEIAAACIACACIADABIAEgBIACgBIAAALIgEACg");
	this.shape_35.setTransform(28.5,68.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAGIAAgKIAVAAIAAAKg");
	this.shape_36.setTransform(25.625,68.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_37.setTransform(23.375,68.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgCgEQgCgFAAgFQAAgEACgEQACgFAEgCQADgDAEgCQAFgCAEAAQAEAAAEACQAEACACADQAEACABAFQACAEgBAEIAAAEIgeAAQABAEACADQADACADAAQADAAACgBIAFgEIAJAGQgDAEgFADQgFACgFAAQgEAAgFgCgAAJgEQAAgDgDgCQgCgDgDAAIgEAAIgCADIgCACIgBADIARAAIAAAAg");
	this.shape_38.setTransform(19,68.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAWIgSgrIAPAAIAKAdIAKgdIAOAAIgSArg");
	this.shape_39.setTransform(14.1,68.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAfQgGgCgEgFQgFgEgDgGQgCgGAAgIQAAgGACgHQADgGAFgEQAEgEAGgDQAGgDAHABQAIgBAFADQAHADAEAEQAFAEADAGQACAHAAAGQAAAIgCAGQgDAGgFAEQgEAFgHACQgFACgIAAQgHAAgGgCgAgHgSQgEACgCADQgDACgCAEQgBADAAAEQAAAEABAFIAFAGQACACAEACQAEABADABQAFgBADgBIAGgEIAFgGQABgFAAgEQAAgEgBgDQgCgEgDgCQgDgDgDgCQgDgCgFAAQgDAAgEACg");
	this.shape_40.setTransform(8.1,67.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAAAIIgHAKIgHgGIAIgKIgMgDIADgIIALAEIAAgMIAJAAIAAAMIALgEIADAJIgMACIAIALIgIAFg");
	this.shape_41.setTransform(2.425,66.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAAMIgKANIgKgHIALgOIgSgGIAFgLIARAFIAAgSIAMAAIAAASIARgFIAEAMIgRAFIAKAOIgKAIg");
	this.shape_42.setTransform(186.025,2.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmA7IAAh0IBNAAIAAAXIg0AAIAAAYIAwAAIAAAXIgwAAIAAAug");
	this.shape_43.setTransform(162.075,48.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAXIg0AAIAAAWIAxAAIAAAXIgxAAIAAAYIA3AAIAAAYg");
	this.shape_44.setTransform(151.9,48.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMA7IAAh0IAZAAIAAB0g");
	this.shape_45.setTransform(144.1,48.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgkA7IAAh0IAaAAIAABcIAvAAIAAAYg");
	this.shape_46.setTransform(137.775,48.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAXIg1AAIAAAWIAyAAIAAAXIgyAAIAAAYIA4AAIAAAYg");
	this.shape_47.setTransform(127.85,48.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAQA7IgXgvIgNAAIAAAvIgaAAIAAh0IAtAAQAIAAAIACQAIABAGAEQAGAEAEAHQADAHAAAKQAAANgGAIQgGAIgNACIAeAygAgUgJIAPAAIAGAAIAHgBQAEgCACgDQACgCAAgFQAAgEgCgDQgCgDgDgBIgGgCIgGgBIgRAAg");
	this.shape_48.setTransform(117.675,48.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMA7IAAgzIgshBIAgAAIAYAsIAagsIAfAAIgsBBIAAAzg");
	this.shape_49.setTransform(101.625,48.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAQA7IgXgvIgNAAIAAAvIgaAAIAAh0IAtAAQAIAAAIACQAIABAGAEQAGAEAEAHQADAHAAAKQAAANgGAIQgGAIgNACIAeAygAgUgJIAPAAIAGAAIAHgBQAEgCACgDQACgCAAgFQAAgEgCgDQgCgDgDgBIgGgCIgGgBIgRAAg");
	this.shape_50.setTransform(92.125,48.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAgA7IgKgZIgsAAIgKAZIgcAAIAyh0IAUAAIAzB0gAANAMIgNgkIgOAkIAbAAg");
	this.shape_51.setTransform(80.175,48.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAQA7IgXgvIgNAAIAAAvIgaAAIAAh0IAtAAQAIAAAIACQAIABAGAEQAGAEAEAHQADAHAAAKQAAANgGAIQgGAIgNACIAeAygAgUgJIAPAAIAGAAIAHgBQAEgCACgDQACgCAAgFQAAgEgCgDQgCgDgDgBIgGgCIgGgBIgRAAg");
	this.shape_52.setTransform(69.275,48.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgYA5QgLgEgJgIQgIgIgFgMQgFgLAAgOQAAgNAFgMQAFgKAIgJQAJgHALgFQALgFANAAQAOAAAMAFQALAFAJAHQAIAJAEAKQAFAMAAANQAAAOgFALQgEAMgIAIQgJAIgLAEQgMAEgOABQgNgBgLgEgAgOgiQgHADgEAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAEAFAHADQAHACAHAAQAJAAAGgCQAGgDAGgFQAEgFADgHQACgHABgIQgBgHgCgHQgDgHgEgFQgGgFgGgDQgGgDgJAAQgHAAgHADg");
	this.shape_53.setTransform(56.55,48.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgrA7IAAh0IArAAQAJAAAIACQAIABAGAEQAGAEADAHQAEAHAAAKQAAAKgDAIQgEAFgFAFQgGAEgIABQgIACgJAAIgSAAIAAAugAgRgIIARAAIAGgBIAGgBIAEgFQABgDAAgEQAAgEgCgDQgCgDgDgBIgHgCIgHgBIgNAAg");
	this.shape_54.setTransform(44.925,48.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAoA7IAAhZIgfBZIgTAAIgdhZIgBAAIAABZIgZAAIAAh0IAnAAIAaBLIAAAAIAbhLIAnAAIAAB0g");
	this.shape_55.setTransform(31.6,48.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAXIg1AAIAAAWIAzAAIAAAXIgzAAIAAAYIA4AAIAAAYg");
	this.shape_56.setTransform(18.85,48.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMA7IAAheIghAAIAAgWIBbAAIAAAWIghAAIAABeg");
	this.shape_57.setTransform(8.725,48.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgoA6IAAh0IBOAAIAAAYIg0AAIAAAWIAxAAIAAAXIgxAAIAAAYIA3AAIAAAXg");
	this.shape_58.setTransform(115.1,27.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag1A6IAAh0IAnAAQAOAAALAEQANADAJAHQAKAHAFALQAGAMAAAPQAAAOgGALQgFAKgJAIQgJAHgMAEQgMADgMAAgAgbAjIANAAQAJAAAHgCQAHgCAGgEQAGgEADgHQADgHAAgJQAAgIgDgHQgDgGgGgEQgFgEgIgDQgGgCgIAAIgPAAg");
	this.shape_59.setTransform(103.775,27.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgMA6IAAh0IAZAAIAAB0g");
	this.shape_60.setTransform(94.8,27.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKA6Igvh0IAdAAIAcBMIABAAIAdhMIAcAAIgxB0g");
	this.shape_61.setTransform(86.575,27.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgYA5QgMgEgIgIQgJgIgEgLQgFgMAAgOQAAgNAFgMQAEgLAJgHQAIgJAMgEQALgEANAAQAOAAALAEQAMAEAJAJQAIAHAEALQAFAMAAANQAAAOgFAMQgEALgIAIQgJAIgMAEQgLAFgOAAQgNAAgLgFgAgOgiQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAJADAGQACAHAFAFQAFAFAGADQAHACAHABQAIgBAHgCQAGgDAGgFQAFgFACgHQADgGAAgJQAAgHgDgHQgCgHgFgFQgGgFgGgDQgHgCgIAAQgHAAgHACg");
	this.shape_62.setTransform(73.9,27.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAQA6IgXguIgNAAIAAAuIgaAAIAAh0IAtAAQAIAAAIADQAIABAGAEQAGAEAEAHQADAHAAAKQAAAMgGAJQgGAIgNACIAeAxgAgUgJIAPAAIAGAAIAHgBQAEgCACgDQACgCAAgFQAAgFgCgCQgCgDgDgBIgGgCIgGAAIgRAAg");
	this.shape_63.setTransform(62.275,27.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgrA6IAAh0IArAAQAJAAAIADQAIABAGAEQAGAEADAHQAEAGAAALQAAALgDAGQgEAGgFAEQgGAEgIACQgIACgJAAIgSAAIAAAtgAgRgIIARAAIAGAAIAGgCIAEgFQABgDAAgEQAAgFgCgCQgCgDgDgBIgHgCIgHAAIgNAAg");
	this.shape_64.setTransform(51.625,27.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMA6IAAgxIgshDIAgAAIAYAsIAagsIAfAAIgsBDIAAAxg");
	this.shape_65.setTransform(35.875,27.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAgA6IgKgYIgsAAIgKAYIgcAAIAyh0IAUAAIAzB0gAANAMIgNgkIgOAkIAbAAg");
	this.shape_66.setTransform(25.675,27.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAoA6IAAhYIgfBYIgTAAIgdhYIgBAAIAABYIgZAAIAAh0IAnAAIAaBMIAAAAIAbhMIAnAAIAAB0g");
	this.shape_67.setTransform(11.8,27.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgXA6QgKgDgIgIIASgVQAEAGAGADQAGADAHAAIAFgBIAGgDQACAAACgDQABgCAAgEQAAgFgEgDQgEgDgGgCIgMgFQgHgCgGgDQgGgDgEgFQgEgHAAgJQAAgKADgHQAEgHAGgEQAGgFAJgDQAIgCAHAAQAKAAAJADQAKACAHAHIgSATQgDgEgFgBQgFgDgFAAIgGABIgFACIgEAEQgCACAAAEQAAAFAEADQAEADAFABIANAFQAHABAGAEQAGADAEAFQAEAHAAAKQAAAJgDAIQgEAHgGAFQgGAFgJACQgIACgIAAQgLABgKgEg");
	this.shape_68.setTransform(177.825,7.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgrA7IAAh0IArAAQAJAAAIABQAIACAGAEQAGAEADAHQAEAHAAAKQAAAKgDAIQgEAFgFAEQgGAEgIACQgIACgJAAIgSAAIAAAugAgRgIIARAAIAGgBIAGgCIAEgEQABgCAAgFQAAgEgCgDQgCgDgDgBIgHgCIgHgBIgNAAg");
	this.shape_69.setTransform(168.525,7.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgYA5QgLgEgJgIQgJgIgEgMQgFgLAAgOQAAgNAFgLQAEgMAJgHQAJgJALgEQAMgFAMABQAOgBAMAFQALAEAIAJQAJAHAEAMQAFALAAANQAAAOgFALQgEAMgJAIQgIAIgLAEQgMAFgOgBQgMABgMgFgAgOghQgHACgFAFQgEAFgDAHQgCAHAAAHQAAAJACAGQADAHAEAFQAFAFAHADQAHADAHAAQAJAAAGgDQAHgDAFgFQAEgFADgHQACgGAAgJQAAgHgCgHQgDgHgEgFQgFgFgHgCQgGgEgJAAQgHAAgHAEg");
	this.shape_70.setTransform(156.1,7.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAQA7IgXgvIgNAAIAAAvIgaAAIAAh0IAtAAQAIAAAIABQAIACAGAEQAGAEAEAHQADAHAAAKQAAAMgGAJQgGAIgNACIAeAygAgUgJIAPAAIAGAAIAHgCQAEgBACgCQACgDAAgFQAAgEgCgDQgCgDgDgBIgGgCIgGgBIgRAAg");
	this.shape_71.setTransform(144.475,7.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ag1A7IAAh0IAnAAQAOAAALADQANADAJAHQAKAHAFALQAGALAAAQQAAAOgGAKQgFAMgJAGQgJAIgMAEQgMADgMABgAgbAiIANAAQAJAAAHgBQAHgCAGgEQAGgEADgHQADgHAAgJQAAgIgDgHQgDgGgGgEQgFgFgIgBQgGgCgIAAIgPAAg");
	this.shape_72.setTransform(132.675,7.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAYIg1AAIAAAVIAzAAIAAAXIgzAAIAAAXIA4AAIAAAZg");
	this.shape_73.setTransform(116.3,7.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgMA7IAAgzIgshBIAgAAIAYAsIAagsIAfAAIgsBBIAAAzg");
	this.shape_74.setTransform(105.575,7.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAYIg0AAIAAAVIAxAAIAAAXIgxAAIAAAXIA3AAIAAAZg");
	this.shape_75.setTransform(95.3,7.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAQA7IgXgvIgNAAIAAAvIgaAAIAAh0IAtAAQAIAAAIABQAIACAGAEQAGAEAEAHQADAHAAAKQAAAMgGAJQgGAIgNACIAeAygAgUgJIAPAAIAGAAIAHgCQAEgBACgCQACgDAAgFQAAgEgCgDQgCgDgDgBIgGgCIgGgBIgRAAg");
	this.shape_76.setTransform(80.275,7.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAYIg1AAIAAAVIAyAAIAAAXIgyAAIAAAXIA4AAIAAAZg");
	this.shape_77.setTransform(69.45,7.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMA7IAAhdIghAAIAAgXIBbAAIAAAXIghAAIAABdg");
	this.shape_78.setTransform(59.325,7.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAWA7IgyhSIgBAAIAABSIgZAAIAAh0IAjAAIAwBQIABAAIAAhQIAZAAIAAB0g");
	this.shape_79.setTransform(47.925,7.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgUA4QgKgDgGgHQgGgGgDgJQgDgJAAgKIAAhHIAZAAIAABGQAAAFACAFQACAEADAEQADADAEADQAFABAEAAQAFAAAEgBQAFgDADgDIAFgIQABgFAAgFIAAhGIAaAAIAABHQAAAKgDAJQgDAJgGAGQgGAHgKADQgJAEgMAAQgLAAgJgEg");
	this.shape_80.setTransform(35.125,7.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgYA5QgMgEgIgIQgJgIgEgMQgFgLAAgOQAAgNAFgLQAEgMAJgHQAIgJAMgEQALgFANABQAOgBALAFQAMAEAJAJQAIAHAEAMQAFALAAANQAAAOgFALQgEAMgIAIQgJAIgMAEQgLAFgOgBQgNABgLgFgAgOghQgGACgFAFQgFAFgCAHQgDAHAAAHQAAAJADAGQACAHAFAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAFgFACgHQADgGAAgJQAAgHgDgHQgCgHgFgFQgGgFgGgCQgHgEgIAAQgHAAgHAEg");
	this.shape_81.setTransform(22.15,7.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgOA5QgLgEgJgIQgIgIgFgMQgFgLAAgOQAAgNAFgLQAFgMAIgHQAJgJALgEQAMgFAMABIALABIAKACIAKAGQAFADAEAFIgUAQQgEgEgFgDQgGgDgHAAQgHAAgGAEQgGACgEAFQgFAFgCAHQgDAHAAAHQAAAJADAGQACAHAFAFQAEAFAGADQAFADAHAAQAIAAAGgEQAGgDAEgGIAWAQQgIAKgLAGQgMAEgMAAQgMABgMgFg");
	this.shape_82.setTransform(9.825,7.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_83.setTransform(89.875,-11.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAXIg1AAIAAAWIAyAAIAAAXIgyAAIAAAXIA4AAIAAAZg");
	this.shape_84.setTransform(82.5,-13.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAZA7IAAgzIgxAAIAAAzIgaAAIAAh0IAaAAIAAAsIAxAAIAAgsIAaAAIAAB0g");
	this.shape_85.setTransform(70.875,-13.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgMA7IAAheIghAAIAAgWIBbAAIAAAWIghAAIAABeg");
	this.shape_86.setTransform(59.875,-13.35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_87.setTransform(52.725,-11.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAQA7IgXgvIgNAAIAAAvIgaAAIAAh0IAtAAQAIAAAIACQAIABAGAEQAGAEAEAHQADAHAAAKQAAANgGAIQgGAIgNACIAeAygAgUgJIAPAAIAGAAIAHgBQAEgCACgDQACgCAAgFQAAgEgCgDQgCgDgDgBIgGgCIgGgBIgRAAg");
	this.shape_88.setTransform(45.525,-13.35);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgoA7IAAh0IBOAAIAAAXIg1AAIAAAWIAyAAIAAAXIgyAAIAAAXIA4AAIAAAZg");
	this.shape_89.setTransform(34.7,-13.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgKA7Igvh0IAdAAIAcBLIABAAIAdhLIAcAAIgxB0g");
	this.shape_90.setTransform(23.525,-13.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgYA5QgMgEgIgIQgJgIgEgMQgFgLAAgOQAAgNAFgMQAEgKAJgJQAIgHAMgFQAMgFAMAAQAOAAAMAFQALAFAIAHQAJAJAFAKQAEAMAAANQAAAOgEALQgFAMgJAIQgIAIgLAEQgMAEgOAAQgMAAgMgEgAgOgiQgHADgFAFQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAFAFAHADQAHACAHAAQAIAAAHgCQAHgDAFgFQAEgFADgHQADgHgBgIQABgHgDgHQgDgHgEgFQgFgFgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_91.setTransform(10.85,-13.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy3, new cjs.Rectangle(-1.7,-26,192.79999999999998,108.8), null);


(lib.copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAIIgDgCIgCgDIAAgDIAAgCIACgDIADgCIACAAIADAAIADACIACADIAAACIAAADIgCADIgDACIgDAAIgCAAg");
	this.shape.setTransform(183.175,70.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgEgDIAJgJQABACADACQACABADAAIADgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgEgCIgFgBIgGgCIgEgCQgBgDAAgEQAAgEABgDIAEgEIAGgDIAGgBIAJABQAEABADAEIgIAIQgDgEgFAAIgCABQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIADACIAFABIAGACIAEADQACADAAAEQAAAEgCACQgCAEgDABIgGACIgGABIgKgBg");
	this.shape_1.setTransform(179.975,68.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_2.setTransform(176.475,68.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAWQgDAAgCgCQgDgCAAgDQgCgCAAgDQAAgEACgDIADgDIAGgDIAGgBIAFgBIAHAAQgBgDgCgDQgCgCgEAAIgFACIgFAEIgHgIQAEgEAFgBQAEgCAFAAQAGAAAEABQAEACACADQADADAAAEIABAJIAAAWIgMAAIAAgFQgDADgEABQgCACgFAAIgFgBgAgCADIgEACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACgBIADgBIADgCIABgFIAAgCIgEAAIgEAAg");
	this.shape_3.setTransform(172.2,68.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgCgEQgCgFAAgFQAAgEACgEQACgFAEgCQADgDAEgCQAFgCAEAAQAEAAAEACQAEACACADQAEACABAFQACAEgBAEIAAAEIgeAAQABAEACADQADACADAAQADAAACgBIAFgEIAJAGQgDAEgFADQgFACgFAAQgEAAgFgCgAAJgEQAAgDgDgCQgCgDgDAAIgEAAIgCADIgCACIgBADIARAAIAAAAg");
	this.shape_4.setTransform(167.5,68.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAdIgHgBIgEgCQgCgCgBgCQgCgDABgDIAAgUIgJAAIAAgLIAJAAIAAgNIAMAAIAAANIAMAAIAAALIgMAAIAAANIAAAEIABACIACACIADABIADgBIADgBIAAALIgFACg");
	this.shape_5.setTransform(163.2,68.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAiIAAhDIANAAIAABDg");
	this.shape_6.setTransform(158.075,67.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAWQgDAAgCgCQgDgCAAgDQgCgCAAgDQAAgEACgDIADgDIAGgDIAGgBIAFgBIAHAAQgBgDgCgDQgCgCgEAAIgFACIgFAEIgHgIQAEgEAFgBQAEgCAFAAQAGAAAEABQAEACACADQACADABAEIABAJIAAAWIgMAAIAAgFQgDADgEABQgCACgFAAIgFgBgAgCADIgEACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACgBIADgBIADgCIABgFIAAgCIgEAAIgDAAg");
	this.shape_7.setTransform(154.65,68.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAhIAAgrIANAAIAAArgAgFgSQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_8.setTransform(151.375,67.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAVQgEgBgDgDQgDgDgCgEQgCgFAAgFQAAgEACgEQACgFADgCQADgDAEgCQAFgCAEAAIAIABQAEACAEADIgJAKIgDgDIgEgBQgEAAgCADQgEADAAAEQAAAFAEADQACADAEAAIAEgBIADgCIAJAJQgEADgEACIgIABQgEAAgFgCg");
	this.shape_9.setTransform(148.45,68.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAhIAAgrIANAAIAAArgAgFgSQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_10.setTransform(145.175,67.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAjIAAghIgJAAIAAgKIAJAAIAAgIIABgHQAAgDACgCQACgDACgBQAEgBAFAAIAEAAIAEAAIgBALIgCAAIgCgBQgDABgCABQgBABgBAFIAAAHIAKAAIAAAKIgKAAIAAAhg");
	this.shape_11.setTransform(142.65,67.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAhIAAgrIANAAIAAArgAgFgSQgCgDAAgDQAAgDACgCQADgDACAAQADAAACADQADACAAADQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_12.setTransform(139.975,67.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAIAdIgHgBIgEgCQgCgCgBgCQgCgDABgDIAAgUIgJAAIAAgLIAJAAIAAgNIAMAAIAAANIAMAAIAAALIgMAAIAAANIAAAEIABACIACACIADABIADgBIADgBIAAALIgFACg");
	this.shape_13.setTransform(137.1,68.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_14.setTransform(133.925,68.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAWQgDAAgCgCQgCgCgBgDQgCgCAAgDQAAgEACgDIADgDIAGgDIAGgBIAFgBIAGAAQAAgDgCgDQgCgCgEAAIgFACIgFAEIgHgIQAEgEAEgBQAFgCAFAAQAGAAAEABQADACADADQADADAAAEIABAJIAAAWIgNAAIAAgFQgBADgFABQgCACgFAAIgFgBgAgCADIgEACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIACgBIAEgBIACgCIAAgFIAAgCIgCAAIgFAAg");
	this.shape_15.setTransform(129.65,68.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAOIAAgLIAxAAIAAALgAgYgCIAAgLIAxAAIAAALg");
	this.shape_16.setTransform(122.1,68.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgEgDIAJgJQABACADACQACABADAAIADgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgEgCIgFgBIgGgCIgEgCQgBgDAAgEQAAgEABgDIAEgEIAGgDIAGgBIAJABQAEABADAEIgIAIQgDgEgFAAIgCABQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIADACIAFABIAGACIAEADQACADAAAEQAAAEgCACQgCAEgDABIgGACIgGABIgKgBg");
	this.shape_17.setTransform(114.775,68.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAhIAAg/IANAAIAAAFIACgCIADgCIAEgCIADgBQAFAAAEACQAEACADADQADADABAEQACAEAAAFQAAAFgCAEQgBADgDADIgGAFQgEACgEAAIgHgBQgEgBgCgDIAAAZgAgHgRQgDADAAAFQAAAFADADQACACAFAAQAFAAACgCQADgDAAgFQAAgFgDgDQgCgDgFAAQgFAAgCADg");
	this.shape_18.setTransform(110.225,69.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAVQgEgBgEgDQgDgDgBgEQgCgFAAgFQAAgEACgEIAEgHQAEgDAEgCQAFgCAEAAQAFAAAEACQAFACADADQAEACACAFQABAEAAAEQAAAFgBAFQgCAEgEADQgDADgFABQgEACgFAAQgEAAgFgCgAgHgHQgDADAAAEQAAAFADADQADADAEAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_19.setTransform(104.75,68.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_20.setTransform(100.725,68.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAhQgEgBgDgEQgDgDgBgEQgCgEAAgFIACgJIAEgGQACgDAEgCQAEgCAEAAQAEAAADABQAEABACADIAAgdIAOAAIAABEIgNAAIAAgHIgCADIgDADIgEABIgDABQgFgBgEgBgAgGADQgDAEAAAEQAAAGADACQADADAEAAQAFAAADgDQACgCAAgGQAAgEgCgEQgDgDgFAAQgEAAgDADg");
	this.shape_21.setTransform(95.925,67.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgBgEQgCgFAAgFQAAgEACgEQABgFAEgCQADgDAEgCQAEgCAEAAQAGAAADACQAEACACADQADACACAFQABAEABAEIAAAEIgfAAQAAAEAEADQACACADAAQADAAACgBIAEgEIAKAGQgDAEgFADQgFACgGAAQgEAAgEgCgAAJgEQAAgDgDgCQgCgDgEAAIgCAAIgDADIgDACIAAADIARAAIAAAAg");
	this.shape_22.setTransform(88.45,68.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAfIACgLIAGABIAEAAIACgCIACgCIABgDIABgDIgTgrIAPAAIAKAdIAAAAIAKgdIAOAAIgUAyIgDAHIgCAEIgFACIgIACQgFAAgFgCg");
	this.shape_23.setTransform(83.575,69.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgEgDQgDgDgBgEQgCgFgBgFQABgEACgEQABgFADgCQAEgDAEgCQAFgCADAAQAFAAAEACQAEACADADQADACABAFQABAEAAAEIAAAEIgeAAQAAAEADADQADACADAAQAEAAACgBIADgEIAKAGQgDAEgFADQgFACgGAAQgDAAgFgCgAAJgEQAAgDgCgCQgDgDgEAAIgCAAIgEADIgCACIAAADIARAAIAAAAg");
	this.shape_24.setTransform(78.7,68.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_25.setTransform(72.225,68.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgCgEQgBgFAAgFQAAgEABgEQACgFAEgCQADgDAEgCQAEgCAFAAQAFAAADACQAEACACADQADACACAFQABAEABAEIAAAEIgfAAQABAEADADQACACADAAQADAAACgBIAFgEIAJAGQgDAEgFADQgFACgFAAQgFAAgEgCgAAJgEQAAgDgDgCQgCgDgEAAIgCAAIgDADIgDACIAAADIARAAIAAAAg");
	this.shape_26.setTransform(67.85,68.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAHAdIgFgBIgFgCQgCgCgBgCQgBgDAAgDIAAgUIgJAAIAAgLIAJAAIAAgNIAMAAIAAANIAMAAIAAALIgMAAIAAANIAAAEIABACIACACIAEABIACgBIADgBIAAALIgFACg");
	this.shape_27.setTransform(63.55,68.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAIAXIAAgWIAAgDIgBgEIgCgDIgFAAIgDAAIgDADIgBAEIAAACIAAAXIgNAAIAAgrIAMAAIAAAFIABAAIABgCIAEgCIACgBIAFgBQAFAAADACIAFADIACAHIABAJIAAAXg");
	this.shape_28.setTransform(59.45,68.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAVQgEgCgCgDIgBgGIgBgIIAAgXIANAAIAAAVIAAADIABAEIADACIADABIADAAIADgDIABgEIABgDIAAgVIANAAIAAAqIgNAAIAAgGIgCADIgDACIgDACIgEAAQgFAAgDgBg");
	this.shape_29.setTransform(54.5,68.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAVQgEgBgEgDQgDgDgBgEQgCgFAAgFQAAgEACgEIAEgHQAEgDAEgCQAFgCAEAAQAFAAAEACQAFACADADQAEACACAFQABAEAAAEQAAAFgBAFQgCAEgEADQgDADgFABQgEACgFAAQgEAAgFgCgAgHgHQgDADAAAEQAAAFADADQADADAEAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAQgEAAgDADg");
	this.shape_30.setTransform(49.4,68.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAVQgFgBgDgDQgEgDgBgEQgCgFAAgFQAAgEACgEQABgFAEgCQADgDAFgCQAEgCAEAAIAJABQAEACADADIgJAKIgDgDIgEgBQgEAAgDADQgCADAAAEQAAAFACADQADADAEAAIAEgBIADgCIAJAJQgDADgEACIgJABQgEAAgEgCg");
	this.shape_31.setTransform(44.9,68.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKAGIAAgKIAVAAIAAAKg");
	this.shape_32.setTransform(41.425,68.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgEgDQgDgDgBgEQgCgFgBgFQABgEACgEQABgFADgCQAEgDAEgCQAFgCADAAQAFAAAEACQAEACADADQADACABAFQABAEAAAEIAAAEIgeAAQAAAEADADQADACADAAQAEAAACgBIADgEIAKAGQgDAEgFADQgFACgGAAQgDAAgFgCgAAJgEQAAgDgCgCQgDgDgEAAIgCAAIgEADIgCACIAAADIARAAIAAAAg");
	this.shape_33.setTransform(37.75,68.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAIAiIAAgVIAAgFIgBgDIgDgDIgEgBIgDABIgDADIgBADIAAAEIAAAWIgNAAIAAhDIANAAIAAAeIACgCIADgDIACgBIAEgBQAGAAADACIAFAEIACAGIABAIIAAAYg");
	this.shape_34.setTransform(32.8,67.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAIAdIgHgBIgDgCQgDgCgBgCQgBgDgBgDIAAgUIgIAAIAAgLIAIAAIAAgNIANAAIAAANIAMAAIAAALIgMAAIAAANIABAEIAAACIACACIADABIAEgBIACgBIAAALIgEACg");
	this.shape_35.setTransform(28.5,68.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgKAGIAAgKIAVAAIAAAKg");
	this.shape_36.setTransform(25.625,68.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgOAXIAAgrIANAAIAAAHQABgEADgCQADgCAFAAIACAAIACAAIAAAMIgDAAIgCAAIgHAAIgDADIgBAGIAAAEIAAATg");
	this.shape_37.setTransform(23.375,68.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDQgEgDgCgEQgCgFAAgFQAAgEACgEQACgFAEgCQADgDAEgCQAFgCAEAAQAEAAAEACQAEACACADQAEACABAFQACAEgBAEIAAAEIgeAAQABAEACADQADACADAAQADAAACgBIAFgEIAJAGQgDAEgFADQgFACgFAAQgEAAgFgCgAAJgEQAAgDgDgCQgCgDgDAAIgEAAIgCADIgCACIgBADIARAAIAAAAg");
	this.shape_38.setTransform(19,68.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAWIgSgrIAPAAIAKAdIAKgdIAOAAIgSArg");
	this.shape_39.setTransform(14.1,68.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAfQgGgCgEgFQgFgEgDgGQgCgGAAgIQAAgGACgHQADgGAFgEQAEgEAGgDQAGgDAHABQAIgBAFADQAHADAEAEQAFAEADAGQACAHAAAGQAAAIgCAGQgDAGgFAEQgEAFgHACQgFACgIAAQgHAAgGgCgAgHgSQgEACgCADQgDACgCAEQgBADAAAEQAAAEABAFIAFAGQACACAEACQAEABADABQAFgBADgBIAGgEIAFgGQABgFAAgEQAAgEgBgDQgCgEgDgCQgDgDgDgCQgDgCgFAAQgDAAgEACg");
	this.shape_40.setTransform(8.1,67.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAAAIIgHAKIgHgGIAIgKIgMgDIADgIIALAEIAAgMIAJAAIAAAMIALgEIADAJIgMACIAIALIgIAFg");
	this.shape_41.setTransform(2.425,66.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAAKIgJAOIgKgHIAKgOIgPgEIADgMIAQAGIAAgRIALAAIAAARIAQgFIADAMIgPADIAKAOIgKAIg");
	this.shape_42.setTransform(170.9,7.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVA2QgKgDgHgHIARgTQAEAFAFACQAGADAFAAIAGAAIAFgDQACgBACgCQABgCAAgDQABgFgEgDQgEgDgGgCIgMgEQgGgCgFgDQgHgDgDgFQgEgGAAgJQAAgJAEgHQADgGAGgFQAGgEAHgDQAIgCAHAAQAJAAAJADQAIADAIAGIgRASQgDgEgFgCIgJgBIgGAAIgEACQgDABgCADQgBACAAADQAAAFAEACQAEADAEACIANAEIALAFQAGACAEAGQAEAGAAAJQAAAKgEAGQgDAHgGAFQgGAEgHACQgIADgIAAQgLAAgIgEg");
	this.shape_43.setTransform(190.15,47.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBKAAIAAAWIgxAAIAAAVIAuAAIAAAVIguAAIAAAWIA0AAIAAAXg");
	this.shape_44.setTransform(181.425,47.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLA3IAAgvIgpg+IAeAAIAWApIAZgpIAcAAIgpA+IAAAvg");
	this.shape_45.setTransform(171.575,47.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBKAAIAAAWIgxAAIAAAVIAuAAIAAAVIguAAIAAAWIA0AAIAAAXg");
	this.shape_46.setTransform(162.075,47.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAPA3IgWgsIgLAAIAAAsIgZAAIAAhtIArAAQAHAAAHACQAIABAGAEQAFAEAEAGQADAHAAAJQAAAMgGAIQgGAHgLACIAbAvgAgSgJIANAAIAHAAIAGgBQADgBACgDQACgCAAgFQAAgEgCgDIgEgDIgGgCIgGgBIgPAAg");
	this.shape_47.setTransform(148.35,47.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTA1QgJgEgFgGQgGgGgDgIQgDgIAAgKIAAhCIAYAAIAABBQAAAFACAEQABAFADADQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgFQABgEAAgFIAAhBIAYAAIAABCQAAAKgDAIQgCAIgGAGQgGAGgJAEQgIADgMAAQgKAAgJgDg");
	this.shape_48.setTransform(137.325,47.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXA2QgKgFgJgHQgHgIgFgKQgEgLAAgNQAAgMAEgLQAFgLAHgHQAJgIAKgEQALgEAMAAQANAAAKAEQALAEAJAIQAHAHAFALQAEALAAAMQAAANgEALQgFAKgHAIQgJAHgLAFQgKAEgNAAQgMAAgLgEgAgNggQgHADgEAFQgFAEgCAHQgCAGAAAHQAAAIACAGQACAGAFAFQAEAFAHADQAGACAHAAQAHAAAHgCQAGgDAFgFQAEgFACgGQADgGAAgIQAAgHgDgGQgCgHgEgEQgFgFgGgDQgHgCgHAAQgHAAgGACg");
	this.shape_49.setTransform(125.4,47.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgLA3IAAgvIgpg+IAeAAIAWApIAZgpIAcAAIgpA+IAAAvg");
	this.shape_50.setTransform(114.175,47.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQA2QgLgFgIgHQgIgIgFgKQgDgLAAgNQAAgMADgLQAFgLAIgHQAIgIALgEQAKgEAMAAQANAAALADQAMAEAIAHIgRATQgFgFgGgDQgGgCgKAAQgGAAgGACQgHADgEAFQgFAEgCAHQgCAGAAAHQAAAIACAGQACAGAFAFQAEAFAHADQAFACAHAAQAJAAAFgCIAJgDIAAgSIgTAAIAAgVIArAAIAAA4QgLAGgMACQgMADgMAAQgMAAgKgEg");
	this.shape_51.setTransform(98.75,47.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAVA3IgwhNIAABNIgYAAIAAhtIAhAAIAuBLIAAAAIAAhLIAYAAIAABtg");
	this.shape_52.setTransform(86.85,47.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLA3IAAhtIAXAAIAABtg");
	this.shape_53.setTransform(78.5,47.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLA3IAAhYIgfAAIAAgVIBVAAIAAAVIgfAAIAABYg");
	this.shape_54.setTransform(72,47.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAeA3IgJgXIgqAAIgJAXIgbAAIAwhtIATAAIAwBtgAANALIgNghIgNAhIAaAAg");
	this.shape_55.setTransform(63.45,47.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNA2QgLgFgIgHQgIgIgEgKQgEgLAAgNQAAgMAEgLQAEgLAIgHQAIgIALgEQALgEAMAAIAJABIAKADIAKAFQAEADAEAEIgTAQQgDgFgGgCQgFgCgHAAQgGAAgFACQgGADgEAFQgFAEgCAHQgCAGAAAHQAAAIACAGQACAGAFAFQAEAFAFADQAFACAHAAQAHAAAGgDQAGgDADgGIAUAPQgHAKgKAFQgLAFgLAAQgMAAgLgEg");
	this.shape_56.setTransform(52.775,47.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLA3IAAhtIAXAAIAABtg");
	this.shape_57.setTransform(45.25,47.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAPA3IgWgsIgLAAIAAAsIgZAAIAAhtIArAAQAHAAAIACQAHABAFAEQAGAEADAGQAEAHAAAJQAAAMgGAIQgGAHgLACIAbAvgAgSgJIANAAIAGAAIAHgBQADgBACgDQACgCAAgFQAAgEgCgDIgEgDIgGgCIgGgBIgPAAg");
	this.shape_58.setTransform(38.65,47.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgqA3IAAhtIApAAIANABQAHABAGADQAGADADAFQAEAGAAAJQAAAJgFAGQgFAGgJADIAKACQAEADADADQAEAEABAEQACAFAAAFQAAAJgEAGQgDAGgGADQgGAEgHABIgPACgAgSAiIAVAAIAFAAIAGgCIADgEQACgDAAgEQAAgDgCgDQgCgCgDgBIgGgCIgGgBIgSAAgAgSgKIASAAIAEgBIAFgCIAEgDIABgGQAAgDgCgDIgEgDIgFgCIgEgBIgRAAg");
	this.shape_59.setTransform(28.775,47.475);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgTA1QgJgEgFgGQgGgGgDgIQgDgIAAgKIAAhCIAYAAIAABBQAAAFACAEQABAFADADQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgFQABgEAAgFIAAhBIAYAAIAABCQAAAKgDAIQgCAIgGAGQgGAGgJAEQgIADgMAAQgKAAgJgDg");
	this.shape_60.setTransform(17.825,47.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AghA3IAAhtIAYAAIAABWIArAAIAAAXg");
	this.shape_61.setTransform(8.65,47.475);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLA3IAAgvIgpg+IAeAAIAWApIAZgpIAcAAIgpA+IAAAvg");
	this.shape_62.setTransform(154.525,29.325);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgqA3IAAhtIApAAIANABQAHABAGADQAGADADAFQAEAGAAAJQAAAJgFAGQgFAGgJADIAKACQAEADADADQAEAEABAEQACAFAAAFQAAAJgEAGQgDAGgGADQgGAEgHABIgPACgAgSAiIAVAAIAFAAIAGgCIADgEQACgDAAgEQAAgDgCgDQgCgCgDgBIgGgCIgGgBIgSAAgAgSgKIASAAIAEgBIAFgCIAEgDIABgGQAAgDgCgDIgEgDIgFgCIgEgBIgRAAg");
	this.shape_63.setTransform(145.125,29.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AASA3Igsg0IAAA0IgYAAIAAhtIAYAAIAAAuIAqguIAfAAIgwAzIA0A6g");
	this.shape_64.setTransform(130.725,29.325);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAPA3IgWgsIgLAAIAAAsIgZAAIAAhtIArAAQAHAAAIACQAHABAFAEQAGAEAEAGQADAHAAAJQAAAMgGAIQgGAHgLACIAbAvgAgSgJIANAAIAGAAIAHgBQADgBACgDQACgCAAgFQAAgEgCgDIgEgDIgGgCIgGgBIgPAAg");
	this.shape_65.setTransform(120.1,29.325);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgXA2QgKgFgJgHQgHgIgFgKQgEgLAAgNQAAgMAEgLQAFgLAHgHQAJgIAKgEQALgEAMAAQANAAALAEQAKAEAJAIQAHAHAFALQAEALAAAMQAAANgEALQgFAKgHAIQgJAHgKAFQgLAEgNAAQgMAAgLgEgAgNggQgHADgEAFQgEAEgDAHQgCAGAAAHQAAAIACAGQADAGAEAFQAEAFAHADQAGACAHAAQAIAAAGgCQAGgDAFgFQAFgFABgGQADgGAAgIQAAgHgDgGQgBgHgFgEQgFgFgGgDQgGgCgIAAQgHAAgGACg");
	this.shape_66.setTransform(108.4,29.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAYA3IgYhLIAAAAIgXBLIgWAAIgghtIAbAAIARBFIABAAIAWhFIAWAAIAWBHIABAAIAShHIAZAAIghBtg");
	this.shape_67.setTransform(94.4,29.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgLA3IAAgvIgpg+IAeAAIAWApIAZgpIAcAAIgpA+IAAAvg");
	this.shape_68.setTransform(77.525,29.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AghA3IAAhtIAYAAIAABWIArAAIAAAXg");
	this.shape_69.setTransform(70.75,29.325);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AghA3IAAhtIAYAAIAABWIArAAIAAAXg");
	this.shape_70.setTransform(62.65,29.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAeA3IgJgXIgqAAIgJAXIgbAAIAwhtIATAAIAvBtgAAMALIgMghIgOAhIAaAAg");
	this.shape_71.setTransform(52.5,29.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgNA2QgLgFgIgHQgIgIgEgKQgEgLAAgNQAAgMAEgLQAEgLAIgHQAIgIALgEQALgEAMAAIAJABIAKADIAKAFQAEADAEAEIgTAQQgDgFgGgCQgFgCgHAAQgGAAgFACQgGADgEAFQgFAEgCAHQgCAGAAAHQAAAIACAGQACAGAFAFQAEAFAFADQAFACAHAAQAHAAAGgDQAGgDADgGIAUAPQgHAKgKAFQgLAFgLAAQgMAAgLgEg");
	this.shape_72.setTransform(41.825,29.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgLA3IAAhtIAXAAIAABtg");
	this.shape_73.setTransform(34.3,29.325);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgoA3IAAhtIAoAAQAIAAAIACQAHABAGAEQAGAEADAGQADAHAAAJQAAAKgDAGQgDAGgFAEQgGAEgHABQgIACgIAAIgRAAIAAArgAgQgIIAQAAIAFAAIAGgCIAEgEQABgDAAgEQAAgEgCgCIgFgEIgGgCIgGgBIgNAAg");
	this.shape_74.setTransform(27.675,29.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLA3IAAgvIgpg+IAeAAIAWApIAZgpIAcAAIgpA+IAAAvg");
	this.shape_75.setTransform(17.675,29.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgLA3IAAhYIgfAAIAAgVIBVAAIAAAVIgfAAIAABYg");
	this.shape_76.setTransform(8.45,29.325);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgWA2QgIgDgJgHIARgTQAEAFAGACQAFADAHAAIAEAAIAGgDQADgBABgCQACgCAAgDQgBgFgEgDQgDgDgGgCIgLgEQgHgCgGgDQgFgDgEgFQgEgGAAgJQAAgJADgHQAEgGAGgFQAGgEAHgDQAIgCAHAAQAJAAAJADQAJADAGAGIgQASQgDgEgFgCIgKgBIgFAAIgFACQgCABgBADQgCACAAADQAAAFAEACQADADAFACIAMAEIANAFQAFACAEAGQAEAGgBAJQABAKgEAGQgDAHgGAFQgGAEgIACQgHADgHAAQgLAAgKgEg");
	this.shape_77.setTransform(164.1,11.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgoA3IAAhtIAoAAQAIAAAIACQAHABAGAEQAGAEADAGQADAHAAAJQAAAKgDAGQgDAGgFAEQgGAEgHABQgIACgIAAIgRAAIAAArgAgQgIIAQAAIAFAAIAGgCIAEgEQABgDAAgEQAAgEgCgCIgFgEIgGgCIgGgBIgNAAg");
	this.shape_78.setTransform(155.525,11.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgWA2QgMgFgHgHQgJgIgEgKQgEgLAAgNQAAgMAEgLQAEgLAJgHQAHgIAMgEQAKgEAMAAQANAAAKAEQAMAEAHAIQAJAHAEALQAEALAAAMQAAANgEALQgEAKgJAIQgHAHgMAFQgKAEgNAAQgMAAgKgEgAgNggQgGADgFAFQgFAEgCAHQgCAGAAAHQAAAIACAGQACAGAFAFQAFAFAGADQAGACAHAAQAIAAAGgCQAHgDAEgFQAEgFACgGQADgGAAgIQAAgHgDgGQgCgHgEgEQgEgFgHgDQgGgCgIAAQgGAAgHACg");
	this.shape_79.setTransform(144.1,11.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAPA3IgWgsIgMAAIAAAsIgYAAIAAhtIAqAAQAIAAAIACQAHABAFAEQAHAEACAGQAEAHAAAJQAAAMgGAIQgGAHgLACIAbAvgAgTgJIAPAAIAFAAIAHgBQADgBACgDQACgCAAgFQAAgEgCgDIgEgDIgGgCIgGgBIgQAAg");
	this.shape_80.setTransform(133.35,11.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgyA3IAAhtIAlAAQANAAALADQAMADAIAGQAJAHAFALQAGAKAAAOQAAAOgFAKQgFAKgJAHQgJAHgLADQgLAEgLAAgAgZAgIAMAAQAJAAAGgBQAHgCAFgEQAFgEADgGQAEgHAAgIQAAgIgEgGQgDgGgFgEQgFgEgHgCQgGgCgHAAIgOAAg");
	this.shape_81.setTransform(122.475,11.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBKAAIAAAWIgxAAIAAAVIAuAAIAAAVIguAAIAAAWIA0AAIAAAXg");
	this.shape_82.setTransform(107.475,11.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgLA3IAAgvIgpg+IAeAAIAWApIAZgpIAcAAIgpA+IAAAvg");
	this.shape_83.setTransform(97.625,11.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBKAAIAAAWIgxAAIAAAVIAuAAIAAAVIguAAIAAAWIA0AAIAAAXg");
	this.shape_84.setTransform(88.125,11.175);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAPA3IgWgsIgMAAIAAAsIgYAAIAAhtIAqAAQAIAAAIACQAHABAFAEQAHAEACAGQAEAHAAAJQAAAMgGAIQgGAHgMACIAcAvgAgTgJIAPAAIAFAAIAHgBQADgBACgDQACgCAAgFQAAgEgCgDIgEgDIgGgCIgGgBIgQAAg");
	this.shape_85.setTransform(74.4,11.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBKAAIAAAWIgxAAIAAAVIAuAAIAAAVIguAAIAAAWIA0AAIAAAXg");
	this.shape_86.setTransform(64.425,11.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLA3IAAhYIggAAIAAgVIBWAAIAAAVIgfAAIAABYg");
	this.shape_87.setTransform(55.15,11.175);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAUA3IgvhNIAABNIgYAAIAAhtIAhAAIAtBLIABAAIAAhLIAYAAIAABtg");
	this.shape_88.setTransform(44.6,11.175);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgTA1QgJgEgFgGQgGgGgDgIQgDgIAAgKIAAhCIAYAAIAABBQAAAFACAEQABAFADADQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgDACgFQABgEAAgFIAAhBIAYAAIAABCQAAAKgDAIQgCAIgGAGQgGAGgJAEQgIADgMAAQgKAAgJgDg");
	this.shape_89.setTransform(32.775,11.325);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgWA2QgLgFgJgHQgHgIgFgKQgEgLAAgNQAAgMAEgLQAFgLAHgHQAJgIALgEQAKgEAMAAQANAAALAEQALAEAIAIQAHAHAFALQAEALAAAMQAAANgEALQgFAKgHAIQgIAHgLAFQgLAEgNAAQgMAAgKgEgAgNggQgGADgFAFQgEAEgCAHQgDAGAAAHQAAAIADAGQACAGAEAFQAFAFAGADQAGACAHAAQAIAAAGgCQAHgDAEgFQAFgFACgGQACgGAAgIQAAgHgCgGQgCgHgFgEQgEgFgHgDQgGgCgIAAQgGAAgHACg");
	this.shape_90.setTransform(20.85,11.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgNA2QgLgFgIgHQgIgIgEgKQgEgLAAgNQAAgMAEgLQAEgLAIgHQAIgIALgEQALgEAMAAIAJABIAKADIAKAFQAEADAEAEIgTAQQgDgFgGgCQgFgCgHAAQgGAAgFACQgGADgEAFQgFAEgCAHQgCAGAAAHQAAAIACAGQACAGAFAFQAEAFAFADQAFACAHAAQAHAAAGgDQAGgDADgGIAUAPQgHAKgKAFQgLAFgLAAQgMAAgLgEg");
	this.shape_91.setTransform(9.475,11.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgSAJIAAgRIAlAAIAAARg");
	this.shape_92.setTransform(83.1,-5.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBKAAIAAAWIgxAAIAAAVIAuAAIAAAVIguAAIAAAWIA0AAIAAAXg");
	this.shape_93.setTransform(76.325,-6.975);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAYA3IAAgwIguAAIAAAwIgZAAIAAhtIAZAAIAAApIAuAAIAAgpIAYAAIAABtg");
	this.shape_94.setTransform(65.575,-6.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgLA3IAAhYIggAAIAAgVIBWAAIAAAVIgfAAIAABYg");
	this.shape_95.setTransform(55.5,-6.975);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgSAJIAAgRIAlAAIAAARg");
	this.shape_96.setTransform(49,-5.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAPA3IgVgsIgNAAIAAAsIgYAAIAAhtIAqAAQAIAAAHACQAIABAGAEQAFAEAEAGQADAHAAAJQAAAMgGAIQgGAHgMACIAcAvgAgTgJIAOAAIAHAAIAGgBQADgBACgDQACgCAAgFQAAgEgCgDIgEgDIgGgCIgGgBIgQAAg");
	this.shape_97.setTransform(42.4,-6.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgmA3IAAhtIBKAAIAAAWIgxAAIAAAVIAuAAIAAAVIguAAIAAAWIA0AAIAAAXg");
	this.shape_98.setTransform(32.425,-6.975);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgKA3IgrhtIAbAAIAaBHIABAAIAbhHIAaAAIgtBtg");
	this.shape_99.setTransform(22.125,-6.975);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgXA2QgLgFgHgHQgJgIgEgKQgEgLAAgNQAAgMAEgLQAEgLAJgHQAHgIALgEQALgEAMAAQANAAAKAEQAMAEAHAIQAJAHAEALQAEALAAAMQAAANgEALQgEAKgJAIQgHAHgMAFQgKAEgNAAQgMAAgLgEgAgNggQgGADgFAFQgFAEgCAHQgCAGAAAHQAAAIACAGQACAGAFAFQAFAFAGADQAGACAHAAQAIAAAGgCQAHgDAEgFQAEgFACgGQADgGAAgIQAAgHgDgGQgCgHgEgEQgEgFgHgDQgGgCgIAAQgGAAgHACg");
	this.shape_100.setTransform(10.45,-6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(-1.7,-19,198.5,95.1), null);


(lib.copy1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBFQgDgCgCgDIgFgFIgBgHIABgHIAFgGIAFgDQADgCADABQAEgBADACIAFADIAEAGIABAHIgBAHIgEAFQgCADgDACIgHABIgGgBgAgNAYIAAgIQAAgGABgEQACgEADgCIAJgJIAHgIIAGgGQABgDABgDQgBgGgDgDQgFgEgFAAQgIAAgFAFQgEAEgBAHIgdgBQACgUANgLQANgLASAAQAJABAHACQAIACAHAFQAFAFAEAHQADAHAAAJIgBAKIgEAJIgHAIIgLAKQgFADgBADIgCAHIAAAFg");
	this.shape.setTransform(117.6,62.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBDIAAiFIBZAAIAAAbIg8AAIAAAbIA4AAIAAAbIg4AAIAAA0g");
	this.shape_1.setTransform(106.8,62.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBDIAAiFIBaAAIAAAbIg9AAIAAAZIA6AAIAAAbIg6AAIAAAbIBAAAIAAAbg");
	this.shape_2.setTransform(95.075,62.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_3.setTransform(86.075,62.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBDIAAiFIAdAAIAABqIA2AAIAAAbg");
	this.shape_4.setTransform(78.775,62.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBDIAAiFIBaAAIAAAbIg9AAIAAAZIA6AAIAAAbIg6AAIAAAbIBAAAIAAAbg");
	this.shape_5.setTransform(67.325,62.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBDIgbg2IgPAAIAAA2IgeAAIAAiFIA1AAQAJAAAJACQAJACAHAEQAHAFAEAIQAEAIAAAMQAAAOgIAKQgHAJgOACIAiA5gAgXgLIARAAIAIAAIAIgCQAEgBACgDQACgDAAgGQAAgFgCgDQgCgDgDgBQgEgCgEgBIgHAAIgTAAg");
	this.shape_6.setTransform(55.55,62.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBDIAAiFIBaAAIAAAbIg9AAIAAAZIA6AAIAAAbIg6AAIAAAbIBAAAIAAAbg");
	this.shape_7.setTransform(37.475,62.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBDIAAg5Ig0hMIAlAAIAcAyIAfgyIAjAAIgzBMIAAA5g");
	this.shape_8.setTransform(25.1,62.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguBDIAAiFIBaAAIAAAbIg9AAIAAAZIA6AAIAAAbIg6AAIAAAbIBAAAIAAAbg");
	this.shape_9.setTransform(13.225,62.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBDIAAg5IgzhMIAlAAIAbAyIAfgyIAiAAIgyBMIAAA5g");
	this.shape_10.setTransform(126.6,39.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASBDIgag2IgPAAIAAA2IgeAAIAAiFIA1AAQAJAAAJACQAJACAHAEQAHAFAEAIQAEAIAAAMQAAAOgHAKQgIAJgOACIAiA5gAgXgLIARAAIAHAAIAJgCQAEgBACgDQACgDAAgGQAAgFgCgDQgCgDgDgBQgEgCgEgBIgHAAIgTAAg");
	this.shape_11.setTransform(115.6,39.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag9BDIAAiFIAsAAQARAAANADQAPAEAKAIQALAIAHANQAGANAAARQAAARgGAMQgGANgLAIQgKAJgOAEQgOAEgOAAgAgfAoIAPAAQAKAAAIgCQAJgCAGgFQAHgFAEgIQADgIAAgKQAAgKgDgHQgEgIgGgEQgHgFgIgCQgIgDgJAAIgRAAg");
	this.shape_12.setTransform(102.025,39.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBCQgNgFgKgJQgJgKgGgNQgGgNABgQQgBgPAGgNQAGgNAJgKQAKgJANgFQAOgFAOAAQAQAAAOAEQAOAEAKAKIgWAWQgFgGgIgDQgHgDgMAAQgJAAgHADQgIADgGAGQgFAGgDAIQgDAIAAAIQAAAKADAHQADAIAFAGQAGAGAIADQAHADAJAAQAKAAAGgCIAMgEIAAgWIgYAAIAAgbIA1AAIAABGQgOAHgOADQgOADgPAAQgOAAgOgFg");
	this.shape_13.setTransform(81.2,39.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZBDIg6heIAABeIgeAAIAAiFIApAAIA4BcIAAAAIAAhcIAeAAIAACFg");
	this.shape_14.setTransform(66.375,39.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_15.setTransform(55.875,39.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBDIAAhrIgmAAIAAgaIBpAAIAAAaIgmAAIAABrg");
	this.shape_16.setTransform(47.6,39.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbBDQgKgEgLgJIAVgXQAFAGAHADQAHADAHAAIAHgBIAHgCQADgCABgCQACgDAAgEQAAgGgFgDQgEgEgHgCIgPgFQgHgDgIgEQgHgDgFgHQgEgHAAgLQAAgLAEgIQAFgIAGgGQAIgFAJgDQAKgDAIAAQALAAAMAEQAKADAJAHIgVAXQgDgFgGgCQgHgCgGAAIgGAAIgFADQgDABgDADQgBADAAAEQAAAGAFADQAEADAGACIAPAFQAIACAGAEQAIAEAEAHQAEAHABALQAAAMgFAIQgDAIgIAGQgHAFgKADQgJADgJAAQgNAAgMgEg");
	this.shape_17.setTransform(36.45,39.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAlBDIgLgcIg0AAIgLAcIghAAIA7iFIAXAAIA7CFgAAQAOIgQgpIgRApIAhAAg");
	this.shape_18.setTransform(24.25,39.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBDIAAiFIAdAAIAABqIA2AAIAAAbg");
	this.shape_19.setTransform(12.725,39.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUBCQgNgFgKgJQgKgKgFgNQgGgNAAgQQAAgPAGgNQAFgNAKgKQAKgJANgFQAOgFAOAAQAQAAAOAEQAOAEAJAKIgVAWQgFgGgIgDQgIgDgLAAQgIAAgIADQgIADgGAGQgFAGgDAIQgDAIAAAIQAAAKADAHQADAIAFAGQAGAGAIADQAIADAIAAQAKAAAGgCIAMgEIAAgWIgYAAIAAgbIA1AAIAABGQgNAHgPADQgOADgPAAQgOAAgOgFg");
	this.shape_20.setTransform(131.4,16.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZBDIg6heIAABeIgeAAIAAiFIApAAIA4BcIAAAAIAAhcIAeAAIAACFg");
	this.shape_21.setTransform(116.575,16.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOBDIAAiFIAdAAIAACFg");
	this.shape_22.setTransform(106.075,16.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBDIAAhrIgmAAIAAgaIBpAAIAAAaIgmAAIAABrg");
	this.shape_23.setTransform(97.8,16.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOBDIAAhrIgmAAIAAgaIBpAAIAAAaIgmAAIAABrg");
	this.shape_24.setTransform(86.9,16.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AguBDIAAiFIBaAAIAAAbIg9AAIAAAZIA6AAIAAAbIg6AAIAAAbIBAAAIAAAbg");
	this.shape_25.setTransform(75.725,16.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUBCQgNgFgKgJQgJgKgGgNQgGgNABgQQgBgPAGgNQAGgNAJgKQAKgJANgFQAOgFAOAAQAQAAAOAEQAOAEAKAKIgWAWQgFgGgIgDQgHgDgMAAQgJAAgHADQgIADgGAGQgFAGgDAIQgDAIAAAIQAAAKADAHQADAIAFAGQAGAGAIADQAHADAJAAQAKAAAGgCIAMgEIAAgWIgYAAIAAgbIA1AAIAABGQgOAHgOADQgOADgPAAQgOAAgOgFg");
	this.shape_26.setTransform(61.85,16.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOBDIAAhrIgmAAIAAgaIBpAAIAAAaIgmAAIAABrg");
	this.shape_27.setTransform(43.7,16.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcBCQgOgFgJgJQgJgKgGgNQgGgNABgQQgBgPAGgNQAGgNAJgKQAJgJAOgFQANgFAPAAQAQAAANAFQANAFAKAJQAKAKAFANQAFANABAPQgBAQgFANQgFANgKAKQgKAJgNAFQgNAFgQAAQgPAAgNgFgAgQgnQgIADgGAGQgFAGgDAIQgDAIAAAIQAAAKADAHQADAIAFAGQAGAGAIADQAIADAIAAQAKAAAHgDQAIgDAFgGQAGgGADgIQADgIAAgJQAAgIgDgIQgDgIgGgGQgFgGgIgDQgHgDgKAAQgIAAgIADg");
	this.shape_28.setTransform(30.35,16.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZBDIg6heIAABeIgeAAIAAiFIApAAIA4BcIAAAAIAAhcIAeAAIAACFg");
	this.shape_29.setTransform(14.725,16.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(5,2,141.9,75.9), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#210184").s().p("AgXAMIAggMIgggLIAAgNIAvASIAAANIgvASg");
	this.shape.setTransform(83.85,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#210184").s().p("AgaAjIAAhFIA0AAIAAANIgkAAIAAAPIAfAAIAAAMIgfAAIAAAQIAlAAIAAANg");
	this.shape_1.setTransform(74.9,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#210184").s().p("AANAjIgNgTIAAAAIgOAAIAAATIgQAAIAAhFIAeAAQANAAAJAHQAHAHABAMQAAAPgPAFIAQAXgAgOACIANAAQAOABAAgLQAAgNgOAAIgNAAg");
	this.shape_2.setTransform(67.95,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#210184").s().p("AgbAaQgKgLAAgPQAAgPAKgKQALgKAQAAQAQAAALAKQALAKAAAPQAAAPgLALQgLAKgQAAQgQAAgLgKgAgPgPQgGAGAAAJQAAAKAGAGQAGAHAJgBQAJABAHgHQAGgGAAgKQAAgJgGgGQgHgHgJAAQgJAAgGAHg");
	this.shape_3.setTransform(59.825,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#210184").s().p("AAYAjIAAgpIgUAiIgHAAIgUghIAAAoIgPAAIAAhFIANAAIAZArIAagrIANAAIAABFg");
	this.shape_4.setTransform(50.825,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#210184").s().p("AATAjIgigqIAAAqIgQAAIAAhFIANAAIAiAqIAAgqIAQAAIAABFg");
	this.shape_5.setTransform(39.25,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#210184").s().p("AANAjIgNgTIAAAAIgOAAIAAATIgQAAIAAhFIAeAAQANAAAIAHQAJAHgBAMQAAAPgOAFIAQAXgAgOACIANAAQAOABAAgLQAAgNgOAAIgNAAg");
	this.shape_6.setTransform(31.8,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#210184").s().p("AAWAjIgGgPIgfAAIgHAPIgQAAIAfhFIAPAAIAfBFgAALAIIgLgaIgKAaIAVAAg");
	this.shape_7.setTransform(24.025,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#210184").s().p("AgaAjIAAhFIA0AAIAAANIgkAAIAAAPIAfAAIAAAMIgfAAIAAAQIAlAAIAAANg");
	this.shape_8.setTransform(17.05,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#210184").s().p("AgYAjIAAhFIAQAAIAAA4IAhAAIAAANg");
	this.shape_9.setTransform(10.9,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD000").s().p("AmtBpQgoAAAAgoIAAiBQAAgoAoAAINbAAQAoAAAAAoIAACBQAAAogoAAg");
	this.shape_10.setTransform(47,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-2,119.8,26.5);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.polaroid_7_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer_3
	this.instance = new lib.polaroid_7();
	this.instance.setTransform(52.95,18.3,1,1,4.9449,0,0,27.4,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:13.8,rotation:-2.2746,y:18.15},13,cjs.Ease.circOut).to({regX:26.6,regY:14,rotation:11.146,x:52.15,y:18.3},11,cjs.Ease.circInOut).to({rotation:5.1636,x:52.1,y:18.25},9,cjs.Ease.quadInOut).to({regX:26.5,regY:14.1,rotation:6.6518,x:52,y:18.3},6,cjs.Ease.circInOut).to({regX:26.4,rotation:4.9449,x:51.95,y:18.35},5,cjs.Ease.circOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-7.7,231.7,141);


(lib.polaroid_6_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Layer_1
	this.instance = new lib.polaroid_6();
	this.instance.setTransform(-14.95,55.05,0.9999,0.9999,16.5197,0,0,15.1,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,22.4,212.5,172.7);


(lib.polaroid_5_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.polaroid_5_1();
	this.instance.setTransform(58,44,1,1,-5.9804,0,0,75.5,70.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:71,rotation:0,x:75.5,y:71},24,cjs.Ease.circOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-30.6,176.1,173.7);


(lib.polaroid_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_168 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(168).call(this.frame_168).wait(1));

	// peal
	this.instance = new lib.peal();
	this.instance.setTransform(77.3,100,1,1,0,0,0,28.3,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.3339,scaleY:1.3339,x:64.65,y:97.8},26,cjs.Ease.quadInOut).to({scaleX:0.7703,scaleY:0.7703,x:83.85,y:101.4},16,cjs.Ease.quadOut).to({scaleX:1.3339,scaleY:1.3339,x:64.65,y:97.8},26,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:77.3,y:100},16,cjs.Ease.quadOut).to({scaleX:1.3339,scaleY:1.3339,x:64.65,y:97.8},26,cjs.Ease.quadInOut).to({scaleX:0.7703,scaleY:0.7703,x:83.85,y:101.4},16,cjs.Ease.quadOut).to({scaleX:1.3339,scaleY:1.3339,x:64.65,y:97.8},26,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:77.3,y:100},16,cjs.Ease.quadOut).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAQgZAWQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_1 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_2 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_3 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAPgaAXQgzArheAdQiGAokZAgQiNAQhyAHIksAKg");
	var mask_graphics_4 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAPgaAXQg0ArheAcQiGApkYAhQiNAQhyAHIksAKg");
	var mask_graphics_5 = new cjs.Graphics().p("Ao5o7IR4gGIAAOoQgIAQgaAXQg1AsheAcQiGApkXAgQiNARhyAHIksAKg");
	var mask_graphics_6 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgJAQgaAWQg1AsheAdQiGApkXAgQiNAShxAHIksAKg");
	var mask_graphics_7 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAPgbAXQg1AtheAcQiGAokXAiQiMARhxAIIksAKg");
	var mask_graphics_8 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_9 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKARgbAXQg3AtheAdQiGAokVAjQiMAShwAIIksAKg");
	var mask_graphics_10 = new cjs.Graphics().p("Ao5o7IR4gGIAAOeQgKARgcAYQg4AtheAdQiFAokVAkQiLAShwAJIksAKg");
	var mask_graphics_11 = new cjs.Graphics().p("Ao6o7IR4gGIABOcQgKARgdAXQg5AvheAdQiGAokTAkQiLAShvAKIktAKg");
	var mask_graphics_12 = new cjs.Graphics().p("Ao6o7IR4gGIABOZQgLASgdAXQg6AvheAcQiFApkUAlQiKAThuAKIktAKg");
	var mask_graphics_13 = new cjs.Graphics().p("Ao6o7IR4gGIACOVQgMASgeAZQg8AvheAdQiFApkSAmQiJAShvALIksAKg");
	var mask_graphics_14 = new cjs.Graphics().p("Ao6o7IR4gGIACOSQgNASgeAZQg9AwheAdQiGAokQAoQiJAThuALIksAKg");
	var mask_graphics_15 = new cjs.Graphics().p("Ao6o7IR4gGIACOPQgNATgfAYQg+AyheAcQiGApkPAoQiIAThuAMIksAKg");
	var mask_graphics_16 = new cjs.Graphics().p("Ao6o7IR4gGIACONQgOATgfAYQhAAyheAdQiFAokPApQiHAUhtAMIksAKg");
	var mask_graphics_17 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAzheAcQiGAokOApQiHAVhsANIksAKg");
	var mask_graphics_18 = new cjs.Graphics().p("Ao6o7IR4gGIACOHQgOAUghAZQhBAzheAcQiFApkNAqQiHAVhsANIksAKg");
	var mask_graphics_19 = new cjs.Graphics().p("Ao6o7IR4gGIACOFQgPAVggAYQhCA0heAcQiFApkNAqQiGAWhsANIksAKg");
	var mask_graphics_20 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAUghAZQhCA0heAcQiGApkMArQiFAVhsAOIksAKg");
	var mask_graphics_21 = new cjs.Graphics().p("Ao6o7IR4gGIACODQgPAUgiAZQhCA0heAdQiGAokLArQiGAXhrANIksAKg");
	var mask_graphics_22 = new cjs.Graphics().p("Ao6o7IR4gGIACOBQgPAUgiAaQhDA0heAdQiGAokLAsQiFAWhrAOIksAKg");
	var mask_graphics_23 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAVghAaQhEA0heAcQiFAokLAtQiGAWhqAOIksAKg");
	var mask_graphics_24 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAUgiAaQhDA0heAdQiGApkKArQiGAXhqAOIksAKg");
	var mask_graphics_25 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_26 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_27 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAVghAZQhCAzhdAcQiGApkMArQiGAWhsANIksAKg");
	var mask_graphics_28 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAyheAcQiGApkOApQiHAVhsANIksAKg");
	var mask_graphics_29 = new cjs.Graphics().p("Ao6o7IR4gGIACOOQgNATgfAZQg/AxheAdQiFAokPAoQiJAVhtALIksAKg");
	var mask_graphics_30 = new cjs.Graphics().p("Ao6o7IR4gGIACOTQgNASgeAYQg9AwheAdQiFAokRAoQiJAThuALIksAKg");
	var mask_graphics_31 = new cjs.Graphics().p("Ao6o7IR4gGIABOWQgLASgdAZQg8AvhdAcQiGApkTAmQiJAShuALIktAKg");
	var mask_graphics_32 = new cjs.Graphics().p("Ao6o7IR4gGIABObQgKARgdAXQg6AvheAcQiGApkTAkQiKAThvAKIktAKg");
	var mask_graphics_33 = new cjs.Graphics().p("Ao6o7IR4gGIABOeQgKARgdAXQg4AuheAdQiFAokVAjQiKAThwAJIktAKg");
	var mask_graphics_34 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKAQgbAYQg3AtheAdQiGAokWAiQiLAThwAIIksAKg");
	var mask_graphics_35 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_36 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAQgbAWQg1AtheAcQiGApkXAhQiMARhxAIIksAKg");
	var mask_graphics_37 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgIAQgbAXQg1AshdAcQiGApkYAgQiMAShyAHIksAKg");
	var mask_graphics_38 = new cjs.Graphics().p("Ao5o7IR4gGIAAOpQgIAQgaAWQg0AsheAcQiGApkYAgQiNARhyAHIksAKg");
	var mask_graphics_39 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAQgaAWQgzArheAdQiGAokZAhQiNAQhyAHIksAKg");
	var mask_graphics_40 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_41 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_42 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAQgZAWQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_43 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_44 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_45 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAPgaAXQgzArheAdQiGAokZAgQiNAQhyAHIksAKg");
	var mask_graphics_46 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAPgaAXQg0ArheAcQiGApkYAhQiNAQhyAHIksAKg");
	var mask_graphics_47 = new cjs.Graphics().p("Ao5o7IR4gGIAAOoQgIAQgaAXQg1AsheAcQiGApkXAgQiNARhyAHIksAKg");
	var mask_graphics_48 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgJAQgaAWQg1AsheAdQiGApkXAgQiNAShxAHIksAKg");
	var mask_graphics_49 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAPgbAXQg1AtheAcQiGAokXAiQiMARhxAIIksAKg");
	var mask_graphics_50 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_51 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKARgbAXQg3AtheAdQiGAokVAjQiMAShwAIIksAKg");
	var mask_graphics_52 = new cjs.Graphics().p("Ao5o7IR4gGIAAOeQgKARgcAYQg4AtheAdQiFAokVAkQiLAShwAJIksAKg");
	var mask_graphics_53 = new cjs.Graphics().p("Ao6o7IR4gGIABOcQgKARgdAXQg5AvheAdQiGAokTAkQiLAShvAKIktAKg");
	var mask_graphics_54 = new cjs.Graphics().p("Ao6o7IR4gGIABOZQgLASgdAXQg6AvheAcQiFApkUAlQiKAThuAKIktAKg");
	var mask_graphics_55 = new cjs.Graphics().p("Ao6o7IR4gGIACOVQgMASgeAZQg8AvheAdQiFApkSAmQiJAShvALIksAKg");
	var mask_graphics_56 = new cjs.Graphics().p("Ao6o7IR4gGIACOSQgNASgeAZQg9AwheAdQiGAokQAoQiJAThuALIksAKg");
	var mask_graphics_57 = new cjs.Graphics().p("Ao6o7IR4gGIACOPQgNATgfAYQg+AyheAcQiGApkPAoQiIAThuAMIksAKg");
	var mask_graphics_58 = new cjs.Graphics().p("Ao6o7IR4gGIACONQgOATgfAYQhAAyheAdQiFAokPApQiHAUhtAMIksAKg");
	var mask_graphics_59 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAzheAcQiGAokOApQiHAVhsANIksAKg");
	var mask_graphics_60 = new cjs.Graphics().p("Ao6o7IR4gGIACOHQgOAUghAZQhBAzheAcQiFApkNAqQiHAVhsANIksAKg");
	var mask_graphics_61 = new cjs.Graphics().p("Ao6o7IR4gGIACOFQgPAVggAYQhCA0heAcQiFApkNAqQiGAWhsANIksAKg");
	var mask_graphics_62 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAUghAZQhCA0heAcQiGApkMArQiFAVhsAOIksAKg");
	var mask_graphics_63 = new cjs.Graphics().p("Ao6o7IR4gGIACODQgPAUgiAZQhCA0heAdQiGAokLArQiGAXhrANIksAKg");
	var mask_graphics_64 = new cjs.Graphics().p("Ao6o7IR4gGIACOBQgPAUgiAaQhDA0heAdQiGAokLAsQiFAWhrAOIksAKg");
	var mask_graphics_65 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAVghAaQhEA0heAcQiFAokLAtQiGAWhqAOIksAKg");
	var mask_graphics_66 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAUgiAaQhDA0heAdQiGApkKArQiGAXhqAOIksAKg");
	var mask_graphics_67 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_68 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_69 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAVghAZQhCAzhdAcQiGApkMArQiGAWhsANIksAKg");
	var mask_graphics_70 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAyheAcQiGApkOApQiHAVhsANIksAKg");
	var mask_graphics_71 = new cjs.Graphics().p("Ao6o7IR4gGIACOOQgNATgfAZQg/AxheAdQiFAokPAoQiJAVhtALIksAKg");
	var mask_graphics_72 = new cjs.Graphics().p("Ao6o7IR4gGIACOTQgNASgeAYQg9AwheAdQiFAokRAoQiJAThuALIksAKg");
	var mask_graphics_73 = new cjs.Graphics().p("Ao6o7IR4gGIABOWQgLASgdAZQg8AvhdAcQiGApkTAmQiJAShuALIktAKg");
	var mask_graphics_74 = new cjs.Graphics().p("Ao6o7IR4gGIABObQgKARgdAXQg6AvheAcQiGApkTAkQiKAThvAKIktAKg");
	var mask_graphics_75 = new cjs.Graphics().p("Ao6o7IR4gGIABOeQgKARgdAXQg4AuheAdQiFAokVAjQiKAThwAJIktAKg");
	var mask_graphics_76 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKAQgbAYQg3AtheAdQiGAokWAiQiLAThwAIIksAKg");
	var mask_graphics_77 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_78 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAQgbAWQg1AtheAcQiGApkXAhQiMARhxAIIksAKg");
	var mask_graphics_79 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgIAQgbAXQg1AshdAcQiGApkYAgQiMAShyAHIksAKg");
	var mask_graphics_80 = new cjs.Graphics().p("Ao5o7IR4gGIAAOpQgIAQgaAWQg0AsheAcQiGApkYAgQiNARhyAHIksAKg");
	var mask_graphics_81 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAQgaAWQgzArheAdQiGAokZAhQiNAQhyAHIksAKg");
	var mask_graphics_82 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_83 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_84 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAQgZAWQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_85 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_86 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_87 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAPgaAXQgzArheAdQiGAokZAgQiNAQhyAHIksAKg");
	var mask_graphics_88 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAPgaAXQg0ArheAcQiGApkYAhQiNAQhyAHIksAKg");
	var mask_graphics_89 = new cjs.Graphics().p("Ao5o7IR4gGIAAOoQgIAQgaAXQg1AsheAcQiGApkXAgQiNARhyAHIksAKg");
	var mask_graphics_90 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgJAQgaAWQg1AsheAdQiGApkXAgQiNAShxAHIksAKg");
	var mask_graphics_91 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAPgbAXQg1AtheAcQiGAokXAiQiMARhxAIIksAKg");
	var mask_graphics_92 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_93 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKARgbAXQg3AtheAdQiGAokVAjQiMAShwAIIksAKg");
	var mask_graphics_94 = new cjs.Graphics().p("Ao5o7IR4gGIAAOeQgKARgcAYQg4AtheAdQiFAokVAkQiLAShwAJIksAKg");
	var mask_graphics_95 = new cjs.Graphics().p("Ao6o7IR4gGIABOcQgKARgdAXQg5AvheAdQiGAokTAkQiLAShvAKIktAKg");
	var mask_graphics_96 = new cjs.Graphics().p("Ao6o7IR4gGIABOZQgLASgdAXQg6AvheAcQiFApkUAlQiKAThuAKIktAKg");
	var mask_graphics_97 = new cjs.Graphics().p("Ao6o7IR4gGIACOVQgMASgeAZQg8AvheAdQiFApkSAmQiJAShvALIksAKg");
	var mask_graphics_98 = new cjs.Graphics().p("Ao6o7IR4gGIACOSQgNASgeAZQg9AwheAdQiGAokQAoQiJAThuALIksAKg");
	var mask_graphics_99 = new cjs.Graphics().p("Ao6o7IR4gGIACOPQgNATgfAYQg+AyheAcQiGApkPAoQiIAThuAMIksAKg");
	var mask_graphics_100 = new cjs.Graphics().p("Ao6o7IR4gGIACONQgOATgfAYQhAAyheAdQiFAokPApQiHAUhtAMIksAKg");
	var mask_graphics_101 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAzheAcQiGAokOApQiHAVhsANIksAKg");
	var mask_graphics_102 = new cjs.Graphics().p("Ao6o7IR4gGIACOHQgOAUghAZQhBAzheAcQiFApkNAqQiHAVhsANIksAKg");
	var mask_graphics_103 = new cjs.Graphics().p("Ao6o7IR4gGIACOFQgPAVggAYQhCA0heAcQiFApkNAqQiGAWhsANIksAKg");
	var mask_graphics_104 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAUghAZQhCA0heAcQiGApkMArQiFAVhsAOIksAKg");
	var mask_graphics_105 = new cjs.Graphics().p("Ao6o7IR4gGIACODQgPAUgiAZQhCA0heAdQiGAokLArQiGAXhrANIksAKg");
	var mask_graphics_106 = new cjs.Graphics().p("Ao6o7IR4gGIACOBQgPAUgiAaQhDA0heAdQiGAokLAsQiFAWhrAOIksAKg");
	var mask_graphics_107 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAVghAaQhEA0heAcQiFAokLAtQiGAWhqAOIksAKg");
	var mask_graphics_108 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAUgiAaQhDA0heAdQiGApkKArQiGAXhqAOIksAKg");
	var mask_graphics_109 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_110 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_111 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAVghAZQhCAzhdAcQiGApkMArQiGAWhsANIksAKg");
	var mask_graphics_112 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAyheAcQiGApkOApQiHAVhsANIksAKg");
	var mask_graphics_113 = new cjs.Graphics().p("Ao6o7IR4gGIACOOQgNATgfAZQg/AxheAdQiFAokPAoQiJAVhtALIksAKg");
	var mask_graphics_114 = new cjs.Graphics().p("Ao6o7IR4gGIACOTQgNASgeAYQg9AwheAdQiFAokRAoQiJAThuALIksAKg");
	var mask_graphics_115 = new cjs.Graphics().p("Ao6o7IR4gGIABOWQgLASgdAZQg8AvhdAcQiGApkTAmQiJAShuALIktAKg");
	var mask_graphics_116 = new cjs.Graphics().p("Ao6o7IR4gGIABObQgKARgdAXQg6AvheAcQiGApkTAkQiKAThvAKIktAKg");
	var mask_graphics_117 = new cjs.Graphics().p("Ao6o7IR4gGIABOeQgKARgdAXQg4AuheAdQiFAokVAjQiKAThwAJIktAKg");
	var mask_graphics_118 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKAQgbAYQg3AtheAdQiGAokWAiQiLAThwAIIksAKg");
	var mask_graphics_119 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_120 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAQgbAWQg1AtheAcQiGApkXAhQiMARhxAIIksAKg");
	var mask_graphics_121 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgIAQgbAXQg1AshdAcQiGApkYAgQiMAShyAHIksAKg");
	var mask_graphics_122 = new cjs.Graphics().p("Ao5o7IR4gGIAAOpQgIAQgaAWQg0AsheAcQiGApkYAgQiNARhyAHIksAKg");
	var mask_graphics_123 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAQgaAWQgzArheAdQiGAokZAhQiNAQhyAHIksAKg");
	var mask_graphics_124 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_125 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_126 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAQgZAWQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_127 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_128 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_129 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAPgaAXQgzArheAdQiGAokZAgQiNAQhyAHIksAKg");
	var mask_graphics_130 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAPgaAXQg0ArheAcQiGApkYAhQiNAQhyAHIksAKg");
	var mask_graphics_131 = new cjs.Graphics().p("Ao5o7IR4gGIAAOoQgIAQgaAXQg1AsheAcQiGApkXAgQiNARhyAHIksAKg");
	var mask_graphics_132 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgJAQgaAWQg1AsheAdQiGApkXAgQiNAShxAHIksAKg");
	var mask_graphics_133 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAPgbAXQg1AtheAcQiGAokXAiQiMARhxAIIksAKg");
	var mask_graphics_134 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_135 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKARgbAXQg3AtheAdQiGAokVAjQiMAShwAIIksAKg");
	var mask_graphics_136 = new cjs.Graphics().p("Ao5o7IR4gGIAAOeQgKARgcAYQg4AtheAdQiFAokVAkQiLAShwAJIksAKg");
	var mask_graphics_137 = new cjs.Graphics().p("Ao6o7IR4gGIABOcQgKARgdAXQg5AvheAdQiGAokTAkQiLAShvAKIktAKg");
	var mask_graphics_138 = new cjs.Graphics().p("Ao6o7IR4gGIABOZQgLASgdAXQg6AvheAcQiFApkUAlQiKAThuAKIktAKg");
	var mask_graphics_139 = new cjs.Graphics().p("Ao6o7IR4gGIACOVQgMASgeAZQg8AvheAdQiFApkSAmQiJAShvALIksAKg");
	var mask_graphics_140 = new cjs.Graphics().p("Ao6o7IR4gGIACOSQgNASgeAZQg9AwheAdQiGAokQAoQiJAThuALIksAKg");
	var mask_graphics_141 = new cjs.Graphics().p("Ao6o7IR4gGIACOPQgNATgfAYQg+AyheAcQiGApkPAoQiIAThuAMIksAKg");
	var mask_graphics_142 = new cjs.Graphics().p("Ao6o7IR4gGIACONQgOATgfAYQhAAyheAdQiFAokPApQiHAUhtAMIksAKg");
	var mask_graphics_143 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAzheAcQiGAokOApQiHAVhsANIksAKg");
	var mask_graphics_144 = new cjs.Graphics().p("Ao6o7IR4gGIACOHQgOAUghAZQhBAzheAcQiFApkNAqQiHAVhsANIksAKg");
	var mask_graphics_145 = new cjs.Graphics().p("Ao6o7IR4gGIACOFQgPAVggAYQhCA0heAcQiFApkNAqQiGAWhsANIksAKg");
	var mask_graphics_146 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAUghAZQhCA0heAcQiGApkMArQiFAVhsAOIksAKg");
	var mask_graphics_147 = new cjs.Graphics().p("Ao6o7IR4gGIACODQgPAUgiAZQhCA0heAdQiGAokLArQiGAXhrANIksAKg");
	var mask_graphics_148 = new cjs.Graphics().p("Ao6o7IR4gGIACOBQgPAUgiAaQhDA0heAdQiGAokLAsQiFAWhrAOIksAKg");
	var mask_graphics_149 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAVghAaQhEA0heAcQiFAokLAtQiGAWhqAOIksAKg");
	var mask_graphics_150 = new cjs.Graphics().p("Ao6o7IR4gGIACOAQgQAUgiAaQhDA0heAdQiGApkKArQiGAXhqAOIksAKg");
	var mask_graphics_151 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_152 = new cjs.Graphics().p("Ao6o7IR4gGIACN/QgQAVgiAaQhEA0heAdQiFAokKAsQiGAXhqAOIksAKg");
	var mask_graphics_153 = new cjs.Graphics().p("Ao6o7IR4gGIACOEQgPAVghAZQhCAzhdAcQiGApkMArQiGAWhsANIksAKg");
	var mask_graphics_154 = new cjs.Graphics().p("Ao6o7IR4gGIACOKQgOATggAZQhAAyheAcQiGApkOApQiHAVhsANIksAKg");
	var mask_graphics_155 = new cjs.Graphics().p("Ao6o7IR4gGIACOOQgNATgfAZQg/AxheAdQiFAokPAoQiJAVhtALIksAKg");
	var mask_graphics_156 = new cjs.Graphics().p("Ao6o7IR4gGIACOTQgNASgeAYQg9AwheAdQiFAokRAoQiJAThuALIksAKg");
	var mask_graphics_157 = new cjs.Graphics().p("Ao6o7IR4gGIABOWQgLASgdAZQg8AvhdAcQiGApkTAmQiJAShuALIktAKg");
	var mask_graphics_158 = new cjs.Graphics().p("Ao6o7IR4gGIABObQgKARgdAXQg6AvheAcQiGApkTAkQiKAThvAKIktAKg");
	var mask_graphics_159 = new cjs.Graphics().p("Ao6o7IR4gGIABOeQgKARgdAXQg4AuheAdQiFAokVAjQiKAThwAJIktAKg");
	var mask_graphics_160 = new cjs.Graphics().p("Ao5o7IR4gGIAAOhQgKAQgbAYQg3AtheAdQiGAokWAiQiLAThwAIIksAKg");
	var mask_graphics_161 = new cjs.Graphics().p("Ao5o7IR4gGIAAOkQgJAQgbAXQg3AsheAdQiFApkXAhQiLAShxAIIksAKg");
	var mask_graphics_162 = new cjs.Graphics().p("Ao5o7IR4gGIAAOmQgJAQgbAWQg1AtheAcQiGApkXAhQiMARhxAIIksAKg");
	var mask_graphics_163 = new cjs.Graphics().p("Ao5o7IR4gGIAAOnQgIAQgbAXQg1AshdAcQiGApkYAgQiMAShyAHIksAKg");
	var mask_graphics_164 = new cjs.Graphics().p("Ao5o7IR4gGIAAOpQgIAQgaAWQg0AsheAcQiGApkYAgQiNARhyAHIksAKg");
	var mask_graphics_165 = new cjs.Graphics().p("Ao5o7IR4gGIAAOqQgIAQgaAWQgzArheAdQiGAokZAhQiNAQhyAHIksAKg");
	var mask_graphics_166 = new cjs.Graphics().p("Ao5o7IR4gGIAAOrQgIAQgZAWQg0ArheAdQiGAokYAgQiOAQhyAHIksAKg");
	var mask_graphics_167 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAPgZAXQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	var mask_graphics_168 = new cjs.Graphics().p("Ao5o7IR4gGIAAOsQgIAQgZAWQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_1,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_2,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_3,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_4,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_5,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_6,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_7,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_8,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_9,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_10,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_11,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_12,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_13,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_14,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_15,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_16,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_17,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_18,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_19,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_20,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_21,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_22,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_23,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_24,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_25,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_26,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_27,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_28,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_29,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_30,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_31,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_32,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_33,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_34,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_35,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_36,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_37,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_38,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_39,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_40,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_41,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_42,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_43,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_44,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_45,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_46,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_47,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_48,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_49,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_50,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_51,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_52,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_53,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_54,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_55,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_56,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_57,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_58,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_59,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_60,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_61,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_62,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_63,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_64,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_65,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_66,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_67,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_68,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_69,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_70,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_71,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_72,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_73,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_74,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_75,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_76,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_77,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_78,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_79,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_80,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_81,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_82,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_83,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_84,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_85,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_86,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_87,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_88,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_89,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_90,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_91,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_92,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_93,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_94,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_95,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_96,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_97,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_98,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_99,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_100,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_101,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_102,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_103,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_104,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_105,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_106,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_107,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_108,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_109,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_110,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_111,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_112,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_113,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_114,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_115,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_116,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_117,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_118,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_119,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_120,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_121,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_122,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_123,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_124,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_125,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_126,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_127,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_128,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_129,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_130,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_131,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_132,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_133,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_134,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_135,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_136,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_137,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_138,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_139,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_140,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_141,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_142,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_143,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_144,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_145,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_146,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_147,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_148,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_149,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_150,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_151,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_152,x:57.125,y:57.75}).wait(1).to({graphics:mask_graphics_153,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_154,x:57.1,y:57.75}).wait(1).to({graphics:mask_graphics_155,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_156,x:57.075,y:57.75}).wait(1).to({graphics:mask_graphics_157,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_158,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_159,x:57.05,y:57.75}).wait(1).to({graphics:mask_graphics_160,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_161,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_162,x:57.025,y:57.75}).wait(1).to({graphics:mask_graphics_163,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_164,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_165,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_166,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_167,x:57,y:57.75}).wait(1).to({graphics:mask_graphics_168,x:57,y:57.75}).wait(1));

	// Layer_3
	this.instance_1 = new lib.logo1();
	this.instance_1.setTransform(8.65,30.2,0.5,0.5,-2.7217);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F0F0F0","#F5F5F5"],[0,1],-13.3,-40.8,13.3,40.9).s().p("Ao5o7IR4gGIAAOsQgIAQgZAWQg0ArhdAcQiGApkZAfQiOAQhyAHIksAKg");
	this.shape.setTransform(57,57.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(169));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,115.3,115.5);


(lib.main_movie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// pin2, 3, 4, 5, 6
	this.instance = new lib.pin_1();
	this.instance.setTransform(1606.35,432.3,0.9999,0.9999,-2.2293,0,0,9.8,15.2);

	this.instance_1 = new lib.pin_1();
	this.instance_1.setTransform(2547.4,578.3,0.9999,0.9999,-0.7913,0,0,9.8,15.2);

	this.instance_2 = new lib.pin_1();
	this.instance_2.setTransform(2050.35,674.3,0.9999,0.9999,-2.2293,0,0,9.8,15.2);

	this.instance_3 = new lib.pin_1();
	this.instance_3.setTransform(1103.45,431.4,0.9999,0.9999,20.2047,0,0,6.5,11.2);

	this.instance_4 = new lib.pin_1();
	this.instance_4.setTransform(658.05,200.8,0.9999,0.9999,34.462,0,0,6.5,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(65));

	// pin 1
	this.instance_5 = new lib.pin_1();
	this.instance_5.setTransform(177.6,33.8,0.9989,0.9989,21.0741,0,0,6.5,11);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:21.209,x:154.05,y:153.6},10,cjs.Ease.cubicInOut).wait(51));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("Ah1DLICLmtIBgAkIiDGhg");
	var mask_graphics_5 = new cjs.Graphics().p("Ai6DEICNmtIDoAzIiEGgg");
	var mask_graphics_6 = new cjs.Graphics().p("Aj/C8ICMmtIFzBDIiEGgg");
	var mask_graphics_7 = new cjs.Graphics().p("AlFC1ICNmuIH9BSIiDGgg");
	var mask_graphics_8 = new cjs.Graphics().p("AmLCtICNmtIKJBhIiEGgg");
	var mask_graphics_9 = new cjs.Graphics().p("AnRClICNmtIMWBwIiEGhg");
	var mask_graphics_10 = new cjs.Graphics().p("AoXCdICNmtIOhCAIiEGhg");
	var mask_graphics_11 = new cjs.Graphics().p("ApdCWICNmtIQuCPIiEGgg");
	var mask_graphics_12 = new cjs.Graphics().p("AqiCOICMmtIS5CeIiEGhg");
	var mask_graphics_13 = new cjs.Graphics().p("ArnCHICMmuIVDCuIiEGhg");
	var mask_graphics_14 = new cjs.Graphics().p("AssB/ICMmtIXNC9IiEGgg");
	var mask_graphics_15 = new cjs.Graphics().p("AtwB3ICMmtIZVDMIiEGhg");
	var mask_graphics_16 = new cjs.Graphics().p("AuzBwICMmtIbbDbIiEGgg");
	var mask_graphics_17 = new cjs.Graphics().p("Av1BpICMmtIdfDpIiEGgg");
	var mask_graphics_18 = new cjs.Graphics().p("Aw3BiICNmuIfiD4IiFGhg");
	var mask_graphics_19 = new cjs.Graphics().p("Ax3BbICMmuMAhjAEGIiEGgg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay2BUICNmuMAjfAEUIiDGgg");
	var mask_graphics_21 = new cjs.Graphics().p("AzzBNICMmtMAlbAEhIiEGgg");
	var mask_graphics_22 = new cjs.Graphics().p("A0wBGICNmtMAnTAEuIiDGhg");
	var mask_graphics_23 = new cjs.Graphics().p("A1rBAICNmtMApJAE7IiDGgg");
	var mask_graphics_24 = new cjs.Graphics().p("A2kA5ICMmtMAq9AFIIiEGhg");
	var mask_graphics_25 = new cjs.Graphics().p("A3cAzICMmtMAstAFUIiEGhg");
	var mask_graphics_26 = new cjs.Graphics().p("A4TAtICNmtMAuaAFgIiFGhg");
	var mask_graphics_27 = new cjs.Graphics().p("A5IAoICNmuMAwEAFsIiEGhg");
	var mask_graphics_28 = new cjs.Graphics().p("A57AiICMmtMAxrAF3IiEGgg");
	var mask_graphics_29 = new cjs.Graphics().p("A6tAcICMmtMAzPAGCIiEGhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:104.125,y:150.025}).wait(1).to({graphics:mask_graphics_5,x:111,y:150.775}).wait(1).to({graphics:mask_graphics_6,x:117.925,y:151.55}).wait(1).to({graphics:mask_graphics_7,x:124.9,y:152.3}).wait(1).to({graphics:mask_graphics_8,x:131.9,y:153.075}).wait(1).to({graphics:mask_graphics_9,x:138.9,y:153.85}).wait(1).to({graphics:mask_graphics_10,x:145.9,y:154.625}).wait(1).to({graphics:mask_graphics_11,x:152.9,y:155.375}).wait(1).to({graphics:mask_graphics_12,x:159.85,y:156.15}).wait(1).to({graphics:mask_graphics_13,x:166.775,y:156.9}).wait(1).to({graphics:mask_graphics_14,x:173.65,y:157.675}).wait(1).to({graphics:mask_graphics_15,x:180.45,y:158.425}).wait(1).to({graphics:mask_graphics_16,x:187.15,y:159.15}).wait(1).to({graphics:mask_graphics_17,x:193.775,y:159.875}).wait(1).to({graphics:mask_graphics_18,x:200.3,y:160.6}).wait(1).to({graphics:mask_graphics_19,x:206.725,y:161.3}).wait(1).to({graphics:mask_graphics_20,x:213,y:162}).wait(1).to({graphics:mask_graphics_21,x:219.175,y:162.675}).wait(1).to({graphics:mask_graphics_22,x:225.2,y:163.325}).wait(1).to({graphics:mask_graphics_23,x:231.1,y:163.975}).wait(1).to({graphics:mask_graphics_24,x:236.85,y:164.625}).wait(1).to({graphics:mask_graphics_25,x:242.45,y:165.225}).wait(1).to({graphics:mask_graphics_26,x:247.9,y:165.825}).wait(1).to({graphics:mask_graphics_27,x:253.2,y:166.4}).wait(1).to({graphics:mask_graphics_28,x:258.325,y:166.975}).wait(1).to({graphics:mask_graphics_29,x:263.325,y:167.525}).wait(1).to({graphics:null,x:0,y:0}).wait(35));

	// string
	this.instance_6 = new lib.strinng();
	this.instance_6.setTransform(112.5,144.5,1,1,0,0,0,118.5,22.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(61));

	// polaroid 7
	this.polaroid_7 = new lib.polaroid_7_mc();
	this.polaroid_7.name = "polaroid_7";
	this.polaroid_7.setTransform(2578.3,627.35,1.06,1.06,0,0,0,85.2,55.4);

	this.timeline.addTween(cjs.Tween.get(this.polaroid_7).wait(65));

	// polaroid 5
	this.polaroid_5 = new lib.polaroid_5_mc();
	this.polaroid_5.name = "polaroid_5";
	this.polaroid_5.setTransform(1888,709);

	this.timeline.addTween(cjs.Tween.get(this.polaroid_5).wait(65));

	// polaroid 6
	this.polaroid_6 = new lib.polaroid_6_mc();
	this.polaroid_6.name = "polaroid_6";
	this.polaroid_6.setTransform(2046.95,678.05,1,1,0,0,0,-15,54.5);

	this.timeline.addTween(cjs.Tween.get(this.polaroid_6).wait(65));

	// polaroid 4
	this.polaroid_4 = new lib.polaroid_4();
	this.polaroid_4.name = "polaroid_4";
	this.polaroid_4.setTransform(1499.75,446,1.209,1.209,-13.7686,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.polaroid_4).wait(65));

	// polaroid 3
	this.instance_7 = new lib.porlaroid_3_mc();
	this.instance_7.setTransform(1118.1,390.2,1,1,17.1708,0,0,88.1,67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65));

	// polaroid 2
	this.instance_8 = new lib.polaroid_2_mc();
	this.instance_8.setTransform(695.05,173.7,0.9071,0.9071,13.7024,0,0,64.2,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// polaroid 1
	this.instance_9 = new lib.polaroid_1_1();
	this.instance_9.setTransform(319.75,331.55,0.9999,0.9999,-27.69,0,0,166,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:-12.2378,x:150.7,y:163.85},14,cjs.Ease.circInOut).to({regX:166.1,rotation:-32.7254,x:150.75,y:163.7},9,cjs.Ease.cubicOut).to({regX:166,scaleX:0.9999,scaleY:0.9999,rotation:-16.4942,y:163.8},9,cjs.Ease.cubicInOut).to({regX:166.1,scaleX:1,scaleY:1,rotation:-25.7205,y:163.75},8,cjs.Ease.cubicOut).to({regX:166,rotation:-17.7805,x:150.7,y:163.8},7,cjs.Ease.cubicOut).to({rotation:-23.9578},7,cjs.Ease.circOut).to({rotation:-21.4864,x:150.65},6,cjs.Ease.circOut).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,21.2,2868,887.8);


// stage content:
(lib.B09_ANRG_300X250_DETECTIVE2_NOVARTIS_XIIDRA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,106,279,424,586,744,799];
	// timeline functions:
	this.frame_0 = function() {
		//clicktag 1
		
		
		this.mainExit.addEventListener("click", function(){
			window.open(window.clickTag1, "_blank");
		});   
		
		this.ctaExit.addEventListener("click", function(){
			window.open(window.clickTag1, "_blank");
		});
		
		
		// clicktag 2
		
		this.fda_link = window.document.getElementById('fda_link');
		
		this.fda_link.addEventListener("click", function(){
			window.open(window.clickTag2, "_blank");
		});
		
		// clicktag 3
		this.fpi_link = window.document.getElementById('fpi_link');
		
		this.fpi_link.addEventListener("click", function(){
			window.open(window.clickTag3, "_blank");
		});
		
		// clicktag 4
		this.pi_link = window.document.getElementById('pi_link');
		
		this.pi_link.addEventListener("click", function(){
			window.open(window.clickTag4, "_blank");
		});
	}
	this.frame_106 = function() {
		//TweenMax.to('#isi-container', 1, {y:-40, rotation: 0.01, force3D: true, ease:Linear.easeNone});
		TweenMax.to('#isi-container', .8, {y:-58, rotation: 0.01, force3D: true, ease:Quad.easeInOut});
	}
	this.frame_279 = function() {
		//window.setTimeout(function(){newscroller.autoscroll(30)},1000);
		window.newscroller.autoscroll(30);
	}
	this.frame_424 = function() {
		this.main_mc.polaroid_4.play();
	}
	this.frame_586 = function() {
		this.main_mc.polaroid_5.play();
	}
	this.frame_744 = function() {
		this.main_mc.polaroid_7.play();
	}
	this.frame_799 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(106).call(this.frame_106).wait(173).call(this.frame_279).wait(145).call(this.frame_424).wait(162).call(this.frame_586).wait(158).call(this.frame_744).wait(55).call(this.frame_799).wait(1));

	// main exit
	this.mainExit = new lib.btn();
	this.mainExit.name = "mainExit";
	this.mainExit.setTransform(70.8,10.3,1,0.9999,0,0,0,70.8,10.3);
	new cjs.ButtonHelper(this.mainExit, 0, 1, 2, false, new lib.btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mainExit).wait(800));

	// cta
	this.ctaExit = new lib.cta();
	this.ctaExit.name = "ctaExit";
	this.ctaExit.setTransform(366.5,164.5,1,1,0,0,0,49.5,10.5);
	this.ctaExit.alpha = 0;
	new cjs.ButtonHelper(this.ctaExit, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ctaExit).wait(786).to({x:246.5},0).to({alpha:1},13).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(245.15,119,0.95,0.95,0,0,0,48.6,31.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(773).to({_off:false},0).to({alpha:1},13).wait(14));

	// copy4
	this.instance_1 = new lib.copy4();
	this.instance_1.setTransform(10,116);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(454).to({_off:false},0).to({alpha:1},13).wait(90).to({alpha:0},16).to({_off:true},1).wait(226));

	// copy3
	this.instance_2 = new lib.copy3();
	this.instance_2.setTransform(10,116);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).to({alpha:1},12).wait(123).to({alpha:0},16).to({_off:true},1).wait(359));

	// copy2
	this.instance_3 = new lib.copy2();
	this.instance_3.setTransform(10,116);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(113).to({_off:false},0).to({alpha:1},10).wait(135).to({alpha:0},16).to({_off:true},1).wait(525));

	// copy1
	this.instance_4 = new lib.copy1();
	this.instance_4.setTransform(7,13);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},14).wait(76).to({alpha:0},13).to({_off:true},1).wait(696));

	// main movie
	this.main_mc = new lib.main_movie();
	this.main_mc.name = "main_mc";
	this.main_mc.setTransform(227.85,87.75,1,1,0,0,0,150.7,181.8);

	this.timeline.addTween(cjs.Tween.get(this.main_mc).wait(90).to({regY:180.8,guide:{path:[227.8,87.8,157.9,97.1,88.3,101.6,-21.1,108.8,-114.5,103.2,-231.3,96.2,-316.4,69.5,-316.5,69.5,-316.5,69.5]}},33,cjs.Ease.quadInOut).wait(135).to({x:-316.5,y:69.5},0).to({guide:{path:[-316.5,69.5,-379.8,45.8,-463.3,6.4,-629.1,-71.9,-745.4,-155.4,-745.5,-155.4,-745.6,-155.4]}},43,cjs.Ease.circInOut).wait(123).to({regX:154,regY:184,guide:{path:[-745.6,-155.4,-779.6,-156.9,-813.5,-158.4,-897.1,-162.7,-974.6,-169.7,-1222.6,-192.1,-1316.4,-232.4,-1316.7,-232.5,-1317,-232.6]}},43,cjs.Ease.quadInOut).wait(90).to({x:-1317.1,y:-232.75},0).to({guide:{path:[-1317,-232.7,-1364.8,-247.3,-1424.7,-273.1,-1488.6,-300.6,-1548.1,-333.2,-1614,-369.2,-1662.4,-404.9,-1716.7,-444.9,-1743.4,-480.4]}},38,cjs.Ease.quadInOut).wait(130).to({x:-1743.85,y:-480.3},0).to({x:-2335,y:-379},36,cjs.Ease.quadInOut).wait(39));

	// bg
	this.instance_5 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(800));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2157.8,-436.7,4919,1193);
// library properties:
lib.properties = {
	id: '07D400F5E06D42F5B67D4D8C49322212',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./bg.jpg?1618264640066", id:"bg"},
		{src:"./logo1.png?1618264640066", id:"logo1"},
		{src:"./logo2.png?1618264640066", id:"logo2"},
		{src:"./pin.png?1618264640066", id:"pin"},
		{src:"./polaroid_1.jpg?1618264640066", id:"polaroid_1"},
		{src:"./polaroid_2.jpg?1618264640066", id:"polaroid_2"},
		{src:"./polaroid_3.jpg?1618264640066", id:"polaroid_3"},
		{src:"./polaroid_5.png?1618264640066", id:"polaroid_5"},
		{src:"./yarn_1.png?1618264640066", id:"yarn_1"},
		{src:"./yarn_2.png?1618264640066", id:"yarn_2"},
		{src:"./yarn_3.png?1618264640066", id:"yarn_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['07D400F5E06D42F5B67D4D8C49322212'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;