steal(
	MAD_ROOT + '/form/formChoiceElement.js',
	MAD_ROOT + '/view/form/element/dropdownView.js',
	MAD_ROOT + '/view/template/component/input.ejs'
).then(function ($) {

	/*
	 * @class mad.form.element.DropdownController
	 * @inherits mad.form.FormChoiceElement
	 * @view mad.view.form.element.Dropdown
	 * @parent mad.form
	 * 
	 * The Dropdown Form Element Controller is our implementation of the UI component dropdown
	 * 
	 * @constructor
	 * Creates a new Dropdown Form Element Controller
	 * 
	 * @param {HTMLElement} element the element this instance operates on.
	 * @param {Object} [options] option values for the controller. These get added to
	 * this.options and merged with defaults static variable
	 * @return {mad.form.element.DropdownController}
	 */
	mad.form.FormChoiceElement.extend('mad.form.element.DropdownController', /** @static */ {

		'defaults': {
			'label': 'DropdownController Form Element Controller',
			'templateUri': '//' + MAD_ROOT + '/view/template/component/input.ejs',
			'viewClass': mad.view.form.element.DropdownView
		}

	}, /** @prototype */ { });

});