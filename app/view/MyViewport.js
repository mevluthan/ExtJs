/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('RestfulAdmin.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    title: 'RESTfull / Ext-JS ile Form / JSON ',
                    store: 'Users',
                    columns: [
                        
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'firstName',
                            text: 'isim',
                           
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'lastName',
                            text: 'Soyisim',
                           
                        },
						{
                            xtype: 'gridcolumn',
                            dataIndex: 'username',
                            text: 'Kullanıcı_No'
                        },
                        
                        {
                            xtype: 'booleancolumn',
                            align: 'center',
                            dataIndex: 'enabled',
                            text: 'Yetkisi_Varmi',
							falseText: 'Hayir',
                            trueText: 'Acik'
							
                        },
                        {
                            xtype: 'actioncolumn',
                            align: 'center',
							text:'İşlemler',
							flex: 1,
                            items: [
                                {
                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                        console.log(view.up('#userWindow'));

                                        var window = Ext.create('RestfulAdmin.view.UserWindow');
                                        window.down('form').loadRecord(record);
                                    },
                                    icon: 'resim/guncelle.jpg'
                                },
                                {
                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                        console.log('Kullanıcı Silindi..!');
                                        Ext.Msg.confirm('Silme Ekrani', 
                                        'Silmek istediğinize emin misin ? ' +'Ad/Soyad:'+ record.get('firstName') + ' ' + record.get('lastName') + ' ',
                                        function(buttonId) {
                                            if (buttonId == 'yes') record.destroy();
                                        });
                                    },
                                    icon: 'resim/sil.jpg'
                                }
                            ]
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, event) {
                                        var window = Ext.create('RestfulAdmin.view.UserWindow');
                                    },
                                    glyph: '',
                                    iconCls: '',
                                    text: 'Yeni Kullanıcı: +'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});