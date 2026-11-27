# aozora-rsvp-support

iPhone アプリ「青空RSVP」のサポートページとプライバシーポリシー（GitHub Pages で公開）。

- サポート: https://otsdarva1.github.io/aozora-rsvp-support/
- プライバシーポリシー: https://otsdarva1.github.io/aozora-rsvp-support/privacy.html
- 作品ページ: https://otsdarva1.github.io/aozora-rsvp-support/w/

## 作品ページ

`w/<作品 ID>/index.html` と一覧の `w/index.html`、共通の `assets/work.css` と `assets/work.js` は、アプリのリポジトリ（`yyyamazaki/aozora-rsvp`）の `scripts/work_pages/build.sh` が書き出す。手で直さず、スクリプトを直して書き出し直す。

```bash
# アプリのリポジトリで
scripts/work_pages/build.sh ~/work/aozora-rsvp-support
```
