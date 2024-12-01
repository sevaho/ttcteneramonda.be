# shell.nix
let
  # stable = import (fetchTarball https://nixos.org/channels/nixos-24.11/nixexprs.tar.xz) { };
  unstable = import (fetchTarball https://nixos.org/channels/nixos-unstable/nixexprs.tar.xz) { };

in
{ nixpkgs ? import <nixpkgs> {} }:
with nixpkgs; mkShell {
  packages = with pkgs; [
    nodejs
    unstable.hugo
    tailwindcss
    tailwindcss-language-server
    htmx-lsp
    nodePackages.prettier
    vscode-langservers-extracted
  ];
}
