"use strict";(self.webpackChunkwiki_42_mwx=self.webpackChunkwiki_42_mwx||[]).push([[3889],{9980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(4848),n=a(8453);const i={sidebar_position:1},d="Free Files",s={id:"rank 02/FdF/guia_fdf_pronta/src/free/free",title:"Free Files",description:"O que cada arquivo da src/free faz?",source:"@site/docs/rank 02/FdF/guia_fdf_pronta/src/free/free.mdx",sourceDirName:"rank 02/FdF/guia_fdf_pronta/src/free",slug:"/rank 02/FdF/guia_fdf_pronta/src/free/",permalink:"/wiki_ft/docs/rank 02/FdF/guia_fdf_pronta/src/free/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rank 02/FdF/guia_fdf_pronta/src/free/free.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Free files",permalink:"/wiki_ft/docs/category/free-files"},next:{title:"Graph files",permalink:"/wiki_ft/docs/category/graph-files"}},_={},o=[{value:"Clear_image.c",id:"clear_imagec",level:2},{value:"Free_data.c",id:"free_datac",level:2},{value:"Free_pointer_server.c",id:"free_pointer_serverc",level:2},{value:"Free_resources.c",id:"free_resourcesc",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"free-files",children:"Free Files"})}),"\n",(0,r.jsx)(t.p,{children:"O que cada arquivo da src/free faz?"}),"\n",(0,r.jsx)(t.h2,{id:"clear_imagec",children:"Clear_image.c"}),"\n",(0,r.jsx)(t.p,{children:"O objetivo dessa funcao \xe9:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"limpar e preparar para a proxima imagem."}),"\n",(0,r.jsx)(t.li,{children:"Essa fun\xe7\xe3o destroy a imagem."}),"\n",(0,r.jsx)(t.li,{children:"Adiciona novos dados no img_data."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C",children:"void\tclear_image(t_fdf *data, t_img *img_data)\r\n{\r\n\tmlx_destroy_image(data->mlx_ptr, img_data->img_ptr);\r\n\timg_data->img_ptr = mlx_new_image(\r\n\t\t\tdata->mlx_ptr,\r\n\t\t\tdata->win_width,\r\n\t\t\tdata->win_height\r\n\t\t\t);\r\n\timg_data->img_data = mlx_get_data_addr(\r\n\t\t\timg_data->img_ptr,\r\n\t\t\t&img_data->bpp,\r\n\t\t\t&img_data->size_line,\r\n\t\t\t&img_data->endian\r\n\t\t\t);\r\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"free_datac",children:"Free_data.c"}),"\n",(0,r.jsx)(t.p,{children:"O objetivo dessa fun\xe7\xe3o \xe9 libera todos os itens da z_matrix"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C",children:"void\tfree_data(t_fdf *data)\r\n{\r\n\tint\ti;\r\n\r\n\ti = 0;\r\n\tif (!data)\r\n\t\treturn ;\r\n\tif (data->z_matrix)\r\n\t{\r\n\t\twhile (i < data->height * data->width)\r\n\t\t{\r\n\t\t\tif (data->z_matrix[i].hex)\r\n\t\t\t\tfree(data->z_matrix[i].hex);\r\n\t\t\ti++;\r\n\t\t}\r\n\t\tfree(data->z_matrix);\r\n\t}\r\n\tfree(data);\r\n\tdata = NULL;\r\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"free_pointer_serverc",children:"Free_pointer_server.c"}),"\n",(0,r.jsx)(t.p,{children:"O objetivo dessa funcao \xe9 liberar todos os ponteiros utilizados pela mlx"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C",children:"int\tfree_pointer_server(t_fdf_gen *gen_data)\r\n{\r\n\tif (!gen_data->data)\r\n\t\treturn (0);\r\n\tif (gen_data->data->mlx_ptr && gen_data->data->win_ptr)\r\n\t{\r\n\t\tmlx_destroy_image(gen_data->data->mlx_ptr, gen_data->img_data->img_ptr);\r\n\t\tmlx_destroy_window(gen_data->data->mlx_ptr, gen_data->data->win_ptr);\r\n\t\tgen_data->data->win_ptr = NULL;\r\n\t}\r\n\tif (gen_data->data->mlx_ptr)\r\n\t{\r\n\t\tmlx_destroy_display(gen_data->data->mlx_ptr);\r\n\t\tfree(gen_data->data->mlx_ptr);\r\n\t\tgen_data->data->mlx_ptr = NULL;\r\n\t}\r\n\tif (gen_data->data)\r\n\t\tfree_data(gen_data->data);\r\n\tgen_data->data = NULL;\r\n\treturn (0);\r\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"free_resourcesc",children:"Free_resources.c"}),"\n",(0,r.jsx)(t.p,{children:"O objetivo dessa fun\xe7\xe3o \xe9 liberar todas as Structs que foram mallocadas"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-C",children:"void\tfree_resources(t_fdf_gen *gen_data)\r\n{\r\n\tif (gen_data->img_data)\r\n\t\tfree(gen_data->img_data);\r\n\tif (gen_data->graph)\r\n\t\tfree(gen_data->graph);\r\n\tif (gen_data->data)\r\n\t\tfree(gen_data->data);\r\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>s});var r=a(6540);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);