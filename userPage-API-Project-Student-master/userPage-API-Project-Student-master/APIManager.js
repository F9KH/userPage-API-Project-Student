
class APIManager {
    constructor() {
        this.data = {
            Quote: {},
            Pokemon: {},
            Meat: '',
            User: [],
            Friends: [],
        };
    }

    getUser() {
        return $.get("https://randomuser.me/api/");
    }

    getQuote() {
        return $.get("https://api.kanye.rest/");
    }

    getPokemon() {
        let randomPokemon = Math.floor(Math.random() * 949);
        return $.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
    }

    getMeat() {
        return $.get("https://baconipsum.com/api/?type=all-meat&sentences=1");
    }

    getFriend() {
        return $.get("https://randomuser.me/api/?results=7");
    }

    dataForAll() {
        return this.getUser()
            .then((user) => {
                this.data.User = {
                    picture: user.results[0].picture.medium,
                    name: `${user.results[0].name.first} ${user.results[0].name.last}`,
                };
                return this.getQuote();
            })
            .then((quote) => {
                this.data.Quote = { quote: quote.quote };
                return this.getPokemon();
            })
            .then((pokemon) => {
                this.data.Pokemon = { picture: pokemon.sprites.front_default, name: pokemon.name };
                return this.getMeat();
            })
            .then((meat) => {
                this.data.Meat = { text: meat[0] };
                return this.getFriend();
            })
            .then((friends) => {
                const friendNames = friends.results.map((friend) => `${friend.name.first} ${friend.name.last}`);
                this.data.Friends = { friends: friendNames };
                console.log(this.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
}
