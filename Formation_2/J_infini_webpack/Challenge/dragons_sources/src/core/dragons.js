const dragons = {
    names: [
        { id: 1, name: "Apalala", element : "fire" },
        { id: 2, name: "Balaur", element : "water" },
        { id: 3, name: "Bolla" },
        { id: 4, name: "Drogon", elemnt : "fire" },
        { id: 5, name: "Katla" },
        { id: 6, name: "Saphira" },
        { id: 7, name: "Thorn", elemnt : "water" },
        { id: 8, name: "Tiamat", elemnt : "water" },
        { id: 9, name: "Viserion", elemnt : "fire" },
        { id: 10, name: "Y Ddraig Goch", elemnt : "fire" },
        { id: 11, name: "Yinglong", elemnt : "water" },
        { id: 12, name: "Zmey Gorynych", elemnt : "fire" },
        { id: 13, name: "Zirnitra", elemnt : "water" },
        { id: 14, name: "Zmey", elemnt : "fire" },
        { id: 15, name: "Zilant", elemnt : "water" },
        { id: 16, name: "Zmeu", elemnt : "fire" },
        { id: 17, name: "Wyvern", elemnt : "water" },
        { id: 18, name: "Vritra", elemnt : "fire" },
        { id: 19, name: "Vrtra", elemnt : "water" },
        { id: 20, name: "Vouivre", elemnt : "fire" },

    ],
    count: 3,
}

const relationships =  [
    { id: 1, relations : [2, 3] },
    { id: 2, relations : [1] },
    { id: 3, relations : [1, 2, 7] },
    { id: 4, relations : [2, 6] },
    { id: 5, relations : [2,3,4,5] },
    { id: 6, relations : [1, 2, 3, 17, 5, 6, 15] },
    { id: 7, relations : [1, 2, 3, 13, 14, 19, 17] },


]

const forces =  [
    { id: 1, notes : [12, 13, 19, 11] },
    { id: 2, notes : [11, 15, 17, 9] },
    { id: 3, notes : [20, 11, 12, 7] },
    { id: 4, notes : [18, 12, 10, 17] },
    { id: 5, notes : [11, 11, 9, 5] },
    { id: 6, notes : [13, 10, 9, 15] },
    { id: 7, notes : [11, 10, 19, 15] },
    { id: 8, notes : [12, 13, 19, 11] },
    { id: 9, notes : [11, 15, 17, 9] },
    { id: 10, notes : [20, 11, 12, 7] },
    { id: 11, notes : [18, 12, 10, 17] },
    { id: 12, notes : [11, 11, 9, 5] },
    { id: 13, notes : [13, 10, 9, 15] },
    { id: 14, notes : [11, 10, 19, 15] },
    { id: 15, notes : [12, 13, 19, 11] },
    { id: 16, notes : [11, 15, 17, 9] },
    { id: 17, notes : [20, 11, 12, 7] },
    { id: 18, notes : [18, 12, 10, 17] },
    { id: 19, notes : [11, 11, 9, 5] },
    { id: 20, notes : [13, 10, 9, 15] }

]

export { dragons, relationships, forces };