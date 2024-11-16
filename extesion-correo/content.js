// content.js
console.log('Content script loaded for EGA-KAT template extension');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Mensaje recibido en content.js:', request);
  
  if (request.template) {
    openNewEmailAndInsertTemplate(request.template);
  }
});

function openNewEmailAndInsertTemplate(template) {
  // Buscar el botón "Redactar" o "Compose"
  const composeButtons = [
    document.querySelector('div[role="button"][gh="cm"]'),
    document.querySelector('div[jslog*="compose"]'),
    document.querySelector('div.T-I.T-I-KE.L3')
  ].filter(Boolean);

  const composeButton = composeButtons[0];

  if (composeButton) {
    // Hacer clic en el botón "Redactar"
    composeButton.click();
    
    // Esperar a que se abra la ventana de composición
    setTimeout(() => {
      insertTemplate(template);
    }, 1000);
  } else {
    console.error('No se encontró el botón de redactar');
    alert('Error: No se pudo encontrar el botón de redactar');
  }
}

function insertTemplate(template) {
  // Intentar múltiples selectores que Gmail puede usar
  const possibleSelectors = [
    'div[role="textbox"][aria-label*="Cuerpo del mensaje"]',
    'div[role="textbox"][aria-label*="Message Body"]',
    'div[role="textbox"][contenteditable="true"]',
    'div[aria-label*="Message Body"]',
    'div[g_editable="true"]'
  ];
  
  console.log('Buscando el editor de Gmail...');
  
  let maxAttempts = 10;
  let currentAttempt = 0;
  
  const findAndInsert = () => {
    let composerElement = null;
    for (let selector of possibleSelectors) {
      composerElement = document.querySelector(selector);
      if (composerElement) {
        console.log('Editor encontrado usando selector:', selector);
        break;
      }
    }

    if (composerElement) {
      console.log('Insertando template en el editor');
      const formattedTemplate = template
        .replace('{{CONTENIDO}}', 'Tu contenido aquí...')
        .replace('{{NOMBRE}}', 'Tu Nombre')
        .replace('{{CARGO}}', 'Tu Cargo');
      
      composerElement.innerHTML = '';
      composerElement.insertAdjacentHTML('beforeend', formattedTemplate);
      
      const inputEvent = new Event('input', {
        bubbles: true,
        cancelable: true,
      });
      composerElement.dispatchEvent(inputEvent);
      
      console.log('Template insertado exitosamente');
    } else if (currentAttempt < maxAttempts) {
      currentAttempt++;
      setTimeout(findAndInsert, 500);
    } else {
      console.error('No se pudo encontrar el editor después de múltiples intentos');
      alert('Error: No se pudo insertar la plantilla');
    }
  };

  findAndInsert();
}
