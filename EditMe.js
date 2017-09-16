var EditMe = function(userSettings){

	"use strict";

	this.settings = $.extend(true, EditMe.defaultSettings, userSettings);
	this.element = this.settings.element;
	this.$element = $(this.settings.element);
	this.mediums = [];
	this.viewData = null;

	this.menu = new EditMe.Menu(this);
	this.action = new EditMe.Action(this);
	this.handler = new EditMe.Handler(this);
	this.selection = new EditMe.Selection(this);

	this.updateView();

};
EditMe.defaultSettings = {
	element: null,
	innerHTML: '<thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody>',
	colors: [
		{
			name: "Red",
			hex: "#C20317"
		},
		{
			name: "Amber",
			hex: "#FFBD39"
		},
		{
			name: "Green",
			hex: "#00AD58"
		}
	]
};
EditMe.prototype = {

	updateView: function(){

		EditMe.initTableInnerHTML(this);
		EditMe.setTableViewData(this);
		EditMe.setCellsEditable(this);
		this.menu.update();

	}

};
EditMe.initTableInnerHTML = function(editMe){

	if($('> *', editMe.element).length > 0){
		return;
	}

	editMe.$element.append(editMe.settings.innerHTML);

};
EditMe.setTableViewData = function(editMe){

	editMe.viewData = {
		nbColumn: $('tbody tr:first-child td', editMe.element).length,
		nbRow: $('tbody tr', editMe.element).length
	};

};
EditMe.setCellsEditable = function(editMe){

	for(var i = 0; i < editMe.mediums.length; i++){
		var medium = editMe.mediums[i];
		medium.destroy();
	}

	editMe.mediums = [];

	$('tr > th, tr > td', editMe.element).each(function(){

		editMe.mediums.push(
			new Medium({
				element: $(this).get(0),
				onFocus: function(e){
					editMe.handler.handleFocusCell(e, this)
				},
				onBlur: function(e){
					editMe.handler.handleBlurCell(e, this)
				}
			})
		);

	});

};