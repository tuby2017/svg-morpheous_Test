'use strict';

window.onload = function () {
      var ids = ['2','1','3'];
      var currentId = 0;
	var last_element = ids[ids.length];

	var intv = 970;
    var myIcons = new SVGMorpheus('#icon',{duration: intv/2,rotation: 'none',easing:'cubic-out'});

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