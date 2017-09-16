EditMe.Action.Cell = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Action.Cell.prototype = {

	setColor: function(color){

		var $td = $(this.editMe.selection.selectedCell.element);

		var hexColor = "";
		var empty = true;

		switch(color){
			case "none":
				empty = false;
				break;
			default:
				if(color.substr(0, 1) === "#" && (color.length === 4 || color.length === 7)){
					hexColor = color;
				}
				break;
		}

		$td.css("background-color", hexColor);
		if(empty){
			$td.empty();
		}

	}

};