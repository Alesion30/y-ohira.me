# pages

デザインシステムのUIライブラリに載せるべき汎用的なコンポーネントを管理する

## ファイル構成

```
pages/[PageName]
|--- index.tsx          Container層（Presenter層とLogic層の繋ぎ込み）
|--- presenter.tsx      Presenter層（見た目・DOM構造の管理）
|--- hooks.ts           Logic層（カスタムフック）
|--- style.module.scss         Style層
|--- index.stories.tsx  Storybook
|--- [ComponentName]    Component（ページに依存したコンポーネント）
      |--- index.tsx
      | ...
```
