//ifでの条件分岐

//基本構文
if(条件1) {
  処理1
}
//条件1を満たすときは、処理1を実行

//1つの条件式で、処理を2つに分ける場合
if(条件1) {
  処理1
} else {
  処理2
}
//条件1を満たすときは処理1、満たさない時は処理2を実行

//2つの条件式で処理を分ける場合
if(条件1) {
  処理1
} else if(条件2) {
  処理2
} else {
  処理3
}
//条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行

//if文の条件分岐を試してみる
let orange = 100;
let apple = 120;

if(orange < apple) {
  alert("みかんの値段がりんごより安い");
} else if (orange == apple) {
  alert("みかんとりんごが同じ値段");
} else {
  alert("みかんの値段がりんごより高い");
}

//swich文での条件分岐
switch(式) {
  case 値A:
    式が値A　の場合に実行する処理;
    break;
  case 値B:
    式が値B　の場合に実行する処理;
    break;
  case 値C:
    式が値C　の場合に実行する処理;
    break;
  default:
    式の値がいずれのcaseとも一致しない場合に実行する処理;
}

//数値の場合
switch(a) {
  case 1:
    console.log("aは1です")
    break;
  default:
    console.log("aの値は1ではありません");
}

//文字列の場合
switch(birthplace) {
  case "東京":
    console.log("出身地は東京です");
    break;
  default:
    console.log("出身地は東京以外です");
}

