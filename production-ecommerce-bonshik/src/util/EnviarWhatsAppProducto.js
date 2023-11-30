export default function EnviarWhatsAppProducto(producto) {
  const urlProducto = `http://localhost:3001/producto/${producto.UrlProducto}`;
  let saltoLinea = "%0D%0A";
  const numeroCelular = "3186094667";
  const textoMensaje = `Hola Bonshik, quiero comprar: ${saltoLinea} ${saltoLinea}-${producto.Nombre} a S/. ${producto.Precio}.00 ${saltoLinea} ${saltoLinea} ${urlProducto} `;
  const wspLink = `https://api.whatsapp.com/send/?phone=57${numeroCelular}&text=${textoMensaje}&app_absent=0`;
  window.open(wspLink, "_blank");
}
