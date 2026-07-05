// ===== 設定（GASデプロイ後にgasUrlを貼る） =====
const CONFIG={gasUrl:""};

// ===== 物件データ（図面追加時はこのファイルだけ更新） =====
// unitsの形:
// {key:"棟スラッグ-部屋番号"（複数棟ページで部屋番号が重複しても衝突しないよう必ずこの形式にする）,
//  b:"棟スラッグ", bn:"棟名", room:"部屋番号", floor:階,
//  rent:賃料, kanri:管理費, plan:"間取り", area:面積, pet:true/false,
//  move:"入居時期", dep:"敷金/礼金の表示文字列", genkyo:"空き"|"空家"|"居住中"等,
//  viewing:"内見可"|"内見応相談"等（現況から機械的に決めてよい）, hasInterior:true/false,
//  note:"備考（駅名・定借情報など）"}
const units=[
];

// ===== 画像（base64） IMGS.plan_{key} / IMGS.ext_{key} =====
const IMGS={
};

// ===== 室内写真ギャラリー（あれば）INTERIOR[key] = [base64,...]。無ければ登録しない（hasInterior:falseにする） =====
const INTERIOR={
};
