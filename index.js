const data=require("file_search_simple");
const prompt=require("prompt-sync")({sigint: true});

let input=prompt('Enter data to search, or press [CTRL+C] to exit: ');
data.read('./test.txt',input);