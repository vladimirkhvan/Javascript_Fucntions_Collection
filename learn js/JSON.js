// JSON

let user = {
    name: "Василий Иванович",
    age: 35
};

jsonString = JSON.stringify(user);
initUser = JSON.parse(jsonString);

//

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    if(key != "null" && value == "meetup"){
        return undefined;
    }
    return value;
}));