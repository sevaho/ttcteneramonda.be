# shell.nix
let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {

  packages = with pkgs; [
    nodejs
    hugo
    tailwindcss
    tailwindcss-language-server
    htmx-lsp
    nodePackages.prettier
    vscode-langservers-extracted
  ];
}
