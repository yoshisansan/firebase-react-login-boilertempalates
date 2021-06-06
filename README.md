# 始め方  
yarn start  
  
## Firebaseでの各ログインテンプレートについて  
  
FirebaseClass  
FirebaseReducer  
Firebase..  
上記はそれぞれがログイン手法となっており分離されていてお互いに依存関係にありません。  
  
  
親コンポーネントに関しては appClass.js（もしくはその子SignInClass.js） は FirebaseClass と ○○Class が共通の名前として関連ファイルであることを示しています。他の親コンポーネントにしても同様。
  
## 共通パーツと共通メソッドと変数について  
Components/SigninForm.js は各ログインテンプレートで共通で使用されています。  
Components/SigninForm.js の中で使用されているメソッドと変数（handleSignIn, handleOnChange, formdata）は各ログインテンプレートで同じ変数名として格納して渡すようにしています。  
また config.js は Firebase のためのAPIキーなどを格納しているため共通ファイルになります。
  
## ログインテンプレートの切り替えの方法
  
index.jsにて使いたい親コンポーネントだけ残しあとはコメントアウトするといった形で切り替えます  
  
