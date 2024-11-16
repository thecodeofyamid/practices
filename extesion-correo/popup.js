// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const templates = {
      template1: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #1e3d8f; padding: 15px; border-radius: 5px;">
            <img src="http://egakat.com/wp-content/uploads/2019/12/Logo_egakat-1.png" alt="EGA-KAT" style="width: 150px; margin-bottom: 10px;">
          </div>
          <div style="border-left: 4px solid #ff3333; padding-left: 15px; margin: 20px 0;">
            <div style="color: #333; line-height: 1.6;">
              {{CONTENIDO}}
            </div>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #1e3d8f; color: #666;">
            Saludos cordiales,<br>
            <strong style="color: #1e3d8f;">{{NOMBRE}}</strong><br>
            <span style="color: #ff3333;">{{CARGO}}</span><br>
            <small style="color: #666;">MÉXICO • COLOMBIA • CHILE • PERÚ • USA</small>
          </div>
        </div>
      `,
      template2: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 25px;">
          <div style="background: linear-gradient(to right, #1e3d8f, #ff3333); padding: 20px; border-radius: 10px;">
            <img src="http://egakat.com/wp-content/uploads/2019/12/Logo_egakat-1.png" alt="EGA-KAT" style="width: 150px;">
          </div>
          <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <div style="color: #3c4043; line-height: 1.7;">
              {{CONTENIDO}}
            </div>
          </div>
          <div style="margin-top: 25px; padding-top: 20px; text-align: right;">
            <strong style="color: #1e3d8f;">{{NOMBRE}}</strong><br>
            <span style="color: #ff3333;">{{CARGO}}</span><br>
            <small style="color: #666;">Soluciones Logísticas Integrales</small>
          </div>
        </div>
      `,
      template3: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 15px; background-color: #1e3d8f;">
                <img src="http://egakat.com/wp-content/uploads/2019/12/Logo_egakat-1.png" alt="EGA-KAT" style="width: 150px;">
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 15px;">
                <div style="color: #333; line-height: 1.5; font-size: 16px;">
                  {{CONTENIDO}}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 15px; background-color: #f8f9fa;">
                <div style="border-left: 3px solid #ff3333; padding-left: 10px;">
                  <strong style="color: #1e3d8f;">{{NOMBRE}}</strong><br>
                  <span style="color: #ff3333;">{{CARGO}}</span><br>
                  <small style="color: #666;">Transporte • Almacenamiento • Operaciones</small>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `
    };
  
    document.querySelectorAll('.template-btn').forEach(button => {
      button.addEventListener('click', function() {
        console.log('Botón clickeado:', button.id);
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          if (tabs[0] && tabs[0].url.includes('mail.google.com')) {
            console.log('Enviando template a Gmail tab');
            chrome.tabs.sendMessage(tabs[0].id, {
              template: templates[button.id]
            });
          } else {
            console.log('No se encontró una pestaña de Gmail activa');
            alert('Por favor, abre Gmail y crea un nuevo correo primero');
          }
        });
      });
    });
  });