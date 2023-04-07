const { OpenAI } = require("langchain/llms");
require('dotenv').config()

const res = await model.call(
    "What would be a good company name a company that makes colorful socks?"
  );
  console.log(res);
