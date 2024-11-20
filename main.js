document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const carrera = document.getElementById('carrera').value;
    const codigo = document.getElementById('codigo').value;

    const tableBody = document.getElementById('attendance-table-body');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${direccion}</td>
        <td>${carrera}</td>
        <td>${codigo}</td>
    `;

    tableBody.appendChild(newRow);

    // Limpiar el formulario
    document.getElementById('attendance-form').reset();
});
