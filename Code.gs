// 同一名のファイルを追加で作成して行く
// ( ※ 上書きの場合は、事前に削除が必要 )
function myFunction() {

  // 対象フォルダ ID の一覧を入れる配列
  var targetFolderId = [];

  // 現在のシート
  var sheet = SpreadsheetApp.getActiveSheet();

  // 最終データ量の確認( ここでは使わない )
  console.log(`最終行 : ${ sheet.getLastRow() }`);
  console.log(`最終列 : ${ sheet.getLastColumn() }`);

  var targetRange;
  var targetString = ""; 

  for(var i = 1; i<= 100; i++ ) {

    // 目的のセルの値の取得
    var targetRange = sheet.getRange('A' + i);
    var targetString = targetRange.getValue().toString();

    if ( targetString != '' ) {
      // 配列に格納( このまま処理しても良いが、他のバリエーションへのサンプルコードの為 )
      targetFolderId.push( targetString );
    }
    else {
      break;
    }
  }  

  console.log( targetFolderId );

  var folder;

  // フォルダ ID でループ
  for( var val of targetFolderId ) {

    console.log( val );
    folder = DriveApp.getFolderById(val);
    folder.createFile('New-Text-File.txt', sheet.getRange(1, 3).getValue().toString());

  }

  // forEach メソッド( ラムダ式 )
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  targetFolderId.forEach( element => 
    {
      console.log(element);
    }
  );

  // 配列添え字でループ
  for( var num in targetFolderId ) {

    console.log( targetFolderId[num] );

  }
  
}
