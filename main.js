let img=document.getElementById("image")
let head=document.getElementById("head")



let toss=new Promise((resolve,reject)=>{

    let rand=Math.floor(Math.random()*2)


    if(rand==0){
        resolve()
        img.innerHTML=`<img src=tail.jpg>`
        head.innerHTML=`TAIL`
       
    }

    else{
        reject()
        img.innerHTML=`<img src=head.jpg>`
        head.innerHTML=`HEAD`

    }
    
})


async function result(toss) {
    try{
        let res=await resolve(`tail`)
        console.log(res)
    }

    catch{
        let rej=await reject(`tail`)
        console.log(rej)
    }
    
}

result()
