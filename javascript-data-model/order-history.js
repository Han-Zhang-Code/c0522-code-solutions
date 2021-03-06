var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    orderPlaced: 'August 4, 2020',
    total: '$34.00',
    shipTo: 'JS Masher',
    deliveredDate: 'Aug 8, 2020',
    orderDetails: [{
      name: 'JavaScript for impatient programmers',
      author: 'Rauschmayer, Dr. Axel',
      returnClosed: 'Sep 7, 2020',
      price: '$31.55'
    }
    ]
  },
  {
    orderNumber: '113-9984268-1280257',
    orderPlaced: 'July 19, 2020',
    total: '$44.53',
    shipTo: 'JS Masher',
    deliveredDate: 'Jul 20, 2020',
    orderDetails: [{
      name: 'The Timeless Way of Building',
      author: 'Alexander, Christopher',
      returnClosed: 'Aug 19, 2020',
      price: '$41.33'
    }
    ]
  },
  {
    orderNumber: '114-2875557-9059409',
    orderPlaced: 'July 4, 2020',
    total: '$17.22',
    shipTo: 'JS Masher',
    deliveredDate: 'Jul 7, 2020',
    orderDetails: [{
      name: 'Gamecube Controller Adapter.Super Smash Bros Switch Gamecube Adapter for WII U,PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
      returnClosed: 'Aug 5, 2020',
      price: '$15.98'
    }
    ]
  },
  {
    orderNumber: '113-2883177-2648248',
    orderPlaced: 'July 3, 2020',
    total: '$138.93',
    shipTo: 'JS Masher',
    deliveredDate: 'Jul 5, 2020',
    orderDetails: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnClosed: 'Aug 4, 2020',
        price: '$94.95'
      },
      {
        name: 'The Art of Sql',
        author: 'Faroult, Stephane',
        returnClosed: 'Aug 4, 2020',
        price: '$33.99'
      }
    ]
  }
];

console.log('The name of fourth order second item: ', orderHistory[3].orderDetails[1].name);
