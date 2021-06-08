# 始め方  
  
yarn start  
  

## Firebaseでの各ログインディレクトリについて  
  
LoginClass  
LoginReducer  
Login..  
上記で各々のディレクトリでログインを実装。ディレクトリ毎で依存はありません。
  
  
## 共通パーツと共通メソッドと変数について  
  
Componentsディレクトリは各ログインディレクトリで使われているディレクトリです。  
Components/SigninForm.js の中で使用されているメソッドと変数（handleSignIn, handleOnChange, formdata）に合わせて各ログインディレクトリでも同変数名のメソッドとして  
また config.js は Firebase のためのAPIキーなどを格納しているため共通ファイルになります。  
  
  
## ログイン手法の切り替えの方法
index.jsにて使いたい親コンポーネントだけ残しあとはコメントアウトするといった形で切り替えます  
  
  

