Ext.define("Mumbai.view.HomeScreen", {
	extend : "Ext.panel.Panel",
	width : 400,
	height : 150,
	xtype : "homescreen",
	title : "Home Page" ,
	requires : [
	"Mumbai.view.HomeScreenViewController"
	],
	controller : "home",
	items : [
					{
						xtype : "textfield", 
						fieldLabel : "Enter Name",
						reference : "name"
					},
					{
						xtype : "textfield", 
						fieldLabel : "Enter Age ",
						reference : "age"
					},
					{
						xtype : "button", 
						text : "Add Details"/*,
						listeners : {
							click : "onButtonClickAdd"
						}*/
					},
					{
						xtype : "button", 
						text : "Logout",
						listeners : {
							click : "onButtonClicked"
						}
					},
					Ext.create("Ext.grid.Panel", {
   					title: "Show details",
   					setModel: "rowmodel",
   					 plugins: {
        				ptype: 'rowediting',
        				clicksToEdit: 1
   							 },
   							height: 200,
    						width: 400,
    				store: "Mumbai.store.PersonStore",
    				columns: [
        			{ text: "Name", dataIndex: "name", editor: {xtype: "textfield"}},
        			{ text: "Age", dataIndex: "age", editor: {xtype: "textfield"}, flex:1}
							]
    						})
			]
});