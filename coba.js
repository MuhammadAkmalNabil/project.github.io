function klik(){
    // var
    // let
    // const
    var harga = document.getElementById("harga").value;
    var jumlah = document.getElementById("jumlah").value;
    var diskon = document.getElementById("diskon").value;
    var hasil  = harga * jumlah;
    var hargaDiskon = hasil * (diskon/100);
    var hargaTotal = hasil - hargaDiskon;

    if(diskon <= 10){
        alert("Oke Bang")
    }
    else if(diskon <= 50){
        alert("Mantap")
    }
    else if(diskon <= 90){
        alert("Uang anda unlimited")
    }
    else{
        alert("error")
    }

document.getElementById("total").value = hargaTotal;

}