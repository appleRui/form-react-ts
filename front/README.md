# Form-react-ts
ReactとTypeScriptを使用したフォーム

React・TypeScriptの学習のためテックピット教材を基に作成

## 設計
### 基本項目
- 基本情報
- 住所
- 学歴
- 職歴


### ディレクトリ構成
```
.
├── components
├── domain
│   ├── entity
│   └── services
└── store
    ├── alert
    ├── colleges
    ├── profile
    └── validation
```
**components/**
表示に関わるコンポーネントを配置している場所です。全て単体のファイルで構成されています。表示だけを行い、状態の管理やロジックは内包しません。

**domain/entity/**
データ構造を定義する場所です。profile やバリデーションの項目がどのようなデータを持っているのかを定義しています。

**domain/services/**
ビジネスロジックを記載しています。具体的には、郵便番号に関わる処理や定数などを定義しています。この層があることでビューとロジックを分離できます。

**store/**
状態管理を行う場所です。redux の action や reducer を記載します。それぞれの状態がどのような目的を持つのかは教材の中で随時説明していきます。



