let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input=document.querySelector("#url").value
    let image=document.querySelector("img")
    console.log(image);
    // let qrURL=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
    let qrURL=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
    image.src=qrURL
})