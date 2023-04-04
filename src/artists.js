const artists = [
    {
        "id": "0b1sIQumIAsNbqAoIClSpy",
        "name": "j-hope",
        "followers": 14183839,
        "normalized_followers": 10000.0
    },
    {
        "id": "2auC28zjQyVTsiZKNgPRGs",
        "name": "RM",
        "followers": 13121069,
        "normalized_followers": 9250.717506886007
    },
    {
        "id": "4XDi67ZENZcbfKnvMnTYsI",
        "name": "Jay Park",
        "followers": 1916275,
        "normalized_followers": 1351.0252092593287
    },
    {
        "id": "2o8gT0fQmFxGNbowbdgeZe",
        "name": "DPR IAN",
        "followers": 734777,
        "normalized_followers": 518.0361645467418
    },
    {
        "id": "5RmQ8k4l3HZ8JoPb4mNsML",
        "name": "Agust D",
        "followers": 11159179,
        "normalized_followers": 7867.530335235122
    },
    {
        "id": "2u7CP5T30c8ctenzXgEV1W",
        "name": "pH-1",
        "followers": 361498,
        "normalized_followers": 254.8640579318599
    },
    {
        "id": "2dd5mrQZvg6SmahdgVKDzh",
        "name": "PSY",
        "followers": 1617901,
        "normalized_followers": 1140.6632169181876
    },
    {
        "id": "4XpUIb8uuNlIWVKmgKZXC0",
        "name": "ZICO",
        "followers": 1280526,
        "normalized_followers": 902.8044317489288
    },
    {
        "id": "5snNHNlYT2UrtZo5HCJkiw",
        "name": "Epik High",
        "followers": 684226,
        "normalized_followers": 482.39629956240327
    },
    {
        "id": "5DIi2JWfQPTKffaVBlIYRn",
        "name": "Sik-K",
        "followers": 426235,
        "normalized_followers": 300.50544859655736
    },
    {
        "id": "5NUVwRESNqYBUTRbiATjy7",
        "name": "BE'O",
        "followers": 201301,
        "normalized_followers": 141.92070466691803
    },
    {
        "id": "2fiGm496AG7ePURQiSSJIw",
        "name": "Paul Blanco",
        "followers": 46006,
        "normalized_followers": 32.43339813009682
    },
    {
        "id": "4WnO2VmlwdTX77ANsThWLQ",
        "name": "CODE KUNST",
        "followers": 242585,
        "normalized_followers": 171.02707617318757
    },
    {
        "id": "5HenzRvMtSrgtvU16XAoby",
        "name": "Zion.T",
        "followers": 562880,
        "normalized_followers": 396.84398494173223
    },
    {
        "id": "30b9WulBM8sFuBo17nNq9c",
        "name": "G-DRAGON",
        "followers": 2867832,
        "normalized_followers": 2021.8994353854628
    },
    {
        "id": "3hvinNZRzTLoREmqFiKr1b",
        "name": "CHANGMO",
        "followers": 289862,
        "normalized_followers": 204.35867983809177
    },
    {
        "id": "2MtHuR0W2idZdF7x4wddqq",
        "name": "GIRIBOY",
        "followers": 331868,
        "normalized_followers": 233.9740814826116
    },
    {
        "id": "29HqjVbJr3vsc2l6BTI4eB",
        "name": "GroovyRoom",
        "followers": 129875,
        "normalized_followers": 91.56338243053573
    },
    {
        "id": "3kPEBSt7qgVoRZSbIXMr7W",
        "name": "GRAY",
        "followers": 278210,
        "normalized_followers": 196.14369483685516
    },
    {
        "id": "0tkHE1pQ5ZCgQb8WZ0ba79",
        "name": "Gaeko",
        "followers": 120113,
        "normalized_followers": 84.68090014577156
    },
    {
        "id": "3NdOtTPPaXrCyC7Lpmzyhv",
        "name": "Tablo",
        "followers": 225595,
        "normalized_followers": 159.0486522827816
    },
    {
        "id": "7IrDIIq3j04exsiF3Z7CPg",
        "name": "Beenzino",
        "followers": 210234,
        "normalized_followers": 148.2187188289543
    },
    {
        "id": "3ytV7vc4ZuwGgwaOuWvkk8",
        "name": "MINO",
        "followers": 1068207,
        "normalized_followers": 753.113614680824
    },
    {
        "id": "7IEhlwWQA7pCkEvzwwHehE",
        "name": "ASH ISLAND",
        "followers": 232147,
        "normalized_followers": 163.6679950332195
    },
    {
        "id": "3PpfvyyncoZ79IgYe0Uls0",
        "name": "HOMIES",
        "followers": 84300,
        "normalized_followers": 59.43173623834906
    },
    {
        "id": "0IznZPMUyaPGdqfP4oqBja",
        "name": "Coogie",
        "followers": 162741,
        "normalized_followers": 114.7348291393104
    },
    {
        "id": "1MAUqH0haKBYbjpknTfreY",
        "name": "PENOMECO",
        "followers": 300698,
        "normalized_followers": 211.9983620792006
    },
    {
        "id": "7IWshUcKfJyDWrbiF2XT8J",
        "name": "Kid Milli",
        "followers": 154781,
        "normalized_followers": 109.12280711649514
    },
    {
        "id": "2krUNMgFZYm5s4Nn0g91W9",
        "name": "HAON",
        "followers": 130734,
        "normalized_followers": 92.16900139003299
    },
    {
        "id": "25wMXkplvEHJpJHX8A6Ved",
        "name": "lIlBOI",
        "followers": 64698,
        "normalized_followers": 45.61177949322031
    },
    {
        "id": "57W9ikVc6O2wLDtmclSjvN",
        "name": "Simon Dominic",
        "followers": 434718,
        "normalized_followers": 306.4862002070526
    },
    {
        "id": "5a8EJtOEbUJDF4RX3mKK02",
        "name": "Woo",
        "followers": 144419,
        "normalized_followers": 101.8173080963429
    },
    {
        "id": "79g2STpP2iV1xfgHuhrhX0",
        "name": "Leellamarz",
        "followers": 115295,
        "normalized_followers": 81.28407576060525
    },
    {
        "id": "7ieMQQDR0bdBPz572mtxwS",
        "name": "BOBBY",
        "followers": 869363,
        "normalized_followers": 612.9230484616432
    },
    {
        "id": "6N7b9mUVwn885jI7RRg8no",
        "name": "MIRANI",
        "followers": 50941,
        "normalized_followers": 35.91271077866383
    },
    {
        "id": "0Ch0t9gI47Lkal71uQnmV3",
        "name": "JUSTHIS",
        "followers": 116931,
        "normalized_followers": 82.4375013924301
    },
    {
        "id": "6vbKIm1WsvhMMDpthYONc1",
        "name": "Balming Tiger",
        "followers": 49613,
        "normalized_followers": 34.97643373767153
    },
    {
        "id": "46KQM3HJyONaKRTbcfNPlU",
        "name": "Omega Sapien",
        "followers": 14475,
        "normalized_followers": 10.20316365756062
    },
    {
        "id": "5enwJ9yOnKlCP91ov4Dqhv",
        "name": "punchnello",
        "followers": 145109,
        "normalized_followers": 102.30377734203921
    },
    {
        "id": "6XsOOgLCtnkkOv2uhZXuB0",
        "name": "Blase",
        "followers": 23241,
        "normalized_followers": 16.383438161580546
    },
    {
        "id": "6iLGJqxVgxxWsJe5bW4dxt",
        "name": "Woodie Gochild",
        "followers": 142550,
        "normalized_followers": 100.49961096560904
    },
    {
        "id": "1wsoV3RXPkxVz3PwsNRI5K",
        "name": "BewhY",
        "followers": 277685,
        "normalized_followers": 195.77355519339056
    },
    {
        "id": "0Qr4St9aCOLu41Nt5QZIz1",
        "name": "Ugly Duck",
        "followers": 9507,
        "normalized_followers": 6.700585088547273
    },
    {
        "id": "0rW6fVd3yuW2CF2sLYWQtE",
        "name": "Dok2",
        "followers": 120286,
        "normalized_followers": 84.80286997114179
    },
    {
        "id": "6b29EYSqnLhUyxC3yyNbyr",
        "name": "TRADE L",
        "followers": 28146,
        "normalized_followers": 19.84159997337815
    },
    {
        "id": "4CYjITN8Au3K5CWFeex7fU",
        "name": "Tabber",
        "followers": 54297,
        "normalized_followers": 38.27878438526785
    },
    {
        "id": "23LskvW8ErKu8v1teU7xFZ",
        "name": "sokodomo",
        "followers": 49577,
        "normalized_followers": 34.951052733548245
    },
    {
        "id": "7LTShHcq1KdTrWeLvWoYed",
        "name": "Dumbfoundead",
        "followers": 130062,
        "normalized_followers": 91.69522264639834
    },
    {
        "id": "2qI1pO64eYqGUiv1XTw4cy",
        "name": "The Quiett",
        "followers": 106159,
        "normalized_followers": 74.84294093642933
    },
    {
        "id": "3l9s67pOK4Stw9yW1wr0Bg",
        "name": "Loopy",
        "followers": 86054,
        "normalized_followers": 60.6683551614669
    },
    {
        "id": "6zTIxEXFWjoNu2VXauDITb",
        "name": "Junggigo",
        "followers": 99088,
        "normalized_followers": 69.85768870988073
    },
    {
        "id": "2Yv0nlRtzgPl6u0dsS2hFv",
        "name": "Paloalto",
        "followers": 44200,
        "normalized_followers": 31.16011775657869
    },
    {
        "id": "305pg6Bs6Mz9Tm2zK66psY",
        "name": "Cosmic Boy",
        "followers": 50450,
        "normalized_followers": 35.56654208353791
    },
    {
        "id": "30AghIfoMJrMo1YqoUkEMM",
        "name": "Huh",
        "followers": 34942,
        "normalized_followers": 24.632969529540528
    },
    {
        "id": "3ghCvruix2FYZ81DHRlOt1",
        "name": "BLOO",
        "followers": 266754,
        "normalized_followers": 188.06689530251194
    },
    {
        "id": "698zn8fEOIr1OrfqG4283S",
        "name": "TOIL",
        "followers": 81151,
        "normalized_followers": 57.21160340545393
    },
    {
        "id": "5ZjBaiZiRUZx4AmlzOOc9R",
        "name": "Junoflo",
        "followers": 68636,
        "normalized_followers": 48.388179333150774
    },
    {
        "id": "7MWT3sTDz6GemZla4Y5oCk",
        "name": "Gist",
        "followers": 14581,
        "normalized_followers": 10.277896614145849
    },
    {
        "id": "0E0fq98DMHhkAgiXWpCViX",
        "name": "Skinny Brown",
        "followers": 49067,
        "normalized_followers": 34.59148850846837
    },
    {
        "id": "7hKH0uNhhgWJCumCtKMYey",
        "name": "twlv",
        "followers": 30857,
        "normalized_followers": 21.75293058943998
    },
    {
        "id": "3Zn6C68VCosoQrxu4D2Btr",
        "name": "nafla",
        "followers": 167048,
        "normalized_followers": 117.77138427150454
    },
    {
        "id": "7xX15v6ahAkcT14kHfB9wB",
        "name": "True Damage",
        "followers": 111634,
        "normalized_followers": 78.7029686468456
    },
    {
        "id": "1DKIdDHKHi3rIwG4UB5zLE",
        "name": "Don Malik",
        "followers": 27249,
        "normalized_followers": 19.20918995397296
    },
    {
        "id": "0Q5XzDpn7DCI5jlubok4xb",
        "name": "SUPERBEE",
        "followers": 83784,
        "normalized_followers": 59.067941845915314
    },
    {
        "id": "31VffPWiL2AAwNIMODB9qZ",
        "name": "Kim Seungmin",
        "followers": 46274,
        "normalized_followers": 32.62234560523684
    },
    {
        "id": "4nvFFLtv7ZqoTr83387uK4",
        "name": "Dynamicduo",
        "followers": 150802,
        "normalized_followers": 106.31750113297983
    },
    {
        "id": "24sQuJhQ85ZygDG7sUVUxR",
        "name": "Verbal Jint",
        "followers": 71039,
        "normalized_followers": 50.08236135838006
    },
    {
        "id": "0UswO8FFKS2tv6dzyNyJLD",
        "name": "Slom",
        "followers": 19756,
        "normalized_followers": 13.926415956868086
    },
    {
        "id": "08KbKkPqaYNFYM9R5eMjuM",
        "name": "Uneducated Kid",
        "followers": 30939,
        "normalized_followers": 21.810742876609684
    },
    {
        "id": "6F5tPDq3TIduDv2ki6O1Oq",
        "name": "Swings",
        "followers": 84727,
        "normalized_followers": 59.73278314836692
    },
    {
        "id": "4QDcs3XrA8uHUZ7Xt9Ytep",
        "name": "Primary",
        "followers": 80260,
        "normalized_followers": 56.58342355340262
    },
    {
        "id": "3yVEZNS0ateVfoj8FuazKg",
        "name": "Hash Swan",
        "followers": 94119,
        "normalized_followers": 66.35440511297509
    },
    {
        "id": "0su5mZ6qhvOUhz7ckEx8rR",
        "name": "YUMDDA",
        "followers": 48318,
        "normalized_followers": 34.06342261712558
    },
    {
        "id": "0T8sqjCB5w57zxvW5lp3qJ",
        "name": "BlackNut",
        "followers": 20377,
        "normalized_followers": 14.364238277994755
    },
    {
        "id": "0YE7929Kw8hXmap9LKxUiC",
        "name": "Swervy",
        "followers": 26687,
        "normalized_followers": 18.812964278492785
    },
    {
        "id": "1Ri5P0CfdNxdIkHX6es8Xd",
        "name": "Polodared",
        "followers": 6280,
        "normalized_followers": 4.425460080051687
    },
    {
        "id": "4FuRHFtCeoYaeeVDKyyvbS",
        "name": "OVAN",
        "followers": 75681,
        "normalized_followers": 53.35510083449921
    },
    {
        "id": "3EuteIwWAP4mLq0kvLML99",
        "name": "Yankie",
        "followers": 10154,
        "normalized_followers": 7.156738134874091
    },
    {
        "id": "1SsVqqC31h54Hg08g7uQhM",
        "name": "YANGHONGWON",
        "followers": 67160,
        "normalized_followers": 47.347558164096085
    },
    {
        "id": "6bIsFWNkjQvSm5P4rqlxKn",
        "name": "Don Mills",
        "followers": 13569,
        "normalized_followers": 9.564408387124612
    },
    {
        "id": "13jYpBHek9LD68d1ZwWmu5",
        "name": "KHAN",
        "followers": 5106,
        "normalized_followers": 3.5977573344756664
    },
    {
        "id": "59KuGY6nfY3w39O0qYVA7p",
        "name": "Keem Hyo-Eun",
        "followers": 24000,
        "normalized_followers": 16.918554331846476
    },
    {
        "id": "0dX6tgZKWpamoFHFuXFhwd",
        "name": "Mad Clown",
        "followers": 118854,
        "normalized_followers": 83.7932700293489
    },
    {
        "id": "4bjcB3ZKiHgPzJvY2S2FLN",
        "name": "Jvcki Wai",
        "followers": 100793,
        "normalized_followers": 71.05976126627522
    },
    {
        "id": "11S00dFcvNvJahis8MTGMD",
        "name": "Tiger JK",
        "followers": 35445,
        "normalized_followers": 24.987598559374206
    },
    {
        "id": "4ph6JucAkc6pnPPad0uiJT",
        "name": "Ted Park",
        "followers": 25413,
        "normalized_followers": 17.914758743685418
    },
    {
        "id": "4F0KZ0SXe4z5xrgX6TXAPy",
        "name": "Roh Yun Ha",
        "followers": 10880,
        "normalized_followers": 7.668588384693676
    },
    {
        "id": "69H1Ooj2eBJXLTk3IEBV0v",
        "name": "REDDY",
        "followers": 42349,
        "normalized_followers": 29.85511112790644
    },
    {
        "id": "4cMtnnGdRvh8KIi2RA7ZeU",
        "name": "2xxx",
        "followers": 49287,
        "normalized_followers": 34.74659464477734
    },
    {
        "id": "4vdAgNz4vrUZVvS0CaVvGJ",
        "name": "CRUCiAL STAR",
        "followers": 69670,
        "normalized_followers": 49.11717817380291
    },
    {
        "id": "3S79khDmqHqH3SudDjO6dV",
        "name": "NO:EL",
        "followers": 118376,
        "normalized_followers": 83.45626669682306
    },
    {
        "id": "0yHrFzi7dWriMWhB5XA99P",
        "name": "Han Yo Han",
        "followers": 56718,
        "normalized_followers": 39.985656912558774
    },
    {
        "id": "5f48MQLr5eOXHcR4lFE1BM",
        "name": "Chillin Homie",
        "followers": 13012,
        "normalized_followers": 9.171707851106007
    },
    {
        "id": "2TTGZUWJg6LIOWsmCEgKCZ",
        "name": "Layone",
        "followers": 50945,
        "normalized_followers": 35.91553089023308
    },
    {
        "id": "4ueZwsEtcqcO0IZywqgk66",
        "name": "G2",
        "followers": 21847,
        "normalized_followers": 15.400629279695563
    },
    {
        "id": "15KDb2KpZRvX1updtyinK1",
        "name": "ELO",
        "followers": 30724,
        "normalized_followers": 21.659161879762287
    },
    {
        "id": "3P16F9giedxmc5238b66bo",
        "name": "Babylon",
        "followers": 31681,
        "normalized_followers": 22.333873572706285
    },
    {
        "id": "396SgLoc5TB6oqatyTy2HD",
        "name": "Los",
        "followers": 5798,
        "normalized_followers": 4.085636635956592
    },
    {
        "id": "0J372uvAXbRjLFSoAVE2lp",
        "name": "PATEKO",
        "followers": 22074,
        "normalized_followers": 15.560670611250721
    },
    {
        "id": "0lb59tIBwWrDfP6X956pkK",
        "name": "Jimmy Paige",
        "followers": 3042,
        "normalized_followers": 2.1425797647406526
    },
    {
        "id": "1lcuNfp7bo4LCAHWrjAR9K",
        "name": "JAMBINO",
        "followers": 4405,
        "normalized_followers": 3.1035327819639202
    },
    {
        "id": "6yFuoRFCsxQLasjZqdwvAM",
        "name": "Jayci yucca",
        "followers": 17263,
        "normalized_followers": 12.168781421330591
    },
    {
        "id": "78l5b6jXVHHTrRCzSx1ku4",
        "name": "Ash-B",
        "followers": 55322,
        "normalized_followers": 39.00143797488916
    },
    {
        "id": "75OcDAFGCzj0qehe1mADeM",
        "name": "Way Ched",
        "followers": 39971,
        "normalized_followers": 28.178554799984997
    },
    {
        "id": "6v5cGuRCZKq08nLI4WXJuB",
        "name": "Nucksal",
        "followers": 40294,
        "normalized_followers": 28.40627880920225
    },
    {
        "id": "49cCO8Hy5heGnXj9hb6KEW",
        "name": "Gwangil Jo",
        "followers": 44440,
        "normalized_followers": 31.32932445073392
    },
    {
        "id": "5M6uaTVVZuyAkdr60oWKrJ",
        "name": "viceversa",
        "followers": 4508,
        "normalized_followers": 3.1761506548722083
    },
    {
        "id": "6xlIFpRmRNDoVuFUqzuMFE",
        "name": "NSW yoon",
        "followers": 8170,
        "normalized_followers": 5.757962796524157
    },
    {
        "id": "0seDu6vvqbUnPUk6s6a616",
        "name": "SINCE",
        "followers": 29480,
        "normalized_followers": 20.78210718172432
    },
    {
        "id": "4T6xiCykTP9rCNaEPU7D4q",
        "name": "VINXEN",
        "followers": 73055,
        "normalized_followers": 51.50369758928403
    },
    {
        "id": "7C0lSOS41UnTbnF7bMSEWN",
        "name": "WOOGIE",
        "followers": 87741,
        "normalized_followers": 61.85773721579973
    },
    {
        "id": "3YRGcoHMIvWleQfa0qa1D1",
        "name": "Ourealgoat",
        "followers": 11827,
        "normalized_followers": 8.336249798714537
    },
    {
        "id": "2UaheMCNCnN1CrrnZnmh3j",
        "name": "D.Ark",
        "followers": 46088,
        "normalized_followers": 32.49121041726653
    },
    {
        "id": "6gEWl778wJTkq4Uk5eBvgD",
        "name": "MC MONG",
        "followers": 38401,
        "normalized_followers": 27.071661009052843
    },
    {
        "id": "3jEfM7ePpwC5KcJHMseRqA",
        "name": "Mckdaddy",
        "followers": 8234,
        "normalized_followers": 5.803084581632219
    },
    {
        "id": "7pXKdkQsYFCMG2omRxheJ2",
        "name": "Basick",
        "followers": 42285,
        "normalized_followers": 29.809989342798378
    },
    {
        "id": "3e3oLJehq4vQl2H0FAJnvn",
        "name": "GD&TOP",
        "followers": 602155,
        "normalized_followers": 424.533955412344
    },
    {
        "id": "5rP0axomfqfxm0QavWTdvO",
        "name": "Owen",
        "followers": 34711,
        "normalized_followers": 24.470108086416115
    },
    {
        "id": "32wJE7JooXm59HxYhy7caU",
        "name": "Khundi Panda",
        "followers": 18517,
        "normalized_followers": 13.05288639829169
    },
    {
        "id": "3Rxm9TaXZGuQRw2B91Ap22",
        "name": "BOYCOLD",
        "followers": 39738,
        "normalized_followers": 28.014283301075956
    },
    {
        "id": "4N2CbwZ7ekytt9Oi5dh4Vq",
        "name": "Flowsik",
        "followers": 36315,
        "normalized_followers": 25.60097282568693
    },
    {
        "id": "61MMiylth1injW39oZBuYB",
        "name": "San E",
        "followers": 85835,
        "normalized_followers": 60.51395405305025
    },
    {
        "id": "2ZT3bnHPOdErwCLdP5aHqR",
        "name": "C JAMM",
        "followers": 51053,
        "normalized_followers": 35.99167390260293
    },
    {
        "id": "0GVLMUDDJxgVWTpHcVFA2z",
        "name": "K.vsh",
        "followers": 30593,
        "normalized_followers": 21.566803225869222
    },
    {
        "id": "1UIxKzYZnlJeF9siZ6IE1f",
        "name": "MUSHVENOM",
        "followers": 31689,
        "normalized_followers": 22.33951379584479
    },
    {
        "id": "4CF0QZtzsHDYdTHqipMGdh",
        "name": "JAEHA",
        "followers": 26222,
        "normalized_followers": 18.485126308567022
    },
    {
        "id": "02WoRfOhF5nUVpwddshInq",
        "name": "CHOILB",
        "followers": 6295,
        "normalized_followers": 4.4360354984363894
    },
    {
        "id": "7MJnvH71CgBGCN9obN4aY5",
        "name": "Boi B",
        "followers": 8735,
        "normalized_followers": 6.156303555681269
    },
    {
        "id": "0wMU0ruU41VLCAdBaWBo1j",
        "name": "QM",
        "followers": 5735,
        "normalized_followers": 4.041219878740843
    },
    {
        "id": "42xj5mBLvrFdW6tYns6mxs",
        "name": "RAVI",
        "followers": 220996,
        "normalized_followers": 155.80622900603194
    },
    {
        "id": "6cJ883ebXg0pWAwlzMcBxe",
        "name": "Ahn byeong woong",
        "followers": 19277,
        "normalized_followers": 13.58870759644993
    },
    {
        "id": "0m5ETFICJLAg6ageqa9FgZ",
        "name": "Hangzoo",
        "followers": 13187,
        "normalized_followers": 9.295087732260864
    },
    {
        "id": "36Hd8M3GV2FLpHUEDH6bCz",
        "name": "ONE",
        "followers": 254784,
        "normalized_followers": 179.62771143151966
    },
    {
        "id": "1MMbv4LTpwbh2APtXuwaZN",
        "name": "ZENE THE ZILLA",
        "followers": 27949,
        "normalized_followers": 19.702709478592393
    },
    {
        "id": "3xaGsC8Wew467UpEKhjXNZ",
        "name": "PARKHYUNJIN",
        "followers": 15065,
        "normalized_followers": 10.619130114025571
    },
    {
        "id": "65LSFEqRhq074aUBF1zF2e",
        "name": "365LIT",
        "followers": 5119,
        "normalized_followers": 3.6069226970757415
    },
    {
        "id": "56YvXhxjnImPI8N5dvtjm7",
        "name": "EK",
        "followers": 12012,
        "normalized_followers": 8.466679958792529
    },
    {
        "id": "6g6zaR4B3WDZXphDRmsVGF",
        "name": "BANG YONGGUK",
        "followers": 101683,
        "normalized_followers": 71.68723609043421
    },
    {
        "id": "08c5z2rVpcPu7QylOxQCFA",
        "name": "Khakii",
        "followers": 14739,
        "normalized_followers": 10.38929102113138
    },
    {
        "id": "0hoIUrMFR0Cy6aTbma8b2o",
        "name": "unofficialboyy",
        "followers": 15150,
        "normalized_followers": 10.679057484872217
    },
    {
        "id": "4YMP326oNG8AQdTRang2yA",
        "name": "KillaGramz",
        "followers": 9814,
        "normalized_followers": 6.91702865148751
    },
    {
        "id": "5XdnR0kqQUWzeTDdsJNulO",
        "name": "Okasian",
        "followers": 46520,
        "normalized_followers": 32.79578246674595
    },
    {
        "id": "4rO1Cxt1NcUcX2XbF19rDI",
        "name": "T.O.P",
        "followers": 461142,
        "normalized_followers": 325.11585723354386
    },
    {
        "id": "4E7PyG6Vo26X1I9qURf45z",
        "name": "DEEPFLOW",
        "followers": 7664,
        "normalized_followers": 5.401218683013537
    },
    {
        "id": "2douezlnzbINNdpIBZoYWT",
        "name": "Moti",
        "followers": 7533,
        "normalized_followers": 5.3088600291204715
    },
    {
        "id": "1q1Fe4tXiu1Weq4U0uhqPi",
        "name": "Ja Mezz",
        "followers": 25384,
        "normalized_followers": 17.894312934808326
    },
    {
        "id": "1kcYSWblYWOOMVOPNgbMYI",
        "name": "Drunken Tiger",
        "followers": 48803,
        "normalized_followers": 34.40536114489762
    },
    {
        "id": "4uqXu5Qybes6RYP8ThjoEV",
        "name": "Lil tachi",
        "followers": 15018,
        "normalized_followers": 10.585993803086838
    },
    {
        "id": "19e5d7VkNQCFklPG8Iqdy5",
        "name": "SILKYBOIS",
        "followers": 11494,
        "normalized_followers": 8.101475510574149
    },
    {
        "id": "3gg70JN79TXhAqklizHOva",
        "name": "lobonabeat!",
        "followers": 5605,
        "normalized_followers": 3.9495662527400905
    },
    {
        "id": "2VjfPlcTFJhQSe8ALJJ1dz",
        "name": "h3hyeon",
        "followers": 6382,
        "normalized_followers": 4.497372925067662
    },
    {
        "id": "4ls4GQkl0kkBlAWq2DgS0z",
        "name": "OLNL",
        "followers": 21190,
        "normalized_followers": 14.93742595444561
    },
    {
        "id": "7p552gLGzaDKXB5sETgTEP",
        "name": "DJ Wegun",
        "followers": 13573,
        "normalized_followers": 9.567228498693865
    },
    {
        "id": "0WIKW2eVuPbK5vQ0AIDtMQ",
        "name": "J'Kyun",
        "followers": 9484,
        "normalized_followers": 6.684369447024062
    },
    {
        "id": "4w7y9BkDnf9hhjzQH6Br41",
        "name": "Bizzy",
        "followers": 1328,
        "normalized_followers": 0.9341619573153552
    },
    {
        "id": "3HfWEOcXit3EkuRCt5M3Yd",
        "name": "Sway D",
        "followers": 2792,
        "normalized_followers": 1.9663227916622839
    },
    {
        "id": "10jo9gGaXEw8lAgB3gK0c1",
        "name": "Rohann",
        "followers": 10566,
        "normalized_followers": 7.447209626507243
    },
    {
        "id": "31jg46rtB7MyrVPXZATmsa",
        "name": "TAKEWON",
        "followers": 6170,
        "normalized_followers": 4.347907011897205
    },
    {
        "id": "6cXolDFPOgf0wuRe5kMPxo",
        "name": "Odee",
        "followers": 2273,
        "normalized_followers": 1.6004133155515898
    },
    {
        "id": "6ftZYkensUYXNiMM7nFwhE",
        "name": "CHEETAH",
        "followers": 40901,
        "normalized_followers": 28.834230739836528
    },
    {
        "id": "7wqsGqGaU61FzNh62mbWXz",
        "name": "myunDo",
        "followers": 8202,
        "normalized_followers": 5.780523689078187
    },
    {
        "id": "1CjHzclPOS2unF1vRtgurF",
        "name": "Hanhae",
        "followers": 25737,
        "normalized_followers": 18.14318778079498
    },
    {
        "id": "6a8cUmqOsXmjzq1aWKiVpH",
        "name": "E SENS",
        "followers": 26175,
        "normalized_followers": 18.451989997628285
    },
    {
        "id": "3kDgt4vVKGTLmtC3FkOwWF",
        "name": "DJ DOC",
        "followers": 20816,
        "normalized_followers": 14.673745522720369
    },
    {
        "id": "1Azg0okIA7BY6CMwRBLmud",
        "name": "Hwaji",
        "followers": 3446,
        "normalized_followers": 2.427411033235297
    },
    {
        "id": "1o3mKG33qvuXI2s3HXTkYd",
        "name": "ILLSON",
        "followers": 10714,
        "normalized_followers": 7.551553754569638
    },
    {
        "id": "7kqUt0kZIfski1GVmbwjG3",
        "name": "Johan Kim",
        "followers": 8417,
        "normalized_followers": 5.932104685925585
    },
    {
        "id": "4F4rHRjTw15zhEFKvnLs7q",
        "name": "Osshun Gum",
        "followers": 11445,
        "normalized_followers": 8.066929143850789
    },
    {
        "id": "2a3wtqb5oDZFegk1xPJu7K",
        "name": "H1GHR MUSIC",
        "followers": 69930,
        "normalized_followers": 49.30048542580442
    },
    {
        "id": "1ToWoFmtIc9NTPFy7lR690",
        "name": "Microdot",
        "followers": 6372,
        "normalized_followers": 4.490322646144527
    },
    {
        "id": "5xWKWXamxbujIdti9xpnI1",
        "name": "Mommy Son",
        "followers": 9419,
        "normalized_followers": 6.638542634023687
    },
    {
        "id": "0POlGzHsz34BmE7T8klqQI",
        "name": "Myk",
        "followers": 2131,
        "normalized_followers": 1.5002993548430763
    },
    {
        "id": "6dHoQP2ONf0e9DMH94Obo7",
        "name": "Supreme Team",
        "followers": 21818,
        "normalized_followers": 15.380183470818473
    },
    {
        "id": "5T8LKv9A1vEnwMCO4dMo3c",
        "name": "KOONTA",
        "followers": 10469,
        "normalized_followers": 7.378821920952837
    },
    {
        "id": "459tVR1zPUmVwOROer0adD",
        "name": "BILL STAX",
        "followers": 20203,
        "normalized_followers": 14.24156342473221
    },
    {
        "id": "0c8Qflq0lTE9LhXcdNZrEG",
        "name": "Chaboom",
        "followers": 3241,
        "normalized_followers": 2.282880315311034
    },
    {
        "id": "08yoNApAYvtzOK5P3qZKw8",
        "name": "Spray",
        "followers": 3062,
        "normalized_followers": 2.156680322586922
    },
    {
        "id": "4WItSECPefckW11qSnZXyv",
        "name": "JINUSEAN",
        "followers": 27931,
        "normalized_followers": 19.690018976530748
    },
    {
        "id": "0bQhUyXffQjkd6horP6fKX",
        "name": "BIGONE",
        "followers": 25334,
        "normalized_followers": 17.859061540192652
    },
    {
        "id": "5xHC23kCM6goKp7bDDXE3T",
        "name": "B-Free",
        "followers": 22951,
        "normalized_followers": 16.17898007280964
    },
    {
        "id": "2Z7teNgQJnz6qUp8FmhEtG",
        "name": "YunB",
        "followers": 18349,
        "normalized_followers": 12.934441712383025
    },
    {
        "id": "1i4Y4WlFFetQV14Z8UDdvr",
        "name": "Outsider",
        "followers": 22147,
        "normalized_followers": 15.612137647389606
    },
    {
        "id": "1IoxcWz8vPDGOJBQNCGEvF",
        "name": "Futuristic Swaver",
        "followers": 8083,
        "normalized_followers": 5.696625369892884
    },
    {
        "id": "6RzEJR9Jz1DFFjZOVm8Xtg",
        "name": "Muzie",
        "followers": 8978,
        "normalized_followers": 6.327625333513445
    },
    {
        "id": "7l9DszIMmxbcc24RJwqJY8",
        "name": "Jazzyfact",
        "followers": 18896,
        "normalized_followers": 13.320091969478495
    },
    {
        "id": "4meeMnr8eLacsB31ApsXZS",
        "name": "Huckleberry P",
        "followers": 13721,
        "normalized_followers": 9.67157262675626
    },
    {
        "id": "2xH4dYFMVhdOGIhgIWonbc",
        "name": "Donutman",
        "followers": 8536,
        "normalized_followers": 6.016003005110889
    },
    {
        "id": "74r4YBm6qWOBKKF6MhVXVq",
        "name": "Bryn",
        "followers": 16742,
        "normalized_followers": 11.80146188943527
    },
    {
        "id": "0tVSrjQ0NpDlecsJwGmrMy",
        "name": "Lil Moshpit",
        "followers": 6427,
        "normalized_followers": 4.529099180221768
    },
    {
        "id": "620Vx5hEMowoa71wXk4bu1",
        "name": "northfacegawd",
        "followers": 5942,
        "normalized_followers": 4.187160652449732
    },
    {
        "id": "6XBntNN5Zh9iBg8adnaY74",
        "name": "MC Sniper",
        "followers": 14354,
        "normalized_followers": 10.11785528259069
    },
    {
        "id": "2tB3jPHyyfcxvvor2flc1Q",
        "name": "Kim Ximya",
        "followers": 10616,
        "normalized_followers": 7.482461021122917
    },
    {
        "id": "7j1lNIjZY1E1drWIgJloMs",
        "name": "Bassagong",
        "followers": 8611,
        "normalized_followers": 6.068880097034398
    },
    {
        "id": "3ViJGHHVOYothA6WMi2rYR",
        "name": "JJANGYOU",
        "followers": 6989,
        "normalized_followers": 4.925324855701941
    },
    {
        "id": "4FCneqQd4xiPXKOa6poPIf",
        "name": "BUMZU",
        "followers": 23885,
        "normalized_followers": 16.837476124230427
    },
    {
        "id": "3aJJ3PgNVHdHGZ1XPgtSEc",
        "name": "JOWOOCHAN",
        "followers": 10982,
        "normalized_followers": 7.74050122970965
    },
    {
        "id": "3A1b2Lg9tPuQyR7ab1xgp8",
        "name": "Untell",
        "followers": 4168,
        "normalized_followers": 2.9364411714856264
    },
    {
        "id": "7wjamanZYmiJrwTF9ey7cX",
        "name": "uncoolclub",
        "followers": 4300,
        "normalized_followers": 3.029504853271005
    },
    {
        "id": "6a8KtGpAv3NHL713mcH08a",
        "name": "yankie",
        "followers": 1475,
        "normalized_followers": 1.0378010574854364
    },
    {
        "id": "1SHIOlNm9pVZ7EzO9322AM",
        "name": "Skyminhyuk",
        "followers": 1298,
        "normalized_followers": 0.9130111205459511
    },
    {
        "id": "1Pr77yszl1ikj6k9sy4Cju",
        "name": "Kanto",
        "followers": 10446,
        "normalized_followers": 7.3626062794296265
    },
    {
        "id": "1mKRJeL6KrSlwLG8gvwSQP",
        "name": "BAECHIGI",
        "followers": 10100,
        "normalized_followers": 7.118666628689165
    },
    {
        "id": "7McwKT2tZl8LMXUQRH3YDM",
        "name": "JUNG ILHOON",
        "followers": 47669,
        "normalized_followers": 33.60585951501413
    },
    {
        "id": "762fgqQ2gz5w7q1VkDOmja",
        "name": "KOREAN",
        "followers": 10454,
        "normalized_followers": 7.368246502568134
    },
    {
        "id": "0FyGoy4Ek4dQGoMM65eZ0z",
        "name": "Cloudybay",
        "followers": 5738,
        "normalized_followers": 4.043334962417783
    },
    {
        "id": "2RLCgVKRIUWY5Dz5azW6Tk",
        "name": "Rakon",
        "followers": 859,
        "normalized_followers": 0.6035038758203353
    },
    {
        "id": "5qp3vJC5OdDo1Zsrsl3sIR",
        "name": "Sleepy",
        "followers": 27478,
        "normalized_followers": 19.370641341312744
    },
    {
        "id": "6dTCGU3ZXmHV6roc3mP7Q5",
        "name": "EUN JIWON",
        "followers": 26096,
        "normalized_followers": 18.396292794135523
    },
    {
        "id": "3inqDrxKHZeWUvf8RHbJ6t",
        "name": "KittiB",
        "followers": 17556,
        "normalized_followers": 12.375354593778438
    },
    {
        "id": "7ndYLcobuKuq9ZcoIAVvU6",
        "name": "MASTA WU",
        "followers": 4655,
        "normalized_followers": 3.279789755042289
    },
    {
        "id": "2HDRkPTO5A59sFcC2ROGbw",
        "name": "Untouchable",
        "followers": 7338,
        "normalized_followers": 5.1713795901193444
    },
    {
        "id": "0c6EF9zv5mQX7pkyrPawKS",
        "name": "MBA",
        "followers": 6761,
        "normalized_followers": 4.764578496254469
    },
    {
        "id": "1xI51JmMVnw1XVCPeA4eiY",
        "name": "GongGongGoo009",
        "followers": 3529,
        "normalized_followers": 2.4859283482973153
    },
    {
        "id": "2kOGSFThgEzPEjL4fFB25w",
        "name": "Click-B",
        "followers": 8942,
        "normalized_followers": 6.302244329390159
    },
    {
        "id": "2Pe5hROLBx2lHpYl9Z4tCG",
        "name": "Posadic",
        "followers": 2151,
        "normalized_followers": 1.5143999126893457
    },
    {
        "id": "6mo8IDrkfAXoqIk6hjl1eJ",
        "name": "AZIATIX",
        "followers": 13436,
        "normalized_followers": 9.47063967744692
    },
    {
        "id": "5r1cOycfowIRNcVOfRn0AR",
        "name": "HAIFHAIF",
        "followers": 735,
        "normalized_followers": 0.5160804171734642
    },
    {
        "id": "4yvE3ttbP5uRwBQ0ZrhOPi",
        "name": "GIANT PINK",
        "followers": 18596,
        "normalized_followers": 13.108583601784455
    },
    {
        "id": "3fXHHmLxAY43pSTlWnbYd7",
        "name": "Foggyatthebottom",
        "followers": 538,
        "normalized_followers": 0.37718992238770954
    },
    {
        "id": "5UBoOzYYNpwHfwXqr1JNXS",
        "name": "LIMZY",
        "followers": 968,
        "normalized_followers": 0.6803519160825041
    },
    {
        "id": "6lJCpS9H1iVfMT6W0HkDRO",
        "name": "AP Alchemy",
        "followers": 2045,
        "normalized_followers": 1.4396669561041173
    },
    {
        "id": "5TmTQv1VaF0VDAmC9eAQ2m",
        "name": "Rick bridges",
        "followers": 2208,
        "normalized_followers": 1.554586502551214
    },
    {
        "id": "5LaXV8vstuhyeMmNmPiMkN",
        "name": "Lil Cats",
        "followers": 969,
        "normalized_followers": 0.6810569439748175
    },
    {
        "id": "6d522GmctNZmsj7uWfRd1q",
        "name": "BOiTELLO",
        "followers": 9206,
        "normalized_followers": 6.488371692960917
    },
    {
        "id": "4gEUlh9kVS3y11VHiJfS2l",
        "name": "Andup",
        "followers": 10674,
        "normalized_followers": 7.523352638877099
    },
    {
        "id": "1xOiGoYkm1zgqwXLsvQA90",
        "name": "oygli",
        "followers": 735,
        "normalized_followers": 0.5160804171734642
    },
    {
        "id": "7ngC61jtmmjDi2vbJRG3yq",
        "name": "P-Type",
        "followers": 8023,
        "normalized_followers": 5.654323696354075
    },
    {
        "id": "1QxDhdpQDAxevRaOWUDjPC",
        "name": "JTL",
        "followers": 7485,
        "normalized_followers": 5.275018690289426
    },
    {
        "id": "1Yi2PEzEnkvddM1Zsfpde0",
        "name": "Just Music",
        "followers": 4445,
        "normalized_followers": 3.131733897656459
    },
    {
        "id": "0WlRUcYhuk4rkUm4zEpXu1",
        "name": "Ian Ka$h",
        "followers": 1227,
        "normalized_followers": 0.8629541401916943
    },
    {
        "id": "2jyURAEr7r2UfWMpFQDOQd",
        "name": "ChaMane",
        "followers": 1369,
        "normalized_followers": 0.9630681009002078
    },
    {
        "id": "5jQhTK322HPc0SLPoLSFg8",
        "name": "M.I.B",
        "followers": 21225,
        "normalized_followers": 14.962101930676582
    },
    {
        "id": "6g9tPD43DUJGf2kcJ8oJCg",
        "name": "HIGH4 20",
        "followers": 46503,
        "normalized_followers": 32.78379699257662
    },
    {
        "id": "5rpYfskWC90uJl9CMx3iEm",
        "name": "Yami Tommy",
        "followers": 1720,
        "normalized_followers": 1.2105328911022377
    },
    {
        "id": "59YukrTVTiGNpuhyw3v4dB",
        "name": "Eluphant",
        "followers": 9860,
        "normalized_followers": 6.94945993453393
    },
    {
        "id": "57YbQhFBBDksLzX08lqVnw",
        "name": "Kim Jin Pyo",
        "followers": 605,
        "normalized_followers": 0.42442679117271237
    },
    {
        "id": "1Tf52Yc65Ghgb3DDBRBL1K",
        "name": "RAUDI",
        "followers": 1508,
        "normalized_followers": 1.061066977931781
    },
    {
        "id": "5N9rfcaITVgayz1OzCqu4h",
        "name": "Illinit",
        "followers": 2182,
        "normalized_followers": 1.5362557773510634
    },
    {
        "id": "3klG579pH6Pm20yugj7KQ3",
        "name": "30",
        "followers": 1084,
        "normalized_followers": 0.7621351515908672
    },
    {
        "id": "0cFZMug8SFBmK1saAOhC3z",
        "name": "Illionaire Records",
        "followers": 6858,
        "normalized_followers": 4.832966201808876
    },
    {
        "id": "62Jd1ZnaT9CaMOuAJWIAze",
        "name": "Double K",
        "followers": 222,
        "normalized_followers": 0.1544011084166512
    },
    {
        "id": "3uezMpoFc84nQ6qU2mliqr",
        "name": "Mac Kidd",
        "followers": 1136,
        "normalized_followers": 0.798796601991168
    },
    {
        "id": "64zL0O0ioJm6wvF3vdHyLu",
        "name": "P. Cassady",
        "followers": 2168,
        "normalized_followers": 1.526385386858675
    },
    {
        "id": "4UTKdKB32XqCsQGLjZEfmw",
        "name": "Snacky Chan",
        "followers": 2146,
        "normalized_followers": 1.5108747732277785
    },
    {
        "id": "2rNnRYi5Hq8Z47auJ9DtDS",
        "name": "Jayho",
        "followers": 2341,
        "normalized_followers": 1.6483552122289062
    },
    {
        "id": "6mquRNZm8DYTOCbYoRh7A1",
        "name": "BLNK",
        "followers": 2428,
        "normalized_followers": 1.7096926388601787
    },
    {
        "id": "3ouWRqbgJCttI2ucJsaWvL",
        "name": "Bully Da Ba$tard",
        "followers": 5402,
        "normalized_followers": 3.8064455906004553
    },
    {
        "id": "4HwHRZI8xz6Zy9vOksqw7R",
        "name": "Legit Goons",
        "followers": 5641,
        "normalized_followers": 3.974947256863376
    },
    {
        "id": "1YdXlK5f1tOeFoNAqiyKbV",
        "name": "furyfromguxxi",
        "followers": 206,
        "normalized_followers": 0.14312066213963556
    },
    {
        "id": "3X9mQSyCBKAV74OUSf7zLt",
        "name": "kitsyojii",
        "followers": 1721,
        "normalized_followers": 1.2112379189945512
    },
    {
        "id": "0B2LPLMSHN2GkVELqTrsba",
        "name": "WEBSTER B",
        "followers": 2036,
        "normalized_followers": 1.433321705073296
    },
    {
        "id": "4vYWMxCZYe3kua8Yp5Ne2Z",
        "name": "Xitsuh",
        "followers": 1873,
        "normalized_followers": 1.3184021586261994
    },
    {
        "id": "2sX96PhvQnPCAHNXi9rmdR",
        "name": "FatDoo",
        "followers": 385,
        "normalized_followers": 0.26932065486374773
    },
    {
        "id": "1Pd9OUbhw9V8yzDLJIjPiP",
        "name": "Sool J",
        "followers": 369,
        "normalized_followers": 0.2580402085867321
    },
    {
        "id": "0dH7U9VsdBan1K2G183OeH",
        "name": "TANGTHEAWESOME",
        "followers": 898,
        "normalized_followers": 0.6309999636205608
    },
    {
        "id": "2PJbnaqDJHOseHq5StoXzD",
        "name": "PULL UP 22",
        "followers": 437,
        "normalized_followers": 0.3059821052640484
    },
    {
        "id": "6h6VRSDg28ryUwIwZbaIgV",
        "name": "Jimmychang",
        "followers": 1791,
        "normalized_followers": 1.2605898714564945
    },
    {
        "id": "33gA8ycF2yf6GpiJuqO5Fd",
        "name": "Jeremy Que$t",
        "followers": 406,
        "normalized_followers": 0.2841262406023307
    },
    {
        "id": "5DeeiAyO94Cmt1QUAZcTLx",
        "name": "TOMMY",
        "followers": 502,
        "normalized_followers": 0.3518089182644244
    },
    {
        "id": "5G48jt4U9koVbgkkcZn1nN",
        "name": "Woo Tae Woon",
        "followers": 1441,
        "normalized_followers": 1.013830109146778
    },
    {
        "id": "7AndKWSFHKgM4NExxp2dTn",
        "name": "Jay Moon",
        "followers": 1499,
        "normalized_followers": 1.0547217269009597
    },
    {
        "id": "2jKQ4jDx4IYeDyTHGz1tkk",
        "name": "DAKSHOOD",
        "followers": 1474,
        "normalized_followers": 1.0370960295931226
    },
    {
        "id": "5wpmk1tTgAelZjXFz92Mwv",
        "name": "Konsole",
        "followers": 332,
        "normalized_followers": 0.2319541765711335
    },
    {
        "id": "3dLG806ZDpPYdtXXTnCrAU",
        "name": "Siyoon",
        "followers": 2635,
        "normalized_followers": 1.855633412569068
    },
    {
        "id": "2o4BX85LnnLCsiNL8nPJYW",
        "name": "Boo Hyun Seok",
        "followers": 366,
        "normalized_followers": 0.2559251249097917
    },
    {
        "id": "40VHZeuDf846LWMOWS8tzp",
        "name": "KWON KI BAEK",
        "followers": 725,
        "normalized_followers": 0.5090301382503295
    },
    {
        "id": "2egBIYU5zJpYuuLkTllux7",
        "name": "Kim Addict",
        "followers": 1037,
        "normalized_followers": 0.7289988406521339
    },
    {
        "id": "4QBJwJifrPCjguBiXyshp1",
        "name": "Kim Ximya X D. Sanders",
        "followers": 2401,
        "normalized_followers": 1.690656885767715
    },
    {
        "id": "7eGrSvLM6BsHd9TRKnOyXM",
        "name": "Icey Blouie",
        "followers": 746,
        "normalized_followers": 0.5238357239889125
    },
    {
        "id": "5KoHFOsr4SbIpO7vY6rUY2",
        "name": "Decipher",
        "followers": 1416,
        "normalized_followers": 0.9962044118389412
    },
    {
        "id": "7fDfLvcgKncATXyHnGKR7M",
        "name": "DUSTYY HAN",
        "followers": 510,
        "normalized_followers": 0.35744914140293216
    },
    {
        "id": "0ZYQRDQ7V5rIbzg565VHAh",
        "name": "Nuol",
        "followers": 3223,
        "normalized_followers": 2.2701898132493916
    },
    {
        "id": "3hk800Fb8F8IQe1WfFGT1w",
        "name": "DEADP",
        "followers": 1714,
        "normalized_followers": 1.2063027237483568
    },
    {
        "id": "15KKvag6UK4hwsNCJmFY09",
        "name": "Pinodyne",
        "followers": 4782,
        "normalized_followers": 3.3693282973661005
    },
    {
        "id": "1VZmQVn38jR2UG7QSWNoYw",
        "name": "Bizniz",
        "followers": 899,
        "normalized_followers": 0.6317049915128742
    },
    {
        "id": "5L1KLMHjZsAtmQFuRmkU0O",
        "name": "Jerry.K",
        "followers": 7587,
        "normalized_followers": 5.3469315353054
    },
    {
        "id": "6zuu08eoCeNj4crmVUjXYm",
        "name": "e.Sens",
        "followers": 3845,
        "normalized_followers": 2.708717162268374
    },
    {
        "id": "1tN10ObeLZVfnzfpSaT73O",
        "name": "JJK",
        "followers": 5444,
        "normalized_followers": 3.836056762077621
    },
    {
        "id": "5YMsC2wvmIj1ZRGMZe0U71",
        "name": "Lip Service",
        "followers": 1294,
        "normalized_followers": 0.9101910089766971
    },
    {
        "id": "10ec6gfQc8j9tzB8yq7MGF",
        "name": "Crispi Crunch",
        "followers": 920,
        "normalized_followers": 0.6465105772514572
    },
    {
        "id": "4qXarzGjvflbmZkZIxSKsl",
        "name": "Marvel J",
        "followers": 991,
        "normalized_followers": 0.6965675576057141
    },
    {
        "id": "4gnZkHarMlN5dyIK0iTjs6",
        "name": "DJ SOn",
        "followers": 883,
        "normalized_followers": 0.6204245452358585
    },
    {
        "id": "748FoG8Fdb63dzoBCuHqRt",
        "name": "$IGA A",
        "followers": 627,
        "normalized_followers": 0.4399374048036088
    },
    {
        "id": "2syai5zCIXOwHsd858JtKk",
        "name": "Cho PD",
        "followers": 358,
        "normalized_followers": 0.2502849017712839
    },
    {
        "id": "6CC0Rj30WieBrLs5fmlSrK",
        "name": "Lil 9ap",
        "followers": 369,
        "normalized_followers": 0.2580402085867321
    },
    {
        "id": "4yLFPwRILFuhInmTX28I4b",
        "name": "Clloud",
        "followers": 1159,
        "normalized_followers": 0.815012243514378
    },
    {
        "id": "1AyPDHfatxyPxU02gzrXbI",
        "name": "yovng trucker",
        "followers": 646,
        "normalized_followers": 0.45333293475756486
    },
    {
        "id": "1xXaHVbA0zzgfAa55XU8aZ",
        "name": "Loptimist",
        "followers": 5249,
        "normalized_followers": 3.6985763230764936
    },
    {
        "id": "1uqY5wsMbmNuHOQQ0pD8nJ",
        "name": "Soul Company",
        "followers": 4182,
        "normalized_followers": 2.946311561978015
    },
    {
        "id": "08mYtA0IQ0Q5m8VKzuFhvq",
        "name": "Sunday 2PM",
        "followers": 41,
        "normalized_followers": 0.026791059907912078
    },
    {
        "id": "4iiBibHDQhvFxF7lY3BMLT",
        "name": "J-Dogg",
        "followers": 279,
        "normalized_followers": 0.1945876982785193
    },
    {
        "id": "0QgGDs81tZf0yqUELyxpAk",
        "name": "0CD",
        "followers": 15,
        "normalized_followers": 0.008460334707761709
    },
    {
        "id": "22T3sq2Y5QhVEHPcR4Ib8Y",
        "name": "Kikaflo",
        "followers": 41,
        "normalized_followers": 0.026791059907912078
    },
    {
        "id": "4d4Q9ZM2Stu1Q7hhMVsCbJ",
        "name": "dob",
        "followers": 1279,
        "normalized_followers": 0.899615590591995
    },
    {
        "id": "69fWp7MhwiUJ0JW9GsMeTX",
        "name": "Jang Woo Hyuk",
        "followers": 769,
        "normalized_followers": 0.5400513655121224
    },
    {
        "id": "2WdKomu1M3DiXxk4secCO6",
        "name": "jrmy.",
        "followers": 117,
        "normalized_followers": 0.08037317972373623
    },
    {
        "id": "4eKUJWxR4ycmScb1XoymzS",
        "name": "STXXCH",
        "followers": 1005,
        "normalized_followers": 0.7064379480981026
    },
    {
        "id": "2cDYHHOKJx1OQGxpYpYNdy",
        "name": "UMC/UW",
        "followers": 268,
        "normalized_followers": 0.18683239146307107
    },
    {
        "id": "0qnPcM4UWqjxDsYBjXrsBp",
        "name": "New Dynasty",
        "followers": 313,
        "normalized_followers": 0.21855864661717747
    },
    {
        "id": "016RKrhdcJeUTxjC2JFBbv",
        "name": "DooYoung",
        "followers": 712,
        "normalized_followers": 0.4998647756502543
    },
    {
        "id": "1kecWOuCkI3lKzOJWm0Z71",
        "name": "VMC",
        "followers": 2581,
        "normalized_followers": 1.8175619063841404
    },
    {
        "id": "4Kq13MiFqrDyPzIKIGG5TA",
        "name": "Johnnyphlo",
        "followers": 91,
        "normalized_followers": 0.062042454523585866
    },
    {
        "id": "5bBvXMwNu88fxzf47RErB3",
        "name": "PENTO",
        "followers": 2564,
        "normalized_followers": 1.8055764322148111
    },
    {
        "id": "1FC3bo9AdsoVCalroEJhKq",
        "name": "Airplaneboy",
        "followers": 40,
        "normalized_followers": 0.0260860320155986
    },
    {
        "id": "05OtIIvBQdu04bBwCX6ilZ",
        "name": "BLUECHAN",
        "followers": 9,
        "normalized_followers": 0.004230167353880854
    },
    {
        "id": "1chYqsPHsmWnU8eFFTIoM4",
        "name": "Loquence",
        "followers": 2353,
        "normalized_followers": 1.656815546936668
    },
    {
        "id": "0zs9nRedA8m8o58lbkrpkr",
        "name": "Electroboyz",
        "followers": 5422,
        "normalized_followers": 3.8205461484467245
    },
    {
        "id": "5VNmLHtaGqxmwD7Qs669UC",
        "name": "Nassun",
        "followers": 205,
        "normalized_followers": 0.1424156342473221
    },
    {
        "id": "3nBsP6ABBDVgzFFOCyL3vG",
        "name": "Rimi",
        "followers": 766,
        "normalized_followers": 0.5379362818351819
    },
    {
        "id": "5nAVhx4BgNwnPufQzMK9Uk",
        "name": "Soul Dive",
        "followers": 127,
        "normalized_followers": 0.08742345864687098
    },
    {
        "id": "1N16Nwp5OmkqLkcvuAuxqp",
        "name": "MC haNsAi",
        "followers": 255,
        "normalized_followers": 0.17766702886299587
    },
    {
        "id": "6xOvQia5dZFTIRL6FGZkA6",
        "name": "Minos In Nuol",
        "followers": 4266,
        "normalized_followers": 3.005533904932347
    },
    {
        "id": "5qGemt8SgMneJacS62LXRA",
        "name": "IndEgo Aid",
        "followers": 401,
        "normalized_followers": 0.28060110114076336
    },
    {
        "id": "6u4MVdkKAUbmzG0cEDu5dZ",
        "name": "Jazzy Ivy",
        "followers": 21,
        "normalized_followers": 0.012690502061642562
    },
    {
        "id": "0YrS5RX2trvRtltCWpLQv3",
        "name": "Wooil",
        "followers": 248,
        "normalized_followers": 0.17273183361680153
    },
    {
        "id": "4y05T755kMoJTH80G8UZ51",
        "name": "UPT",
        "followers": 65,
        "normalized_followers": 0.04371172932343549
    },
    {
        "id": "4PyCHh3hh6m4OzVcV2aj18",
        "name": "Mac Curly",
        "followers": 238,
        "normalized_followers": 0.1656815546936668
    },
    {
        "id": "0s1HHfXsuZTD6lnA5FWjGP",
        "name": "TEAM 119",
        "followers": 177,
        "normalized_followers": 0.12267485326254476
    },
    {
        "id": "3bkwMhhD3nGTu2HU4waqvd",
        "name": "Black AC",
        "followers": 99,
        "normalized_followers": 0.06768267766209367
    },
    {
        "id": "1PwYUdAPnQbvoitLo05USp",
        "name": "Young..Boyz",
        "followers": 105,
        "normalized_followers": 0.07191284501597452
    },
    {
        "id": "5e5mGDk0DqEPXYGEn6E9YW",
        "name": "CSP",
        "followers": 454,
        "normalized_followers": 0.31796757943337756
    },
    {
        "id": "6smKhbytwaxp7VwQ3QFy7v",
        "name": "51",
        "followers": 143,
        "normalized_followers": 0.0987039049238866
    },
    {
        "id": "1KQQrCQksTPPVrMUVdWbKR",
        "name": "LEE KANG",
        "followers": 435,
        "normalized_followers": 0.3045720494794215
    },
    {
        "id": "73JOTrZLsGpGLhSqtJrdG8",
        "name": "RHYME-A-",
        "followers": 946,
        "normalized_followers": 0.6648413024516077
    },
    {
        "id": "5XAPe7D5mNtkiQJgXH5L0u",
        "name": "LOLLY",
        "followers": 650,
        "normalized_followers": 0.45615304632681875
    },
    {
        "id": "2OHAKxn1x8ci6zVvD4Yzgu",
        "name": "Woopy",
        "followers": 135,
        "normalized_followers": 0.0930636817853788
    },
    {
        "id": "1XzNXEH5SKWXTvwmM1NRVg",
        "name": "Vida Loca",
        "followers": 2549,
        "normalized_followers": 1.7950010138301093
    },
    {
        "id": "7jD3GijD5IoLl50uoKUXf2",
        "name": "ANALOZIK",
        "followers": 352,
        "normalized_followers": 0.24605473441740303
    },
    {
        "id": "6p4TICRNGnIDoi22lgBbVj",
        "name": "J.slow",
        "followers": 142,
        "normalized_followers": 0.09799887703157312
    },
    {
        "id": "7joplsKhMptIcpQ2LKYAlI",
        "name": "\ud0d0\uc4f4(TOMSSON)",
        "followers": 90,
        "normalized_followers": 0.06133742663127238
    },
    {
        "id": "6iSeFA2FY9KF8eTtdNn0I8",
        "name": "Issac Squab",
        "followers": 29,
        "normalized_followers": 0.018330725200150368
    },
    {
        "id": "7uM1l5hyhiEmK2W843LVq7",
        "name": "YOONNOSUKE",
        "followers": 32,
        "normalized_followers": 0.0204458088770908
    },
    {
        "id": "58lMJJNNeqZlNrmbGd3Aw1",
        "name": "Kgvovc",
        "followers": 61,
        "normalized_followers": 0.0408916177541816
    },
    {
        "id": "1jHmcWQrgp5A7w4ZBbW3a0",
        "name": "Ashiroo",
        "followers": 244,
        "normalized_followers": 0.16991172204754765
    },
    {
        "id": "5M3UNPvFlfXDNaWIKV1qzG",
        "name": "Deep $ea",
        "followers": 7,
        "normalized_followers": 0.002820111569253903
    },
    {
        "id": "5cbPxvFC2bwxPOrxwaR0pV",
        "name": "100z",
        "followers": 3,
        "normalized_followers": 0.0
    },
    {
        "id": "6bgHdW9YFntOhVDQOVQUMS",
        "name": "VIANN x KHUNDI PANDA",
        "followers": 383,
        "normalized_followers": 0.2679105990791208
    },
    {
        "id": "5KCnIO6FaNee43VvSqhN1c",
        "name": "oooowryjn",
        "followers": 82,
        "normalized_followers": 0.05569720349276458
    },
    {
        "id": "4T5JP82QR6qhz9Nyp2avGh",
        "name": "SHARKRAMA",
        "followers": 304,
        "normalized_followers": 0.21221339558635618
    },
    {
        "id": "4w29hs7B0cH83SEeH2YAEZ",
        "name": "Yang Se Hyung X BewhY",
        "followers": 125,
        "normalized_followers": 0.08601340286224404
    },
    {
        "id": "2tLQLO1aqUX2c45auUfxGo",
        "name": "NOAH1LUV",
        "followers": 166,
        "normalized_followers": 0.11491954644709655
    },
    {
        "id": "3S5Q1e4ocu2JVdiF7OFBGi",
        "name": "Biglightbeatz",
        "followers": 184,
        "normalized_followers": 0.1276100485087391
    },
    {
        "id": "3GVsx1sdQAFPtU7kHsMGrq",
        "name": "Mild Beats",
        "followers": 3273,
        "normalized_followers": 2.3054412078650657
    },
    {
        "id": "7dy2Iukbsr1ds1cxHfSpP3",
        "name": "\uc6d0\uc36c",
        "followers": 24,
        "normalized_followers": 0.01480558573858299
    }
]

export default artists;