
buton = document.getElementById('submitbutonu');

imgname = document.getElementById('q1');
phonelabel = document.getElementById('q2');
maillabel = document.getElementById('q3');
linkedinlabel = document.getElementById('q4');
rolelabel = document.getElementById('q5');


function submit() {
    console.log('Code Executed!');
    
    let mail = maillabel.value;
    let linkedin = linkedinlabel.value;
    let phone = phonelabel.value;
    let phonestripped = phone.replace(/ /g, "")
    let wame = 'https://wa.me/90'+phonestripped+'/';
    "/sigsafe/"+imgname.value+".png"

    document.getElementById('sig-image').setAttribute("src", "/sig-safe/"+imgname.value+".png");
    document.getElementById('linkedinlink').setAttribute("href", linkedin);
    document.getElementById('maillink').setAttribute("href", 'mailto:'+mail);
    document.getElementById('phonelink').setAttribute("href", wame);

    
    let text = document.getElementById('sigtable').outerHTML

    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);


    document.body.innerHTML= text;
    alert("Ctrl+A ardından Ctrl+C yapıp kopyalayabilirsin. İmzan dogru gozukmuyorsa sayfayi yenileyip, soyismini kontrol et")
}

