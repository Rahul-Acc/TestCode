Ext.define("Mumbai.view.HomeScreen",{
	extend : "Ext.panel.Panel",
	xtype : "homescreen",
	title : "Welcome home",
	requires : [
		"Mumbai.view.HomeScreenViewController"
	],
	controller : "home",
	items : [
		{
			xtype : "addpersonpanel"
		},
		{
			xtype : "persongrid"
		}
	]
});