sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/Log"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Log) {
		"use strict";

		return Controller.extend("ns.sapui5.controller.View1", {
			onInit: function () {
            },

            onBeforeRendering: function () {
                window.message = "A random log message";
                Log.info(window.message);
            },
            onAfterRendering: function () {
                debugger;
            }
		});
	});
