
## Getting Started

### Setup Env

##### 1. 安装 [Rust](https://www.rust-lang.org/)

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

##### 2. 安装编译环境

```sh
rustup target add aarch64-apple-darwin
```

##### 3. 安装项目依赖

```sh
# FE Dependencies
pnpm install

# Tauri Dependencies
cd src-tauri
cargo build
```