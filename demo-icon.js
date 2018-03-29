'use strict';

window.onload = function () {
      var ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58];
//      var ids = ['0','1','2','3','4','5','6','7'];
      var currentId = 0;
	var last_element = ids[ids.length];

	var intv = 200;
    var myIcons = new SVGMorpheus('#icon',{duration: intv/2,rotation: 'none',easing:'linear'});

    setInterval(function() {


/*
        var thisId = currentId === 1 ? 0 : 1
        currentId = thisId;
*/
		if (currentId <= ids.length){
			currentId++;
			if (currentId == ids.length){
			currentId = 0}
}
		myIcons.to(ids[currentId]);


}, intv);

};