EditMe.Action.Cell = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Action.Cell.prototype = {

	setColor: function(color){

		if(!this.editMe.selection.selectedCell || this.editMe.selection.selectedCell.element.tagName !== "TD"){
			console.warn("Cannot set the color of a cell because there is no selected cell, or you're not in a TD element !");
			return;
		}

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
			$td.empty().append("<p>&nbsp;</p>");
		}

	}

};