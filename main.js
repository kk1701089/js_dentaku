// 現在入力している数値を格納
let input_ing = "";
// 入力している数値と演算子をくっつけた数値
let input_total = 0;
// 前回入力した演算子を格納
let input_opelatar = "";

function pad_click (getResult) {
    // 入力した値を変数に格納
    let jugeValue = getResult; 

    // 数値だった場合
    if(isNaN(jugeValue) == false){

        // 前回演算子が押されていなかったら
        if(!input_opelatar){
            // console.log('押されていないです');
            input_ing += getResult;
            result.value = input_ing;

            // 前回演算子が押されていたら
        }else{
            // console.log('押されています');
            // 
            calculation = input_total + input_ing + input_opelatar;

            input_total = eval(calculation);
            result.value = input_total;
        }

     // ”=”　だった場合
    } else if(jugeValue === "="){
        console.log('=');
    } else if(jugeValue === "c"){
        console.log('c');
    } else{
        console.log('+などの演算子');
        // 今回入力された演算子で前回入力した演算子を上書き
        input_opelatar = jugeValue;
    }
}


