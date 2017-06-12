(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,28);


(lib.DRY = function() {
	this.initialize(img.DRY);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,156);


(lib.kv = function() {
	this.initialize(img.kv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,400);


(lib.splash = function() {
	this.initialize(img.splash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,148);


(lib.tyre = function() {
	this.initialize(img.tyre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,668,400);


(lib.WET = function() {
	this.initialize(img.WET);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,206);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.ПОДРОБНЕЕНАWWWCORDIANTRU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(759,-20);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape.setTransform(746,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQAEgDAEAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_1.setTransform(739.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_2.setTransform(733.4,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBA5QgFgCgCgEQgCgEAAgOIAAgxIgKAAIAAgMIAKAAIAAgWIAPgJIAAAfIAOAAIAAAMIgOAAIAAAyIAAAIIADADIAFABIAGAAIADANIgMABQgIAAgDgDg");
	this.shape_3.setTransform(728.7,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAJgPASAAQAHAAAHADQAHADAEAEQACAFACAHIABAOIAAA1g");
	this.shape_4.setTransform(721.5,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_5.setTransform(712,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_6.setTransform(705.5,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_7.setTransform(698.6,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQADgDAFAAQAIAAAIAFIgFANQgFgDgGAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_8.setTransform(692,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_9.setTransform(683.7,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAiQgLgLABgXQAAgNAEgKQAFgLAKgGQAKgFAKAAQAOAAAKAHQAIAHADANIgOADQgDgJgFgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAGAJAKgBQAJAAAHgEQAFgGACgLIAOACQgCAPgKAJQgKAIgPAAQgQAAgMgMg");
	this.shape_10.setTransform(675.1,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_11.setTransform(661.1,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAsIAAgnIgoAAIAAAnIgPAAIAAhXIAPAAIAAAlIAoAAIAAglIAPAAIAABXg");
	this.shape_12.setTransform(651.8,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAAZgIQgBgKgFgGQgHgJgLAAQgJAAgHAHQgIAHAAALIAwAAIAAAAg");
	this.shape_13.setTransform(637.6,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAAZgIQgBgKgFgGQgHgJgLAAQgJAAgHAHQgIAHAAALIAwAAIAAAAg");
	this.shape_14.setTransform(628.1,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAUAsIAAgnIgoAAIAAAnIgPAAIAAhXIAPAAIAAAlIAoAAIAAglIAPAAIAABXg");
	this.shape_15.setTransform(618.8,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWA4QgJgHgFgLQgEgMAAgaQgBgjAMgMQAMgNAYAAIARAAIADgCIANAAQgBAJgDADQgDAEgEABIgTABQgSAAgGADQgIAEgCAIQgEAHAAANQAGgJAIgEQAHgEAJAAQARAAAMAMQALAMgBATQAAAQgFAKQgGAJgIAGQgIAFgNAAQgOAAgJgHgAgRgEQgHAIABAQQAAAPAHAIQAHAIAKAAQALAAAHgJQAHgKAAgPQAAgOgGgIQgHgJgMAAQgLAAgHAKg");
	this.shape_16.setTransform(609.3,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_17.setTransform(599.6,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglA+IAAh5IAOAAIAAAMQAEgIAGgCQAHgEAHAAQALAAAJAGQAJAFAEALQAEAKAAANQAAAOgEAJQgFALgJAHQgKAFgKAAQgGAAgGgDQgGgEgEgEIAAArgAgQgoQgIAIAAARQAAARAHAHQAHAJAKgBQAJABAHgJQAHgIAAgRQAAgQgHgJQgHgJgJABQgJAAgHAJg");
	this.shape_18.setTransform(590.4,2.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAiA5IAAgZIhEAAIAAAZIgMAAIAAgmIAIAAQAQgUgBg3IA8AAIAABLIAKAAIAAAmgAgYATIAvAAIAAg/IgiAAQgBAsgMATg");
	this.shape_19.setTransform(580.3,2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_20.setTransform(570.8,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAgA9IAAhrIg/AAIAABrIgQAAIAAh5IBfAAIAAB5g");
	this.shape_21.setTransform(560.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ПОДРОБНЕЕНАWWWCORDIANTRU, new cjs.Rectangle(551.9,-20,261.2,31.3), null);


(lib.wet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WET();
	this.instance.parent = this;
	this.instance.setTransform(1160,-222,1.891,1.891);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wet, new cjs.Rectangle(1160,-222,537,389.6), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kv
	this.instance = new lib.kv();
	this.instance.parent = this;
	this.instance.setTransform(-427.5,-365);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-427.5,-365,1500,400);


(lib.tier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tyre();
	this.instance.parent = this;
	this.instance.setTransform(-33,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tier, new cjs.Rectangle(-33,-121,668,400), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIBNAAIAAANIg/AAIAAAhIA6AAIAAAMIg6AAIAAAkIBBAAIAAANg");
	this.shape.setTransform(754.1,52.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_1.setTransform(744.4,52.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAOAAIAAAuIAZAAQASAAAHAEQAJAEADAHQADAHABAIQAAAMgJAJQgIAKgYAAgAgZAqIAZAAQAPAAAGgGQAEgGAAgHQAAgHgDgEQgEgFgFgBQgHgCgMAAIgTAAg");
	this.shape_2.setTransform(735.2,52.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqA1IADgNIAFACQAFAAADgEQACgEAAgNIAAhLIBDAAIAABrIgPAAIAAheIglAAIAAA2QgBARgBAIQgCAIgEAEQgFAFgIAAQgFAAgHgCg");
	this.shape_3.setTransform(724.6,52.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_4.setTransform(715.2,52.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA2IAAgOQgSAAgOgLQgMgLAAgSQAAgRAMgLQAOgKASgBIAAgOIAMAAIAAAOQAVABAMALQAMALAAAQQAAAQgMAMQgLALgWABIAAAOgAAGAcQAOAAAJgIQAHgHABgNQgBgMgHgHQgIgHgPgBgAgbgTQgJAHABAMQgBANAJAHQAIAIANAAIAAg3QgNABgIAHg");
	this.shape_5.setTransform(704.5,52.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAxQgLgIgGgNQgGgOAAgOQAAgRAHgMQAHgNALgGQAMgHANAAQARABALAHQAKAJAFAPIgPADQgDgMgHgFQgIgGgKABQgLAAgJAFQgIAGgEAKQgDALAAAKQAAANAEAKQAEAKAJAFQAIAFAJAAQAMAAAIgGQAIgIADgNIAPAEQgFARgMAJQgLAKgRAAQgRgBgKgGg");
	this.shape_6.setTransform(693.5,52.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_7.setTransform(683,52.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmA2IAAhZIggBZIgLAAIgfhbIAABbIgOAAIAAhrIAVAAIAaBLIAEAQIAGgRIAZhKIATAAIAABrg");
	this.shape_8.setTransform(751.1,35.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_9.setTransform(739.1,35.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgA2IgbgnIgFgHIgEAIIgbAmIgRAAIApg3Igkg0IARAAIATAcIAIANIAIgMIAWgdIAPAAIglAzIAoA4g");
	this.shape_10.setTransform(728.2,35.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggA0IAAgMQAGADAGAAQAFAAAEgDQAEgDAEgNIgrhOIAOAAIAiBCIAfhCIAOAAIgoBTQgHAQgFAFQgEAEgJAAQgGAAgIgCg");
	this.shape_11.setTransform(718.5,35.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAwQgLgHgGgNQgGgOAAgOQAAgRAHgMQAGgNAMgGQAMgHANABQARAAALAIQAKAHAFAPIgPAEQgDgMgHgFQgIgFgKgBQgMAAgIAHQgIAGgEAJQgDAKAAALQAAAMAEALQAEAKAJAFQAIAFAJAAQALAAAJgGQAIgIADgNIAPADQgFASgMAJQgLAJgRAAQgQABgLgIg");
	this.shape_12.setTransform(708.4,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_13.setTransform(693.8,35.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAsIA3AAIAAgsIAOAAIAABrg");
	this.shape_14.setTransform(683.4,35.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAOAAIAAAuIAZAAQASAAAHAEQAJAEADAHQADAHABAIQAAAMgJAJQgIAKgYAAgAgZAqIAZAAQAPAAAGgGQAEgGAAgHQAAgHgDgEQgEgFgFgBQgHgCgMAAIgTAAg");
	this.shape_15.setTransform(808.1,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgjAAIAABeg");
	this.shape_16.setTransform(798.3,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAxQgLgIgGgNQgGgNAAgPQABgRAGgMQAHgMALgHQAMgGANgBQARAAALAJQAKAHAFAPIgPAEQgDgMgHgFQgIgGgKAAQgLABgJAGQgIAFgEALQgDAKAAAKQAAAMAEALQAEAKAJAFQAIAFAJAAQAMAAAIgHQAIgGADgOIAPADQgFASgMAJQgLAJgRAAQgRAAgKgGg");
	this.shape_17.setTransform(788.4,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_18.setTransform(777.1,19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAmA2IAAhZIggBZIgLAAIgfhbIAABbIgOAAIAAhrIAVAAIAaBLIAEAQIAGgRIAZhKIATAAIAABrg");
	this.shape_19.setTransform(765,19);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA6AAIAAAMIg6AAIAAAkIBBAAIAAANg");
	this.shape_20.setTransform(754,19);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAhA2IAAgwIgQAAIgIABQgEAAgDACIgGAIIgKAOIgOAXIgSAAIASgdQAGgJAGgGIAJgFQgQgCgHgHQgIgIAAgLQAAgJAFgIQAEgHAIgDQAHgDAOAAIAvAAIAABrgAgRgkQgGAFAAAIQAAAFADAEQADAFAFACQAGACAJAAIAeAAIAAgkIghAAQgMAAgFAFg");
	this.shape_21.setTransform(742.9,19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgpA1IABgNIAHACQAEAAADgEQACgEABgNIAAhLIBBAAIAABrIgNAAIAAheIgnAAIAAA2QAAARgBAIQgBAIgGAEQgEAFgIAAQgFAAgGgCg");
	this.shape_22.setTransform(732.6,19.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoA2IAAhrIAoAAQAMAAAIAEQAHADAEAHQAFAGAAAIQgBAHgEAGQgDAGgIAEQAKACAGAGQAEAHAAAKQAAAHgCAHQgEAGgFAEQgEADgHACQgIACgJAAgAgZApIAaAAIAJAAIAJgDQACgCACgEQADgEAAgFQAAgGgDgFQgDgEgGgCQgFgCgJAAIgZAAgAgZgIIAXAAIANgBQAFgBADgEQACgEAAgFQABgGgDgEQgDgEgEgBQgGgCgKAAIgVAAg");
	this.shape_23.setTransform(723.4,19);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_24.setTransform(713.2,19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoA2IAAhrIAoAAIAQABQAIACAFADQAGAEADAHQADAGAAAIQAAAOgJAJQgIAJgXAAIgaAAIAAAsgAgZgCIAaAAQAOAAAGgFQAFgFABgJQAAgHgEgFQgEgEgFgCIgNgBIgaAAg");
	this.shape_25.setTransform(703.5,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAcA2IAAheIg3AAIAABeIgOAAIAAhrIBTAAIAABrg");
	this.shape_26.setTransform(692.8,19);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggA0IAAgNQAGAEAGAAQAFAAAEgEQAEgDAEgMIgrhNIAOAAIAiBAIAfhAIAOAAIgoBSQgHAQgFAEQgEAGgJAAQgGgBgIgCg");
	this.shape_27.setTransform(682.7,19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAhA2IAAgwIgQAAIgIABQgEAAgDACIgGAIIgKAOIgOAXIgSAAIASgdQAGgJAGgGIAJgFQgQgCgHgHQgIgIAAgLQAAgJAFgIQAEgHAIgDQAHgDAOAAIAvAAIAABrgAgRgkQgGAFAAAIQAAAFADAEQADAFAFACQAGACAJAAIAeAAIAAgkIghAAQgMAAgFAFg");
	this.shape_28.setTransform(776.9,2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_29.setTransform(767,2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAsIA3AAIAAgsIAOAAIAABrg");
	this.shape_30.setTransform(756.6,2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAsIA3AAIAAgsIAOAAIAABrg");
	this.shape_31.setTransform(745.8,2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_32.setTransform(735.6,2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag4A2IAAhrIAOAAIAABeIAkAAIAAheIANAAIAABeIAjAAIAAheIAPAAIAABrg");
	this.shape_33.setTransform(723.6,2.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAbA2IAAgsQgTAIgOAAQgLAAgJgGQgIgFgDgHQgDgIAAgNIAAggIAOAAIAAAfQAAARAHAFQAGAFAJAAQAOAAARgFIAAg1IAOAAIAABrg");
	this.shape_34.setTransform(711.5,2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AggA0IAAgNQAGAEAGAAQAFAAAEgEQAEgCAEgMIgrhPIAOAAIAiBBIAfhBIAOAAIgoBTQgHAQgFAFQgEAEgJAAQgGABgIgDg");
	this.shape_35.setTransform(702,2.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqA1IACgNIAHACQAEAAADgEQACgEAAgNIAAhLIBCAAIAABrIgNAAIAAheIgmAAIAAA2QAAARgCAIQgBAIgFAEQgGAFgIAAQgEAAgHgCg");
	this.shape_36.setTransform(691.9,2.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AggA0IAAgNQAGAEAGAAQAFAAAEgEQAEgCAEgMIgrhPIAOAAIAiBBIAfhBIAOAAIgoBTQgHAQgFAFQgEAEgJAAQgGABgIgDg");
	this.shape_37.setTransform(682.7,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(676,-8,205.7,71.2), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA+IAAghIAhAAIAAAhgAgQgcIAAghIAhAAIAAAhg");
	this.shape.setTransform(793.8,-8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBWIgZgmQgNgTgFgGQgEgFgGgCQgFgCgMAAIgHAAIAABIIgjAAIAAirIBJAAQAaAAANAFQAMAFAIALQAHAMAAAPQAAAUgLAMQgLAMgXADQALAHAIAHQAHAJAMATIAVAigAgpgMIAZAAQAYAAAGgCQAHgDADgFQAEgFAAgHQAAgJgFgGQgFgEgIgCIgYgBIgbAAg");
	this.shape_1.setTransform(781.9,-10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_2.setTransform(763.2,-10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BBQgWgXAAgpQAAgqAWgXQAWgYAkAAQAfAAAUATQALALAGAUIgiAJQgDgOgKgIQgJgHgOAAQgSAAgMANQgMAOAAAfQAAAfAMAOQALAOASAAQAOAAAKgJQAKgJAEgSIAiAKQgIAcgSAOQgSAOgcAAQghAAgWgYg");
	this.shape_3.setTransform(745.1,-10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAQIAAgfIA/AAIAAAfg");
	this.shape_4.setTransform(733.1,-8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBWIAAhJIg/hiIAoAAIAoBEIAnhEIApAAIhABjIAABIg");
	this.shape_5.setTransform(720.6,-10.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBWIgZgmQgNgTgFgGQgEgFgGgCQgFgCgMAAIgHAAIAABIIgjAAIAAirIBJAAQAaAAANAFQAMAFAIALQAHAMAAAPQAAAUgLAMQgLAMgXADQALAHAIAHQAHAJAMATIAVAigAgpgMIAZAAQAYAAAGgCQAHgDADgFQAEgFAAgHQAAgJgFgGQgFgEgIgCIgYgBIgbAAg");
	this.shape_6.setTransform(704.7,-10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBWIAAirIA/AAQAVAAALADQAPAFALALQALAMAFAQQAGAQAAAYQAAAVgGAQQgGASgMALQgJAJgPAGQgLADgTAAgAgkA5IAZAAQAOAAAHgBQAIgDAFgFQAGgFADgMQAEgLAAgUQAAgSgEgMQgDgKgHgGQgFgGgLgCQgGgCgVAAIgPAAg");
	this.shape_7.setTransform(686.9,-10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqBWIAAhHIgHAAQgQgBgHAFQgGAFgQAYIgZAmIgpAAIAVghQAMgVAIgHQAHgJALgGQgYgEgLgMQgKgNAAgRQAAgQAIgMQAHgNANgEQANgEAZAAIBJAAIAACrgAgLg3QgGABgFAGQgFAFAAAIQAAAKAFAFQAEAGAHAAQAHACAVAAIAZAAIAAgrIgbAAIgaAAg");
	this.shape_8.setTransform(834.6,-39.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBWIAAhvIhFBvIgiAAIAAirIAgAAIAABxIBFhxIAiAAIAACrg");
	this.shape_9.setTransform(818.2,-39.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BWIAAirIBzAAIAAAdIhQAAIAACOg");
	this.shape_10.setTransform(803.7,-39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_11.setTransform(786.7,-39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhIBVIAAgbIAHAAQALAAAEgCQAEgDAAgMIAAgdIAAhiIB3AAIAACrIgiAAIAAiNIgzAAIAABIQAAAfgCANQgDANgHAGQgJAIgRgBg");
	this.shape_12.setTransform(768.3,-39.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_13.setTransform(751.3,-39.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiBWIAAhLIhDAAIAABLIgjAAIAAirIAjAAIAABEIBDAAIAAhEIAjAAIAACrg");
	this.shape_14.setTransform(733.2,-39.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAmBWIgmg8IglA8IgqAAIA7hYIg1hTIAoAAIAiA4IAig4IAoAAIg2BUIA7BXg");
	this.shape_15.setTransform(716.6,-39.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhABWIAAirIB+AAIAAAeIhcAAIAAAlIBWAAIAAAcIhWAAIAAAvIBfAAIAAAdg");
	this.shape_16.setTransform(700.9,-39.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQBWIAAiNIgzAAIAAgeICHAAIAAAeIgyAAIAACNg");
	this.shape_17.setTransform(685.3,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(676,-54.7,180.6,59.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPArQgNgNgCgXIgVAAIAAAvIgOAAIAAhrIAOAAIAAAwIAVAAQACgWANgOQANgNAUAAQAUAAAOAOQAOAPAAAZQAAAZgOAPQgNAPgWABQgSAAgOgNgAgHgfQgJALAAAVQAAATAJAMQAJALAPAAQAPAAAKgLQAKgMAAgUQAAgUgKgLQgJgMgPAAQgQAAgJAMg");
	this.shape.setTransform(852.6,55.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdA2IAAhUIg4BUIgOAAIAAhrIAMAAIAABUIA5hUIAOAAIAABrg");
	this.shape_1.setTransform(839.5,55.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAsIA3AAIAAgsIAOAAIAABrg");
	this.shape_2.setTransform(828.7,55.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_3.setTransform(818.3,55.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA2IAAhrIAoAAQAMAAAIAEQAHADAEAHQAFAGAAAIQgBAHgEAGQgDAGgHAEQAJACAGAGQAEAHAAAKQAAAHgCAHQgEAGgFAEQgEADgHACQgHACgKAAgAgZApIAaAAIAJAAIAJgDQACgCACgEQADgEAAgFQAAgGgDgFQgDgEgGgCQgFgCgJAAIgZAAgAgZgIIAXAAIANgBQAFgBADgEQACgEAAgFQABgGgDgEQgDgEgFgBQgEgCgLAAIgVAAg");
	this.shape_4.setTransform(808.4,55.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_5.setTransform(797.5,55.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA2IAAhrIAoAAIAQABQAIACAFADQAFAEAEAHQADAGAAAIQAAAOgIAJQgJAJgXAAIgbAAIAAAsgAgagCIAbAAQAOAAAGgFQAFgFAAgJQABgHgEgFQgDgEgGgCIgOgBIgaAAg");
	this.shape_6.setTransform(786.9,55.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA2IAAhUIg4BUIgOAAIAAhrIAMAAIAABUIA5hUIAOAAIAABrg");
	this.shape_7.setTransform(776.3,55.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAsIA3AAIAAgsIAOAAIAABrg");
	this.shape_8.setTransform(765.5,55.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_9.setTransform(755.1,55.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA1IACgNIAGACQAFAAACgEQADgEAAgNIAAhLIBBAAIAABrIgNAAIAAheIgnAAIAAA2QABARgCAIQgCAIgFAEQgFAFgHAAQgFAAgGgCg");
	this.shape_10.setTransform(744.7,55.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcA2IAAheIg3AAIAABeIgOAAIAAhrIBTAAIAABrg");
	this.shape_11.setTransform(734.9,55.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_12.setTransform(724.5,55.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAnAAQAMAAAHAEQAIADAEAHQAEAGABAIQgBAHgDAGQgEAGgIAEQAKACAGAGQAEAHABAKQgBAHgDAHQgDAGgFAEQgEADgHACQgHACgLAAgAgaApIAaAAIAKAAIAIgDQADgCADgEQACgEAAgFQAAgGgDgFQgDgEgFgCQgGgCgJAAIgaAAgAgagIIAYAAIAMgBQAGgBACgEQADgEAAgFQAAgGgCgEQgDgEgFgBQgEgCgLAAIgWAAg");
	this.shape_13.setTransform(714.7,55.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AATA2IgRgdQgHgMgEgFQgFgEgIAAIAAAyIgPAAIAAhrIAPAAIAAAvQAJAAAEgDQAEgEAFgPIAIgOQACgFAGgDQAGgDAFAAIAJAAIAAANIgCAAIgDAAQgHAAgEADQgDADgEALQgFAOgEADQgEAEgEACQAJACAKAQIAWAkg");
	this.shape_14.setTransform(705.8,55.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAARAKIgLgdIgHgWQgCAKgEAKIgLAfIAjAAg");
	this.shape_15.setTransform(695.8,55.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATA2IgRgdQgHgMgFgFQgFgEgHAAIAAAyIgPAAIAAhrIAPAAIAAAvQAJAAAEgDQAEgEAFgPIAHgOQADgFAGgDQAGgDAFAAIAJAAIAAANIgCAAIgDAAQgHAAgDADQgEADgEALQgFAOgEADQgEAEgEACQAJACAKAQIAWAkg");
	this.shape_16.setTransform(682.9,55.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAOAAIAAAuIAZAAQASAAAHAEQAJAEADAHQADAHAAAIQAAAMgIAJQgJAKgWAAgAgZAqIAZAAQAPAAAGgGQAEgGAAgHQAAgHgDgEQgEgFgFgBQgHgCgMAAIgTAAg");
	this.shape_17.setTransform(780.8,37.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgjAAIAABeg");
	this.shape_18.setTransform(771,37.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAwQgLgHgGgNQgGgNAAgPQAAgRAHgMQAGgMAMgHQAMgGANAAQARgBAKAJQALAHAFAPIgPAEQgDgMgHgFQgIgFgKgBQgMAAgIAHQgIAFgEALQgDAJAAALQAAAMAEALQAEAKAJAFQAIAFAJAAQALAAAJgHQAJgGACgOIAPADQgFASgMAJQgLAJgRAAQgQABgLgIg");
	this.shape_19.setTransform(761.1,37.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_20.setTransform(749.8,37.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUA2IgSgdQgGgMgGgFQgFgEgHAAIAAAyIgPAAIAAhrIAPAAIAAAvQAJAAAEgDQAEgEAFgPIAHgOQADgFAGgDQAFgDAGAAIAJAAIAAANIgDAAIgCAAQgHAAgDADQgEADgEALQgFAOgEADQgEAEgEACQAJACAKAQIAXAkg");
	this.shape_21.setTransform(740.2,37.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdBDIAAhUIg4BUIgOAAIAAhrIANAAIAABUIA4hUIAOAAIAABrgAgQgzQgFgFgBgKIAJAAQABAFADADQADACAFAAQAFAAADgCQADgDABgFIAJAAQgBAJgGAGQgFAEgIAAQgKAAgGgEg");
	this.shape_22.setTransform(729.9,36.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_23.setTransform(718.7,37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_24.setTransform(708.3,37.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZAwQgKgHgGgNQgGgNABgPQgBgRAHgMQAGgMAMgHQAMgGANAAQARgBAKAJQALAHAEAPIgOAEQgDgMgIgFQgGgFgLgBQgLAAgJAHQgIAFgDALQgEAJAAALQAAAMAEALQAEAKAIAFQAJAFAJAAQALAAAJgHQAIgGADgOIAOADQgEASgMAJQgLAJgRAAQgRABgLgIg");
	this.shape_25.setTransform(698.4,37.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAdA2IAAhUIg4BUIgOAAIAAhrIAMAAIAABUIA5hUIAOAAIAABrg");
	this.shape_26.setTransform(683.4,37.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAOAAIAAAuIAZAAQAZAAAIAJQAHAJAAAMQAAAMgIAJQgJAKgVAAgAgnAqIAaAAQANAAAGgFQAFgEAAgKQABgHgEgFQgEgEgEgBQgHgCgNAAIgTAAg");
	this.shape_27.setTransform(773.2,20);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAjBCIAAgZIhGAAIAAAZIgMAAIAAglIAIAAQANgUAAg6IAAgQIBAAAIAABeIAKAAIAAAlgAgMgvQAAAOgDAYQgCAWgHAQIAwAAIAAhRIgkAAg");
	this.shape_28.setTransform(761.2,21.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_29.setTransform(750.6,20);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAnAAQAMAAAHAEQAIADAEAHQAEAGAAAIQAAAHgDAGQgEAGgIAEQAKACAFAGQAFAHABAKQgBAHgDAHQgDAGgFAEQgEADgHACQgIACgKAAgAgaApIAaAAIAKAAIAIgDQADgCADgEQACgEAAgFQAAgGgDgFQgDgEgFgCQgGgCgJAAIgaAAgAgagIIAYAAIAMgBQAGgBACgEQADgEAAgFQAAgGgCgEQgDgEgFgBQgEgCgLAAIgWAAg");
	this.shape_30.setTransform(739.9,20);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAjBCIAAgZIhGAAIAAAZIgMAAIAAglIAIAAQANgUAAg6IAAgQIBAAAIAABeIAKAAIAAAlgAgMgvQAAAOgDAYQgCAWgHAQIAwAAIAAhRIgkAAg");
	this.shape_31.setTransform(725.2,21.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_32.setTransform(714.6,20);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgoA2IAAhrIAoAAQAMAAAIAEQAHADAEAHQAFAGAAAIQgBAHgEAGQgDAGgHAEQAJACAGAGQAEAHAAAKQAAAHgCAHQgEAGgEAEQgFADgHACQgIACgJAAgAgZApIAaAAIAJAAIAJgDQACgCACgEQADgEAAgFQAAgGgDgFQgDgEgGgCQgFgCgKAAIgYAAgAgZgIIAXAAIANgBQAFgBADgEQACgEAAgFQAAgGgCgEQgDgEgEgBQgGgCgKAAIgVAAg");
	this.shape_33.setTransform(703.9,20);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_34.setTransform(694.2,20);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_35.setTransform(683.8,20);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAdBCIAAhUIg4BUIgOAAIAAhqIAMAAIAABUIA5hUIAOAAIAABqgAgQg0QgFgEgBgJIAJAAQABAFADACQADACAFABQAFgBADgCQADgCABgFIAJAAQgBAIgFAFQgGAGgJAAQgJAAgGgGg");
	this.shape_36.setTransform(789.6,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAnA2IAAhrIAPAAIAABrgAg1A2IAAhrIAOAAIAAAuIAZAAQAZAAAIAJQAHAJABAMQAAAMgJAJQgIAKgXAAgAgnAqIAaAAQANAAAGgFQAFgEAAgKQABgHgEgFQgEgEgEgBQgHgCgNAAIgTAAg");
	this.shape_37.setTransform(777.6,2.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA2IAAgzIg3AAIAAAzIgOAAIAAhrIAOAAIAAAsIA3AAIAAgsIAOAAIAABrg");
	this.shape_38.setTransform(765.5,2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIAnAAQAMAAAHAEQAIADAEAHQAEAGAAAIQAAAHgDAGQgEAGgIAEQAKACAFAGQAFAHABAKQAAAHgEAHQgDAGgFAEQgEADgHACQgIACgKAAgAgaApIAaAAIAKAAIAIgDQADgCADgEQACgEAAgFQAAgGgDgFQgEgEgEgCQgGgCgKAAIgZAAgAgagIIAYAAIAMgBQAGgBACgEQADgEABgFQAAgGgDgEQgDgEgFgBQgEgCgLAAIgWAAg");
	this.shape_39.setTransform(755.3,2.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAdA2IAAhUIg4BUIgOAAIAAhrIAMAAIAABUIA5hUIAOAAIAABrg");
	this.shape_40.setTransform(744.8,2.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGA2IAAheIgkAAIAAgNIBVAAIAAANIgkAAIAABeg");
	this.shape_41.setTransform(734.8,2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AATA2IgRgdQgHgMgFgFQgEgEgIAAIAAAyIgOAAIAAhrIAOAAIAAAvQAJAAAEgDQAEgEAFgPIAIgOQACgFAGgDQAGgDAFAAIAJAAIAAANIgCAAIgDAAQgHAAgEADQgDADgEALQgFAOgEADQgEAEgEACQAJACAKAQIAWAkg");
	this.shape_42.setTransform(726.5,2.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIBNAAIAAANIg/AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_43.setTransform(716.7,2.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGA2IAAgOQgSAAgOgLQgMgLAAgSQAAgRAMgLQAOgKASgBIAAgOIAMAAIAAAOQAVABAMALQAMALAAAQQAAAQgMAMQgLALgWABIAAAOgAAGAcQAOAAAJgIQAHgHABgNQgBgMgHgHQgIgHgPgBgAgbgTQgJAHABAMQgBANAJAHQAIAIANAAIAAg3QgNABgIAHg");
	this.shape_44.setTransform(705.8,2.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGA2IAAgOQgSAAgNgLQgNgLAAgSQAAgRANgLQANgKASgBIAAgOIANAAIAAAOQAUABAMALQAMALAAAQQAAAQgMAMQgLALgVABIAAAOgAAHAcQAOAAAHgIQAJgHgBgNQABgMgJgHQgHgHgOgBgAgbgTQgIAHAAAMQAAANAIAHQAIAIANAAIAAg3QgNABgIAHg");
	this.shape_45.setTransform(694.4,2.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AguAUIAOgEQAGAbAaAAQANAAAJgKQAKgLABgRIgnAAIAAgMIAmAAQgBgQgJgKQgJgJgOAAQgYAAgGAWIgOgDQAEgPAMgJQALgHARgBQAOAAAMAIQALAIAGAMQAFAMAAAOQABAYgMAQQgNARgYAAQgkgBgJgjg");
	this.shape_46.setTransform(683.3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(676,-8,205.7,74.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA+IAAghIAgAAIAAAhgAgQgcIAAghIAgAAIAAAhg");
	this.shape.setTransform(797.2,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBWIgZgmQgNgTgFgGQgEgFgGgBQgFgCgMgBIgHAAIAABIIgjAAIAAirIBJAAQAaAAANAFQAMAFAIAMQAHALAAAQQAAASgLANQgLAMgXADQALAHAIAIQAHAHAMAVIAVAhgAgpgMIAZAAQAYAAAGgCQAHgDADgFQAEgFAAgHQAAgJgFgGQgFgFgIgBIgYAAIgbAAg");
	this.shape_1.setTransform(785.4,-10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_2.setTransform(766.6,-10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BBQgWgXAAgpQAAgqAWgXQAWgYAkAAQAfAAAUATQALALAGAUIgiAJQgDgOgKgIQgJgHgOAAQgSAAgMANQgMAOAAAfQAAAfAMAOQALAOASAAQAOAAAKgJQAKgJAEgSIAiAKQgIAcgSAOQgSAOgcAAQghAAgWgYg");
	this.shape_3.setTransform(748.6,-10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAQIAAgfIA/AAIAAAfg");
	this.shape_4.setTransform(736.6,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBWIAAiNIgzAAIAAgeICHAAIAAAeIgyAAIAACNg");
	this.shape_5.setTransform(724.7,-10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABWIAAirIB+AAIAAAeIhcAAIAAAmIBWAAIAAAbIhWAAIAAAvIBfAAIAAAdg");
	this.shape_6.setTransform(709.6,-10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBWIgiiAIghCAIgmAAIgpirIAkAAIAZB1IAgh1IAoAAIAeB3IAbh3IAjAAIgqCrg");
	this.shape_7.setTransform(690.1,-10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqBWIAAhHIgHAAQgQAAgHAEQgGAFgQAZIgZAlIgpAAIAVgiQAMgTAIgJQAHgIALgGQgYgDgLgMQgKgOAAgSQAAgPAIgNQAHgLANgFQANgEAZAAIBJAAIAACrgAgLg3QgGABgFAGQgFAFAAAIQAAAKAFAFQAEAGAHABQAHABAVAAIAZAAIAAgsIgbAAIgaABg");
	this.shape_8.setTransform(835.4,-39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBWIAAhvIhFBvIgiAAIAAirIAgAAIAABxIBFhxIAiAAIAACrg");
	this.shape_9.setTransform(819,-39.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BWIAAirIBzAAIAAAdIhQAAIAACOg");
	this.shape_10.setTransform(804.5,-39.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_11.setTransform(787.5,-39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhIBVIAAgbIAIAAQAKAAAEgDQAEgCAAgMIAAgdIAAhiIB3AAIAACrIgjAAIAAiNIgyAAIAABIQAAAfgDANQgBAMgJAIQgIAGgRAAg");
	this.shape_12.setTransform(769,-39.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_13.setTransform(752,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiBWIAAhLIhDAAIAABLIgjAAIAAirIAjAAIAABEIBDAAIAAhEIAjAAIAACrg");
	this.shape_14.setTransform(734,-39.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAmBWIgmg8IglA8IgqAAIA7hYIg1hTIAoAAIAiA4IAig4IAoAAIg2BTIA7BYg");
	this.shape_15.setTransform(717.3,-39.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhABWIAAirIB+AAIAAAdIhcAAIAAAmIBWAAIAAAcIhWAAIAAAvIBfAAIAAAdg");
	this.shape_16.setTransform(701.6,-39.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQBWIAAiOIgzAAIAAgdICHAAIAAAdIgyAAIAACOg");
	this.shape_17.setTransform(686,-39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(676.7,-54.5,180.6,59.7), null);


(lib.splash_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.splash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.splash_1, new cjs.Rectangle(0,0,433,148), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBCIAYg/IgtA/IgjgBIAthuIAiAAIgZBAIAuhAIAjABIgtBugAAPgzQgXABAEgKIACgFIAYAAIgCAFQgCAEAKAAQAIAAACgEIACgFIAaAAIgCAFQgEAKgYgBg");
	this.shape.setTransform(208.7,34.1,0.518,0.518);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA3QggABAHgTIAfhKQAIgSAeAAIAYAAQAgABgIARIgfBLQgHASgeAAgAAJgoIghBSQgBADAIAAQAIAAACgDIAghSQACgFgIAAQgJAAgBAFg");
	this.shape_1.setTransform(202.1,34.6,0.518,0.518);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6A4IAthvIBHAAIgEALIglAAIgnBkg");
	this.shape_2.setTransform(196.5,34.6,0.518,0.518);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA3QgfABAHgTIAfhKQAHgSAfAAIAYAAQAfAAgHASIgfBLQgHASgeAAgAAJgoIghBSQgBADAIAAQAIAAACgDIAghSQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgCgBgDAAQgJAAgBAFg");
	this.shape_3.setTransform(190.4,34.5,0.518,0.518);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+A4IAthvIA2AAQAOAAAFACQALAEgFALIgPAmQgFAKgNAEQgHACgOAAIgTAAIgQAogAgHAGIAEAAQAMAAACgGIAQgnQACgGgLAAIgFAAg");
	this.shape_4.setTransform(184,34.5,0.518,0.518);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA4IgYAAQggAAAIgSIAfhLQAHgSAeAAIAYAAQAgAAgHASIgfBLQgHASgdAAIgCAAgAAIgpIggBSQgCAFAIAAQAJAAABgFIAhhRQABgFgIAAQgIAAgCAEg");
	this.shape_5.setTransform(177.7,34.5,0.518,0.518);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAABBIAIgSIgsAAIgHASIgjAAIALgeIADAAQARAAAEgJIAlhbIBVABIgoBkIAJAAIgMAegAgIAbQgDAIgIAAIAWABIAlhaIgQAAg");
	this.shape_6.setTransform(170.5,34.9,0.518,0.518);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiA4QgPAAgGgCQgIgEAEgLIAghOQADgHAFgEQAJgFAUAAIAYAAQAWABAEAFQACAEgDAGIgIAUIgjAAIAJgWQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAIgGgBQgHgBgCAEIghBTQgBADAIABQAJgBABgDIAJgZIAjAAIgJAWQgCAIgFACQgKAHgUAAg");
	this.shape_7.setTransform(159.4,34.4,0.518,0.518);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/A4IAthvIBSABIgEAKIgwAAIgOAlIAvAAIgEAJIgvAAIgRArIAvABIgEAKg");
	this.shape_8.setTransform(148.5,34.3,0.518,0.518);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLA4IAYg+IgsA+IgkgBIAthuIAjAAIgaBAIAuhAIAjAAIgtBvg");
	this.shape_9.setTransform(141.9,34.3,0.518,0.518);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOA4IAVg2IgPAAIgWA2IgjAAIAthvIAiAAIgSAwIAPAAIATgwIAkAAIgtBvg");
	this.shape_10.setTransform(135.3,34.3,0.518,0.518);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/A3IAthuIBSAAIgEALIgwgBIgOAlIAvAAIgFAKIguAAIgRArIAvAAIgFALg");
	this.shape_11.setTransform(129.2,34.3,0.518,0.518);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFA4IAnhkIgPAAIghBTQgIARghAAIgSAAIAEgLQARABADgJIAlhcIBWAAIgtBvg");
	this.shape_12.setTransform(122.4,34.2,0.518,0.518);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNA4IAohkIgRAAIgnBkIgkAAIAthvIBWAAIgtBvg");
	this.shape_13.setTransform(116,34.2,0.518,0.518);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/A4IAthvIBSABIgFAKIgvAAIgNAlIAuAAIgFAJIguAAIgRArIAvABIgFAKg");
	this.shape_14.setTransform(109.9,34.1,0.518,0.518);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMBBIAIgSIg9gBIAthuIAiAAIgoBkIARAAIAohkIAjAAIgpBkIAJAAIgMAdg");
	this.shape_15.setTransform(103.6,34.6,0.518,0.518);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA4QgPAAgFgCQgJgEAEgLIAghOQADgHAFgEQAKgFATAAIAYAAQAWABAEAFQACADgDAHIgHAUIgkAAIAJgWQABgEgIABQgIgBgCAEIghBTQgBADAIABQAJgBABgDIAJgZIAkAAIgJAWQgDAHgFADQgKAHgUAAg");
	this.shape_16.setTransform(97.3,34.1,0.518,0.518);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag/A4IAthvIBSAAIgEALIgvAAIgPAlIAvAAIgEAKIgvgBIgRArIAvABIgFAKg");
	this.shape_17.setTransform(86.4,34,0.518,0.518);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghA3QggABAHgTIAfhKQAIgSAeAAIAYAAQAgAAgIASIgfBLQgHASgeAAgAAJgpIghBTQgBADAIAAQAIAAACgDIAghTQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgCgBgDAAQgJAAgBAEg");
	this.shape_18.setTransform(80,34,0.518,0.518);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOA4IAVg2IgPAAIgWA2IgjAAIAthvIAiAAIgSAwIAPAAIAUgwIAjAAIgtBvg");
	this.shape_19.setTransform(73.5,34,0.518,0.518);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOA4IAVg1IgPAAIgWA1IgjAAIAthvIAiAAIgSAvIAPAAIAUgvIAjAAIgtBvg");
	this.shape_20.setTransform(67,33.9,0.518,0.518);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag/A4IAthvIBSABIgEAKIgwAAIgOAlIAuAAIgDAJIgvAAIgSArIAwABIgFAKg");
	this.shape_21.setTransform(60.9,33.9,0.518,0.518);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAABBIAIgTIgsAAIgHATIgjAAIALgdIADAAQAQgBAFgIIAlhbIBVAAIgoBkIAJAAIgMAdgAgIAbQgCAGgJADIAWAAIAlhZIgQAAg");
	this.shape_22.setTransform(53.8,34.4,0.518,0.518);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASA4IAAgyIgBAAIgTAyIgjAAIAUgyIgBAAIgoAyIgkAAIA1g6IgEg1IAkAAIgEAyIABAAIATgyIAjAAIgUAyIABAAIAkgyIAkABIgvA1IAFA5g");
	this.shape_23.setTransform(45.9,33.9,0.518,0.518);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiA4QgfgBAHgRIAfhLQAHgSAeAAIAZAAQAfAAgHASIgfBLQgHASgeAAgAAJgoIghBRQgBAEAIABQAIAAACgFIAghRQACgEgJAAQgIAAgBAEg");
	this.shape_24.setTransform(38.3,33.8,0.518,0.518);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag+A3IAthuIA2AAQAOAAAFACQAKAEgEALIgPAmQgFAKgNAEQgHACgOAAIgTAAIgQAogAgHAGIAEAAQALABADgHIAQgnQACgFgMgBIgEAAg");
	this.shape_25.setTransform(31.9,33.8,0.518,0.518);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag+A4IAthvIAzAAQAXABAFAGQADADgEAGIgJAYQgGAMgYAAIgBACQAMAAAGACQAGADgDAGIgMAfQgGAPgiAAgAgXAtIAEAAQANAAACgFIALgfQADgGgLAAIgEAAgAgBgHIACAAQANAAACgFIALgbQACgEgMgCIgEAAg");
	this.shape_26.setTransform(25.4,33.8,0.518,0.518);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTA/QgOAAgHgIQgFgEgDgLQgCgFAAgNQAAgUAMgSQAHgMAHgGIACgCQAHgFAKgDQANgFAKABIAEAAQAKABAEAEQgEgFgHgDIgDAAIgWAAIALgDIAPgBIACAAIAPAEQgDgHgLgCIgBAAIgLABIADgCQAGgCAIABQAKABAHAFQgBABAAABQAAAAAAABQAAAAAAABQABAAAAAAIgFAHIgBAIQACACACAGIAAAEQgBAHgGAOIgQAoQgMAbgeAAIgDAAgAgNAtQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAgBAAIgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIABACQAHAAAEgBIAAgCIgDABIgBgBIAAAAIABgBIACgCIgBgGIgDABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAEgCIAAgIIgBAAIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABgBIAAAAIADgBIACgLIgDAAIgBgBIABgBIACgBIACAAIAEgMIgDgBIAAgBIABgBIACgBIABAAIAKgTIgLADIgGAKIADgBIACAAIAAABIgBABIgGADIgGAQIACgBIACAAIABABIgBABIgBAAIAAAAIgEADIgDALIADAAIABAAIABABIgBABIgEACIAAAAIAAAJIACAAIACAAIAAAAIgBABIgDACIABAHIACgBgAgZAyQgGgeAUgkIAFgIIgDABIgBABQgHAMgOAIQgDAFgCAIIAKgIIACgDIADgBQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAABQgFAJgLAIIAAAIIAFgFIACgDIADgCQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQgDAFgHAHIABAFIAAABIADgDIAEgEQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAABQgBADgFAEIAEAGIADgDQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgCACIAFADIAAAAgAASgZIgFAHQgTAlAHAbQAEgCADgFIgFgDQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIADABIAEABIADgGIAAgBQgIAAgCgFQAAAAgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQADACAHAAIACgHQgJAAgEgHIABgCIACACQAGAEAGgBIADgHIABgCIgBAAQgNAAAAgIQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAEAGAKgDIAAgBIAEgJQgPAAADgLIABgCQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQACAHALgCIAAAAIABgEQgHgGgIgBgAgTgUIgHAJIALgJIABgCg");
	this.shape_27.setTransform(193.5,21.2,0.518,0.518);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgrBLQgJgDgFgIQgEgGgDgJIgBgIQAAgJAEgRIACgIIAFgNQAFgOAIgQIALgPQAQgSAagGQAFgDAOAAQAHAAAGACQAKAEAGAJQAGAIAAALQAAAPgGARIgEAJQgIAQgSAUQgIALgFAEQgIAHgKADQgIACgIAAIgIgBIACAHIgPgBIADACQAFACANABIgTABIAUAHIgDABQgPAAgJgEgAARAJIAIADQAEgFAJgGIAGgJIADgIIABgCIgRAOQgFAFgBAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAJgNAQgLIADgNIgLAJIgDAEIgDACQAAAAAAAAQgBAAAAAAQAAgBABgBQAAgBABgBQAFgIALgJIgDgJIgCADQgEAGgCAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAgBIAGgIQgCgEgDgBIgFgBQgBAjgUAlgAANgmQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABQgDADgDAAIgEAPIAFAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIgCACIgFACIgEANIADAAIABAAIABABIgCABIAAABIAJADIACgDIAHgPIgFABIgBAAIgBgCIAIgEIAAgBIAFgQIgFABIgBgBIABgBIAGgDIACgMIgDAAIgCAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAGgEIABgJIgHAAIgGABIgFACIAAAJIAEgCIABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgCACIgEADIgCALIAEgBgAgpgDIgCAFIAHgBQAJgBANABQAOgfAAgaIgGADQgIAFgGAGIgBABQAGAAAJADQAAAAABAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgDAAQgEgBgKABIgDAGIgCAFQARgCAEAHQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgCAAIgCgCQgFgCgOABIgFAKQAUAAACAJQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgCgBIgBAAQgCgDgLAAIgHAAg");
	this.shape_28.setTransform(202.3,4.1,0.518,0.518);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhGDgQgVgGgPgLQgWgRgHgIIgLgPQgHgJgCgIIgCgJIgBgFIAAgBIABgEIAAgDIAAgDIABgEQAAAAAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBIAAgDIgCgCIAAAAIgEgDIgLgKIgCgCIgMgJIgEgEQgFABAAgCQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgCABIAAAAQgGACgBACIgDAAIgPAKIgEACIAAAAIAAAAIgBAAIgBACIgBABIgFAEQgCgBAAgEIAAgBIABAAQgBgGgLgDIgHAAQgHAAgIACIAAgBIACgBIABgBIACgKQACgIAAgIIgBgEQAAgDADgJIADgGIACgDIAAAAIADgEIACgBIAAgBIAFgFIAAAAIAEgDIAAAAIAGgFIABAAIAEgDIAAAAIACgCIABAAIACgBQACgGgCgJIAAAAIABgKQAEgIAEgHIAUgeIAEgIIADgEIABgBIgCgLIAWAIIgKAEIANADIADADIgCADIgNADIAAABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAQADABADAAQAGAAAEgBIgCgEIAFAAQAGgBAFgDQAKgHAFgGIABAEIgCADIABABIABAEQABADAGACIAHADIADAAIAFgBIAMgDIAEAAIAJAAQADgBASgHQAGgDALgCIAHgDIADgBIAKgFIALgIIACgDIAIgGIABAAIAAgBQACgDADgCIABAAIACgDIABgCQAMgUAUgVQAVgZAWgOQAOgNAVgKIAagKIAIgCIAPgCIAMABQALABAIAFQAHAFAGAMIAFANIAAAHQAAAPgIANIgKALIgMALIgZAPIggATQgHADgVAHIgOAEIgnAHIgEABIgGAAIgHABIgGACIgCACQgHgBgFgDIgDgCIAGAGIAEADQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABIgBABIgCABIgHACQgJgCgEgDIAAgBQAAACAHAGQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAIgCACIgGABIgIgBIgCAAIAAAAQgBAAAAAAQABABAAAAQAAABAAAAQABABABAAIACACIAHACIABAAIgEAGIgEABIgCAAIgBAAQgCAAgDAFIAAAAIAEADIADAAIAAABIgCALIAAAAIADAEIAFAIQACADAIABIADABIAJgCIALgBIgKAIIgDAEIgDAFIARgMQAGgEAHgBIgOAPIAJgIIACgBQAGgGAIAAIALgFIAIgFIAagMIARgEIAXgFQAWgEAaAAIAVAAIAUABQAWADAOAFQAVAKgDATQgDAMgGAHQgMATggAJQgQAEgaAEIghADIgBAAIgmgBQgUgBgSgFQgHgCgKgHIgNgFIgKgBIgJgBIgxAGQgIABgGAEIgoAQQgPAGgDACIgFAFQAAABAAAAQgBAAAAABQAAAAAAABQAAAAABABIAAACIAAACIgDAAQgDAAgMAGQgOAGgDAFIAXgJIAGgBIAHgBIAFABIAAAAQgCAEgJACQgGACgHAEIgGADIgDAEIAAAAIAAABIAAAAIAEgCQAHgEAGgBIAFAAIAAABIgBAAIgCAAQgFACgLAIIABgBIABAAIAAAAIABAAIAAgBIABAAIAAAAIABAAIABgBIAAAAIABAAIABAAIAAgBIABAAIAAAAIABAAIAAgBIABAAIABAAIABAAIAAgBIABAAIAAAAIACAAIAAgBIABAAIABAAIABAAIABgBIABAAIATgCIACADIAFACQAIACAEACIABAAIAAABIABAAIABAAIAAAAIABABIABAAIAAAAIABAAIABABIAAAAIABAAQAHADAPAHIAVALIAeAQQAWANgBARIAAADIAAACIgBACIAAABIgBACIAAAAIgCAEIAAABIgBACIgDAEQgIAKgLAGIgIAEQgKAFgEABQgNADgMAAQgPAAgNgEgAgsDNQAFADgCAHIAMgBIAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABABIADgBIAHgCQhEgMgZgZQgCAFgBAJIAIAGQACgFgBgDIgBgCQgBAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAEAAQAEAHgEAHIANAIQACgGgBgDQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABAAAAABQABAAAAAAQABAAAAABQAGAFgEAIIANAFIABAAQACgGgCgDIgBgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEAAQAEAHgCAHIANACQACgFgBgCIgBgCQgBAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIACAAIABABgAgGDKIAAAAIgCADIACABIABgBIAIgFIAAAAIABgDIgOgDIgDADIgCAAIgBgBIACgDIgMgDIgEADQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAAAIACgDIgNgEIgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAAAIADgDIgNgFIgFABIAAAAIgBABIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAgCIABAAIADgCIgNgHIgGABQgBABAAAAQgBAAAAAAQAAAAAAAAQABgBAAAAIABgBIAAgBIADgCQgGgEgGgGIgBgBIgEABIgBABIgEAGQAAAEACADIACgDIACAAIAAAAIABgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIAAABIgDAEQAGAFAJAFIADgCIABgBIABAAIAAgBIAAAAIACABIgBAAIAAABIAAAAIgCAEIAPAGQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIgCADIAAAAIAOAFIAEgCIACgBIAAABIAAAAIgCADIAMADIAHgCIAAABIgCADIALACIAEgCIABgBIACABgAhLCKIgCABQgGACgGAFQAMAQAcANQAcAMAgAGIAFgIIgIAEQgBAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAFgCIAJgFIAAgDIAAgEIgEgBQgKAIgPADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBIAFgCQAJgCAIgHIgCgBIgDAAIgFgCQgPAJgLAAQgBAAgBABQgBAAAAAAQAAAAAAgBQAAAAAAAAIAFgCQAKgDAIgGIgJgEQgPAJgOAAQgBABgBAAQAAAAgBAAQAAAAAAgBQAAAAABgBIAFgBQALgCAKgHIgKgEQgRAKgOgDQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQALAAAMgIIgBgBIgIgGQgUALgMgFQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAKABANgIIgBgBIgFgEIgDgFIgDAAQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAgAANCmQgBgCgDgBIgCABIAGACIAAAAgAAACgIgBABIAEACIACgDIgBgBIgBAAgAgHCfIAEABIACgBIABgBIABAAIgEgDgAgNCZIgCACIAEACIAEgEIgBgBgAgWCYIAFADIACgDIACgBIACAAIgGgDgAgcCRIgCACIAEADIAFgEIgDgCgAgkCPIAEADIAEgCIABgBIABAAIgHgDgAgsCKIADADIAEgDIgDgBgAguCIIADgBIgCgBIAAAAIgEgCIgBAAgACNAYQANAEAAALIAWgCQAAgIgDgEIgCgBQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAABABQAJAEAAAKIAPgCQABgGgDgEIgCgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABABABAAQAGAGABAFIALgDIgCgEIgBgCQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIAFAGIAKgEIAAgCQAAgBABAAQAAAAAAAAQABABAAAAQAAAAABABIAHgEQg3gFhHAIQACAIAHAFIAIAEIAMAAQAAgGgGgFQgBgBgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIADgBIADAAgAB5AAIAAAAQgEAJgBAGIAEgBIABgDIABgBIAAAAIABgBIACgBIABAAIABADIAAACIAngDIACgFIABAAIABgBIACgBIAAABIABAFIAYAAIACgEIABgBIAAAAIABgBIACgBIABABIgBABIABAAIgBAAIAAAEIAQABIADgEIABgBIACgBIABABIgCAFIANABIAEgFIACgBQAAABAAAAQABAAAAAAQAAAAgBAAQAAABAAAAIgCAEIAKABIAFgFIAEgJIgEAAIgBACIgCABIgCABIgBgBIACgEIgMgBIgEAEIgCABIgBgBIAAAAIADgEIgPgBIgFAEIAAABIAAAAIgBAAIgCABIAAAAIgBgBIABgCIADgDIgTAAIgGAFIgCABIgBAAIAAgCIABgBIACgCIgcABIgFAEIgCABIgBAAIgBAAIAAgBIABAAIACgDgACUgcIgHAFIgOAQQBOgLA4AGQAAgDgFgDIAAAAQgBAAgBABQgBAAAAAAQgBAAAAAAQAAgBAAAAIACgCIgDgBIgFgCIgJAEQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIAGgDIAEgCIgNgDQgKAHgHABQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAGgCIAKgFIgQgCQgKAHgNAEQgBAAgBABQgBAAAAAAQgBAAAAAAQAAgBAAAAIAGgDQAJgEAGgEIgZgBQgLAJgSAGQgCAAAAABQgBAAgBAAQAAAAgBAAQAAgBAAAAIAIgDIASgLgABWh4IAFABIACgBQAFgEAIgCQAMgEAKAGIAAAAIALgIQgHgKgNAFQgBABgBAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABgBQATgIAKAIIALgIQgFgKgOAEIgCAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAQgIALAKIAIgHQgEgIgMABIgEAAQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBABAAQAQgFAIAJIAHgGQgCgHgMAAIgDAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQANgFAIAKIABgKQgDgCgFAAIgDAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQADgBAFAAIgDgGQgzAhg0ArgABAiBQAEAFAKADIAVgTIgBgCIgBgBIAAgBIABgCIABAAIAGACQAKgJAKgGIgCgCIgBgCIACgCIACABIADABIAPgKIgCgCIAAgCQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIADACIAMgIIgBgEIABgBIACAAIACACIAJgGIAAgDIABgCIABAAIACADIAIgFIAAgBIgBgCIAAgBIgBgBIgGgDIgBABIABADIgBABQAAABgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgCgCIgJAFIABAEQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAIgDgCIgLAHIAAAEQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgBAAIgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgNAJIgBAEIgBACIgBAAIgBgBIgBgCIgQALIAAAFIgCACIgBAAIgBgBIgBgCIAAgBIgVARIgBAFIAAABIgBABIgBAAIgBAAIgBgEgABXixIgBAAIAAABIgLAIQgDANgNAPIgBABIACAEQA3gsA1gfIgFAAIgCABIAAgBIgHAAIgBABIgDAFQgBABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIACgGIABgCIgKACIgGANQgCAEgCAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBIABgDIADgJQgIADgEACQgCAJgHALQgDAEgBgBIACgGQAEgGAAgIIgMAIQgCAKgKAPQgDAEgCgBIADgGQAFgIABgJgACaiKIABABIAHgEIgBAAIgBAAIgBgBgACiiQIABABIACAAIADgCIgDgCgACriYIACADIAGgFIgDAAIgBgCgACxidIABABIADAAIABgBIgCgCgAC4ijIACACIACgCIABgCIgBgBgAjDhRIAAAAg");
	this.shape_29.setTransform(209.2,12.6,0.518,0.518);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhyABQADgBBlgFIB9gHIgHAHQgGAGgEAJIgCADg");
	this.shape_30.setTransform(193,1.8,0.518,0.518);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AinAFQA4gFBwgJICngOIAAABIgBABIAAAAQgNASgFAMQgCAGABAEIAAABIABABIgCADg");
	this.shape_31.setTransform(187.7,12,0.518,0.518);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AitALIFcgjQgLAUAAAQIACANg");
	this.shape_32.setTransform(180.5,22.6,0.518,0.518);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A3wDqQhrAAgygdQgUgKgJgMQgKgNAAgPQAAgMAFgKIB5kKQAUgsBOgbQBOgcBnAAIAVAAQBfgBBKAWQAhALAjAVIABAAQAPAKAMAKIABABIgtBkIkEAAIAbg/IABgBIAAAAIAAgBIgCgCQgHgFgPAAQgOAAgJADQgKAEgCAFIhsDvIgBACQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIAAAAQAGAFAPAAQAJABAPgFIAIgEIADgDIAmhUIABgCIEFAAIhECXIgBAAQhCAThfAQQhZAOhFAAgAvBDkQhQAAgrgUIAAAAIgCgBIgEgBQgPgIgIgJQgIgJAAgLIAAgGIBcjDQAHgPAUgMQATgMAggLQArgNAxgGIAzgCIAuAAQBOABAuAUIARAJQALAHAEAHQAFAHAAAJIgCAKIhbDBQgQAcg9AUQgrAOgxAEQgQACgjAAgAtCgaQgFAAgCAEIhRCsIABAAIACADQAHACAIAAQAJAAAIgCQAFgDACgDIBQirIAAAAIAAgBIAAgBIgDgBQgEgCgJAAQgMAAgGADgAGVDJIgBgBIAAgBQgXgRAAgYQAAgNAGgPIABAAQAIgOAKgKQALgMAcgRQAmgUAdgGIC5gnIAPgiIABgBIgBgBIgBgBIgBAAIAAAAIgFgDIgIAAQgLAAgFACIgBAAIgGADIgDADIAAAAIgPAcIjAAAIAdg6IAAAAQAagMAPgGQAwgRAqgHQA0gKA9AAIAPAAQBNAAAmAUIAKAFIAAAAQAUAOAAARQAAAGgEAJIh1D5IivAAIACgGIgIAEQgLADgOACQgjAGgNAAQhQAAglgagAJuBlIgGABQgbAJgGAMIgBAFQAAAEAEAEQAHAEAYAAIAAAAIACAAIAFgBIANgEIAEgDIASgngAknDSQgHgDgHgGQgSgMAAgRQAAgIAEgJIBXi7QAQgdArgSQAugUAxAAIAQAAQA7ACAeAGIA3h2IC+AAIgjBMIgBAAIikFfIitAAIgBAAQgGgGgFAAIguAGQgnACgaAAQgqAAgZgKgAgpgcQgHADgEAGIhKCgIgCAFIABABIACACQAFACAIAAQALAAAIgDQAFgDAEgGIBKicIABgFQAAgCgCgCIgBAAQgCgEgCAAIgIgBQgIAAgJADgAWJDaQgqAAgcgWQgKgHgFgJQgFgMAAgLQAAgMAFgOIABAAIBBiLIAAgBIAAgBIADgHIAAAAIAfhDIgUAAIAag4IABAAQALAAAFgDQAGgDAEgJIAag2IDPAAIgfBFIAyAAIgcA4IgxAAIhhDQQgCAEAAADQAAADACAEQACADAEABQAKAEATAAIAEAAIgfBDIgBAAQgZAEgYABgAQeDaIBtjoIABgFIAAgCIgCgCQgEgCgIABQgLgBgHAEQgHADgDAGIhrDmIi+AAICQkyIB4AAIgCADIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAAAAIADACIAHAAIBSgIQApgFApAAQA4AAAYASQAHAFAEAHQAGAIAAAKIgBALIhDCOIAAABIAAAAIgxBrgACADaICIkjIAAgCIC/AAIiIElgAqgDaICPkxIC1AAIADAJQANgFATgFIABAAIArgGIAeAAIAEAAIguBhIgBAAQgyAAgdAKQgdAKgIATIhSCwgAEch2IArhbIC+AAIgpBbg");
	this.shape_33.setTransform(88.9,12.1,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,223.4,38.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAJIgBgFIgBAFIgCAEIgFgDIACgEIADgEIgFACIgFAAIAAgFIAFgBIAFACIgEgEIgDgEIAFgEIAEAFIAAAFIABgGIADgEIAFADIgCAEIgEAEIAGgBIAEgBIAAAGIgEAAIgGgBIAEADIADAFIgGADg");
	this.shape.setTransform(102.3,73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACAJIgBgFIgBAFIgCAEIgFgDIACgEIADgEIgFACIgFAAIAAgFIAFgBIAFACIgEgEIgDgEIAFgEIAEAFIAAAFIABgGIADgEIAFADIgCAEIgEAEIAGgBIAEgBIAAAGIgEAAIgGgBIAEADIADAFIgGADg");
	this.shape_1.setTransform(100.9,76.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRgLIAQgFQAGgBAFABQAFACACAIQADAGgEAGQgEAFgGACIgOAEg");
	this.shape_2.setTransform(42.3,58.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXglIALgDQAFgCAFACQACAAAEAEIAFAJIAOApQACAKgCAGQgBAGgLADIgLADg");
	this.shape_3.setTransform(55.4,57.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOgJIANgEQAEgBAFABQAEACACAGQACAHgDADQgDAEgFACIgLAEg");
	this.shape_4.setTransform(53.5,71.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLgXIABAAIAWApIgSAGg");
	this.shape_5.setTransform(75.6,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAmQgFgEgCgHIgPgvIAAgFIABgGQABgDADgCQACgCAEgBIAHgBIAFADIAEAEIACAEIAPAzQACAGgDAFQgEAFgFACIgFABQgFAAgCgDg");
	this.shape_6.setTransform(30.8,64.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAsJmIgJABIgIAAIgOAAIgZAAIAAgDIgYACQgFgDgNgBIg1gGQgMgCgNgGIgDAFQgagGgFgFIADABQABgCgHgBIgMgEIgIAAQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABIgxgUIgXgLQgJgFgHgFIg7gdIgUgOIABAAIgQgOQgJgJABgCIgogdQgHgFgIgJIAGAEQgIgJgJgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIgGgHIgGgFIACABIgbggQgUgXgKgOQAEAEgBgGQgIgGgagpIAFAGQgGgJgEgMIgDgIQgBgFgFgIIAEAOQgIgUgBAGQgCgFABgCIgDgLQABgBACAFQAAABABABQAAAAABAAQAAAAAAAAQAAAAAAgBIgKgiQgCACgEgIQgCgGAAAGIgEgLIgUhNQACgEgCgKIgCgTQgCgXADABQgBgUgGgTIACAKQgDgGAAgaIACATIAEARIAAAAIAAAAIgDgYIgCgSIAEgEQgBgGABgFQABgFgBgHIgBACQABgLgBgMQgBgLABgLIABACIABgNQABgIACgFIgBAHIgBAHQACgBAFgPQABgIgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAIABAFIAEgbIADgXIAAAAIAGgXQACgNADgFIAAADIAIgWQAEgNAEAAIgBADQgDAIAEgGQAFgJAAgHQABgGAEgIIAAACIATgoIAYglIABgCIAAAAQAKgPAIgGQgFAEAFgKQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQADgDABgDIABgEQADgCAFgIIAGgJIAIgLQgFAHABABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAGgGAGgMQAGgJAHgIIAKgGQgBgDAHgHIAGgIQAJgDAAABIAKgJQAGgGABgCIgEACIAVgTQALgKAMgHIADAFIAOgKQAIgIAHgBIgDAAIAEgFIgSANIANgMIgWAQIAHgGIgEAAQAHgGAIgDQAIgEAGgFQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAABgBQAGgEAKgEIAOgGIgBABIAKgGIAGgEIgGADIAGgEQAEgDAHgDQAFgDACgCQAAgBAAAAQAAAAgBAAQAAAAgBAAQgBABgCAAQACgBAEgBQABAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQAIgDAEgFQADgDALgCIgCABIAIgCQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAABAAQACABgKADQABABAIgDIAMgEQAFgDgBgBQAAAAgBgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAABAJgDIgCAAIgDAAIANgEIgIADIAbgGIAJgCIgEACQgCACAHgBQAQgFgCAEQAHgBADgDQADgCAOgCQACAAAAAAQAAAAAAAAQAAgBgCAAQgBAAgCAAIAsgFQgPABALgDQgBABAIAAIAOAAIACgCQAGABgLACIgEAAQgHABADACQACACAKgBQAJgBABgCQABgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIALgBIAHgCQAKgDAHABIAMACIASADQABAAAAAAQAAgBAAAAQgBAAgBAAQgBgBgCAAQgCAAgBAAQgBAAgBgBQgBAAABAAQAAAAABgBQAMAEAWgBIATAAQANABAHADIgEACIAUADIgJgDIANACQAHACgEABIARACIAPAFIgHgCQAAABAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIAaAGQAAAAAAABQAAAAAAAAQAAAAABABQAAAAABAAIAFADQAFAAAOAEIAVAGIAAABQAOAFATAJIAiAQIgCgBQgDgEALAFIAQAIQADAEACABQACgCAKAGQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAHAEQAGAEAAgDQABADANAKIgHgFIABACQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAFABIAFADIgIgCIAHAEQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQAKAGgBgEQgCgFABgBIAFAEIAhAXIgBAAIAEACIgDgBIgBgBIgDAAQAIAGADABIAIAHQgHgFgCACIAOALQAHAGADAAIgBAAQAfAigBAAIAQASQAIAJABgBIAKAOQAEAJAFACQABACAAABQABABAAAAQAAABAAAAQAAAAgBAAIgFgFQABAEAIAJQAGAHgBACQABACABABQAAAAABABQAAAAAAAAQAAAAAAgBQAAgBAAgBQgBAAAAgBQAAAAABAAQAAAAAAAAQgBADAHAKQAJAOACAGQAAAAABABQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABABQAAABABABQgBgBADAHIAEABIAAAOQAFAHACgBIACAAIAFAKQAAADAFAIIAFAJIAEAJIgCgBIgCAAIAFAIQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQABAEACADIADAJQgCgEgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAABIAIANIgFgFQACAHAHAPQAGANgCAFIgDgGIAAABIAEAOQAAABAAAAQABABAAAAQAAAAAAAAQAAgBAAAAIABAFIgCgDIABADQADADADAGQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAEANIABAMIgDgKIADARIAAAAIACAMIAFACIACAJQADgBgCgKQABgDADAKIAEARQACAJgBAEQAAAAgBABQAAAAAAABQAAAAAAAAQgBAAAAAAQgCABAAAJIAEAXIgCABQgBADACAEQgBgCABAMIgBASIACgEIABATIgDAPIAAACIgDANQgBAHAAAIIABANIAAACIgDADIAAALQAAAGgCAIIgLAmIgLAmIgVA3IgJARIACgBIgOAYIgLAYIgMAXQgHAMgKALIABgDQgGAJABgCQAAgBAAgBQAAAAAAAAQgBABgBAAQgBABgBACQAAACgIAMIgNASIAFgIQgFADgCADIgGALIghAnIgMAGQgKAGgGACIgEAKQgHAEgIAIIAOgKIAAAAIACgCIAEgEIAAgBIABgBIACgBIgBABIgBABQABAAAAgBQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQABABAAAAQgQAOgDAAIgJAGIgHAGIABgBIgCAAQgGADgMALIgPAPQAEgGgEABIgGABIAZgQQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgJAFgIAHIgKAHQgGAEgGADQABgBAAAAQABgBAAAAQABAAgBgBQAAAAAAAAQgLAFgCAFQgDAAgIADQgJAEgFADQgGAGgKAFIAEgEQgHADgEADIgJAFIACgCQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQgKAFgOAKIABgDQggAQgEgBQACACgQAEIgaAGQAEgBABgCQgJAEgJACIgTAEIglAEIgFgDQgGAAgJAFQgIAEgIABgAACJSIAEABQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBgAAeJSIAAAAIAKgBQARgBACgBIAWgBIAZgEQASgCAjgJIgDABQAIgBAHgEQAJgFAHgCIgEACQAPgDAWgJQAUgJAOgJQgBAAAAABQgBAAAAAAQAAABABAAQAAAAAAAAQACAAAEgCQAAAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBgBAFgCQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAABAAIADgBIAIgIIAUgJIAJgFIgNABQgQABgEAEIAHgBQgHAGgWAGQgRADAAAFIAEADIgLADIgGACIgNAGIgSAEIABgBIgSAFIgGACIgFAEIAFAAIgmAJQgJAFgFgBQAAAEgXADIgdACQAKgBgBgCIgGgCQgIAEgEABQgGAAgJgBQgCAHgEADgAg7JNIADADIADABIALgBIgFgFQgBAEgPgEIgHgDQgBAAAAABQgBAAAAAAQAAABAAABQABAAAAABIhNgSIgigLQgOgFgHgFQgCgDgJgCIgOgDIADgDQgMgCgJgDIgSgFQAGAEACAAIgEABIALAEQgEgBgCABQgBABAGADQACABABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAQAAAAABgBQAAAAABAAIABAEQAGADACgCQABgBgGgEIBIAbIgDABIAlALQABAAABAAQABgBAAAAQAAAAAAAAQAAAAgBgBQAIABABABIADACIgEAAIAFABIAbADQAAABALAEQANADAJAAQABgCgIgBgAAoJEIAYgFIgMgEQAPgGAEgDQAHgEgJgCIADAAIAPABIAogRQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAAAAAQABABAAAAQABAAAAAAQAHgEAHgBIAQgCIADAAIAJgBQAGgBABgCQAHgEABgDQABgDADgCQAAABAAAAQgBAAABABQAAAAABAAQAAAAABAAIAJgJQAAAAAAAAQABABgBAAQAAAAAAABQgBABAAAAQgCADAHgCIAYgOIAWgKQAMgHgIAAQgHgBAJgEQAKAEALgGIAFgHQABgDAGgFIADAFQAQgLACADQAJgJAHgEQAIgHgMACIgRADIATgJQALgFAFgBIgJAJIgCACQAPgHAIgLQAFgHAKAAQgHAFgEAGQgEAFAFAAIACgCIAIgLQAAAAABAAQAAABgBAAQAAAAAAABQgBABAAAAQgBABAAAAQAAAAAAAAQAAAAABAAQABAAABgBIAJgQIAAABIARgRIAAgBIAAABQAAABAAAAQABAAAAgBQAAAAABAAQABgBAAAAIALgQQgEAHANgKQAIgJACgKQABgJAIgGIgEAFIAIgGQgCgCAEgJIAKgQQAHgKACgHQAEgIgDgCQAHgGgCAFIgHATIALgKIgIAOQAKgJAFgNIAFgUQABgBAFABQADABAEgLQAGgPgGAEQgGADADgHIAKgJIAFgPIAGgNIALgZQACgGgBgCQAFgKACgTQACgWACgEQAAADAHgMIABgbQAAAHACADIAEAEQABgFAAgFIgBgJIACAFQAAABAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgPIAAgCIhTAZQg0AQgeAHQgFACAFAAQgIABgEACIgHAEIgOACIgBABIAAgBIgEAAIgBABIAAgBQgBABgBAAQAAABgBAAQAAAAAAABQAAAAAAAAIACABIgEABQgCAMACgBQgFAHgCAGQgCAGAKgQQgCAIABABQgFAFgEAAQgEABACgGQADgFACgGQACgFgCgBQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAABIABgFIAAgBIgdAIIgBAGIgHASQgJAIgGADIABAGQgEAEgBAGIAGgKIACgDQAAAAAAAAQABgBAAAAQAAAAABAAQAAABAAAAIABACQgGALgCAAIgEAFIgCAEIAAgBIgBAAIgHALIgEAMQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgEABIALgNIgCABQgEADgEAGQgCAGgGAFIAAgCQgGAEACAEQgCAAgEADIgHAGQgBAFgEAEIABgDQgEACgBADIgDAEIAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQgEAFgEAJIgBgDQgNAQgDgBQAFADgXAMQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIgIAGIgJAFIgTAJIgEgCQgDABgDAGQgDAFgEABIACgCIgPAGIgPAEIAAgCIgMAGQgEgBgHABIgNAEQgVAFgJgDIgBAFQgPACgDgDIABAAQAAgBAAAAQAAAAAAgBQgBAAgBAAQAAAAgBAAIgHABIgEACQgBAAAAAAQAAABAAAAQAAAAAAAAQABABAAAAIgrgFIgKgDIgYgBQgNgBgMgEIAAgBQgRgHABgEIgSgEQgNgDgGgEIAEAAQgGgEgGAAIAAgBIAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAIgEgBIACAAQgEgEgJgEIgPgIIgSAFIADACIAFAEIAJAGIgBgCIAkATQAWALAQAFIgIgEIAKADQAIACAGADIgGgBQAAADAIACIADAAIACABQABABABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAQABACAHACQAHADAHABIAPADQAHABADACQADgBgIgBQgJgCAEgBIAKADIgCgCIAuAFIARAAIgBAAQANABAFgDQAAAAABAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQABAAAAAAQAIgDAPAAIALgBQAEAAAEgCQgBACAKACQAJACgFADIAHgCQgCACgKACQgLADgBABIgWABIgBACQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQgNABAKABQg5AAgUgCQgqgCghgNQgBAAAAAAQgBAAAAABQAAAAAAAAQABABAAAAQgEgDgEAAIgGAAIgKgGIgBgCQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAIAAACQgPgGgTgLIgegRQAAAAgBgBQAAAAAAAAQgBgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQgBgBgBAAQAAgBgBAAQAGAHgOgJQgLgHABACQgCgFgHgFIgTAFQgKADABgDIADAAQAKgDgJABQgJABgIADQAFgBgGAEQgGADAQgEIgVAIQgFAGgfAIQgmAJgNAFIACgCQgOAGgwAMIABAAQALAJACgDIADAFIAUAXIgIgHQgCgBgBAAQAAAAgBAAQgBAAAAAAQAAAAABABIAHAJIADAHIhBgbIACACIANALIABAFQALAKAXAGQANADALAAQAGAHgDAFQgEAEgEgBQAFAFAJAEIAMAEQAQAEAJAIIgGgIIANAKQAKAIgBgCQACAFAAAEQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIAYAFQgCAAgCAEIgEAEQAGAEAGgCQAGgCgDgDIAMAMIAJALQAEACAAgGQgBgFgCgCIAOAGIAJAGQgMgEgDAKIgFAMIA1gDIgFAEIgEAEQACgCAKACIAVAGIAwAOIgEgBQgFABAMAEIALADQAIAFALgEIAKgBQAFAAAFADQgUgEABAGQAFAAAHABIAOACQAPAAgDgGIAKAEQAFABgBACIAbgCIAFgBQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAABQABABAFABIgMAAIgMABQgPABgFgEIACAHQAAAEgFACIAYgBIAKgCIApgMIAfADIABgDIAGAGIAGgCIgBACIAHgCQACADgLAIIgIgDQgMAHAKACIAEgCQgGAFADABgAkaIGIAAABQAEABAMAHQAFAAgBgDIgHgIIgTgCgAkgICIgBgBIAAgGQgLgCgLgKIADABIgBgBQgEACgRgIQgRgJgCAAQgBgEgDgDIgHgFQgJgFAAgFQgGgCgDgCIAAACIAdAaIAJAEQAFACABgBIAtAaIAAABIABAAgAE/H2IAJgGQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQgGAFAAADgAG5GIIgPAUIgDABQgCAIgQAMIgXAQQgEAFABABIAFAAIAVgVIAEABQADgDACgFQABgDAHgFQACgBgKALQAJgHACgFQAEgGAGgGIgBAGQAHgHADgFIACgIQAGgJAIgFQAEgBADgEQAEgEAGgJQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQABgBAAAAQAFgGAHgMIAFgIIADgEIAEgGQAFgEgDAFQgCAEAFgEIgKANQAFgFgEAGQgFAJABAAQAGgGAEgJIAKgTIgDAHQgBABAAABQAAABAAAAQAAAAAAAAQAAAAABAAIADgGIgCAGQACgBACgEIAEgIQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBABIACgBIACgGIgEACIAEgHIAAAEIALgVIAGgPQAAAAAAAAQAAABAAAAQAAAAABgBQAAAAAAAAIAFgMIADgOIgJASIgBgCQAAAAAAAAQAAgBgBABQAAAAAAAAQgBABAAAAIgDAPQgEANgHAKIAAgCIgPAbIgCADIgBABQgEgCgFAIIgMATQgFALgIAKQgIAJgGAAQgBAEgJAOgAFLG8IgFAGIAIgDQADgDABgEQgDAAgEAEgAmOG7QABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIgGgFgAm9GNQAAAAAAAAQAAgBAAAAQAAgBgBgBQAAAAgBgCIgEgEQABAEAFAFgAm7FhIADAEQAGAGAIAEQAOAHADgEIgVgRIgBgBIgGABIgDgBgAgeFCQABAAAAAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAPACAagBIgBACIALgBIAKAAQAAAAAAAAQABgBAAAAQAAAAAAAAQgBgBAAAAQAEgBABABQABABAEgCIgFADIARgFQAAABAHABQAHAAAEgCQAAAAAAgBQAAAAAAAAQgBAAgBAAQgBAAgBAAIAFgCIAEADIAGgFIABADIAFgEIAFgDQAPgDAIABQAAgDAIgDQAJgDAAgCQAKgCAOgIIAZgOIgBABQAEgCADgEQACgFAEgCIgBACQAHgDAKgJQAIgJAFgHQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIACgGIASgRQALgNAEgHQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAHgLAKgWIADAAQABgCAAgDQgBgDAEgDIgCAHQADgEAAgFQgcAHgPAGQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgCgGACQAJAAgTAGQgSAGADAAQgGAAgUAFQgPAEACgEQgKACgBACQAAABAAAAQAAAAAAAAQABAAABAAQABAAABAAQgcAIgQAHIgsAMQgmALgKABQAFAAgEABIgMAFIAKAAIgdAIIgBgBIgHABIgXAKIACgBIgKAEIAHgEQAJgEgPADQAAABgIAEQgIAEgFAAQATgGgNACIgSAFIAHABIhpAdIAFADIAAAAQgDABAHAEIgBgEIAdANQAAAAgBAAQAAAAAAAAQAAABAAAAQABAAAAABIAEAEIACgCQAAAAAAAAQAAAAABAAQAAAAABAAQABAAABAAIAaANQAJABABgDIAgAGIAAABQACgBAGACIAHABIgCADIAHgBQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABAAQABABABAAIACgBgAmSCbQgKADgGAFQgFAEgDAHQgDAHAAAGQAAAIACAFIAMAnQACAIAEAGQAFAHAFADQAEADAJACQAIABAJgDQAJgCAGgGQAGgFACgGQADgGAAgIQABgGgDgKIgHgYIgmAMIAGATIAPgFIADAJQABAEgCAFQgCAEgHADQgGACgEgEQgFgDgBgGIgNgtIABgEIADgEQACgDADAAQADgCADABIAFACIADADIADAEIATgNIgHgKQgEgEgFgCIgMgDIgCAAQgFAAgHACgAlOCHIAWBJQADAIADAGQAGAHAEADQAFADAIACQAJABAIgDQAJgDAFgEQAGgEADgGQADgHABgHQAAgGgCgJIgXhLIgXAHIAXBMQACAFgDAFQgCAEgFACQgHACgEgDQgEgEgCgGIgWhKgAIlDeIgGANIAEgBQACgBAEgJQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAgAImDaQAAAFACgEQACgHABgBQADgCADgFQAAgDACgHQACgEgCgCIAHgKQgCABACgJQABgIgBgBIgHASQgEAHAAAEIgFABQgBAMgDANIABgDgAjOBhIACB2IAYgHIgBgYIAagIIAMAVIAYgHIhAhkgAECDGIAFgDQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAgAhUA8IgkALIAgBtIAXgGIgNgsIAKgCIAbAmIAZgHIgggqQAHgGACgJQACgJgDgLQgDgHgFgHQgEgFgGgCQgGgDgGAAQgIAAgGACgAI8CmQABAFADgFQADgVgCgDIgHASIAAAAQACAAAAAGgAALAgIABB2IAYgHIgBgYIAagIIAMAVIAZgHIhBhkgAJCCJIAEgNIAAAEIAGgrQgEAVgBAKIgBgEQAAALgEAOgAm7gDQgMADgGAGQgHAHgDAHQgDAHAAAIQAAAJACAHIAOAuQACAIAGAIQAEAHAHAFQAHAFAJABQAKABAKgDQAQgFAJgMQAIgLgCgRIgcABQABAGgDAFQgEAGgFABQgIACgFgEQgEgDgCgIIgPgxIgBgFIABgFIAEgFQADgCADgBQAEgCAEABIAFACIAEAEIADAEIAXgPIgIgLQgHgGgEgBQgGgDgJgBIgCAAQgGAAgJACgABgAGIAgBuIAXgHIgSg8IABAAIAyAyIAUgGIghhsIgXAGIASA6IAAABIgygygAlDgmQgLADgHAGQgGAFgEAJQgDAIAAAHQAAAJACAGIAOAuQACAJAFAIQAEAGAIAGQAFAEALABQAHACANgEQAKgDAGgFQAHgFADgHQAEgHABgJQABgJgDgKIgPgvQgCgHgFgHQgEgHgHgFQgGgEgKgBIgGgBQgHAAgHADgAECBNIAXgHIgbhYIAXgHIgGgUIhFAUIAGAVIAXgHgAjFhLIgrANIAnCBIAbgIIgPgzIALgEIAhAuIAegIIgmgxQAIgJACgKQACgKgEgNQgCgJgGgHQgGgGgHgDQgGgDgJAAIgCAAQgGAAgIACgAEug3IAhBtIBAgTIgHgWIgoAMIgHgXIAjgKIgGgUIgkAKIgGgXIApgMIgHgVgAhJhwIgrANIAnCBIApgMIAMgFIAKgHIAHgIQACgGABgHQABgJgEgMIgPgzQgEgKgEgFQgIgKgLgCIgHgBQgIAAgJADgAGPhUIAgBtIBAgTIgGgVIgpAMIgHgXIAjgKIgGgVIgjAKIgHgWIApgNIgHgVgAAHiIIAnCCIAcgIIgoiDgAotgWIgPAGIgBACIAEgBIAJgDIgCABIALgDQAAAAgBAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIgEACQACgBAAgBQABAAABgBQAAAAAAgBQAAAAgBAAIAAAAgApMgaIgCAKIAPgEQgIACABABIAFAAIACgBIAAgCIAAgJQgBABgFgDIgCgBQgDAAgCAGgAo2hZIABAJQgDAOgCANIgCAeIAAAEQAFgDAOgDQABgIAWgGIgGADQACAAAGgDQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAABAAQAHgEANgDIAZgIQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAABAAIAFABQAAgCAOgDQALgCgFgBQAfgHBFgUQACgLAFgNIAFgNIACgBIAEgTIAKgUIAAABIABgBIACgJQAEgKADgEIABABIALgUQACACADgFIAHgNIAJgMQAFgGADAAQABgEAGgIIAJgMIACAAQACgGAKgHIAOgKIACgEIgDABQAGgEALgLIANgLQAEgCABABIACACQAFgEgBgCQgBgCAJgEIgEADIAOgDQAJgBADgCIgEAAQAFgDANgEQALgCAAgDIgCgCIAKgDIAEgCQAGgDAJgBIAAAAIALgDQAFgBACgDIgDABIAYgGQAGgDADABQAAgCAOgCIATgCQgLABAJACQAEgDADAAQAEgBAGACQABgEACgCIAGgCIAJgBQgCABgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAIAHAAIgBABQgBAAAAAAQAAAAAAAAQgBABAAAAQABAAAAAAQAFgCAJABIASABQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIADACQABgCAJACQAIADgDgDIAxALQAbAHAHAGQADACANADIgBABIAbAIQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABIAFAFIAMACIAAAEQAHACAFAFIAAAAIAAAAIABAAQADAAAJAFIAMAGQABADAGAEQAFADABADIAFADQgBgHAEAGIABAAIAAADIAKAIIgDgEIAEAFIABABIADADIAQgFIAMgFQAOgFAPgDIAQgEQgKADAFAAIAIAAIAKgEQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIARgGQAMgFADgCIgHABIgBAAIABgBIADgBIAIgDIgBAAIASgEQAIgCAGAAQgCAAANgEQASgGgFAAIAJgBIAGgBQgLADgeANIAMgCQgDADgNADIgRAEIAKgDIAGgBIgEgCQgKADgfAMQAGgBgHADQgCABgBAAQgBABAAAAQgBABAAAAQABAAABAAIAIgDQABAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIBegcIgCgBQAAgLgOgMIgMgNQgHgIgGgKQAHAEgCgFQgBgGAFAEQgHgHgFgDIgIgEIgBgGQgGgDgFgBIgEgCQgDAAgRgMQAGACgEgGQgEgGADABQgKgJgKgEIABAAIgPgLIgQgOIgPgJIACAEIhzg2IAIAFIgNgEQgQgEgGgEIAJACQABgCgDgDQgEgDgGgCIgFACIgDgEQgHgCACADQABADgHgCQgCgFgKgDQgNgEgJgCIgYgFQgLgCgEgEQgGADAOADQAOACgGACQgJgEgHgBIADAFQgPgEgOgBIgYgEIgigBIgOAAIACgBQgUgBgIAGQgBAAAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAgBAAQAAgBgBAAQgIAFgKABQgJABgJgBIgRAAQgIABgEADQAAgEgQgFIgIgEQgDgCAEgEIgKAEQABgDAFgBIAMgEQARgEADgDIAdAAIAGAAIAAgDQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIAKgBQACgBgIgCIA/ACIA8ACQBHAFAxATQABAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBIgCgCQAIAFAFgBIAKgBIASAPQAFAAAAgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAPAFAOAHIAyAdIAXAMQAEADgCADQgCACAGAEQgGgJATALQARALgBgEQADAIARAOQANANgHADQAIAHADgBQACgBgDgEIAUASQAFAFAFACIAJAIQADAEAKAKIAUAYQAOASAIAOIAHgEIgCADIgEABIABADQAGgDAAgBIADAAIAAAAIgHgKIgEgJQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBgBgBQgBgCAIAHIgJgJIgHgJQgJgLgHgDIACACIABACIgCgDIgJgMIAAABIgFgHIgGgJIAMALQgDgFgIgGIgMgKIAFADQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAgBQgFgFgLgIIABAAQgGgIgEAAQgDAAgDgGIgCACIgFgIQgBgBAAAAQAAAAABAAQAAAAACAAQABABABABQgIgHgHgDIAFAIIgRgNIgEgCQgDgEAJAGQgJgJgJgGIgUgNIgfgUIgKgHQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgGgCQgZgNgJgGIAEABIghgMQgPgFgLgFIAEgBQgGgBgNgGQgJgFgDACIAFACQgYgIg4gHQgCgCAHABQAIABgCgCQgLgDgRgCIgdgDIAEAAQgKgCABACQACACgIgBQABgBgGgCIgFACIgBgBIADgBQgGABgNAAQgOAAgCACIAAgCQAAgBABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgKAAgLACIAAAAIgNgBIgGAAQgIABAAABQgBACgFABIANAAIgXADIAJgDIgQACIgRAEIAGABIgHABIgGACQgBgCgIABQgGABAEgDIg8ASIAAgBIAAgBQgLACgRAKIAEgEIgMAFIgMAHQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIgFAAQACACgHADQAFgGgKAEQgLADACgDIgLAIQgJAGAEAAIgiATIgjAWIAFgFQADgDgEACQgSALgLAKIgbAZIABgCIgDACQAFgFgCAAQgcAZgSAVQgHACgKAOIgMAPIACAAIgKAKIgDAGIAAgCIgHAJQAAAAAAAAQAAgBAAABQAAAAgBAAQAAABgBAAQgBABgBAAQAAABAAAAQgBAAAAAAQAAAAAAgBQgPAcgGACIgFAJIgBABQgIALgBAEQgDAEgFAJQABAAAAAFQgBADAGgLIgBAIQgBAEgEAJQgBAAgBABQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAgJIgIAPQAFgDgMAXIABgEQgCACgEAMQAHgFAGABQAGABgCAIIgGAIIgDAJQgCAJACACQgCAEgBgGIgDAPQgEABABgNQABgNgDADIAFgHQADgDADgKQACgHgHAIIgJANIACgIIgBAAIgCACIgCACQABABgDAMQgEANgEAFIABgHIgJAeIgBAaIABgCIAGgKQACAEgCAFIgDAKQgHAOABAEQgBgEADgHIADgGIgGACIgEANIgBANIABAWQABgGABAIQABAJADgEIABgKIABgBQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABgABsinIACCOIAcgJIAAgcIAegKIAPAZIAdgJIhNh3gApNhBIACAGIACgCIgCgMQAAAAABAAQAAgBAAABQAAAAABAAQAAABAAABQAAAAABABQAAAAAAAAQABgBAAAAQAAgBAAgBIABgTIAAgOIgDAcIgCgIQgEANACAIgADRjFIAnCCIAbgIIgVhGIABgBIA7A8IAYgHIgniDIgbAIIAVBGIAAABIg8g7gAk4iaIgGAGIgDAKIgLAYIAAAFQgDAFgCAOIAAABIARgGIADgEQgDADABgHIAAABQABgCgBgFQABgBABgGIACgGQgBAAADgHQgBAFABAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQACgEAAgHQAAgHADgFIAFgFQgCgCACgFIACgFIAFgCQAHgKgBgCIgCABIgBACIAJgQQADgIAFgFIAEAEQADgCADgGQADgGADgBIgCAAIABgEQgCACgFAIIAEgJIgIANIACgFIgDAAQACgFAEgDQAEgDACgEIADAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQACgEAGgEQAGgDABgDQAAAAAAAAQAAAAAAAAQAAAAAAABQgBABAAABIAGgJIgDADIACgEQABgCAEgDIACgEQAAgBgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAIADgCQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAEgDABgEQAAgDAGgDIgBABIAGgEQgBABgBABQAAAAAAABQgBAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQgBABgBAAQAAABgCABQADABAIgHQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIAFgCIgEAAIAGgFIgDAEIAJgEIAFgDIAFgEQgEAGAFgCQAHgHABAFIAEgFQABgCAHgDQABAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAAIAWgKQgJADAGgFQAAABAAAAQAAAAABAAQABAAAAAAQABAAABgBIAIgCIAAgBQAFAAgGADQAAAAAAgBQgBAAAAAAQAAAAgBABQAAAAgBAAQgBABAAAAQAAABgBAAQAAABABAAQAAAAAAABQADABAEgCQAJgEgGgCQAFgCAEgEQAEgDAFgBIARgBQABAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBABAAQAHABALgFQAMgGAJAAIgBADIALgBIgGgBIAIgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAgBABQAFgDAEAAIAJAAIgEABIgCABQAEABALgCIABABIADABIALgCIALgBIAAABQALAAAJACIAKACIAKAAIAAAAIgBAAQgDgDAHABIALABIADADQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAEAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAEACQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBIAHAFIgCgBIABACIABABIACAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABIgFAAIAEABQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAGABAAgDIgBgEIANAEIALADIgCABIAHABIAGACQgFAAgBACIAJADQAFACACgCIAAABQAWAMgCABIAMAHQAFADACgBQADABAEAFQAEAEADgBQABABAAABQABAAAAAAQAAABAAAAQAAAAgBAAIgEgBIAHAFQAEACAAADQABAAAAABQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAQAAAAAAAAQAAACAFAFIACABIAhgKQgGgFgIgDQgJgDgGgFIAEAFIgOgLIgCgEQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIgPgEQACAAACgEQgDgDgEABQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIgHgGIgGgHQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIACAEQgKgEgFgEQAIADABgFIACgGIgFgBIgLAAIgLgBIgFAAIADgBIACgCQgDABgSgGIgegJIADABQAFAAgKgDIgGgCQgFgCgIABQgHACgGgDQAMACAAgDIgQgCQgKgBACAEIgGgCQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgRABIgDAAIABgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIAQAAQAJgBADACIgBgDQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIgPAAQgGAAgGACIgUAFIgTgCIgBACIgEgDIgEABIABgBIgFABQgBgCAHgEIAGACQAGgEgFgBIgDABQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAIgPADIAHACQgUAHAJABIgLAAIgZAJIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQgHADgLABQgMABAAACIgGAEQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgGAFQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBgBAAQAAAAgBAAQgBABgBAAIgPAIIgPAHQgHAEAFAAQAEAAgGACQgFgBgIAEQgCAEgGAFIgBgDQgKAHgCgCQgEAFgGADQgFAFAIgCIAKgDQgPAJgHABIAHgGQgHAEgIAHQgDAFgFAAIAGgHQABgBABAAQAAgBAAAAQAAAAAAAAQgBAAgBAAIgGAHQADgDgEACIgGAJIgMANIABgCQAAAAAAgBQAAAAAAABQAAAAgBAAQAAAAgBABIgHAJQAEgFgJAIQgGAGgBAGQgBAFgFAEIACgDIgEAEQABABgDAFIgHAKQgKAPADACQgBABgBABQAAAAgBAAQAAAAAAAAQAAAAAAgBIAFgMIgGAHIAFgJQgGAGgDAIIgEAMQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgCgBgDAHQgEAKAEgDIABAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBAAgAkhhiIAOgEQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAgAkwhkIADgBIABgCIgBACIAVgJQgHAEACAAQACABAIgBIAPgJIAEACQAIgEANgCIgCAAIABABIABgBQADgDAPgFIAQgHQAFABAJgEQAJgDADABIAIgEQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQABgBABAAIACAAIADABIARgGIACAAIABgBQAHAAAHgEQAMgBAagKQAZgKAOgCIgLAEIAggIQASgFAHgDIgCgBIAngOIAAgCIAlgMQAZgHAIAAQAEgDAggHIADABQAOgEAQgGQASgDANgFIgPADIAPgEIgCgBQgDgBgDgDQgDgDgDAAQACAAgFgFIAAgDQgBgBAGABIgGgDIgGgDQgGgEgFABIACACIgIgGIAAAAQgGgEgCgDIAIADQgCgDgFgBIgJgCIAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQgDgCgJgCIABAAQgEgEgCACQgBABAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBIgBABIgDgEQgBAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQgGgCgDABIADAEIgNgEQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQgEgDgIgDIgMgCIgNgDQgIgBgFgEQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgDAAIgVgEIACgBIgTABIgPgBIACgCQgEABgGgBQgGgCgBACIADABQgNgBgeAIQgBAAAAAAQAAAAAAgBQAAAAABAAQABAAABgBQABAAABAAQAAgBABAAQAAAAAAAAQAAgBgBAAIgPACIgPAEIACgBQgCAAgBAAQgBAAAAABQgBAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAAAgBAAQgBABgBAAQAAgBAAAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgCADQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgIAEQgHADgBACQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgEABgGAFQgCgBgFACIgDABQgBAAgBABQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAABIAHgCIgLAGIAEgDQgEAAgEADIgIAFIADABIgGAEQgBgBgEABQgBABAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgHADgIAHIgNALIABgBIgBgBQgHAEgEAIIABgEIgFAFQgCAEgDADQACgEgEADQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAgFgFADQgFADAAgDIgEAHQgCAGACAAQgGAIgIAHIgOASQABgCAAgBQAAAAAAgBQAAAAAAgBQAAAAAAABQgIAIgDAIIgJASQgBgBAEgHQAEgIgBgBQgOAXgIAXQgEABgCAJQgEAMgDADQACAAgDALQAAgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAgBgAGShxIAbgIIgfhpIAcgJIgIgYIhTAYIAIAZIAcgIgAJMh9QAEABgDgKIgEgEgAhwiWIAdgIIATgNIgQAHIgFAAQgNAEgOAKgAAJjAQgDACACAEIASgFIABgEIACADIATgFIgDgBIgkAGgAI1jPQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQgIgQgCgKQAGAKgBgGIgGgLIgLgPQANAaAIAXgABmjVIAQgFQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgGACgHAEgADFjyIARgFIgDgCIgOAHgADkj7IgFABIAAABIAbgIIgEgBIgBgCIgBABIAAgBQgBgCgLAEIgOAGIACACIABAAIAAAAIAAAAQAAgBAAAAQgBAAABAAQAAAAAAAAQABAAABAAIALgEQACAAgIAEgAEwkZQgOADgJAEIgSAIIADAEIAGgCIgFABQALgCAJgFIgNADIAPgDIAUgGIABgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgDAAgAjVkZQABAAAAAAQABgBAAAAQAAAAABgBQABAAAAgBIAEgEQgHAEgBADgAHOlMIgFABIAAABQAEAFABAEIAHgEQgFgIgHgHQgIgGABAFQAAgBAAAAQgBAAAAAAQAAABABAAQAAABABAAIAGAJIAFgDgAHllOIABADIAKgDIgBgCgAlvnVQABAAAAAAQAAAAgBABQAAAAAAAAQgBABAAABIADgDIAJgIQAEgDgBgBIgOAMgAFIIEIAAAAIAAAAIAAAAgADfDmIAAAAIAAAAgAo6h5IAAAAIAAAAgAiPiXIgBAAIgGABgAjfjoIAAAAIACgCQABABgFADIACgCgAj5j5IAAAAg");
	this.shape_7.setTransform(61.2,61.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJgTIABAAIASAjIgPAEg");
	this.shape_8.setTransform(43.5,75.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJgSIABgBIASAjIgPAEg");
	this.shape_9.setTransform(65.2,69.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAgBIAEABIgHABg");
	this.shape_10.setTransform(104.5,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCABQALgFgDADQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgDABIgHACIADgCg");
	this.shape_11.setTransform(95.5,31.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKgCIgPAFIgEAAQAHgDAMgCg");
	this.shape_12.setTransform(79,36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAlQgFgEgCgEQgDgFABgGQgHAGgJAAQgIAAgJgFQgHgEgEgFQgEgFgCgGQgBgGABgGQAAgGAEgHIASggIBhA1IgLATIgogVIgDAGQgDAFACAEQACAEAHAHIAWAUIgLAVgAgjgSQgGAMALAGIAGABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQABAAAAAAIADgFIAFgKIgVgLg");
	this.shape_13.setTransform(103.1,84);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhCgIIAQgSIAvArIABAAIgbhDIAPgPIBRBKIgQASIgtgpIAZA/IgQARg");
	this.shape_14.setTransform(95.9,93.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSgOIgUANIgMgSIA6goIAMASIgUANIAzBLIgTAMg");
	this.shape_15.setTransform(86.7,99.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0gnIAVgHIAQApIAXgJIgPgqIAUgIIApBnIgWAIIgQgrIgXAJIAQArIgWAJg");
	this.shape_16.setTransform(78.3,105.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZg3IAYgDIAtBqIgZADIgJgWIgZAEIgDAXIgYADgAgNALIAPgCIgKgkIgBAAg");
	this.shape_17.setTransform(67.8,108.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgmA3IALhvIAiAEQAHAAAHADQAHADAEAFQAEAGACAGQACAFgBALQgBAJgDAEQgDAHgFADQgEAFgHABQgHACgIAAIgMgCIgEApgAgJgEIALABQAFAAAFgCQAEgEABgHQAAgHgDgEQgCgDgHgBIgLgBg");
	this.shape_18.setTransform(56.9,107.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPA1IACgWIgYgJIgNATIgYgIIBDheIAWAIIgHBzgAAEAEIAPAFIAFgmIAAAAg");
	this.shape_19.setTransform(44.3,106.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4AqIA5hfIA4AiIgLATIgkgWIguBMg");
	this.shape_20.setTransform(37.3,100.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAtIAZgkIgHgFQgEgDgFAAQgGABgHAFIgWAUIgOgLIAYgUQAFgFAEgBQAFgDAGACQgGgIACgHQABgIAFgHQAEgGAFgDQAFgEAFAAQAFgBAHABQAFACAGAEIAbATIg9BVgAAMglQgFAAgFAHQgDAFABAGQACAGAFADIAKAIIASgYIgMgIQgEgEgEAAIgDABg");
	this.shape_21.setTransform(88.5,24.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALAyIAEgXIgagMIgPASIgQgHIBGhTIAPAHIgQBsgAgBACIATAJIADgUIACgEIADgSIAAgBg");
	this.shape_22.setTransform(79.2,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACA3IALgtIgcgGIgLAsIgQgEIAYhmIARAEIgKArIAbAHIALgrIAQAEIgYBmg");
	this.shape_23.setTransform(72,16.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AABA1IghgBIAEhoIAgABQAOAAAIAJQAHAJgBAMQAAAHgDAFQgDAGgHADIAAAAIAGADQADACABAEIADAHIAAAHQAAAQgJAHQgIAHgMAAIgCAAgAgOAkIAOABIAHgBIAFgDIACgFIABgGQAAgHgDgEQgDgEgIgBIgOAAgAgMgIIANAAQAHAAAEgDQADgFAAgFQABgGgEgEQgDgEgHAAIgNgBg");
	this.shape_24.setTransform(63.3,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGA0QgHgCgEgEQgFgFgCgFIgEgNIgGgmQgBgEABgIQABgFADgGQADgFAGgEQAGgEAIgBQAJgBAFACQAGABAFAFQAFAEACAFQADAFABAGIAGApQABAIgBAFQgCAHgDAFQgFAFgEADQgHADgGABIgGAAIgIgBgAgEgkQgEABgDACQgDABgBAEIgCAFIAAAFIAGAnQABAHAEAFQAFAFAHgBQAFgBAEgFQAEgFgBgGIgGgqIgCgFIgDgEIgFgEIgEgBIgCAAg");
	this.shape_25.setTransform(54.5,15.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAzIAGgHIADgIIgBgKIgXhEIA0gTIAjBiIgQAGIgchTIgXAIIANAkQAEALACAJQACAIgBAJQgBAHgEAFQgFAGgGADg");
	this.shape_26.setTransform(46.2,17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AACAyQgFgCgFgEQgGgGgCgFIgVgiIgFgLQgBgHABgGQABgGAEgFQAFgGAGgEQALgGAKACQAJABAIAIIgMANIgCgDIgFgCQgCgBgDABIgGACIgFAEIgCAGQgBADABACIACAGIAWAjIADAFQACACADABIAGAAQADAAADgCQAEgCADgFQABgFgCgFIARgEQAEAKgEAKQgEAKgLAGQgIAEgFABIgEAAIgIgBg");
	this.shape_27.setTransform(37.8,21.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAVAxIAFgFQADgCAAgCQABgDgCgFIgBgCIAAgCIhHgpIANgMIAxAfIABAAIgYg1IAMgLIAjBPIADAMQABAGgBADIgCAHIgNALg");
	this.shape_28.setTransform(29.7,25.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AABArIACgDIABgFIAEgIQAFAEAGgCQAFAAAEgFQAFgFgBgGQgBgFgGgGIgFgCQgCgCgEAAIgFACQgDAAgCADIgFAGIgLgJIAFgFQAFgFgBgGQgBgFgFgEQgEgEgGAAQgFABgEAFQgEAFABAFQAAAFADAFIgOAIQgHgIAAgLQABgLAIgJQAKgLAKgCQAKgBAKAIIAEAFIAEAFIACAHQABAEgBADIAAABIAIgDIAHABIAGADIAGAEQAHAGACAEQADAFAAAGQABAGgCAGQgCAEgFAHQgJALgKACIgGABQgIAAgHgFg");
	this.shape_29.setTransform(25.5,32);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag7AAIAcgyIAOAHIgUAkIAZANIAQgeIAOAIIgRAeIAZAOIAUgjIAOAHIgcAzg");
	this.shape_30.setTransform(20.9,38.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag3AJIASg0IAQAFIgNAlIAYAHIAFgNQACgHAEgGQAEgFAFgCQAFgCAHAAQAFAAAHACQAPAFAFALQAFALgFANIgKAfgAARgLQgGADgCAHIgFANIAeAKIAFgOQADgHgDgEQgDgFgHgCIgIgCIgEABg");
	this.shape_31.setTransform(17.1,46.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBABIgCAAQABgEACABg");
	this.shape_32.setTransform(8.1,30.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEgGQAEAIABgCQAAgCAEAJQgEgHACAHg");
	this.shape_33.setTransform(113.1,29.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCAAQAEAAABAAIgBABQgCgBgCAAg");
	this.shape_34.setTransform(108.1,22.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAABQgDgDAEACQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIgCgBg");
	this.shape_35.setTransform(80.2,33.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgBABIADgBIgBABIgCAAg");
	this.shape_36.setTransform(79.3,33);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAAIAFgBIgDADg");
	this.shape_37.setTransform(71.5,97.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBADIABgDQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAgBABIgBAEg");
	this.shape_38.setTransform(93.9,77.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAAIAKgDIABADIAAADQgFgDgGAAg");
	this.shape_39.setTransform(76.4,29.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAAAAIAAgBIABAAIgBADg");
	this.shape_40.setTransform(28,50.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDgBIAAgDQABgBAGAKQgDgEgEgCg");
	this.shape_41.setTransform(85.9,33.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAABIABgCIAAABIAAACg");
	this.shape_42.setTransform(96.6,74.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAAIgBAAIAEgFIgEAKIgBABQgBgCADgEg");
	this.shape_43.setTransform(92,82);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGAFIACgEIAAACIABgBIADgDQAFgDADAAQgEABgGAFIgBACIgDABIAAAAg");
	this.shape_44.setTransform(89,85.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AACAAQgBACAAAAQgBABAAAAQAAAAAAAAQAAgBAAgBQABgCgEAGQAAgDAEgJQADgCgBAEIgBAFIABAAIgBABIAAABIABgBIgEAHg");
	this.shape_45.setTransform(93.8,79.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgCAFIAGgMQABABgDAGIgFAIg");
	this.shape_46.setTransform(95.3,77.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAABg");
	this.shape_47.setTransform(95.7,76.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAFIAHgLIgEAKIgDADIAAgCg");
	this.shape_48.setTransform(93.2,81.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgBADIgBgBIAFgFIgEAHIAAgBg");
	this.shape_49.setTransform(89.8,85.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBABAAQAAAAAAAAQAAABAAABIgDAFQAAgBABAAQAAgBAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_50.setTransform(88.3,86.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgEAGQAFgGAEgGQgDAHgDAGQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBABIgBgBg");
	this.shape_51.setTransform(93.3,81.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAAgBIAEAAIgGADg");
	this.shape_52.setTransform(89.3,86.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AACgCQgHAGAKgGQgHAFgCABQgCgBAIgFg");
	this.shape_53.setTransform(84.9,90.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AABgBQAHgEgHAGIgEACg");
	this.shape_54.setTransform(86.1,90);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgLAFIACAAIAMgHQAIgHAEAAIgOAJIgPAJg");
	this.shape_55.setTransform(80.5,93.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAEAAgFABIAAgBg");
	this.shape_56.setTransform(72.2,97.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgEACIAAgCIAJgBQgGADgCAAIgBAAg");
	this.shape_57.setTransform(91,107.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAGAHIgJgGQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAgBgBgBQgBgBgBgBQgBgBAAgBQAAAAAAgBQAAAAABAAQAFAHACgBQADgBAGAGQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgBgBg");
	this.shape_58.setTransform(24.7,103.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgCgBIAFgCIgDAHg");
	this.shape_59.setTransform(6,45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgBgEQABgEADACIABgBIgEALQAAAEgDAAIACgMg");
	this.shape_60.setTransform(5.3,44.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgCAEQABgDABgEIADAAIgDAEIgBADIgBAAg");
	this.shape_61.setTransform(9.7,35.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJgFQAJAFAKAAIgSAGg");
	this.shape_62.setTransform(37.5,112.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AADgLQgDAJAAAKIgCAEQAAgMAFgLg");
	this.shape_63.setTransform(5.5,46.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAADQgBgBABgFIABAHIgBgBg");
	this.shape_64.setTransform(113.5,78.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAFgIIABACQAAACgFAGIACAAIgIAIg");
	this.shape_65.setTransform(12.7,29);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAGgDIABgCQAGgFgBADIgCAGIAAgCQAAgBAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQgEAEgBAEQgGADgHABQAJgEAIgIg");
	this.shape_66.setTransform(17.2,23.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgCADIAEgIQgCAEACABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgEADQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBg");
	this.shape_67.setTransform(18.3,21.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAAAAIAHgDIgFAEIgHAEQgCgCAHgDg");
	this.shape_68.setTransform(29.1,13);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgWAPQAJgEANgKIAXgPIgEAIIgDAAQgGACgNAKQgNAJgFAAIgBAAg");
	this.shape_69.setTransform(30.8,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,122.5,123.3), null);


(lib.dry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DRY();
	this.instance.parent = this;
	this.instance.setTransform(822,-163,1.219,1.219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dry, new cjs.Rectangle(822,-163,243.8,190.1), null);


(lib.bgShape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#090812").s().p("Eh1LAfQMAAAg+fMDqXAAAMAAAA+fg");
	this.shape.setTransform(750,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgShape, new cjs.Rectangle(0,0,1500,400), null);


(lib.shtamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(1565,-2.3,1.402,1.402,0,0,0,61.2,61.5);
	this.instance.shadow = new cjs.Shadow("rgba(35,31,32,0.8)",1,1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shtamp, new cjs.Rectangle(1471.2,-96.5,193,194), null);


// stage content:
(lib._1500x400MasterCordiantSummer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bgShape();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(200).to({alpha:1},20,cjs.Ease.get(-1)).wait(1));

	// УЛУЧШЕННАЯ УПРАВЛЯЕМОСТЬ НА СУХОМ АСФАЛЬТЕ
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.2,230.9,1,1,0,0,0,102.8,14.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({y:240.9,alpha:1},15,cjs.Ease.get(1)).wait(70).to({y:250.9,alpha:0},10,cjs.Ease.get(-1)).wait(11));

	// ТЕХНОЛОГИЯ DRY-COR:
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(105.7,206.9,1,1,0,0,0,90.3,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({y:216.9,alpha:1},25,cjs.Ease.get(1)).wait(60).to({y:226.9,alpha:0},15,cjs.Ease.get(-1)).wait(6));

	// DRY
	this.instance_3 = new lib.dry();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59,311,1,1,0,0,0,44,36);
	this.instance_3.alpha = 0;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(-1)).to({alpha:0},30,cjs.Ease.get(-1)).to({_off:true},1).wait(64));

	// DRY
	this.instance_4 = new lib.dry();
	this.instance_4.parent = this;
	this.instance_4.setTransform(59,311,1,1,0,0,0,44,36);
	this.instance_4.alpha = 0;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(119).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(-1)).to({alpha:0},30,cjs.Ease.get(-1)).to({_off:true},1).wait(64));

	// DRY
	this.instance_5 = new lib.dry();
	this.instance_5.parent = this;
	this.instance_5.setTransform(59,311,1,1,0,0,0,44,36);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({alpha:1},11).wait(74).to({alpha:0},10,cjs.Ease.get(-1)).wait(11));

	// ЭФФЕКТИВНЫЙ ОТВОД ВОДЫ  И СТОЙКОСТЬ К АКВАПЛАНИРОВАНИЮ
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(118.2,230.9,1,1,0,0,0,102.8,14.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({y:240.9,alpha:1},30,cjs.Ease.get(1)).wait(60).to({y:250.9,alpha:0},11,cjs.Ease.get(-1)).wait(110));

	// ТЕХНОЛОГИЯ WET-COR:
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(105.7,206.9,1,1,0,0,0,90.3,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({y:216.9,alpha:1},45,cjs.Ease.get(1)).wait(45).to({y:226.9,alpha:0},15,cjs.Ease.get(-1)).wait(106));

	// WET
	this.instance_8 = new lib.wet();
	this.instance_8.parent = this;
	this.instance_8.setTransform(61.1,335.1,0.69,0.69,0,0,0,141.9,103.2);
	this.instance_8.alpha = 0;
	this.instance_8.compositeOperation = "lighter";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).to({alpha:0},35,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// WET
	this.instance_9 = new lib.wet();
	this.instance_9.parent = this;
	this.instance_9.setTransform(61.1,335.1,0.69,0.69,0,0,0,141.9,103.2);
	this.instance_9.alpha = 0;
	this.instance_9.compositeOperation = "lighter";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).to({alpha:0},35,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// WET
	this.instance_10 = new lib.wet();
	this.instance_10.parent = this;
	this.instance_10.setTransform(61.1,335.1,0.69,0.69,0,0,0,141.9,103.2);
	this.instance_10.alpha = 0;
	this.instance_10.compositeOperation = "lighter";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).to({alpha:0.512},35,cjs.Ease.get(-1)).wait(45).to({alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(109));

	// WET
	this.instance_11 = new lib.wet();
	this.instance_11.parent = this;
	this.instance_11.setTransform(61.1,335.1,0.69,0.69,0,0,0,141.9,103.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({alpha:1},10).wait(80).to({alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(109));

	// ПОДРОБНЕЕ НА WWW.CORDIANT.RU
	this.instance_12 = new lib.ПОДРОБНЕЕНАWWWCORDIANTRU();
	this.instance_12.parent = this;
	this.instance_12.setTransform(120,386.4,1,1,0,0,0,94.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(225));

	// shtamp
	this.instance_13 = new lib.shtamp();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1404.2,124.1,1.125,1.125,0,0,0,1569.8,-3.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(111).to({_off:false},0).to({regY:-4,scaleX:0.87,scaleY:0.87,x:1381,y:102.5,alpha:1},9,cjs.Ease.get(-1)).wait(105));

	// logo
	this.instance_14 = new lib.logo();
	this.instance_14.parent = this;
	this.instance_14.setTransform(747.4,65.4,1.885,1.885,0,0,0,112,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(225));

	// splash
	this.instance_15 = new lib.splash_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1112.9,358.9,0.863,0.863,0,0,0,129.8,44.4);
	this.instance_15.alpha = 0;
	this.instance_15.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:0.98,scaleY:0.98,x:1111.1,y:277,alpha:1},10,cjs.Ease.get(-1)).to({regX:129.7,regY:44.3,scaleX:1.01,scaleY:1.01,x:1107.8,y:263.4},74,cjs.Ease.get(1)).wait(141));

	// tier
	this.instance_16 = new lib.tier();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1124.6,348.2,1.048,1.048,0,0,0,275.3,152.2);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:278.2,alpha:1},10,cjs.Ease.get(-1)).to({y:268.2},74,cjs.Ease.get(1)).wait(141));

	// kv
	this.instance_17 = new lib.Tween2("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(259.6,357.2,1.231,1.231,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1.02,scaleY:1.02,x:419.6,y:365.2},10,cjs.Ease.get(-1)).to({regY:0.1,scaleX:1,scaleY:1,x:427.6,y:365.1},19,cjs.Ease.get(1)).wait(196));

	// bg
	this.instance_18 = new lib.bgShape();
	this.instance_18.parent = this;
	this.instance_18.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(483.1,107.5,1847,573.5);
// library properties:
lib.properties = {
	width: 1500,
	height: 400,
	fps: 30,
	color: "#080A12",
	opacity: 1.00,
	manifest: [
		{src:"/templates/shinline2016/resource/img/cordiant1500/Bitmap16.jpg?1486727026849", id:"Bitmap16"},
		{src:"/templates/shinline2016/resource/img/cordiant1500/DRY.png?1486727026849", id:"DRY"},
		{src:"/templates/shinline2016/resource/img/cordiant1500/kv.jpg?1486727026849", id:"kv"},
		{src:"/templates/shinline2016/resource/img/cordiant1500/splash.png?1486727026849", id:"splash"},
		{src:"/templates/shinline2016/resource/img/cordiant1500/tyre.png?1486727026849", id:"tyre"},
		{src:"/templates/shinline2016/resource/img/cordiant1500/WET.png?1486727026849", id:"WET"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;