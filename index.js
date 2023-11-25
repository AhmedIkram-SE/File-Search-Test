const data=require("file_search_simple"); //Importing the exported module
const prompt=require("prompt-sync")({sigint: true}); //Fot taking user input

//You Can take input from user, it depends upon the way data is stored in file being searched
let input=prompt('Enter data to search, or press [CTRL+C] to exit: ');
data.read('./test.txt',input);