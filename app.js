
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'User'
    ],
    stores: [
        'Users'
    ],
    views: [
        'MyViewport',
        'UserWindow'
    ],
    autoCreateViewport: true,
    name: 'RestfulAdmin'
});
