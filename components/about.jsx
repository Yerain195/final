import about from about.jsx;

const boton = async (params) => {
    try {
        const genAI = new GoogleGenerativeAI();
        const modelo = genAI.getGenerativeModel({ model: });
        return { modelo, params };
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
};