// const btn　btnという定数にする
//button id btnの部分
const btn = document.querySelector('#btn')


// 'click'の後無記述 無名関数
btn.addEventListener('click', () => {
 // クリックされたときの処理

 // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// #btnのなかに「ダークモードにする」がある
// #btnのなかのtextContentを書き換える
document.body.classList.toggle('dark-theme');
// もしボタンのテキストが「ダークモードにする」になっているなら
if(btn.textContent === 'ダークモードにする'){
// クリックされたときに「ライトモードにするに変更」
    btn.textContent = 'ライトモードにする';
    // そうでないなら(「ライトモードにする」と表示されているのなら)
} else {
    // クリックされたときに「ダークモードにする」に戻す
    btn.textContent = 'ダークモードにする';
}
});

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 画像をふわっと順番に表示する
// スクロールで動くようにする
// Aboutに使用する

let list = document.querySelectorAll('.images');
console.log(list);

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// 監視対象が範囲内に現れたら実行する動作

// 監視ロボットの設定 (動作の関数)
const options = {
    root: null, // ビューポート
    rootMargin: '0px', // rootのマージン（top, right, bottom, left）
    threshold: 0 // しきい値
};

// コールバック関数
function callback(entries, observer) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // 要素がビューポートに入った時の処理をここに追加
        console.log(`要素${index + 1}がビューポートに入りました。`);
  
        // アニメーションを開始
        const keyframes = {
          opacity: [0, 1],
          rotate: ['5deg', '0deg'],
          scale: [1.1, 1],
        };
  
        const options = {
          duration: 600,
          fill: 'forwards',
        };
        entry.target.animate(keyframes, options);
  
        // 一度表示されたら監視を停止
        observer.unobserve(entry.target);
      }
    });
  }
  
  // 監視するように指示(対象)
  const targets = document.querySelectorAll('.images');
  const observer = new IntersectionObserver(callback);
  
  targets.forEach((target) => {
    observer.observe(target);
  });
  
  // 以下はIntersectionObserverでの監視対象を追加
//   スクロールに対応
  list.forEach((item, index) => {
    const keyframe = {
      opacity: [0, 1],
      rotate: ['5eg', '0deg'],
      scale: [1.1, 1],
    };
  
    const options = {
      duration: 1500,
      fill: 'forwards',
      delay: index * 300,
    };
  
    observer.observe(item);
  
    // アニメーションを開始
    item.animate(keyframe, options);
  });
  

