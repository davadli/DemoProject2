sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoProject2DemoProject2.controller.View1", {
		onInit: function() {
			var oForm = this.getView().byId("idSimpleForm");
			oForm.bindElement("Model>/ProductSet('HT-1000')");
		}
	});
});