const PRODUCTS_DATA = [

    {
        title: 'Action Games',
        items: [
            { id: 1, name: 'Grand Theft Auto V', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 2, name: 'Call of Duty: Modern Warfare', price: 54.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 3, name: 'Assassin\'s Creed Valhalla', price: 39.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 4, name: 'Doom Eternal', price: 29.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 5, name: 'Resident Evil Village', price: 44.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 6, name: 'God of War', price: 19.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 7, name: 'Horizon Zero Dawn', price: 24.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 8, name: 'Spider-Man: Miles Morales', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 9, name: 'Death Stranding', price: 39.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 10, name: 'Control', price: 29.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] }
        ]
    },

    {
        title: 'Adventure Games',
        items: [
            { id: 21, name: 'Control', price: 35.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 22, name: 'Death Stranding', price: 47.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 23, name: 'Detroit: Become Human', price: 19.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 24, name: 'Grand Theft Auto V', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 25, name: 'Heavy Rain', price: 14.99, imageUrl: '' },
            { id: 26, name: 'Horizon Zero Dawn', price: 29.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 27, name: 'Inside', price: 12.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 28, name: 'Journey', price: 9.99, imageUrl: '' },
            { id: 29, name: 'Life is Strange', price: 22.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 30, name: 'Limbo', price: 11.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] }
        ]
    },

    {
        title: 'Casual Games',
        items: [
            { id: 41, name: 'Among Trees', price: 19.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 42, name: 'ARK: Survival Evolved', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 43, name: 'Conan Exiles', price: 39.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 44, name: 'Crash Bandicoot N. Sane Trilogy', price: 39.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 45, name: 'Darksiders III', price: 29.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 46, name: 'Donut County', price: 12.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 47, name: 'Farming Simulator 19', price: 29.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 48, name: 'Human Fall Flat', price: 14.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 49, name: 'Kine', price: 19.99, imageUrl: '' },
            { id: 50, name: 'LEGO DC Super-Villains', price: 39.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] }
        ]

    },

    {
        title: 'Racing Games',
        items: [
            { id: 61, name: 'Assetto Corsa', price: 39.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 62, name: 'Burnout Paradise Remastered', price: 19.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 63, name: 'Dirt 5', price: 59.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 64, name: 'F1 2020', price: 59.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 65, name: 'Forza Horizon 4', price: 59.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 66, name: 'FIA European Truck Racing Championship', price: 29.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 67, name: 'Gear.Club Unlimited', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 68, name: 'GRID Autosport', price: 24.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 69, name: 'Mario Kart 8 Deluxe', price: 59.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
            { id: 70, name: 'MotoGP 20', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] }
        ]
    },

    {
        title: 'Fighting Games',
        items:
            [
                { id: 81, name: 'BlazBlue: Cross Tag Battle', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 82, name: 'Dragon Ball FighterZ', price: 59.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 83, name: 'Fight of Gods', price: 9.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 84, name: 'Garou: Mark of the Wolves', price: 9.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 85, name: 'Guilty Gear X2 Reload', price: 9.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 86, name: 'Injustice 2', price: 49.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 87, name: 'Killer Instinct', price: 39.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 88, name: 'Mortal Kombat 11', price: 59.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 89, name: 'Naruto Shippuden: Ultimate Ninja Storm 4', price: 59.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] },
                { id: 90, name: 'Power Rangers: Battle for the Grid', price: 19.99, imageUrl: '', logoUrl: '', captures: ['', '', ''] }
            ]

    }


];

export default PRODUCTS_DATA;