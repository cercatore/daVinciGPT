import { OpenAi} from 'openai'
import dotenv from 'dotenv'
dotenv.config();


const openai = new OpenAi(
    {apikey:process.env.OPENAI_APIKEY});

async function simulate_genai( prompt){
    /*
    *   simulate a call to genai 
    *   args: user prompt(str) : the prompt to analyze.
    *  
    *   returns:list
    *   a list to linked products
    * *****************************************/
    const response = openai.completions.create({
        model:'gpt-4o',
        prompt:prompt,
        max_tokens:4096,
        stop:'\n',
        temperature:0.7   // gemini response for topic: in the quesy i am specified findign searching products

    })

    let content = response.choices[0]

    return {
        products_links:[]
    }
}


export default simulate_genai;