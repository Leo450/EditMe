EditMe.Handler = function(editMe){

	"use strict";

	this.editMe = editMe;

};
EditMe.Handler.prototype = {

	handleFocusCell: function(event, medium){

		this.editMe.selection.setSelectedCellFromMedium(medium);
		this.editMe.menu.update();
	},

	handleBlurCell: function(event, medium){

		this.editMe.selection.unsetSelectedCell(medium);

		if(!$(event.relatedTarget).parents('.action-container__cell, .action-container__column, .action-container__row').length){
			this.editMe.menu.update();
		}

	}

};