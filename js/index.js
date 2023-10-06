let contador = 1;

function crearPedido() {
    const nombre = document.getElementById('nombre').value;
    const costo = document.getElementById('costo').value;
    
    const divContenedor = document.getElementById("contenedor");

    const divTarjeta = document.createElement("div");
    divTarjeta.setAttribute("class","tarjeta")

    const hPedido = document.createElement("h2");
    const pPizza = document.createElement("p");
    const pCosto = document.createElement("p");
    hPedido.textContent = "Pedido #" + contador;
    pPizza.textContent = "Nombre de pizza: " + nombre;
    pCosto.textContent = "Costo: $" + costo;

    divTarjeta.appendChild(hPedido);
    divTarjeta.appendChild(pPizza);
    divTarjeta.appendChild(pCosto);
    divContenedor.appendChild(divTarjeta);

    contador++;
}