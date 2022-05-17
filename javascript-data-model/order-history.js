var orderHistory = [
  {
    order_number: '114-3941689-8772232',
    order_placed: 'August 4, 2020',
    total: '$34.00',
    ship_to: 'JS Masher',
    delivered_date: 'Aug 8, 2020',
    order_detail: [{
      name: 'JavaScript for impatient programmers',
      author: 'Rauschmayer, Dr. Axel',
      Return_closed: 'Sep 7, 2020',
      price: '$31.55'
    }
    ]
  },
  {
    order_number: '113-9984268-1280257',
    order_placed: 'July 19, 2020',
    total: '$44.53',
    ship_to: 'JS Masher',
    delivered_date: 'Jul 20, 2020',
    order_detail: [{
      name: 'The Timeless Way of Building',
      author: 'Alexander, Christopher',
      Return_closed: 'Aug 19, 2020',
      price: '$41.33'
    }
    ]
  },
  {
    order_number: '114-2875557-9059409',
    order_placed: 'July 4, 2020',
    total: '$17.22',
    ship_to: 'JS Masher',
    delivered_date: 'Jul 7, 2020',
    order_detail: [{
      name: 'Gamecube Controller Adapter.Super Smash Bros Switch Gamecube Adapter for WII U,PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
      Return_closed: 'Aug 5, 2020',
      price: '$15.98'
    }
    ]
  },
  {
    order_number: '113-2883177-2648248',
    order_placed: 'July 3, 2020',
    total: '$138.93',
    ship_to: 'JS Masher',
    delivered_date: 'Jul 5, 2020',
    order_detail: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        Return_closed: 'Aug 4, 2020',
        price: '$94.95'
      },
      {
        name: 'The Art of Sql',
        author: 'Faroult, Stephane',
        Return_closed: 'Aug 4, 2020',
        price: '$33.99'
      }
    ]
  }
];

console.log('The name of fourth order second item: ', orderHistory[3].order_detail[1].name);
