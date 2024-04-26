document.addEventListener('keydown',event =>{
    // let keys = event.key;
    //     alert(`${keys}`+'が押されました')
});

// 変数Qの作成 
let Q = ["apple","banana","melon","mango","strawberry","blueberry","orange"];//問題文
// 変数Q_Noの作成 (Math.floor小数点の切り捨て)(Math.random乱数作成)(Q.lengthの長さ分作成)
// lengthは (文字列 文字数)(数字 桁数)(リスト 中身の個数) 
let Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する

// let Q_i 中身は0
let Q_i = 0;//回答初期値・現在単語どこまで合っているか判定している文字番号
// let Q_l [Qのランダムリストデータ] length 単語の文字数取得
let Q_l = Q[Q_No].length;//計算用の文字の長さ
// Q_i - Q_l で正答確認 

// キーが押されている時関数'push_keydown'を実行
window.addEventListener('keydown',push_Keydown);
// push_Keydown 押したキーで変化
function push_Keydown(event){

    let keyCode = event.key;
    if (Q_l == Q_l-Q_i){

    document.getElementById('start').innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す
}
// charAt(呼び出す変数を指定)　呼び出したキーが正しいなら正解数に+1しinnerHTML書き換えてリストから問題を書き出す

if (Q[Q_No].charAt(Q_i) == keyCode) { //押したキーが合っていたら

    Q_i++; //判定する文章に１足す
    document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //問題を書き出す

    if (Q_l-Q_i === 0){ //全部正解したら


        Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する
        Q_i = 0;//回答初期値・現在どこまで合っているか判定している文字番号
        Q_l = Q[Q_No].length;//計算用の文字の長さ
}}}

    let keyCode = event.key;
// innerHTMLで押したキーに書き換え
    document.getElementById('push').innerHTML = keyCode + 'を押しました';
    document.getElementById('start').innerHTML = Q[Q_No];


