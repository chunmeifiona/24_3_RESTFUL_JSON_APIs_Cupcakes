const BASE_URL = "http://127.0.0.1:5000"

function generateCupcakeHTML(cupcake) {
    return `
    <div class="list-group-item col-3 p-1" data-cupcake-id = ${cupcake.id}>
        <p>${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}</p>
        <img class="cupcake-image img-fluid" src=${cupcake.image}>
    </div>
    `
}

async function showCupcakes() {
    const res = await axios.get(`${BASE_URL}/api/cupcakes`)

    for (let cupcake of res.data.cupcakes) {
        console.log(cupcake.flavor)
        let cupcakeHTML = generateCupcakeHTML(cupcake)
        $("#cupcakes-list").append(cupcakeHTML)
    }
}
$('#cupcake-form').on("submit", async function (e) {
    e.preventDefault()

    let flavor = $("#flavor").val()
    let size = $("#size").val()
    let rating = $("#rating").val()
    let image = $("#image").val()

    const res = await axios.post(`${BASE_URL}/api/cupcakes`, { flavor, size, rating, image })
    console.log(res.data.cupcake)//data.cupcake
    let newCupcakeHTML = generateCupcakeHTML(res.data.cupcake)
    $("#cupcakes-list").append(newCupcakeHTML)
    $("#cupcake-form").trigger('reset')
})



showCupcakes()
