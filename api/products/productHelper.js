import { OpenAi} from 'openai'


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAi({api_key:OPENAI_API_KEY});

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