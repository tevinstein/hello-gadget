function showEditData(id) {
    let smartid = $.url().param('id');
    $.ajax({
        url: `http://localhost:3000/api/smartphones/id/${smartid}`,
        method: "get",
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            console.log(data)

            $('input[name="name"]').val(data.name)
            $('input[name="image"]').val(data.image)
            $('input[name="os"]').val(data.os)
            $('input[name="internalMemory"]').val(data.internalMemory)
            $('input[name="externalMemory"]').val(data.externalMemory)
            $('input[name="ram"]').val(data.ram)
            $('input[name="camera"]').val(data.camera)
            $('input[name="price"]').val(data.price)
            $('input[name="vendor"]').val(data.vendor)
            $('#smartphone-image').replaceWith(`<div id="smartphone-image" class="circle-avatar" style="background-image:url(${data.image})"></div>`)

            var temp = $("input[name='answerId']").val()
            if ( typeof temp != "undefined") {
                $("input[name='id']").replaceWith(`<input type='hidden' name='answerId' value='${data._id}'>`)
            }
            else {
                $("#add-smartphone-form").append(`<input type='hidden' class='form-control' name='id' value='${data._id}'>`)
            }
        }
    })
}

$(document).on('click', 'button[id="add-smartphone-button"]', function(e) {
    e.preventDefault()
    let id = $.url().param('id');
    $.ajax({
        url: `http://localhost:3000/api/smartphones/${id}`,
        method: "put",
        contentType: 'application/x-www-form-urlencoded',
        data: {
            name : $('input[name="name"]').val(),
            os : $('input[name="os"]').val(),
            ram : $('input[name="ram"]').val(),
            internalMemory : $('input[name="internalMemory"]').val(),
            externalMemory : $('input[name="externalMemory"]').val(),
            camera : $('input[name="camera"]').val(),
            price : $('input[name="price"]').val(),
            vendor : $('input[name="vendor"]').val(),
            image : $('input[name="image"]').val()
        },
        success: function (data) {
            console.log(data)
            let html = `
                        <div class="smarthphone-details">
                        <h1 id="title">${data.name}</h1>
                        <button class="btn btn-md btn-warning" data-toggle="modal" data-target="#editData" onclick="showEditData(this)"><span class="fa fa-pencil"></span> Edit</button>
                        <button class="btn btn-md btn-danger delete" onclick="deleteData('${data._id}')" id="button-delete"><span class="fa fa-trash"></span> Delete</button>
                        <div style="margin-top: 10px;">
                            <div class="col-md-6 col-md-offset-3">
                                <div id="smartphone-image" class="circle-avatar" style="background-image:url(${data.image})"></div>
                                <div>
                                    <h2>Specifications</h2>
                                    <h4 id="smartphone-os">OS: ${data.os}</h4>
                                    <h4 id="smartphone-internal-memory">internalMemory: ${data.internalMemory}</h4>
                                    <h4 id="smartphone-external-memory">externalMemory: ${data.externalMemory}</h4>
                                    <h4 id="smartphone-ram">ram: ${data.ram}</h4>
                                    <h4 id="smartphone-camera">camera: ${data.camera}</h4>
                                    <hr>
                                    <h2 id="smartphone-price">price: ${data.price}</h2>
                                    <h4 id="smartphone-vendor">vendor: ${data.vendor}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                                `
            $(`.smarthphone-details`).replaceWith(html)
            $('input[name="name"]').val(""),
            $('input[name="os"]').val(""),
            $('input[name="ram"]').val(""),
            $('input[name="internalMemory"]').val(""),
            $('input[name="externalMemory"]').val(""),
            $('input[name="camera"]').val(""),
            $('input[name="price"]').val(""),
            $('input[name="vendor"]').val(""),
            $('input[name="image"]').val("")

            $('#editData').modal('hide');
        }
    })
});
