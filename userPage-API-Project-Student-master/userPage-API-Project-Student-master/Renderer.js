    class Renderer {
        renderAll(data){
            renderer.renderQuote(data.Quote)
            renderer.renderPokemon(data.Pokemon)
            renderer.renderMeat(data.Meat)
            renderer.renderUser(data.User)
            renderer.renderFriends(data.Friends)

        }

        renderMeat(meat){
            $(".meat-container").empty()
            const source = $("#meat-template").html()
            const template = Handlebars.compile(source)
            let newHTML = template(meat)
            $(".meat-container").append(newHTML)
        }


        renderQuote(quote){
            $(".quote-container").empty()
            const source = $("#quote-template").html()
            const template = Handlebars.compile(source)
            let newHTML = template(quote)
            $(".quote-container").append(newHTML)
        }

        renderUser(user){
            $(".user-container").empty()
            const source = $("#user-template").html()
            const template = Handlebars.compile(source)
            let newHTML = template(user)
            $(".user-container").append(newHTML)
        }
        renderFriends(friends){
            $(".friends-container").empty()
            const source = $("#friends-template").html()
            const template = Handlebars.compile(source)
            let newHTML = template(friends)
            $(".friends-container").append(newHTML)
        }

        renderPokemon(pokemon){
            $(".pokemon-container").empty()
            const source = $("#pokemon-template").html()
            const template = Handlebars.compile(source)
            let newHTML = template(pokemon)
            $(".pokemon-container").append(newHTML)
       }

    }