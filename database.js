let Database = {
    'cindy@gmail': {
        reminders: [{
            id: 1,
            title: 'I will be a friends reminder',
            description: 'this will be my first post',
            subtasks: [ '' ],
            tags: '',
            completed: false
          },
          {
            id: 2,
            title: 'I will be a second Friends reminder',
            description: 'this will be my first post',
            subtasks: [ '' ],
            tags: '',
            completed: false
          }],
        password: 'hello',
        img:'https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg',
        friendsreminders : []
    },
    'alex@gmail': {
        reminders: [{
            id: 1,
            title: 'my first post',
            description: 'this will be my first post',
            subtasks: [ '' ],
            tags: '',
            completed: false
          },{
            id: 2,
            title: 'my first post',
            description: 'this will be my first post',
            subtasks: [ '' ],
            tags: '',
            completed: false
          }],
        password: 'pass',
        img:"https://leger360.com/wp-content/uploads/2018/06/Guy_Girard2-600x600.jpg",
        friendsreminders : []
    }
     
}

module.exports = { Database };