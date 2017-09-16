EditMe.Selection = function(editMe){

	"use strict";

	this.editMe = editMe;

	this.selectedCell = null;
	this.cache = {
		selectedCell: null
	};

};
EditMe.Selection.prototype = {

	setSelectedCellFromMedium: function(medium){

		console.log("setSelectedCellFromMedium");

		var $element = $(medium.element);

		this.selectedCell = {
			element: medium.element,
			medium: medium,
			columnIndex: $element.index(),
			rowIndex: $element.parent().index()
		};

	},

	unsetSelectedCell: function(medium){

		if(this.selectedCell.medium === medium || medium === undefined){
			this.cache.selectedCell = this.selectedCell;
			this.selectedCell = null;
		}

	},

	preserveSelectedCell: function(){

		console.log("preserveSelectedCell");

		this.selectedCell = this.cache.selectedCell;

	},

	refreshSelectedCell: function(){

		console.log("refreshSelectedCell");

		this.setSelectedCellFromMedium(this.selectedCell.medium);

	}

};