# 版画風画像加工処理LINEBOT 
AWS Lambdaを使ったサーバレス画像加工LINEBOT。 ユーザがこのBOTに画像を送信すると版画風に加工処理された画像を返信する。
※ 現在はLINE BOT APIのトライアル版終了に伴って公開中止。

## 処理の流れ
1. ユーザがLINE BOTにメッセージ(画像）を送信
1. LINEプラットフォームが登録したLINE BOT Serverにコールバック
1. LINE BOT Serverがメッセージを受信
1. 取得した画像をGraphic Magicモジュールで版画風に加工
1. 加工後の写真とサムネイルをAmazon S3に保存
1. Amazon S3の保存先URLを使ってユーザにメッセージ(画像)送信

## デモ
<img src="https://qiita-image-store.s3.amazonaws.com/0/96413/1d5ecb7d-ab6d-c17b-bd5b-14fac9d6b314.png" width=320>

## Qiita
- [LINE BOT APIを使ってAWS Lambdaでサーバレスな版画風写真加工BOTを作る(Node.js)](http://qiita.com/akihito_nagai/items/f284ef495da380f368cc)
