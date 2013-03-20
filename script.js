var lastId = 0;
function getItemList() {
    return [
        ['Butter', 1, 1],
        ['Eier', 2, 1],
        ['Milch', 3, 1]
    ];
}
var itemList = getItemList();

function renderItemList() {
    $('#items').html('');
    $('#done').html('');
    for (var i = 0; i < itemList.length; i++) {
        var item = itemList[i];
        $(item[2] ? '#items' : '#done').append(createItem(item));
        if (item[1] >= lastId)lastId = item[1];
    }
}


function createItem(itemData) {
    var item = $('<span></span>');
    item.addClass(itemData[2] ? 'active' : 'inactive').attr('id', '' + itemData[1]).html(itemData[0]).touchhold(null,editItem);
    if (itemData[2]) {
        var checkBtn = $('<b>x</b>');
        checkBtn.addClass('check').click(setItemDone);
        item.append(checkBtn);
    }
    return item;
}

$('#addBtn').click(function () {
    $('#addBtn').hide();
    var input = $('<input type="text" />').change(addNewItem);
    $('#add').html(input);
    input.focus().blur(function () {
        $('#add').html('');
        $('#addBtn').show();
    });

})
function addNewItem(e) {
    $('#addBtn').show();
    $('#add').html("");
    itemList.push([e.target.value, ++lastId, 1]);
    renderItemList();
}
function editItem(e) {
    var self = $(e.target);
     var input = $('<input type="text" />')
        .val(findItembyId(self.attr('id'))[0])
        .change(function (e) {
            if (e.target.value != ''){
             findItembyId(self.attr('id'))[0] = e.target.value
            renderItemList();
            }
             else {
                self.show();
                $(e.target).remove();
            }
        })
        .blur(function (e) {
            self.show();
            $(e.target).remove();
        });

    self.hide().after(input);
    input.focus();
}
function setItemDone(e) {
    var item = $(e.target).parent();
    findItembyId(item.attr('id'))[2]=0;
     renderItemList();
}
renderItemList();

function findItembyId(id) {
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i][1] == id) return itemList[i];
    }
    return null;
}

function sendData(data,callback){


}
function dataModel(updateCallBack){
    var updateCallBack = updateCallBack;
    var dataBuffer="";
    function addData(){



    }

    function update(){



    }



}