---
title: 從零開始設定 Windows 終端機
date: '2021-12-23T22:00:00Z'
---

最近又 (再一次) 開始設定 Windows 終端機，順便紀錄過程，方便未來查找。

## 安裝 WSL2

使用系統管理員身分執行 Powershell，並輸入以下指令：

```
wsl --install
```

https://docs.microsoft.com/zh-tw/windows/wsl/install

## Git 基本設定

透過以下指令設定全域的用戶名稱與電子郵件信箱：

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-%E5%88%9D%E6%AC%A1%E8%A8%AD%E5%AE%9A-Git

設定更容易閱讀的 git 紀錄指令： `git lg`

```bash
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

https://coderwall.com/p/euwpig/a-better-git-log

## 安裝 zsh

```bash
sudo apt install zsh

# 將 zsh 設定為預設的 shell
chsh -s $(which zsh)
```

## 安裝 on-my-zsh 與套件

```bash
# 可以使用 curl --version 檢查是否安裝過
sudo apt install curl

# 安裝 oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 安裝套件
## zsh 語法高亮
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

## zsh 指令依照歷史紀錄提示
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

## powerlevel10k 美化 zsh 介面
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

並將這下載套件設定到 .zshrc 的 plugins 區段

```bash
# ~/.zshrc
...
ZSH_THEME="powerlevel10k/powerlevel10k"
...
plugins=(
        git
        zsh-syntax-highlighting
        zsh-autosuggestions
)
```

因為 powerlevel10k 這個炫炮套件有用 [特殊字型](https://github.com/romkatv/powerlevel10k#manual-font-installation) 需要額外下載

之後在 Windows Terminal 視窗內按 `Ctrl+Shift+,` 開啟 settings.json 設定終端機的顯示字型

```json
// settings.json
{
  "profiles": {
    "defaults": {
      "fontFace": "MesloLGS NF"
    }
  }
}
```

最後透過 `source ~/.zshrc` 讀取設定檔或 `p10k configure` 初始化 powerlevel10k 的安裝精靈

https://github.com/romkatv/powerlevel10k#oh-my-zsh
https://ithelp.ithome.com.tw/articles/10235228

## 安裝 nvm、Node.js 與 npm

在 WSL 視窗輸入以下指令：

```bash
# 使用 curl 安裝 nvm (最新版本可參考 https://github.com/nvm-sh/nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

安裝 nvm 後須重啟終端機或是透過 `source ~/.bashrc` 讀取最新的設定

```bash
# 列出所有版本
nvm ls
# 安裝最新穩定版 Node.js
nvm install --lts
```

https://docs.microsoft.com/zh-tw/windows/dev-environment/javascript/nodejs-on-wsl

若需要額外安裝 `yarn` 可透過 Corepack

```bash
# Node.js >= 16.10
corepack enable
```

https://yarnpkg.com/getting-started/install
