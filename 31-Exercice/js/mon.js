function showCoords(evt) {
    var form = document.forms.form_coords;
    var parent_id = evt.target.parentNode.id;
    form.parentId.value = parent_id;
    form.pageXCoords.value = evt.pageX;
    form.pageYCoords.value = evt.pageY;
    form.layerXCoords.value = evt.layerX;
    form.layerYCoords.value = evt.layerY;
}
