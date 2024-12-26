if(localStorage.getItem("not_the_first_access") == "true"){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: `${greeting()}`
    });
}else{
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "ひかりじまへのアクセスありがとうございます。"
    });
    
    localStorage.setItem("not_the_first_access","true");
};




function greeting() {
    //現在の時間を取得する
    const hour = new Date().getHours();

    //朝4時〜10時59分まで
    if(hour >= 4　&& hour < 11){
        return "おはようございます";
    //昼１１時〜1６時59分まで
    }else if(hour >=11 && hour <17){
        return "こんにちは";
    //夜18時〜3時59分まで
    }else{
        return "こんばんは";
    }
}
function test() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
    });
};