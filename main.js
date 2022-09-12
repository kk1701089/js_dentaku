// 現在入力している数値を格納
let input_ing = 0;
result.value = input_ing;
// 前回入力した演算子を格納
let input_opelatar = "";


function pad_click (getResult) {

    // 入力した値を変数に格納
    let jugeValue = getResult; 
        
    // 数値だった場合
    if(isNaN(jugeValue) == false){

        // 前回演算子が押されていなかったら
        if(!input_opelatar){
            console.log('押されていないです');
            input_ing += getResult;
            result.value = input_ing;

            // 前回演算子が押されていたら
        }else{
            console.log('押されています');
            input_ing += getResult;
            result.value = input_ing;
            
            // 演算子を格納した変数を空に
            input_opelatar = "";
            console.log(input_opelatar);
        }

     // ”=”　だった場合
    } else if(jugeValue === "="){
        // 計算して結果を表示
        result.value = new Function("return " + result.value)();
        input_ing = result.value;

    // "c” だった場合
    } else if(jugeValue === "c"){
        // 全てリセット
        input_ing = 0;
        input_opelatar = "";
        result.value = input_ing;

    } else{
        console.log('+などの演算子');
        // 前回演算子が押されていなかったら
        if(!input_opelatar){
            console.log('演算子前回押されていない');
            input_ing += jugeValue;
            result.value = input_ing;
            input_opelatar = jugeValue;

        // 前回と違う演算子が押されていたら
        }else if(input_opelatar !== jugeValue){
            console.log('演算子前回とちがう');
            // 前回入力した演算子を削除
            let new_input_ing = input_ing.slice(0,-1);
            // 新しく入力した演算子で書き換え
            new_input_ing += jugeValue;
            input_ing = new_input_ing;
            result.value = input_ing;
            input_opelatar = jugeValue;
        }
    }
}