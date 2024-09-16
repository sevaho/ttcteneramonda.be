# shell.nix
let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {

  packages = with pkgs; [
    hugo
    nodejs
    tailwindcss
    tailwindcss-language-server
    htmx-lsp
    prettierd
    nodePackages.prettier
    vscode-langservers-extracted
    # vscode-html-languageserver-bin
  ];
}
