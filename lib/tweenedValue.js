/*   
   var red = new TweenedValue(255*Math.random(),255*Math.random(),100,"linear");
   red.update();
   if (red.finished()) red.retarget(255*Math.random())  ;
   red.val
*/
var TweenedValue = function (a, b, steps, easing) {
    this.a = a;
    this.b = b;
    this.val = a;
    this.steps = steps;
    this.retarget();
};

TweenedValue.prototype = {
    finished: function () {
        this.currentStep === this.steps;
    },
    retarget: function (val) {
        if (val) { this.b = val; }
        this.increment = (this.a - this.b) / this.steps;
        this.currentStep = 0;
    },
    update: function () {
        this.val += this.increment;
        this.currentStep++;
    },
    val: 0,
    currentStep: 0
}