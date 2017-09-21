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

		var $element = $(medium.element);

		this.selectedCell = {
			element: medium.element,
			$element: $(medium.element),
			medium: medium,
			columnIndex: $element.index(),
			rowIndex: $element.parent().index()
		};
		this.cache.selectedCell = this.selectedCell;

	},

	unsetSelectedCell: function(medium){

		if(this.selectedCell.medium === medium || medium === undefined){
			this.selectedCell = null;
		}

	},

	preserveSelectedCell: function(){

		this.selectedCell = this.cache.selectedCell;

	},

	refreshSelectedCell: function(){

		this.setSelectedCellFromMedium(this.selectedCell.medium);

	}

};