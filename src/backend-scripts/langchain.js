const { OpenAI } = require("langchain/llms/openai");
require('dotenv').config();
const { PromptTemplate } = require("langchain/prompts");

const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

async function testPrompt(){ 
  const res = await prompt.format({ product: "colorful socks" });
  console.log(res);
}
module.exports = {
  testPrompt,
}
