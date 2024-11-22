"use strict";(self.webpackChunkwiki_42_mwx=self.webpackChunkwiki_42_mwx||[]).push([[1530],{3568:(r,a,e)=>{e.r(a),e.d(a,{assets:()=>f,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>t,toc:()=>s});var n=e(4848),i=e(8453);const d={sidebar_position:4},o="Lendo mapas",t={id:"rank 02/FdF/ler_mapa",title:"Lendo mapas",description:"O motivo de eu nao estar utilizando minha propria ft_printf e porque esqueci ela na 42 e estou fazendo essa doc em casa, vlw flw..",source:"@site/docs/rank 02/FdF/ler_mapa.mdx",sourceDirName:"rank 02/FdF",slug:"/rank 02/FdF/ler_mapa",permalink:"/wiki_ft/docs/rank 02/FdF/ler_mapa",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rank 02/FdF/ler_mapa.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Primeiros passos FdF",permalink:"/wiki_ft/docs/rank 02/FdF/primeirospassos"},next:{title:"Tutorial - Extras",permalink:"/wiki_ft/docs/category/tutorial---extras"}},f={},s=[{value:"Header do FdF",id:"header-do-fdf",level:3},{value:"Main para leitura de arquivo (mapa)",id:"main-para-leitura-de-arquivo-mapa",level:3},{value:"Fun\xe7\xe3o auxiliar para pegar a Altura",id:"fun\xe7\xe3o-auxiliar-para-pegar-a-altura",level:3},{value:"Fun\xe7\xe3o auxiliar para pegar a Largura",id:"fun\xe7\xe3o-auxiliar-para-pegar-a-largura",level:3},{value:"Fun\xe7\xe3o auxiliar para pegar dimensao exata onde esta o valor",id:"fun\xe7\xe3o-auxiliar-para-pegar-dimensao-exata-onde-esta-o-valor",level:3},{value:"Fun\xe7\xe3o para de fato ler o mapa",id:"fun\xe7\xe3o-para-de-fato-ler-o-mapa",level:3}];function A(r){const a={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...r.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"lendo-mapas",children:"Lendo mapas"})}),"\n",(0,n.jsx)(a.admonition,{title:"HEHE",type:"danger",children:(0,n.jsx)(a.p,{children:"O motivo de eu nao estar utilizando minha propria ft_printf e porque esqueci ela na 42 e estou fazendo essa doc em casa, vlw flw.."})}),"\n",(0,n.jsxs)(a.p,{children:["Vamos come\xe7ar escrevendo o ",(0,n.jsx)(a.code,{children:"fdf.h"})," que conter\xe1 nossas fun\xe7\xf5es principais e struct:"]}),"\n",(0,n.jsx)(a.h3,{id:"header-do-fdf",children:"Header do FdF"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-C",metastring:"fdf.h",children:'#ifndef FDF_H\r\n# define FDF_H\r\n\r\n#include "minilibx-linux/mlx.h"\r\n# include "libft/libft.h"\r\n# include <stdlib.h>\r\n# include <stdio.h>\r\n# include <unistd.h>\r\n\r\n// Estrutura que cont\xe9m os dados do mapa e ponteiros para a janela gr\xe1fica\r\ntypedef struct\r\n{\r\n    int    width;      // Largura do mapa (n\xfamero de colunas)\r\n    int    height;     // Altura do mapa (n\xfamero de linhas)\r\n    int    **z_matriz; // Matriz que armazena os valores de altura (altitude)\r\n\r\n    void    *mlx_ptr;  // Ponteiro para a inst\xe2ncia do MiniLibX\r\n    void    *win_ptr;  // Ponteiro para a janela aberta no MiniLibX\r\n}    fdf;\r\n\r\n// Declara\xe7\xe3o da fun\xe7\xe3o que l\xea o arquivo e preenche a STRUCT acima `fdf`\r\nvoid    read_file(char *file_name, fdf *data);\r\n\r\n#endif\n'})}),"\n",(0,n.jsx)(a.h3,{id:"main-para-leitura-de-arquivo-mapa",children:"Main para leitura de arquivo (mapa)"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-C",children:'int main(int argc, char **argv)\r\n{\r\n    fdf *data;\r\n\r\n    // Faz a aloca\xe7\xe3o da struct `fdf`\r\n    data = (fdf*)malloc(sizeof(fdf));\r\n\r\n    // Chama a fun\xe7\xe3o que l\xea o arquivo e preenche a struct `data`\r\n    read_file(argv[1], data);\r\n\r\n    // Vari\xe1veis auxiliares para iterar pela matriz\r\n    int i = 0;\r\n    int j = 0;\r\n\r\n    // Itera sobre as linhas da matriz\r\n    while (i < data->height)\r\n    {\r\n        j = 0; // Reseta `j` para iterar sobre as colunas de cada linha\r\n        while (j < data->width)\r\n        {\r\n            // Imprime o valor da matriz formatado com 3 espa\xe7os de largura\r\n            printf("%3d", data->z_matriz[i][j]);\r\n            j++;\r\n        }\r\n        printf("\\n");\r\n        i++;\r\n    }\r\n    free(data);\r\n}\n'})}),"\n",(0,n.jsx)(a.h3,{id:"fun\xe7\xe3o-auxiliar-para-pegar-a-altura",children:"Fun\xe7\xe3o auxiliar para pegar a Altura"}),"\n",(0,n.jsx)(a.p,{children:"Esta fun\xe7\xe3o calcula o n\xfamero de linhas do arquivo.\r\nNote que como n\xe3o vou fazer nada com a linha lida eu apenas dou free o que importa \xe9 a quantidade de linhas."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-C",children:"int get_height(char *file_name)\r\n{\r\n    char *line;\r\n    int fd;\r\n    int height;\r\n\r\n    fd = open(file_name, O_RDONLY, 0);\r\n    if (fd < 0)\r\n        return -1; // Retorna -1 em caso de erros de abertura.\r\n\r\n    height = 0;\r\n\r\n    // L\xea o arquivo linha por linha e conta as linhas / SDDS WC -l =/\r\n    while ((line = get_next_line(fd)) != NULL)\r\n    {\r\n        height++;\r\n        free(line);\r\n    }\r\n\r\n    close(fd);\r\n    return height;\r\n}\r\n\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fun\xe7\xe3o-auxiliar-para-pegar-a-largura",children:"Fun\xe7\xe3o auxiliar para pegar a Largura"}),"\n",(0,n.jsx)(a.p,{children:"Calcula o n\xfamero de palavras na primeira linha do arquivo, que corresponde \xe0 largura do mapa."}),"\n",(0,n.jsx)(a.p,{children:'Note que o mapa \xe9 um quadrado ent\xe3o nao preciso percorrer cada linha e verificar se cada linha \xe9 igual o numero de "palavras"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-C",children:"int get_width(char *file_name)\r\n{\r\n    int width;\r\n    int fd;\r\n    char *line;\r\n\r\n    fd = open(file_name, O_RDONLY, 0);\r\n    line = get_next_line(fd);\r\n    if (line == NULL)\r\n    {\r\n        write(1, \"Erro line get_width\", 19);\r\n        return -1;\r\n    }\r\n // Usa `ft_wdcounter` para contar as palavras, voce deve ter essa fun\xe7\xe3o na split..\r\n    width = ft_wdcounter(line, ' ');\r\n\r\n    free(line);\r\n    close(fd);\r\n    return width;\r\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fun\xe7\xe3o-auxiliar-para-pegar-dimensao-exata-onde-esta-o-valor",children:"Fun\xe7\xe3o auxiliar para pegar dimensao exata onde esta o valor"}),"\n",(0,n.jsx)(a.p,{children:"Digamos que \xe9 a posi\xe7\xe3o de cada numero exibido"}),"\n",(0,n.jsxs)(a.p,{children:["exemplo : o primeiro ",(0,n.jsx)(a.code,{children:"0"})," do mapa da outra pagina esta na posi\xe7\xe3o z_matriz[0][0]\r\nou seja se voce acessar z_matriz[0][0] voce vai obter 0."]}),"\n",(0,n.jsx)(a.p,{children:"outros exemplos:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"z_matriz[0][0] = 0;\r\n\r\nz_matriz[0][1] = 0;\r\n\r\nz_matriz[2][3] = 10;\n"})}),"\n",(0,n.jsxs)(a.p,{children:["se voce nao tive preguicar e testar :\r\n",(0,n.jsx)(a.code,{children:'printf("%d", data->z_matriz[2][3]);'})]}),"\n",(0,n.jsx)(a.p,{children:"voce vai ter esta posi\xe7\xe3o marcada:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"posix-mapa",src:e(4107).A+"",width:"470",height:"263"})}),"\n",(0,n.jsx)(a.p,{children:"isso que essa fun\xe7\xe3o faz.. tirando a parte de exibir ne.. voce entendeu.."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-C",children:"void fill_matriz(int *z_line, char *line)\r\n{\r\n    char **nums;\r\n    int i = 0;\r\n\r\n    // Divide a linha em substrings usando o separador de espa\xe7o\r\n    nums = ft_split(line, ' ');\r\n    if (!nums) {\r\n        write(1, \"Erro: ft_split retornou NULL.\\n\", 30);\r\n        return;\r\n    }\r\n\r\n    // Converte cada substring em um n\xfamero e armazena na linha `z_line`\r\n    while (nums[i])\r\n    {\r\n        z_line[i] = ft_atoi(nums[i]);\r\n        free(nums[i]);\r\n        i++;\r\n    }\r\n    free(nums);\r\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fun\xe7\xe3o-para-de-fato-ler-o-mapa",children:"Fun\xe7\xe3o para de fato ler o mapa"}),"\n",(0,n.jsx)(a.p,{children:"L\xea o arquivo de entrada e preenche a estrutura fdf com os dados do mapa."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-C",children:'void    read_file(char *file_name, fdf *data)\r\n{\r\n    int    fd;\r\n    int    i;\r\n    char   *line;\r\n\r\n    //pega a altura e largura (dimens\xf5es do mapa)\r\n    data->height = get_height(file_name);\r\n    data->width = get_width(file_name);\r\n\r\n    // Aloca a matriz `z_matriz` com base na altura e largura\r\n    data->z_matriz = (int **)malloc(sizeof(int*) * data->height);\r\n    if (!data->z_matriz)\r\n    {\r\n        write(1, "Erro malloc z_matriz", 20);\r\n        return;\r\n    }\r\n    i = -1;\r\n    // Aloca espa\xe7o para cada linha da matriz (dados de cada linha do mapa)\r\n    while (++i < data->height)\r\n        data->z_matriz[i] = (int *)malloc(sizeof(int) * (data->width));\r\n    fd = open(file_name, O_RDONLY, 0);\r\n    i = 0;\r\n    // L\xea cada linha do arquivo e preenche a matriz com os valores das posi\xe7\xf5es\r\n    while ((line = get_next_line(fd)) != NULL)\r\n    {\r\n        fill_matriz(data->z_matriz[i], line, data->width);\r\n        free(line);\r\n        i++;\r\n    }\r\n    close(fd);\r\n}\n'})})]})}function l(r={}){const{wrapper:a}={...(0,i.R)(),...r.components};return a?(0,n.jsx)(a,{...r,children:(0,n.jsx)(A,{...r})}):A(r)}},4107:(r,a,e)=>{e.d(a,{A:()=>n});const n="data:image/png;base64,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"},8453:(r,a,e)=>{e.d(a,{R:()=>o,x:()=>t});var n=e(6540);const i={},d=n.createContext(i);function o(r){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof r?r(a):{...a,...r}}),[a,r])}function t(r){let a;return a=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:o(r.components),n.createElement(d.Provider,{value:a},r.children)}}}]);