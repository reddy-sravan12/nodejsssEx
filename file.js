const {readFileSync,writeFileSync,readFile}=require('fs')

const first=readFileSync('./content/first.txt','utf-8')

const second=readFileSync('./content/text.txt','utf-8')


writeFileSync('./content/res.txt','im there in result',{flag:'a'})

readFile('./content/res.txt','utf-8',(err,data)=>[
    console.log(data)
])


console.log(first,second)