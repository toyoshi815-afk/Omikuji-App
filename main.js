'use strict'

//１、ランダムにおみくじ画像のパスを返す処理
//２、ボタンを押したらスロットが回転する処理
//３、数秒後にスロットが止まる処理

function getRandomImage(){
  const number = Math.floor(Math.random() * 7);
  const imagePath = `./images/omikuji_${number.toString()}.png`;
  return imagePath;
}
  /*　【解説】
  ・Math.random + Math.floorの組み合わせにより、0~6の数値をランダムに取り出せるようにしている。
  1~7の数値にしたい場合はMath.floor(Math.random() * 7) + 1;にする。
 ・画像フォルダ内のimageファイルのタイトルを呼び出している。imgeタイトルを0~6にしておくことで、
  Mathの数値と画像ファイルの数字を一致させている。
  ・returnでimagePathに値を返し、getRandomImageの関数を実行した際に呼び出している。*/


function playOmikuji(){
  const timer = window.setInterval(function(){
    document.querySelector('#js-result').setAttribute('src',getRandomImage());
  }, 100);

setTimeout(function(){
  clearInterval(timer);
}, 1500);

}


document.querySelector('#js-button').addEventListener('click', playOmikuji);

// document.querySelector('#js-button').addEventListener('click', () => {
//   playOmikuji()
// });
// あとで動作の仕方を試す

