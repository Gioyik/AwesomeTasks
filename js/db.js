C.db = (function () {

    var supported = ('localStorage' in window) && ('JSON' in window);
    var localStorageKey = 'html5-clear';

    var db = {

        init: function (force) {

            C.log('DB: init');

            if (supported && !force) {
                var raw = localStorage.getItem(localStorageKey);
                if (raw) {
                    this.data = JSON.parse(raw);
                    if (!this.data) {
                        this.useDefaultData();
                    } else {
                         C.log('DB: using stored data.');
                    }
                } else {
                    this.useDefaultData();
                }
            } else {
                this.useDefaultData();
            }
            
        },

        save: function () {

            var start = Date.now();

            if (!supported) return;
            var raw = JSON.stringify(this.data);
            localStorage.setItem(localStorageKey, raw);

            var used = Date.now() - start;

            C.log('DB: saved in ' + used + 'ms');

        },

        deleteItem: function (target, list) {

            var i = list.items.length,
                item;

            while (i--) {
                item = list.items[i];
                if (item === target) {
                    list.items.splice(i, 1);
                    C.log('DB: deleted item <' + item.title + '> from collection <' + (list.title || 'Lists') + '>');
                    break;
                }
            }

        },

        addItem: function (item, list) {

            list.items.push(item);
            C.log('DB: added new item to collection <' + (list.title || 'Lists') + '>');

        },

        useDefaultData: function () {

            C.log('DB: using default data.');

            this.data = {

                state: {
                    view: C.states.LIST_COLLECTION_VIEW,
                    lastTodoCollection: 0
                },

                items: [
                    {

                        title: 'First task',
                        order: 0,
                        items: [
                            {
                                order: 0,
                                title: 'Swipe right to complete'
                            },
                            {
                                order: 1,
                                title: 'Swipe left to delete'
                            },
                            {
                                order: 2,
                                title: 'Tap to edit'
                            },
                            {
                                order: 3,
                                title: 'Long tap to reorder'
                            },
                            {
                                order: 4,
                                title: 'Pull down to create new item'
                            },
                            {
                                order: 5,
                                title: 'Or tap in empty space below'
                            },
                            {
                                order: 6,
                                title: 'Pull down more to go back'
                            },
                            {
                                order: 7,
                                title: 'Pull up to clear'
                            },
                            {
                                order: 8,
                                title: 'Pinch is still WIP.'
                            }
                        ]
                    },
                    {
                        title: 'Second task',
                        order: 1,
                        items: [
                            {
                                order: 0,
                                title: 'Made in HTML5'
                            },
                            {
                                order: 1,
                                title: 'Be a developer'
                            },
                            {
                                order: 2,
                                title: 'Help the OpenWeb'
                            },
                            {
                                order: 3,
                                title: 'Make better the Web'
                            },
                            {
                                order: 4,
                                title: 'Share your source'
                            },
                            {
                                order: 5,
                                title: 'Change the world'
                            },
                            {
                                order: 6,
                                title: 'Fork me'
                            },
                            {
                                order: 7,
                                title: 'Yeah'
                            }
                        ]
                    },
                    {
                        title: 'Third task',
                        order: 2,
                        items: [
                            {
                                order: 0,
                                title: '@Gioyik'
                            }
                        ]
                    },
                    {
                        title: 'Test',
                        order: 3,
                        items: [
                            {
                                order: 0,
                                title: 'Test'
                            }
                        ]
                    },
                    {
                        title: 'Test',
                        order: 4,
                        items: [
                            {
                                order: 0,
                                title: 'Test'
                            }
                        ]
                    },
                    {
                        title: 'Test',
                        order: 5,
                        items: []
                    },
                    {
                        title: 'Test',
                        order: 6,
                        items: []
                    },
                    {
                        title: 'Test',
                        order: 7,
                        items: []
                    },
                    {
                        title: 'Test',
                        order: 8,
                        items: []
                    },{
                        title: 'Test',
                        order: 9,
                        items: []
                    },{
                        title: 'Test',
                        order: 10,
                        items: [
                            {
                                order: 0,
                                title: 'Test'
                            }
                        ]
                    }
                ]

            };

            this.save();

        }

    };

    return db;

}());