# Tutorial para rodar estes notebooks

- Aviso: Este tutorial é o utilizado para o sistema operacional Ubuntu ou sua versão em WSL. Caso esteja utilizando uma outra versão do linux, mantenha os passos mas a forma de alcança-los talvez precisará ser alterada.

## Instalação das dependências

1. Instale o "nvm" (node version manager)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

2. Configure o nvm no seu shell

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

3. Instale a versão 20 do nodeJs.

```
nvm install 20
```

4. Utilize-a como padrão

```
nvm alias default 20
```

5. Para garantir seu uso por scripts ou processos não interativos

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use default  # ou a versão específica
```

6. Crie um link simbólico manual para garantir que o node seja encontrado.

```
sudo ln -s $(which node) /usr/bin/node
```

7. Renicie o terminal.

8. Instale o "npm" (node package manager)

```
apt get npm
```

9. Instale o módulo "electron" (que será o runtime de nosso jupyter kernel)

```
npm install electron
```

10. Instale o módulo "zeromq"

```
npm install zeromq
```

11. **Finalmente** instale o módulo itypescript

```
npm install -g itypescript
```

12. Registre o Kernel com o Jupyter (Existe uma mudança em como realizar isto caso você esteja usando o anaconda ou um outro versionamento de python como fornecedor de seu jupyter)

```
its --install=global
```

13. Rode o notebook "exemplo.ipynb" e verifique se está rodando perfeitamente.

## Mudança no passo em registrar o kernel

* Caso você utilize um sistema de versionamento python diferente do padrão de seu linux e o caminho para ele ainda não foi setado, você talvez terá problemas para mapear o kernel de seu sistema. 

* Então instale o its localmente com

```
its --install=local
```

Vá no caminho: home/(seu_usuario)/.local/share/jupyter/kernels/

Mova a pasta que está neste caminho para:

home/(seu_usuario)/(seu versionamento python)/share/jupyter/kernels

## Caso precise de um node anteriormente ao nvm

* Instale o nodejs a partir do ubuntu pelo comando:
    * Entretanto é bom entender que a versão mais recente do apt get é o node 12, incompatível com nossos modulos que iremos instalar.

```
apt get nodejs
```

Ao final do tutorial, você precisará remover o nodejs com:

```
apt remove nodejs
```