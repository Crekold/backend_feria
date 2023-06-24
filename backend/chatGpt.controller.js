import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const createOpenAIInstance = async () => {
  const conf = new Configuration({
    apiKey: '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',
  });

  return new OpenAIApi(conf);
};

const askToChatGpt = async (req, res) => {
  const message = req.query.message; // Obtener el mensaje de la consulta GET

  /**
   * 1. Crear/configurar instancia de OpenAI
   */
  const openAIInstance = await createOpenAIInstance();

  /**
   * 2. Conversación con chatGPT
   */
  try {
    const response = await openAIInstance.createCompletion({
      model: "text-davinci-003",
     // prompt: 'Es un juego de roleplay, quiero que respondas  al mensaje como don quijote, solo responde al mensaje si este esta relacionado con preguntas sobre redaccion o escritura, sino di que "mi mision es ayudar a aprender a escribir, no puedo ayudarte con eso" aparte quiero que respondas preguntas sobre el libro de don quijote de la mancha, no respondas con preguntas, mensaje: '+message, // Utilizar el mensaje de la consulta GET como prompt
      prompt: 'Eres un asistente virtual de USEI. Ayuda a los estudiantes a navegar en la página web de USEI, guiándolos a través de las secciones de instituciones, charlas, y contacto. No proporciones nombres de instituciones o detalles específicos. Mantén las respuestas breves, menos de 30 palabras. Inicia con un saludo único y haz que las interacciones sean lo más humanas posible. Si la solicitud no está dentro de tus instrucciones, sugiere contactar a un asistente humano. No menciones que esto es un juego de roleplay, mensaje: '+message, // Utilizar el mensaje de la consulta GET como prompt

      temperature: 1,
      max_tokens: 3000,
    });

    const repliedMessage = response.data.choices[0].text;
    res.send({ from: "chatGpt", data: repliedMessage });
  } catch (error) {
    // Reportar error
    console.log("Error", error);
    res.status(500).send("Error al procesar la solicitud");
  }
};

export default { askToChatGpt };
