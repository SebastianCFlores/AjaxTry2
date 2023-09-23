$(document).ready(function() {
    $("#obtenerChiste").on("click", function() {
        $.ajax({
            type: 'GET',
            url: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit',
            success: function(data) {
                let chiste = "";
                if (data.type === "single") {
                    chiste = data.joke;
                } else {
                    chiste = data.setup + "<br>" + data.delivery;
                }

                $("#chiste").html(chiste);
            },
            error: function() {
                $("#chiste").html("Error al obtener el chiste.");
            }
        });
    });
});

$("#obtenerPokemon").on("click", function() {
    let nombrePokemon = $("#pokemonNombre").val().toLowerCase(); // Converción a minúsculas porque la API acepta en minusculas.

    if (nombrePokemon) {
        $.ajax({
            type: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
            success: function(data) {
                let infoPokemon = `
                    Nombre: ${data.name} <br>
                    Tipo: ${data.types[0].type.name} <br>
                    Altura: ${data.height / 10} m <br>
                    Peso: ${data.weight / 10} kg
                `;
                $("#infoPokemon").html(infoPokemon);
            },
            error: function() {
                $("#infoPokemon").html("<span class='placeholder-text'>Error al obtener la información del Pokemón. Asegúrese de escribir el nombre correctamente en minusculas.</span>");
            }
        });
    } else {
        $("#infoPokemon").html("Por favor, ingresa el nombre de un Pokemón.");
    }
});