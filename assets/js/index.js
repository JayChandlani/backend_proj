

$('#update-but').submit(e => {
    e.preventDefault();
    const array = $('#update-but').serializeArray();
    const data = {}
    array.map(obj => data[obj.name] = obj.value);
    var req = {
        'url': `/api/users/${data.id}`,
        'method': 'PUT',
        'data': data
    }
    $.ajax(req).done(res => {
        alert('Data Updated');
        location.replace('/')
    })


});

if (window.location.pathname == '/') {
    const onedelete = $('.table tbody td a.delete')
    onedelete.click(function () {
        let id = $(this).attr('data-id');
        var req = {
            'url': `/api/users/${id}`,
            'method': 'DELETE'
        }
        $.ajax(req).done(res => {
            alert('Data Deleted');
            location.reload()
        })

    })
}