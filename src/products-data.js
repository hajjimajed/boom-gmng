const PRODUCTS_DATA = [
    {
        title: 'Action Games',
        items: [
            {
                id: 1,
                name: 'Spider Man : Miles Morales',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 25,
            },
            {
                id: 2,
                name: 'Saints Row IV',
                imageUrl: 'https://i.ibb.co/6gFBkqF/EGS-Saints-Row-IVRe-Elected-Deep-Silver-Volition-S2-1200x1600-7607305fd444a7dab171d4404dbe7ff0.webp',
                price: 18,
            },
            {
                id: 3,
                name: 'Far Cry 6',
                imageUrl: 'https://i.ibb.co/hRGyhTj/TETRA-PREORDER-STANDARD-EDITION-EPIC-Store-Portrait-1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d09.webp',
                price: 35,
            },
            {
                id: 4,
                name: 'Dishonored',
                imageUrl: 'https://i.ibb.co/g9ZnTVV/EGS-Dishonored-Deathofthe-Outsider-Arkane-Studios-S2-1200x1600-acb1abddb047a40709f270fa623f1f02.webp',
                price: 25,
            },
            {
                id: 5,
                name: 'Rainbow Six Siege',
                imageUrl: 'https://i.ibb.co/Jn8Q1Fy/Carousel-Box-Art-1200x1600-1200x1600-6888b9d57181d8fcfb3472a7f70ecc49.webp',
                price: 18,
            },
            {
                id: 6,
                name: 'Timewell',
                imageUrl: 'https://i.ibb.co/XxKz3Bh/timewell-trail-of-celestes-1gg9e.webp',
                price: 14,
            },
            {
                id: 7,
                name: 'game 7',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 18,
            },
            {
                id: 8,
                name: 'game 8',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 14,
            },
            {
                id: 9,
                name: 'game 9',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 16,
            },
            {
                id: 10,
                name: 'game 10',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 25,
            },
            {
                id: 11,
                name: 'game 11',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 18,
            },
            {
                id: 12,
                name: 'game 12',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 35,
            },
            {
                id: 13,
                name: 'game 13',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 25,
            },
            {
                id: 14,
                name: 'game 14',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 18,
            },
            {
                id: 15,
                name: 'game 15',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 14,
            },
            {
                id: 16,
                name: 'game 16',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 18,
            },
            {
                id: 17,
                name: 'game 17',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 14,
            },
            {
                id: 18,
                name: 'game 18',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 16,
            },
            {
                id: 19,
                name: 'game 19',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 16,
            },
            {
                id: 20,
                name: 'game 20',
                imageUrl: 'https://i.ibb.co/87mYfKQ/EGS-Marvels-Spider-Man-Miles-Morales-Insomniac-Games-Nixxes-Software-S2-1200x1600-58989e7116de3f70a2.jpg',
                price: 16,
            },
        ],
    },
    {
        title: 'Adventure Games',
        items: [
            {
                id: 21,
                name: 'game 21',
                imageUrl: 'https://i.ibb.co/qYxpyFz/bloodshore-x4n9e.webp',
                price: 25,
            },
            {
                id: 22,
                name: 'game 22',
                imageUrl: 'https://i.ibb.co/hLz70NM/download-the-land-of-pain-offer-1bczn.webp',
                price: 18,
            },
            {
                id: 23,
                name: 'game 23',
                imageUrl: 'https://i.ibb.co/L8SDvxb/EGS-BLACKTAIL-THEPARASIGHT-S2-1200x1600-a87fc356f4792b9b0de74b2d1a10cd26.webp',
                price: 35,
            },
            {
                id: 24,
                name: 'game 24',
                imageUrl: 'https://i.ibb.co/D4THY5T/EGS-Goat-Simulator3-Coffee-Stain-North-AB-S2-1200x1600-99737fa8a749438ca909c776a4cd9b89.webp',
                price: 25,
            },
            {
                id: 25,
                name: 'game 25',
                imageUrl: 'https://i.ibb.co/ZTXnHSh/EGS-Hello-Neighbor2-Eerie-Guest-S2-1200x1600-0fc602ed536ebbf08ee1645af162b38d.jpg',
                price: 18,
            },
            {
                id: 26,
                name: 'game 26',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 14,
            },
            {
                id: 27,
                name: 'game 27',
                imageUrl: 'https://i.ibb.co/JHQrz9x/EGS-Starsand-Tunnel-Vision-Studio-S2-1200x1600-91ced8d0de3c173e4ef0922e81957506.webp',
                price: 18,
            },
            {
                id: 28,
                name: 'game 28',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 14,
            },
            {
                id: 29,
                name: 'game 29',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 16,
            },
            {
                id: 30,
                name: 'game 30',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 25,
            },
            {
                id: 31,
                name: 'game 31',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 18,
            },
            {
                id: 32,
                name: 'game 32',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 35,
            },
            {
                id: 33,
                name: 'game 33',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 25,
            },
            {
                id: 34,
                name: 'game 34',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 18,
            },
            {
                id: 35,
                name: 'game 35',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 14,
            },
            {
                id: 36,
                name: 'game 36',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 18,
            },
            {
                id: 37,
                name: 'game 37',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 14,
            },
            {
                id: 38,
                name: 'game 38',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 16,
            },
            {
                id: 39,
                name: 'game 39',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 16,
            },
            {
                id: 40,
                name: 'game 40',
                imageUrl: 'https://i.ibb.co/bB6fqy9/EGS-Sponge-Bob-Square-Pants-The-Cosmic-Shake-Purple-Lamp-S2-1200x1600-a0a7c858eae0fb28fd0b956341b3eb.jpg',
                price: 16,
            },
        ],
    },
    {
        title: 'Casual Games',
        items: [
            {
                id: 41,
                name: 'game 41',
                imageUrl: 'https://i.ibb.co/YtK9mWQ/hzd-tall-1200x1600-d4b1057afd47f9256d8da71f2f187be4.jpg',
                price: 25,
            },
            {
                id: 42,
                name: 'game 42',
                imageUrl: 'https://i.ibb.co/YdGYsg4/GRT-STD-Edition-Store-Portrait-1200x1600-1200x1600-b08ee70d85ee2649b6e9c575d9192e66.jpg',
                price: 18,
            },
            {
                id: 43,
                name: 'game 43',
                imageUrl: 'https://i.ibb.co/gSk7qB0/EGS-Saints-Row-Deep-Silver-Volition-S2-1200x1600-d95f6c911a764ad44302f021a3174a24.jpg',
                price: 35,
            },
            {
                id: 44,
                name: 'game 44',
                imageUrl: 'https://i.ibb.co/gSk7qB0/EGS-Saints-Row-Deep-Silver-Volition-S2-1200x1600-d95f6c911a764ad44302f021a3174a24.jpg',
                price: 25,
            },
            {
                id: 45,
                name: 'game 45',
                imageUrl: 'https://i.ibb.co/gSk7qB0/EGS-Saints-Row-Deep-Silver-Volition-S2-1200x1600-d95f6c911a764ad44302f021a3174a24.jpg',
                price: 18,
            },
            {
                id: 46,
                name: 'game 46',
                imageUrl: 'https://i.ibb.co/gSk7qB0/EGS-Saints-Row-Deep-Silver-Volition-S2-1200x1600-d95f6c911a764ad44302f021a3174a24.jpg',
                price: 14,
            },
            {
                id: 47,
                name: 'game 47',
                imageUrl: 'https://i.ibb.co/gSk7qB0/EGS-Saints-Row-Deep-Silver-Volition-S2-1200x1600-d95f6c911a764ad44302f021a3174a24.jpg',
                price: 18,
            },
            {
                id: 48,
                name: 'game 48',
                imageUrl: 'https://i.ibb.co/RyTq5p9/EGS-Gotham-Knights-Warner-Bros-Games-Montreal-S2-1200x1600-5a46b442e57afa637f013bbc09fe5487.jpg',
                price: 14,
            },
            {
                id: 49,
                name: 'game 49',
                imageUrl: 'https://i.ibb.co/RyTq5p9/EGS-Gotham-Knights-Warner-Bros-Games-Montreal-S2-1200x1600-5a46b442e57afa637f013bbc09fe5487.jpg',
                price: 16,
            },
            {
                id: 50,
                name: 'game 50',
                imageUrl: 'https://i.ibb.co/RyTq5p9/EGS-Gotham-Knights-Warner-Bros-Games-Montreal-S2-1200x1600-5a46b442e57afa637f013bbc09fe5487.jpg',
                price: 25,
            },
            {
                id: 51,
                name: 'game 51',
                imageUrl: 'https://i.ibb.co/RyTq5p9/EGS-Gotham-Knights-Warner-Bros-Games-Montreal-S2-1200x1600-5a46b442e57afa637f013bbc09fe5487.jpg',
                price: 18,
            },
            {
                id: 52,
                name: 'game 52',
                imageUrl: 'https://i.ibb.co/bWFTMbF/EGS-Cyberpunk2077-CDPROJEKTRED-S2-03-1200x1600-b1847981214ac013383111fc457eb9c5.jpg',
                price: 35,
            },
            {
                id: 53,
                name: 'game 53',
                imageUrl: 'https://i.ibb.co/KGydCRy/EGS-Marvels-Spider-Man-Remastered-Insomniac-Games-Nixxes-Software-S2-1200x1600-76424286902489f4d9639.jpg',
                price: 25,
            },
            {
                id: 54,
                name: 'game 54',
                imageUrl: 'https://i.ibb.co/KGydCRy/EGS-Marvels-Spider-Man-Remastered-Insomniac-Games-Nixxes-Software-S2-1200x1600-76424286902489f4d9639.jpg',
                price: 18,
            },
            {
                id: 55,
                name: 'game 55',
                imageUrl: 'https://i.ibb.co/KGydCRy/EGS-Marvels-Spider-Man-Remastered-Insomniac-Games-Nixxes-Software-S2-1200x1600-76424286902489f4d9639.jpg',
                price: 14,
            },
            {
                id: 56,
                name: 'game 56',
                imageUrl: 'https://i.ibb.co/KGydCRy/EGS-Marvels-Spider-Man-Remastered-Insomniac-Games-Nixxes-Software-S2-1200x1600-76424286902489f4d9639.jpg',
                price: 18,
            },
            {
                id: 57,
                name: 'game 57',
                imageUrl: 'https://i.ibb.co/pj0QnWg/EGS-Godof-War-Santa-Monica-Studio-S2-1200x1600-fbdf3cbc2980749091d52751ffabb7b7-1200x1600-fbdf3cbc29.jpg',
                price: 14,
            },
            {
                id: 58,
                name: 'game 58',
                imageUrl: 'https://i.ibb.co/KGydCRy/EGS-Marvels-Spider-Man-Remastered-Insomniac-Games-Nixxes-Software-S2-1200x1600-76424286902489f4d9639.jpg',
                price: 16,
            },
            {
                id: 59,
                name: 'game 59',
                imageUrl: 'https://i.ibb.co/KGydCRy/EGS-Marvels-Spider-Man-Remastered-Insomniac-Games-Nixxes-Software-S2-1200x1600-76424286902489f4d9639.jpg',
                price: 16,
            },
            {
                id: 60,
                name: 'game 60',
                imageUrl: 'https://i.ibb.co/KGydCRy/EGS-Marvels-Spider-Man-Remastered-Insomniac-Games-Nixxes-Software-S2-1200x1600-76424286902489f4d9639.jpg',
                price: 16,
            },
        ],
    },
    {
        title: 'Fighting Games',
        items: [
            {
                id: 61,
                name: 'game 61',
                imageUrl: 'https://i.ibb.co/2nXyDCM/EGS-SIFUStandard-Edition-Sloclap-S4-1200x1600-32aca69d756abfcc25f8581942a6162b-1200x1600-32aca69d756.jpg',
                price: 25,
            },
            {
                id: 62,
                name: 'game 62',
                imageUrl: 'https://i.ibb.co/t2X9ZHN/EGS-Override2-Super-Mech-League-Modus-Studios-Brazil-S2-1200x1600-485ab3a84506778e6e5e0cf0cdd147b5.jpg',
                price: 18,
            },
            {
                id: 63,
                name: 'game 63',
                imageUrl: 'https://i.ibb.co/DzpZB5f/download-cobra-kai-the-karate-kid-saga-continues-offer-nk1n7.jpg',
                price: 35,
            },
            {
                id: 64,
                name: 'game 64',
                imageUrl: 'https://i.ibb.co/HFGdFwk/EGS-Multi-Versus-Player-First-Games-S2-1200x1600-e365b2244970128b898fd729263db67d.jpg',
                price: 25,
            },
            {
                id: 65,
                name: 'game 65',
                imageUrl: 'https://i.ibb.co/zSBBQ18/EGS-Rumbleverse-Iron-Galaxy-Studios-S2-1200x1600-05b55e431ed04ea58c482ce10543fd6e.jpg',
                price: 18,
            },
            {
                id: 66,
                name: 'game 66',
                imageUrl: 'https://i.ibb.co/frtjMkr/download-jitsu-squad-offer-17btg.jpg',
                price: 14,
            },
            {
                id: 67,
                name: 'game 67',
                imageUrl: 'https://i.ibb.co/Z1739c3/atla-productart-1200x1600-1200x1600-59caced19b71.jpg',
                price: 18,
            },
            {
                id: 68,
                name: 'game 68',
                imageUrl: 'https://i.ibb.co/Z1739c3/atla-productart-1200x1600-1200x1600-59caced19b71.jpg',
                price: 14,
            },
            {
                id: 69,
                name: 'game 69',
                imageUrl: 'https://i.ibb.co/yN8HPv1/download-blood-of-steel-offer-181df.jpg',
                price: 16,
            },
            {
                id: 70,
                name: 'game 70',
                imageUrl: 'https://i.ibb.co/qFRfWvL/DKO-EGS-Starter-Pack-DLC-Portrait-Product-Img-1200x1600-1200x1600-890a4291c9f6f3dba6a85b3c29c72e7a.jpg',
                price: 25,
            },
            {
                id: 71,
                name: 'game 71',
                imageUrl: 'https://i.ibb.co/qFRfWvL/DKO-EGS-Starter-Pack-DLC-Portrait-Product-Img-1200x1600-1200x1600-890a4291c9f6f3dba6a85b3c29c72e7a.jpg',
                price: 18,
            },
            {
                id: 72,
                name: 'game 72',
                imageUrl: 'https://i.ibb.co/qFRfWvL/DKO-EGS-Starter-Pack-DLC-Portrait-Product-Img-1200x1600-1200x1600-890a4291c9f6f3dba6a85b3c29c72e7a.jpg',
                price: 35,
            },
            {
                id: 73,
                name: 'game 73',
                imageUrl: 'https://i.ibb.co/qFRfWvL/DKO-EGS-Starter-Pack-DLC-Portrait-Product-Img-1200x1600-1200x1600-890a4291c9f6f3dba6a85b3c29c72e7a.jpg',
                price: 25,
            },
            {
                id: 74,
                name: 'game 74',
                imageUrl: 'https://i.ibb.co/xFWfCvh/atone-heart-of-the-elder-tree-7xqs7.jpg',
                price: 18,
            },
            {
                id: 75,
                name: 'game 75',
                imageUrl: 'https://i.ibb.co/xFWfCvh/atone-heart-of-the-elder-tree-7xqs7.jpg',
                price: 14,
            },
            {
                id: 76,
                name: 'game 76',
                imageUrl: 'https://i.ibb.co/xFWfCvh/atone-heart-of-the-elder-tree-7xqs7.jpg',
                price: 18,
            },
            {
                id: 77,
                name: 'game 77',
                imageUrl: 'https://i.ibb.co/xFWfCvh/atone-heart-of-the-elder-tree-7xqs7.jpg',
                price: 14,
            },
            {
                id: 78,
                name: 'game 78',
                imageUrl: 'https://i.ibb.co/xFWfCvh/atone-heart-of-the-elder-tree-7xqs7.jpg',
                price: 16,
            },
            {
                id: 79,
                name: 'game 79',
                imageUrl: 'https://i.ibb.co/xFWfCvh/atone-heart-of-the-elder-tree-7xqs7.jpg',
                price: 16,
            },
            {
                id: 80,
                name: 'game 80',
                imageUrl: 'https://i.ibb.co/xFWfCvh/atone-heart-of-the-elder-tree-7xqs7.jpg',
                price: 16,
            },
        ],
    },
    {
        title: 'Racing Games',
        items: [
            {
                id: 81,
                name: 'game 81',
                imageUrl: 'https://i.ibb.co/41FFxnW/EGS-HOTWHEELSUNLEASHED-Milestone-Srl-S2-1200x1600-30ec276e4019296d3efd50d5b6ffe1bc.jpg',
                price: 25,
            },
            {
                id: 82,
                name: 'game 82',
                imageUrl: 'https://i.ibb.co/d0cwKXw/download-urban-trial-freestyle-offer-1yg4k.jpg',
                price: 18,
            },
            {
                id: 83,
                name: 'game 83',
                imageUrl: 'https://i.ibb.co/fXPcHLY/download-urban-trial-playground-offer-1cfxp.jpg',
                price: 35,
            },
            {
                id: 84,
                name: 'game 84',
                imageUrl: 'https://i.ibb.co/fXPcHLY/download-urban-trial-playground-offer-1cfxp.jpg',
                price: 25,
            },
            {
                id: 85,
                name: 'game 85',
                imageUrl: 'https://i.ibb.co/fXPcHLY/download-urban-trial-playground-offer-1cfxp.jpg',
                price: 18,
            },
            {
                id: 86,
                name: 'game 86',
                imageUrl: 'https://i.ibb.co/fXPcHLY/download-urban-trial-playground-offer-1cfxp.jpg',
                price: 14,
            },
            {
                id: 87,
                name: 'game 87',
                imageUrl: 'https://i.ibb.co/XxP5B8R/download-steel-rats-offer-7o7lb.jpg',
                price: 18,
            },
            {
                id: 88,
                name: 'game 88',
                imageUrl: 'https://i.ibb.co/bN3cx8y/download-very-very-valet-offer-19kkg.jpg',
                price: 14,
            },
            {
                id: 89,
                name: 'game 89',
                imageUrl: 'https://i.ibb.co/qyPNwTL/EGS-Redout2-34-Big-Things-S2-1200x1600-448c323c84902f4cbc64c1db23fb17bc.jpg',
                price: 16,
            },
            {
                id: 90,
                name: 'game 90',
                imageUrl: 'https://i.ibb.co/zfrBWq1/mashed-lfum2.jpg',
                price: 25,
            },
            {
                id: 91,
                name: 'game 91',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 18,
            },
            {
                id: 92,
                name: 'game 92',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 35,
            },
            {
                id: 93,
                name: 'game 93',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 25,
            },
            {
                id: 94,
                name: 'game 94',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 18,
            },
            {
                id: 95,
                name: 'game 95',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 14,
            },
            {
                id: 96,
                name: 'game 96',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 18,
            },
            {
                id: 97,
                name: 'game 97',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 14,
            },
            {
                id: 98,
                name: 'game 98',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 16,
            },
            {
                id: 99,
                name: 'game 99',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 16,
            },
            {
                id: 100,
                name: 'game 100',
                imageUrl: 'https://i.ibb.co/m8yTRx0/download-wrc-generations-the-fia-wrc-official-game-offer-7ihrm.jpg',
                price: 16,
            },
        ],
    },
];


export default PRODUCTS_DATA;