var newName;
getFactories();

$(document).on("click", "button.changeAmt", update);
function update() {
    var currentFactory = $(this)
        .parent()
    $(currentFactory).text("");
    currentFactory.append('<label>');
    currentFactory.attr("for", "updateFactory");
    currentFactory.text("What is the new Name?");
    currentFactory.addClass("updateBills");
    currentFactory.append("<br>");
    currentFactory.append("<input name='updateFactory' id='newFactoryAmt' type='text'></input>");
    currentFactory.append("<br>");
    var submitButton = $('<button>');
    submitButton.addClass('updateSubmit');
    submitButton.text('Change Name');
    currentFactory.append(submitButton);
}

$(document).on('click', 'button.updateSubmit', ajaxPut);
$(document).on('click', 'button.deleteButton', ajaxDel);

function ajaxDel() {
    var id = $(this)
        .parent()
        .parent().attr('data-id')
    console.log(id);
    delAjax(id);
}

function ajaxPut() {
    var id = $(this)
        .parent()
        .parent().attr('data-id')

    newName = $("#newFactoryAmt").val()
    if (newName == "" ) {
        $("#amount").append("<br> Must be filled out with a name");
    } else {
        updateAjax(newName, id);
    }

}

function updateAjax(newName, id) {
    $.ajax({
        method: "PUT",
        url: "/updateFactory",
        data: {
            "facName": newName,
            "id": id
        }
    }).then(function (result) {
        location.reload();
    })
}

function delAjax(id) {
    $.ajax({
        method: "DELETE",
        url: "/deleteFactory",
        data: {
            "id": id
        }
    }).then(function (deleted) {
        location.reload();
    })
}

function getFactories() {
    $.get('/getFactory', getFactoryList);
    
};

function getFactoryList(data) {
    
    for (var i = 0; i < data.length; i++) {

        $('#dynamicFactories').append(
            `<div class ="factories" data-id='${data[i].id}'>
            <p class='facName'>Factory Name: ${data[i].facName} </p>
            <p class='empty1'></p> 
            <p class='empty2'></p> 
            </br>
            </div>
        `);
    }
    var updateButton = $("<button>");
    updateButton.text("Update Factory");
    updateButton.addClass(`changeAmt`)
    $(".empty1").append(updateButton);
    var deleteButton = $("<button>");
    deleteButton.text("Delete this Factory");
    deleteButton.addClass('deleteButton');
    $('.empty2').append(deleteButton);
}


function randomNum(lowerLim, upperLim) {
  min = Math.ceil(lowerLim);
  max = Math.floor(lowerLim);
  return Math.floor(Math.random() * (max - min)) + min
}


function validateForm() {
    var numChildren = document.forms["newFactory"]["numChildren"].value;
    var upLim = document.forms["newFactory"]["upLim"].value;
    var lowLim = document.forms["newFactory"]["lowLim"].value;
    var stuff = $(".text").val();
    var reg = new RegExp(/<[^>]*>/g);
    if (numChildren == "" || isNaN(numChildren || numChildren > 15)) {
        $("#numChildrenLabel").append("<br>Must be filled out and must be a number less than 15")
        return false;
    }
    if (upLim == "" || isNaN(upLim)) {
        $("#upLimLabel").append("<br>Must be a number");
        return false;
    }

    if (lowLim == "" || isNaN(lowLim)) {
        $("#lowLimLabel").append("<br>Must be a number");
        return false;
    }

    if (reg.test(stuff)) {
        $("#newFactory").prepend("Must not contain any special characters <br>")
        return false;
    }


}