'use strict';

window.onload = function () {
      var ids = [0,0,0,1,2,3,4,5,6,,7];
//      var ids = ['0','1','2','3','4','5','6','7'];
      var currentId = 0;
	var last_element = ids[ids.length];

	var intv = 70;
    var myIcons = new SVGMorpheus('#icon',{duration: intv/2,rotation: 'none',easing:'elastic-in-out'});

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