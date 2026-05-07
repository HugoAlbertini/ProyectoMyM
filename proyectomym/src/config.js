// Configuración centralizada de M&M by Ecléctica
// Cambiar estos valores para actualizar toda la web automáticamente

export const WHATSAPP_NUMBER = '5493791234567'; // Reemplazar con el número real
export const WHATSAPP_MESSAGE = 'Hola! Me interesa consultar por un evento';

export const CONTACT_INFO = {
  phone: '+54 9 379 123-4567',        // Reemplazar con el real
  email: 'contacto@mymeventos.com',    // Reemplazar con el real
  instagram: 'https://www.instagram.com/', // Reemplazar con el real
  facebook: 'https://www.facebook.com/',   // Reemplazar con el real
};

export const getWhatsAppUrl = (customMessage) => {
  const msg = customMessage || WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
