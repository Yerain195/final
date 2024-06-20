import about from about.jsx;
import dashboard from dashboard.jsx;
import home from home.jsx;
import header from header.jsx;

function main(){
    const enviarMensaje = async (chat, instruccion, config) => {
        try {
            const resultado = await chat.modelo.generateContent(instruccion, config);
            const textoRespuesta = await resultado.response.text();
            return textoRespuesta;
        } catch (error) {
            console.error('Error al enviar mensaje:', error);
            throw error;
        }
    };
    
}