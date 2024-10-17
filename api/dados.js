const _prefixAssets = "./assets/";
const _prefixAssetsIcons = "./assets/icons/";
const _prefixUnidade = "./assets/unidade/"

/*
    Exemplos de uso
    FILTRAR PÁGINA = ( CTRL + F ) 
    -----------> pg[1]
    -----------> cm[inicio]

*/

// SUMÁRIO
/*
    1 -> INCIO
    2 -> APRESENTACAO UNIDADE
    3 -> APRESENTACAO UNIDADE CONTINUACAO
    4 -> 4 Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial
    5 -> 5 Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO


*/

const api = [

    // PÁGINA 1 INICIAL 
    /*
        FILTRO
            ------> pg[1]
            ------> CM[inicio]
        AQUI ÉA PÁGINA DE INICIO AO CONTEUDO 
        
    */
    {
        "pagina": 1,
        "nome_page": `Início`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `       

                <!-- Container do texto animado -->
                <div id="text-container-capa">
                    <div class="animated-text">Planejamento Alimentar</div>
                    <div id="underline"></div>
                    <div id="second-text">Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial</div>
                    <button id="animated-button" onclick="iniciar()">Início</button>
                </div>

                <!-- Imagem animada -->
                <div id="animated-image"></div>

                <!-- Imagem -->
                <div id="image-capaOverlay"></div>
                <!-- Container do texto animado -->
          
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": ""
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "beforeend",
                "src": "./conf/js/pagina1.js"
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                        </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": false,
                        "html": `
                            <button class="btn-ferramentas "  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                            <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                <i data-lucide="maximize-2"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                            <button vizioon-tip="Podcast" vizioon-attr="d-none d-md-block" vizioon-posicao="gbottom">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button vizioon-tip="Videoaula" vizioon-attr="d-none d-md-block" vizioon-posicao="gbottom">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas" aria-label="close" vizioon-attr="d-none d-md-block" vizioon-tip="Ferramentas" vizioon-posicao="gbottom">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                            <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                        `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                             <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                        `,
                        "acionador": `

                            <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                <div class="cores-destaque-inline-btn">
                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                        <button class="toolbar-button" id="limpar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                            Limpar
                                        </button>
                                 </div>
                            </div>

                        `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                        `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                             <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                        `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                            <button><i data-lucide="download"></i>Download</button>
                        `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                        `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                              <button><i data-lucide="x" id="close_box"></i></button>
                        `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                "fundo": ":#00000000",
                // "icones": "rgb(0, 110, 201)"
                "imagemFundo": {
                    "ativar": true,
                    "Capa": "url(../assets/fundo.gif)",
                    "subCapa":"url(../assets/capaOverlay.png)",
                    "posicaoY": "bottom 1.8%",
                    "posicaoX": "left 0.5%",
                    "tamanho": "100%",
                }
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {},
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logobranca.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],

        }
    },

    // PÁGINA 2 APRESENTACAO UNIDADE
    /*
        FILTRO
            ------> pg[2]
            ------> CM[APRESENTACAO UNIDADE]
        AQUI ÉA PÁGINA DE INTRODUÇÃO AO CONTEUDO 
        
    */
    {
        "pagina": 2,
        "nome_page": `Apresentação da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                            <p>Olá, estudante! </p>
    
                            <p>
                             Nesta unidade, iremos abordar a definição e caracterização da alimentação coletiva bem como a classificação de alimentação coletiva ou alimentação comercial, ambas denominadas de Unidade Produtora de Refeições. Também iremos entender o contexto histórico do desenvolvimento da alimentação coletiva no Brasil, até serem estabelecidas as Unidades de Alimentação e Nutrição (UAN) dos dias atuais.
                            </p>
    
                            <p>
                                Além disso, nesta unidade, vamos explorar os conhecimentos sobre os indicadores usados no preparo dos alimentos e no controle do desperdício. Discutiremos fatores de correção, indicadores de reidratação, suas vantagens e desvantagens, e como realizar os cálculos necessários. Também abordaremos os indicadores de sobre limpa e resto-ingesta.
                            </p>
    
                            <p>
                              Todo esse conhecimento será essencial para que você compreenda como se dá o planejamento de um cardápio em uma unidade de alimentação e nutrição e partir desse conhecimento prévio uma vez o estudante inserido no contexto de uma situação real, poder desenvolver suas habilidades e competências adquiridas a partir do conhecimento teórico obtido nessa unidade dentro do contexto da realização do planejamento de um cardápio.
                            </p>

                        </div> 
                
                     </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": "./conf/css/pagina2.css"
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            "animacao_texto": [{
                "indice": "all", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            // Animação pra toda Página
            // "animacao_elemento": [{
            //     "elemento": ".animation", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                                
                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>
                                        
                                    </div>
                                </div>
    
                           `
                    }
                }
            ]
        }
    },

    // PÁGINA 3 APRESENTACAO UNIDADE - CONTINUACAO
    /*
        FILTRO
            ------> pg[3]
            ------> CM[APRESENTACAO UNIDADE CONTINUACAO]
        AQUI ÉA PÁGINA DE CONTINUACAO DA APRESENTACAO UNIDADE
        
    */

    {
        "pagina": 3,
        "nome_page": `Apresentação da Unidade`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound">

                            <div class="objetivo-aprendizagem-elemento">
                                <div class="objetivo-aprendizagem-elemento--box">
                                    <img src="${_prefixAssetsIcons}target.png" />
                                    <div class="objetivo-aprendizagem-elemento--img-title">
                                        <h1>Objetivos de aprendizagem</h1>
                                    </div>
                                    <ol class="list-group list-group-numbered list-group-aprendizagem ">
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                        Compreender a definição e a caracterização da alimentação coletiva, tanto em contextos institucionais quanto comerciais.
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            Estudar os principais indicadores utilizados na prática nutricional para o preparo de alimentos e o controle de desperdícios na alimentação coletiva.
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            Estudar os principais indicadores utilizados na prática nutricional para o preparo de alimentos e o controle de desperdícios na alimentação coletiva.
                                        </li>
                                        <li class="list-group-item list-group-item-action list-group-item-info">
                                            Estudar os principais indicadores utilizados na prática nutricional para o preparo de alimentos e o controle de desperdícios na alimentação coletiva.
                                        </li>
                                        
                                    </ol>
                                </div>
                            </div>

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [{
                "url": "./conf/css/pagina3.css"
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "setas": {
                // "corSetas": "#fff",
                // "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                                
                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>
                                        
                                    </div>
                                </div>
    
                           `
                    }
                }
            ]
        }
    },

    // PÁGINA 4 Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial
    /*
        FILTRO
            ------> pg[4]
            ------> CM[Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial]
        AQUI ÉA PÁGINA DE Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial
        
    */
    {
        "pagina": 4,
        "nome_page": `Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound">

                            <div>
                                <p>
                                    No ramo da alimentação, há uma divisão entre as refeições feitas em casa e as refeições feitas fora de
                                    casa. O ato de alimentar-se fora de casa recebe a classificação de alimentação coletiva ou alimentação
                                    comercial, ambas denominadas de Unidade Produtora de Refeições UPR) (MEZOMO, 2015). Esse estudo abordará
                                    restritamente as unidades de alimentação coletiva.
                                </p>

                                <p>
                                    Historicamente no Brasil, os serviços de produção e distribuição de alimentos para coletividades sadias
                                    recebiam a denominação de Serviço de Alimentação e Nutrição (SAN) e para coletividades enfermas de
                                    Serviço de Nutrição e Dietética (SND) (MEZOMO, 2015).
                                </p>
                            </div>

                        </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina3.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                                
                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>
                                        
                                    </div>
                                </div>
    
                           `
                    }
                }
            ]
        }
    },


    // PÁGINA 5 Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
    /*
        FILTRO
            ------> pg[5]
            ------> CM[Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO]
        AQUI ÉA PÁGINA DE Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
        
    */
    {
        "pagina": 5,
        "nome_page": `Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-imagem",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">
                        <div class="pagina-tipo-texto--box-texto ouvinte-sound" >

                                <div class="card mb-3" style="max-width: 100%; background: #fdb50048;" >
                                    <div class="row g-0">
                                        <div class="col-md-4 position-relative">
                                               
                                                <div class="item-ligthbox-img img-photo-actions position-relative h-100" style="border:none;background:none;">
                                                    <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0;">Imagem 1: Unidade de Alimentação e Nutrição (UAN).</p>        
                                                    <img src="${_prefixUnidade}una.png" class="img-fluid rounded" style="border:none;background: none;" alt="${_prefixUnidade}una.png">
                                                    <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Fonte - Imagem 1: @font</p>        
                                                </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style="color:#0d0d40;font-style:italic;">Você sabe o que é uma UAN?</h5>
                                                <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center"> 
                                                    <p class="card-text" >Uma UAN é definida como um conjunto de áreas com o objetivo de operacionalizar o provimento nutricional de coletividades. Consiste de um serviço organizado, compreendendo uma sequência e sucessão de atos destinados a fornecer refeições balanceadas dentro dos padrões dietéticos e higiênicos, visando, assim, atender às necessidades nutricionais de seus clientes, de modo que se ajustem aos limites financeiros da Instituição Milet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
           "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                                
                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>
                                        
                                    </div>
                                </div>
    
                           `
                    }
                }
            ]
        }
    },

    // PÁGINA 6 Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
    /*
        FILTRO
            ------> pg[6]
            ------> CM[Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO]
        AQUI ÉA PÁGINA DE Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
        
    */
    {
        "pagina": 6,
        "nome_page": `Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">

                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                <div>
                                    <h4 style="color:#011c41; text-align:left;">Denominações para restaurantes de coletividades</h4>
                                    <p>Mundialmente, existem diferentes denominações para referir-se aos restaurantes de coletividades: Catering é a denominação inglesa usada nos países europeus, os franceses batizaram os restaurantes coletivos de restauration colletive, e os americanos preferem o termo food service. Observa-se que o termo catering é atualmente empregado para as refeições feitas a bordo de aviões, sendo caracterizadas como alimentação coletiva pelo nível de catividade dos comensais.  </p>
                                </div>
                            </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {

            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                                
                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>
                                        
                                    </div>
                                </div>
    
                           `
                    }
                }
            ]
        }
    },

    // PÁGINA 7 Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
    /*
        FILTRO
            ------> pg[7]
            ------> CM[Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO]
        AQUI ÉA PÁGINA DE Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
        
    */
    {
        "pagina": 7,
        "nome_page": `Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">

                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                <div class="lista-customizada">
                                    <p>As UAN podem localizar-se em diversas áreas, como no ambiente corporativo, na saúde e na educação. Veja abaixo como acontece em cada área (MEZOMO, 2015):</p>

                                    <ol class="lista-customizada-ol">
                                        <li>No trabalho, há os refeitórios internos para os funcionários de empresas; </li>
                                        <li>No área da saúde, citam-se hospitais, asilos e orfanatos; </li>
                                        <li>Na educação, temos unidades de alimentação desde a pré-escola até a universidade.</li>
                                    </ol>
                                
                                </div>
                            </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina7.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                                
                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>
                                        
                                    </div>
                                </div>
    
                           `
                    }
                }
            ]
        }
    },


    // PÁGINA 8 Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
    /*
        FILTRO
            ------> pg[8]
            ------> CM[Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO]
        AQUI ÉA PÁGINA DE Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial - CONTINUACAO
        
    */
    {
        "pagina": 8,
        "nome_page": `Definição e Caracterização da Alimentação Coletiva: Institucional e Comercial`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                     <div class="pagina-tipo-texto animation">

                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                                <div class="d-flex flex-column flex-md-row align-items-center gap-1">
                                        <p class="text-center text-md-left">Observe agora como deve ser o layout de um restaurante para produção de refeições para uma coletividade.</p>
                                    
                                        <div class="item-ligthbox-img img-photo-actions position-relative h-50" style="border:none;background:none;">
                                            <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0;">Imagem 1: Unidade de Alimentação e Nutrição (UAN).</p>        
                                            <img src="${_prefixUnidade}una.png" class="img-fluid rounded" style="border:none;background:none; max-width: 100%; height: auto;" alt="${_prefixUnidade}una.png">
                                            <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">Imagem 1: Unidade de Alimentação e Nutrição (UAN).</p>        
                                        </div>
                                </div>

                            </div>

                    </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                    <i data-lucide="maximize-2"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                <button class="btn-podcast">
                                    <i data-lucide="audio-lines"></i>
                                </button>
                            `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                <button class="btn-videoaula">
                                    <i data-lucide="video"></i>
                                </button>
                            `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                <button class="btn-ferramentas" aria-label="close">
                                    <i data-lucide="pencil-ruler"></i>
                                </button>
                            `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                
                            `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                 <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                            `,
                        "acionador": `
    
                                <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                    <div class="cores-destaque-inline-btn">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                     </div>
                                </div>
    
                            `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                            `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                 <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                            `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                            `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                 <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                            `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                  <button><i data-lucide="x" id="close_box"></i></button>
                            `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                <div id="toolbar" style="display: none; position: absolute;">
                                    <div class="toolbar-container">
                                        <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                            <div class="cores-destaque">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                                
                                            </div>
                                        </div>
                                        <button class="toolbar-button" id="resumo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                            Resumo
                                        </button>
                                        <button class="toolbar-button" id="destacar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                            Destacar
                                        </button>
                                        <button class="toolbar-button" id="dicionario-toolbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                            Dicionário
                                        </button>
                                        
                                    </div>
                                </div>
    
                           `
                    }
                }
            ]
        }
    },


    // PÁGINA 9 História da Alimentação Coletiva
    /*
        FILTRO
            ------> pg[9]
            ------> CM[História da alimentação coletiva no contexto mundial]
        AQUI ÉA PÁGINA DE História da alimentação coletiva no contexto mundial
        
    */
    {
        "pagina": 9,
        "nome_page": `História da Alimentação Coletiva`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                                    <div class="pagina-historia-alimentacao-container-titulo-intro">
                                        <h1>História da alimentação coletiva no contexto mundial</h1>
                                        <p>A história da alimentação coletiva é considerada algo recente. Somente no início do século XX é que os serviços de alimentação para coletividades foram oficialmente reconhecidos, tendo sido decretada a primeira lei francesa que regulamenta os serviços de alimentação e estabelece a necessidade das empresas disporem de um local específico à alimentação dos trabalhadores.</p>
                                    </div>
                                </div>
    
                        </div>
                `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina9.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                        "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                    }
                }
            ]
        }
    },

    // PÁGINA 10 História da Alimentação Coletiva - Continuacao
    /*
        FILTRO
            ------> pg[10]
            ------> CM[História da Alimentação Coletiva - Continuacao]
        AQUI ÉA PÁGINA DE História da Alimentação Coletiva - Continuacao
        
    */
    {
        "pagina": 10,
        "nome_page": `História da Alimentação Coletiva`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        <div class="pagina-tipo-texto animation">

                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                                <div class="card mb-3" style="max-width: 100%; background: #ab0b0a;">
                                    <div class="row g-0">
                                        <div class="col-md-4 position-relative">

                                            <div class="item-ligthbox-img img-photo-actions position-relative h-100"
                                                style="border:none;background:none;">
                                                <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0;">
                                                    Imagem: Alimentação para soldados em guerra.
                                                </p>
                                                <img src="${_prefixUnidade}alimentacao_soldado.png" class="img-fluid rounded"
                                                    style="border:none;background: none;" alt="${_prefixUnidade}una.png">
                                                <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">
                                                    Fonte: Piterest/Reprodução.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title text-light" style="color:#0d0d40;font-style:italic;font-weight:700;">Você sabia?
                                                </h5>
                                                <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                                                    <p class="card-text text-light">Durante a Segunda Guerra Mundial, os restaurantes para coletividades tiveram um aumento na produção devido à necessidade de alimentar as forças armadas e de administrar os problemas causados pela escassez de alimento. Passado esse período, as mudanças ocorridas na sociedade, tais como, escolarização massiva, crescimento industrial, aumento da distância entre o local de trabalho e residência - um reflexo da urbanização -, impulsionaram o desenvolvimento das UAN (SPINELLI, 2013).   </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina9.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },

    // PÁGINA 11 História da Alimentação Coletiva - Continuacao
    /*
        FILTRO
            ------> pg[11]
            ------> CM[História da Alimentação Coletiva - Continuacao]
        AQUI ÉA PÁGINA DE História da Alimentação Coletiva - Continuacao
        
    */
    {
        "pagina": 11,
        "nome_page": `História da Alimentação Coletiva`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        <div class="pagina-tipo-texto animation">

                             <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                <div class="lista-customizada">
                                    <p>Na década de 1980, porém, foi observado um crescimento desacelerado dos restaurantes coletivos. Estabeleceu-se a concorrência com os restaurantes comerciais motivada pelos seguintes fatores:</p>

                                    <ol class="lista-customizada-ol">
                                        <li>Maior poder aquisitivo dos trabalhadores; </li>
                                        <li>Distribuição de  tíquetes - restaurantes - subsidiados pelas empresas empregadoras;</li>
                                        <li>Aumento do desemprego.</li>
                                        <li>Diminuição da taxa de natalidade que acarretou na diminuição do número de estudantes nas escolas.</li>
                                    </ol>
                                
                                </div>
                            </div>

                        </div>
                    `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina7.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },

    // PÁGINA 12 História da Alimentação Coletiva
    /*
        FILTRO
            ------> pg[12]
            ------> CM[História da alimentação coletiva no Brasil]
        AQUI ÉA PÁGINA DE História da alimentação coletiva no Brasil
        
    */
    {
        "pagina": 12,
        "nome_page": `História da Alimentação Coletiva`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                         <div class="pagina-tipo-texto animation">

                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                                <div class="container my-4">
                                    <div class="row align-items-center">
                                        <!-- Texto e título -->
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <div class="pagina-historia-alimentacao-container-titulo-intro">
                                                <h1>História da alimentação coletiva no Brasil</h1>
                                                <p>A história da instalação dos restaurantes de coletividades no Brasil segue a linha da
                                                    história mundial. A industrialização, que trouxe a população rural para o perímetro urbano,
                                                    a ocupação da mão-de-obra feminina, as manifestações trabalhistas são fatos que geraram as
                                                    primeiras preocupações com a saúde do trabalhador brasileiro, inclusive com sua alimentação.
                                                    Observe o fluxograma com informações sobre a história da alimentação coletiva no Brasil.</p>
                                            </div>
                                        </div>
                                        <!-- Imagem -->
                                        <div class="col-md-6">
                                            <div class="overflow-hidden h-100">
                                                <div class="item-ligthbox-img img-photo-actions position-relative h-100"
                                                    style="border:none;background:none;">
                                                    <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0;">
                                                        Imagem: Alimentação para soldados em guerra.
                                                    </p>
                                                    <img src="${_prefixUnidade}unidadealimentacao.png" class="img-fluid rounded"
                                                        style="border:none;background: none;" alt="Imagem de alimentação para soldados">
                                                    <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">
                                                        Fonte: Piterest/Reprodução.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina9.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                        "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                    }
                }
            ]
        }
    },

    // PÁGINA 13 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[13]
            ------> CM[Fator de correção/fator de conversão]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão
        
    */
    {
        "pagina": 13,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                         <div class="pagina-tipo-texto animation">
    
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                                <div class="container my-4">
                                    <div class="row align-items-center">
                                        <!-- Texto e título -->
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <div class="pagina-historia-alimentacao-container-titulo-intro">
                                                <h1>Fator de correção/fator de conversão</h1>
                                                <p>O Fator de Correção (FC) é o indicador que mostra o que será perdido do alimento no momento anterior ao preparo considerando o descarte das partes não comestíveis. Estas perdas podem ser de cascas, sementes, sujidades, folhas murchas, folhas queimadas, ossos, aparas, gorduras, entre outras. Sendo assim, por meio deste indicador, é possível determinar quanto do alimento está disponível para o consumo, além de evidenciar também existência ou não de desperdício (SILVA, 2014). Quanto maior o FC de um alimento, maiores são as perdas (SILVA, 2014).</p>
                                            </div>
                                        </div>
                                        <!-- Imagem e Tabela -->
                                        <div class="col-md-6">
                                            <div class="overflow-hidden h-100">
                                                <p>Além da terminologia Fator de Correção (FC), a literatura também utiliza outros termos. Observe na tabela abaixo outros termos para Fator de Correção encontrados na literatura:</p>
                                                <!-- Tabela -->
                                                <table class="table table-bordered text-center" style="border: 2px solid #000;">
                                                    <thead>
                                                        <tr>
                                                            <th style="background-color: #d9e8fc;">AUTORES</th>
                                                            <th style="background-color: #316497; color: #fff;">NOMENCLATURA</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>ABREU; SPINELLI</td>
                                                            <td>Índice de Cocção (IC)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ARAÚJO et al., 2013</td>
                                                            <td>Fator de Cocção (FCV)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>DOMENIC, 2011</td>
                                                            <td>Índice de Conversão (IC)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>ORNELLAS, 2018</td>
                                                            <td>Fator Térmico (FT)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PHILIPPI, 2014</td>
                                                            <td>Indicador de Conversão (IC)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
    
                        </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina9.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                        "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                    }
                }
            ]
        }
    },

    // PÁGINA 14 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[14]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 14,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        
                        <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                               <div class="text-center w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                                    <p  class=" w-100 text-center">O cálculo do FCy é feito utilizando a fórmula:</p>
                                    <div class="d-flex justify-content-center">
                                        <div class="col-md-5">
                                            <div class="overflow-hidden h-100">
                                                <div class="item-ligthbox-img position-relative h-100"
                                                    style="border:none;background:none;">
                                                    <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0;">
                                                        Imagem: Alimentação para soldados em guerra.
                                                    </p>
                                                    <img src="${_prefixUnidade}formularfcy.png" class="img-fluid rounded"
                                                        style="border:none;background: none;" alt="formularfcy.png">
                                                    <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0;">
                                                        Fonte: Piterest/Reprodução.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                        "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                    }
                }
            ]
        }
    },

    // PÁGINA 15 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[15]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 15,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        
                        <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                <div class="lista-customizada">
                                    <p>O valor do FCy pode apresentar variações para um mesmo alimento, as quais podem ocorrer de acordo com os fatores descritos abaixo:  </p>

                                    <ol class="lista-customizada-ol">
                                        <li>Em função das diferentes variedades de um mesmo gênero alimentício, bem como do tempo de armazenamento pós-colheita.</li>
                                        <li>Em função da capacidade de hidratação. É sabido que os grãos absorvem água e que isto afeta o tempo de cocção e o FCy.</li>
                                        <li>Em função do método de cocção (calor seco/calor úmido/etc) utilizado.</li>
                                        <li>Em função da composição centesimal. </li>
                                    </ol>
                                
                                </div>
                            </div>
                        </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina7.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                        "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                    }
                }
            ]
        }
    },

    // PÁGINA 16 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[16]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 16,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        
                        <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                               <div class="container my-4">
                                    <div class="card mb-3" style="max-width: 100%;">
                                        <div class="row g-0">
                                            <!-- Imagem -->
                                            <div class="col-md-4">
                                                <div class="overflow-hidden h-100">
                                                    <div class="item-ligthbox-img position-relative h-100" style="border:none;background:none;">
                                                        <p class="description-descricao position-absolute top-0 start-0 w-100 text-center" style="margin:0;">
                                                            calor úmido
                                                        </p>
                                                        <img src="${_prefixUnidade}calor_umido.png" class="card-img-container rounded-start animate-img"
                                                            style="border:none;background: none;" alt="formularfcy.png">
                                                        <p class="description-font position-absolute bottom-0 start-0 w-100 text-center" style="margin:0;">
                                                            Fonte: Canva
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Conteúdo -->
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Calor úmido</h5>
                                                    <p class="card-text">O calor úmido ocorre quando se usa água ou outro líquido como meio de cocção, sendo considerado um método dissolvente, já que ocorrem mais perdas por dissolução. As substâncias extrativas dos alimentos ficam mais concentradas e os mesmos tendem a ficar mais hidratados, ou seja, tem-se maior capacidade de absorver água. Existem cinco tipos de calor úmido, que são: água em ebulição; fervura a fogo lento; banho-maria; cocção a vapor e cocção a vapor sob pressão (TEICHMANN, 2007).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina15.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                        "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                    }
                }
            ]
        }
    },

    // PÁGINA 17 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[17]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 17,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        <div class="pagina-tipo-texto animation">
                            <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                               <div class="container my-4">
                                    <div class="card mb-3" style="max-width: 100%;">
                                        <div class="row g-0">
                                            <!-- Imagem -->
                                            <div class="col-md-4">
                                                <div class="overflow-hidden h-100">
                                                    <div class="item-ligthbox-img position-relative h-100" style="border:none;background:none;">
                                                        <p class="description-descricao position-absolute top-0 start-0 w-100 text-center" style="margin:0;">
                                                            calor úmido
                                                        </p>
                                                       <img src="${_prefixUnidade}calor_seco.png" class="card-img-container rounded-start animate-img"
                                                           style="border:none;background: none;" alt="calor_seco.pn">
                                                        <p class="description-font position-absolute bottom-0 start-0 w-100 text-center" style="margin:0;">
                                                            Fonte: Canva
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Conteúdo -->
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Calor seco</h5>
                                                    <p class="card-text">O calor seco é um método de cocção onde os alimentos costumam desidratar, perdendo água. O quanto o alimento desidrata depende do tempo de cocção, tipo de calor empregado e do corte do mesmo. </p>
                                                    <p class="card-text">Há dois tipos de cocção por calor seco, a saber: calor seco com gordura, onde o calor é transmitido de forma indireta por meio da gordura, sendo saltear, frigir e fritar, os meios utilizados; calor seco sem gordura, onde o calor é transferido de forma indireta e direta, podendo ser feito através do assamento em forno, no espeto e na grelha (SILVA, 2014). </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina15.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                        <i data-lucide="maximize-2"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-podcast">
                                        <i data-lucide="audio-lines"></i>
                                    </button>
                                `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-videoaula">
                                        <i data-lucide="video"></i>
                                    </button>
                                `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                    <button class="btn-ferramentas" aria-label="close">
                                        <i data-lucide="pencil-ruler"></i>
                                    </button>
                                `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                    <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                    
                                `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                     <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                `,
                        "acionador": `
        
                                    <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                        <div class="cores-destaque-inline-btn">
                                                <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                <button class="toolbar-button" id="limpar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                    Limpar
                                                </button>
                                         </div>
                                    </div>
        
                                `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                     <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                    <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                     <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                      <button><i data-lucide="x" id="close_box"></i></button>
                                `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                        animate__animated animate__fadeInDown animate__slow
                    `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                    <div id="toolbar" style="display: none; position: absolute;">
                                        <div class="toolbar-container">
                                            <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                <div class="cores-destaque">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                            <button class="toolbar-button" id="resumo">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                Resumo
                                            </button>
                                            <button class="toolbar-button" id="destacar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Destacar
                                            </button>
                                            <button class="toolbar-button" id="dicionario-toolbar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                Dicionário
                                            </button>
                                            
                                        </div>
                                    </div>
        
                               `
                    }
                }
            ]
        }
    },


    // PÁGINA 18 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[18]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 18,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                            
                            <div class="pagina-tipo-texto animation">
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                   <div class="container my-4">
                                        <div class="card mb-3" style="max-width: 100%;">
                                            <div class="row g-0 flex align-item-center">
                                             <!-- Imagem -->
                                                <div class="col-md-4">
                                                    <div class="overflow-hidden h-100">
                                                        <div class="item-ligthbox-img position-relative h-100" style="border:none;background:none;">
                                                            <p class="description-descricao position-absolute top-0 start-0 w-100 text-center" style="margin:0;">
                                                                calor misto
                                                            </p>
                                                            <img src="${_prefixUnidade}calor_misto.png" class="card-img-container rounded-start animate-img"
                                                                style="border:none;background: none;" alt="calor_misto.png">
                                                            <p class="description-font position-absolute bottom-0 start-0 w-100 text-center" style="margin:0;">
                                                                Fonte: Canva
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                             <!-- Conteúdo -->
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Calor misto</h5>
                                                        <p class="card-text">O calor misto é onde a cocção ocorre em duas etapas. Na primeira, é usado o calor seco em gordura para a formação de uma camada protetora no alimento, de forma a impedir a saída de sucos, fazendo com o que o alimento consiga se manter mais úmido e suculento. Na segunda etapa, é usado o calor úmido, onde é adicionada pequenas quantidades de líquido até a completa cocção do alimento. Brasear, refogar, ensopar e/ou guisar, são exemplos de calor misto (SILVA, 2014). </p>
                                                    </div>
                                                </div>

                                               
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina15.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },

    // PÁGINA 19 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[19]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 19,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                            
                            <div class="pagina-tipo-texto animation">
                                <div class="pagina-tipo-texto--box-texto ouvinte-sound" >
                                   
                                    <div class="container my-4 p-4 animate-info rounded" style="background-color: #f8e0b6;">
                                        <div class="row">
                                            <div class="col-12 d-flex flex-column gap-4">
                                                <p>O uso de qualquer tipo de calor faz com que os alimentos de origem animal, ou seja, as carnes, reduzam o volume e massa. Isto devido à retração das fibras musculares, fusão das gorduras e pela perda de água. A redução pode ocorrer em níveis maiores ou menores, a depender dos fatores acima listados, além da composição do alimento.Já em cortes de carnes ricos em colágeno, como os tecidos conectivos dos animais, que aumentam seu volume e massa já que absorvem água durante a cocção em calor úmido. O mesmo comportamento é apresentado pelos alimentos ricos em amido, como os cereais, leguminosas, massas.</p>

                                                
                                                <p ><strong style="color:#011c41;">Reforçamos que a listagem de FCy aqui presente apoiará o processo de compra e execução de algumas preparações, mas sempre que possível cada unidade deve desenvolver sua própria lista de FCy.</strong></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },


    // PÁGINA 20 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[20]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 20,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                        <div class="pagina-historia-alimentacao-container-titulo-intro">
                            <h1>Indicador de reidratação</h1>
                            <p>
                                O índice de Reidratação (IR) é utilizado para alimentos que são comercializados secos e necessitam
                                ficar imersos em líquido por um tempo para serem reidratados antes do consumo ou cozimento. Esse
                                processo é conhecido como “remolho”, onde deixamos o alimento hidratando em água por um período
                                determinado.
                            </p>
                            <p>
                                Este indicador é especialmente útil para cereais, leguminosas e outros alimentos que precisam passar
                                por esse processo de remolho. Veja nas imagens como é realizada a reidratação dos alimentos para que
                                possa ser feito o cálculo do indicador de reidratação:
                            </p>
                        </div>
                    </div>
                </div>            
                        
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina9.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },

    // PÁGINA 21 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[21]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 21,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                        <!-- Container de imagens com layout em grid -->
                        <div class="container-imagems-comidas">

                            <div class="flex-layout">
                                <!-- Imagem 1 -->
                                <div class="flex-item">
                                    <img src="${_prefixUnidade}feijao.png" alt="Feijão" class="img-fluid nome-imagem" data-tippy-content="Feijão">
                                </div>
                                <!-- Imagem 2 -->
                                <div class="flex-item">
                                    <img src="${_prefixUnidade}graodebico.png" alt="Grão-de-bico" class="img-fluid nome-imagem" data-tippy-content="Grão-de-bico">
                                </div>
                                <!-- Imagem 3 -->
                                <div class="flex-item">
                                    <img src="${_prefixUnidade}soja.png" alt="Soja" class="img-fluid nome-imagem" data-tippy-content="Soja">
                                </div>
                                <!-- Imagem 4 -->
                                <div class="flex-item">
                                    <img src="${_prefixUnidade}texturizadodesoja.png" alt="Proteína vegetal texturizada de soja" class="img-fluid nome-imagem" data-tippy-content="Proteína vegetal texturizada de soja">
                                </div>
                                <!-- Imagem 5 -->
                                <div class="flex-item">
                                    <img src="${_prefixUnidade}flocaocuscuz.png" alt="Flocão de milho para cuscuz" class="img-fluid nome-imagem" data-tippy-content="Flocão de milho para cuscuz">
                                </div>
                                <!-- Imagem 6 -->
                                <div class="flex-item">
                                    <img src="${_prefixUnidade}quibe.png" alt="Trigo para quibe" class="img-fluid nome-imagem" data-tippy-content="Trigo para quibe">
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>            
                        
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "./conf/css/pagina21.css" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": "./conf/js/pagina21.js"
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },

    // PÁGINA 22 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[22]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 22,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                        <div class="container my-5">
                            <div class="row align-items-center">
                                <!-- Texto à esquerda -->
                                <div class="col-md-6">
                                    <div class="d-flex flex-column justify-content-center">
                                        <p class="text-justify">
                                            Para calcular o Índice de Reidratação (IR), deve ser utilizada a seguinte fórmula: 
                                        </p>
                                    </div>
                                </div>

                                <!-- Imagem à direita -->
                                <div class="col-md-6 text-center">
                                    <div class="img-container">
                                        <div class="item-ligthbox-img img-photo-actions position-relative" style="border:none;background:none;">
                                            <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0; background-color: rgba(0, 0, 0, 0.5); color: white;">
                                                Imagem: Alimentação para soldados em guerra.
                                            </p>
                                            <img src="${_prefixUnidade}formulair.png" class="img-fluid rounded" alt="formulair.png">
                                            <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0; background-color: rgba(0, 0, 0, 0.5); color: white;">
                                                Fonte: Piterest/Reprodução.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>        
                        
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },

    // PÁGINA 23 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[23]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 23,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">
                    <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                        <div class="container my-5">
                            <div class="row align-items-center">
                                <!-- Texto à esquerda -->
                                <div class="col-md-6">
                                    <div class="d-flex flex-column justify-content-center">
                                        <p class="text-justify">
                                            É importante saber que com a fórmula do IR, é possível determinar o peso reidratado e o peso seco (líquido) do alimento. Além disso, alguns professores solicitam nas provas, pois pode ser exigido em concurso: 
                                        </p>
                                    </div>
                                </div>

                                <!-- Imagem à direita -->
                                <div class="col-md-6 text-center">
                                    <div class="img-container">
                                        <div class="item-ligthbox-img img-photo-actions position-relative" style="border:none;background:none;">
                                            <p class="description-descricao position-absolute top-0 start-0 w-100" style="margin:0; background-color: rgba(0, 0, 0, 0.5); color: white;">
                                                Imagem: Alimentação para soldados em guerra.
                                            </p>
                                            <img src="${_prefixUnidade}formulairxpeso.png" class="img-fluid rounded" alt="formulairxpeso.png">
                                            <p class="description-font position-absolute bottom-0 start-0 w-100" style="margin:0; background-color: rgba(0, 0, 0, 0.5); color: white;">
                                                Fonte: Piterest/Reprodução.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>        
                        
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },


    // PÁGINA 24 Indicadores utilizados no preparo dos alimentos e no controle do desperdício
    /*
        FILTRO
            ------> pg[24]
            ------> CM[Fator de correção/fator de conversão - Continuacao]
        AQUI ÉA PÁGINA DE Fator de correção/fator de conversão - Continuacao
        
    */

    {
        "pagina": 24,
        "nome_page": `Indicadores utilizados no preparo dos alimentos e no controle do desperdício`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                        <div class="pagina-tipo-texto animation">

                            <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                                <div class="card mb-3" style="max-width: 100%; background: #ab0b0a;">
                                    <div class="row g-0 align-items-center justify-content-center">
                                     
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title text-light" style="color:#0d0d40;font-style:italic;font-weight:700;">Você sabia?
                                                </h5>
                                                <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-2">
                                                    <h3  class="text-light w-100" style="font-size:1rem;text-align:left !important;">O indicador de reidratação tem vantagens como:</h3>
                                                    
                                                    <p class="card-text text-light"><strong>Economia de Tempo e Gás:</strong>Quanto maior o tempo de reidratação, menor será o tempo de cozimento. Isso significa uma economia significativa de gás ou energia elétrica na hora de preparar suas refeições. </p>  
                                                    
                                                    <p class="card-text text-light"><strong>Aumento de Volume:</strong>Ao ficar de molho, o alimento tende a aumentar de volume, geralmente duas a três vezes o seu peso inicial, devido à sua hidratação. </p>  

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },


     // PÁGINA 25 Indicador de sobra, limpa e resto de ingesta 
    /*
        FILTRO
            ------> pg[25]
            ------> CM[Indicador de sobra, limpa e resto de ingesta ]
        AQUI ÉA PÁGINA DE Indicador de sobra, limpa e resto de ingesta 
        
    */

    {
        "pagina": 25,
        "nome_page": `Indicador de sobra, limpa e resto de ingesta`,
        "tipo": "Texto",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-texto",
        "data": {
            "container_render": `
                <div class="pagina-tipo-texto animation">

                    <div class="pagina-tipo-texto--box-texto ouvinte-sound">
                            <div class="container my-5">
                                <div class="row">
                                    <!-- Coluna do texto -->
                                    <div class="col-md-8">
                                        <p>Desperdiçar é o mesmo que extraviar o que pode ser aproveitado para benefício de outrem, de uma empresa ou da própria natureza.</p>
                                        <p>O Brasil parece ser um dos países mais férteis para o cultivo do desperdício. Aqui, recursos naturais, financeiros e até alimentos são literalmente atirados na lata do lixo, sem possibilidade de retorno.</p>
                                        <p>O desperdício está incorporado à cultura brasileira, portanto, difícil de ser modificado, afetando a produção do país como um todo, resultando em sintomas perniciosos para toda a sociedade.</p>
                                        <p>O decreto-lei nº 2.848, de 1940, impede que restaurantes doem as sobras de comida para quem precisa, responsabilizando os restaurantes no caso de uma pessoa passar mal com o alimento doado. A quantidade de alimentos jogada no lixo poderia alimentar mais de 10 milhões de brasileiros diariamente.</p>
                                    </div>
                                    
                                    <!-- Coluna da imagem -->
                                    <div class="col-md-4 text-center">
                                        <img src="${_prefixUnidade}desperdicioalimento.png" alt="Desperdício de alimentos" class="img-fluid rounded">
                                    </div>
                                </div>
                            </div>

                    </div>

                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            "lupa": "Yes",
            "inserir_estilo_pagina": [
                {
                    "url": "" // Colocar o Estilo somente nessa Página
                }
            ],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "",
                    "src": ""
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                            <i data-lucide="maximize-2"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-podcast">
                                            <i data-lucide="audio-lines"></i>
                                        </button>
                                    `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-videoaula">
                                            <i data-lucide="video"></i>
                                        </button>
                                    `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                                        <button class="btn-ferramentas" aria-label="close">
                                            <i data-lucide="pencil-ruler"></i>
                                        </button>
                                    `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                                        <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                                        
                                    `
                    },
                    "Destacar": {
                        "ativa": true,
                        "html": `
                                         <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                                    `,
                        "acionador": `
            
                                        <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                            <div class="cores-destaque-inline-btn">
                                                    <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                    <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                    <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                    <button class="toolbar-button" id="limpar">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                        Limpar
                                                    </button>
                                             </div>
                                        </div>
            
                                    `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                                    `
                    },
                    "Ouvinte": {
                        "ativa": true,
                        "html": `
                                         <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                                    `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                                        <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                                    `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                                         <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionário</button>
                                    `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                                          <button><i data-lucide="x" id="close_box"></i></button>
                                    `
                    },
                }

            ],
            "cores": {
                // "sidebar": "red",
                // "fundo": "red",
                // "icones": "rgb(0, 110, 201)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 2
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".pagina-tipo-texto--box-texto",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                }
            },
            "fonte": {
                "titulo": "1rem",
                // "paragrafos": "1rem",
                "font_familly": "Lato",
                // "cor_fonte":"black",
                // "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logopreta.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                            animate__animated animate__fadeInDown animate__slow
                        `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".ouvinte-sound"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": ".pagina-tipo-texto--box-texto",
                        "blocoRenderizacao": `
                                        <div id="toolbar" style="display: none; position: absolute;">
                                            <div class="toolbar-container">
                                                <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                                    <div class="cores-destaque">
                                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                                        <button class="toolbar-button" id="limpar">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                            Limpar
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                                <button class="toolbar-button" id="resumo">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                                    Resumo
                                                </button>
                                                <button class="toolbar-button" id="destacar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                    Destacar
                                                </button>
                                                <button class="toolbar-button" id="dicionario-toolbar">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                                    Dicionário
                                                </button>
                                                
                                            </div>
                                        </div>
            
                                   `
                    }
                }
            ]
        }
    },



    // PÁGINA 26 Video Disciplina
    /*
        FILTRO
            ------> pg[26]
            ------> CM[Video Disciplina]
        AQUI ÉA PÁGINA DE Video Disciplina
        
    */
    {
        "pagina": 26,
        "nome_page": `Video Aula`,
        "tipo": "Video",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-video",
        "data": {
            "container_render": `
                <div class="pagina-tipo-video animation">

                  <div class="pagina-tipo-video--box-video">
                        <div class="f-carousel render-video-container" id="carrosel-video">
                            <!-- Renderizador de Video -->
                            <!-- 
                            <div class="f-carousel__slide" data-thumb-src="https://i.vimeocdn.com/video/112836958_192x144.jpg">
                                <iframe class="iframe-video" src="https://player.vimeo.com/video/112836958" ></iframe>
                            </div>
                            -->
                            
                        </div>
                  </div>

                  <div class="transcritor--box-video">
                    <div>
                        <!-- cabeçalho -->
                        <p class="header-transcritor-video">Transcrição</p>
                    </div>

                    <div class="body-transcritor-video">
                        <!-- body -->
        
                    </div>

                    <div class="footer-transcritor-video">
                        <!-- footer -->
                        <button>Gerar Transcrição</button>
                    </div>
                  </div>
                
                </div>
            `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": "./conf/css/pagina5.css"
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": false,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                            <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                <i data-lucide="maximize-2"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                            <button class="btn-podcast">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": false,
                        "html": `
                            <button class="btn-videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas" aria-label="close">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": false,
                        "html": `
                            <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                            
                        `
                    },
                    "Destacar": {
                        "ativa": false,
                        "html": `
                             <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                        `,
                        "acionador": `

                            <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                <div class="cores-destaque-inline-btn">
                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                        <button class="toolbar-button" id="limpar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                            Limpar
                                        </button>
                                 </div>
                            </div>

                        `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                        `
                    },
                    "Ouvinte": {
                        "ativa": false,
                        "html": `
                             <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                        `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                            <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                        `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                        `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                              <button><i data-lucide="x" id="close_box"></i></button>
                        `
                    },
                }

            ],
            "marcador": [{
                "tipo": "p",
                "posicao": 0,
                "palavras": "Olá, estudante! Bem-vindo à Unidade 1!",
                "attr_unitario": {
                    "Olá, estudante! Bem-vindo à Unidade 1!": {
                        "attr": "font-weight=[999], Font-size=[18px]",

                    },

                },
                // "fundo": "blue",
                // "corTexto": "black",
                // "padding": "0.3rem",


            }],
            "setas": {
                "corSetas": "#fff",
                "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "cores": {
                "sidebar": "#000000",
                "fundo": "#011C41",
                "icones": "white",
                "iconesEspecificos": {
                    ".openAnnotation": {
                        "cor": "white",
                    }
                }
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 8 e Transcritor
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".transcritor--box-video",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                },
                "_renderizadar_video": {
                    "status": true,
                    "onde_colocar_video": ".render-video-container",
                },

            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logobranca.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                    animate__animated animate__fadeInDown animate__slow
                `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".transcritor--box-video"
                    }
                }
            ]
        }
    },

    // PÁGINA 27 Audio Disciplina
    /*
        FILTRO
            ------> pg[27]
            ------> CMAudio Disciplina]
        AQUI ÉA PÁGINA DE Audio Disciplina
        
    */
    {
        "pagina": 27,
        "nome_page": `Podcast`,
        "tipo": "Audio",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-audio",
        "data": {
            "container_render": `
            <div class="pagina-tipo-audio animation">

                <div class="pagina-tipo-audio--box-audio">
                    <div class="render-audio-container" id="carrosel-audio">

                    </div>
                </div>

                <div class="transcritor--box-audio">
                    <div>
                        <!-- cabeçalho -->
                        <p class="header-transcritor-audio">Transcrição</p>
                    </div>

                    <div class="body-transcritor-audio">
                        <!-- body -->
                    
                    </div>

                    <div class="footer-transcritor-audio">
                        <!-- footer -->
                        <button>Gerar Transcrição</button>
                    </div>
                </div>
            
            </div>
        `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": "./conf/css/pagina5.css"
            }],
            "inserir_escript_pagina": [{
                "onde": "body",
                "posicao": "",
                "src": ""
            }],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": false,
                        "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                            <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                <i data-lucide="maximize-2"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": false,
                        "html": `
                            <button class="btn-podcast">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas" aria-label="close">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": false,
                        "html": `
                            <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                            
                        `
                    },
                    "Destacar": {
                        "ativa": false,
                        "html": `
                             <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                        `,
                        "acionador": `

                            <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                <div class="cores-destaque-inline-btn">
                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                        <button class="toolbar-button" id="limpar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                            Limpar
                                        </button>
                                 </div>
                            </div>

                        `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                        `
                    },
                    "Ouvinte": {
                        "ativa": false,
                        "html": `
                             <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                        `
                    },
                    "Download": {
                        "ativa": true,
                        "html": `
                            <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                        `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                        `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                              <button><i data-lucide="x" id="close_box"></i></button>
                        `
                    },
                }

            ],
            "marcador": [{
                "tipo": "p",
                "posicao": 0,
                "palavras": "Olá, estudante! Bem-vindo à Unidade 1!",
                "attr_unitario": {
                    "Olá, estudante! Bem-vindo à Unidade 1!": {
                        "attr": "font-weight=[999], Font-size=[18px]",

                    },

                },
                // "fundo": "blue",
                // "corTexto": "black",
                // "padding": "0.3rem",


            }],
            "cores": {
                "sidebar": "#000000",
                "fundo": "#011C41",
                "icones": "white",
                // Cores de icones Especificas
                "iconesEspecificos": {
                    ".openAnnotation": {
                        "cor": "white",
                    }
                }
            },
            "setas": {
                "corSetas": "#fff",
                "corFundo": "rgba(255, 255, 255, 0.174)"
            },
            "configuracoes_gerais": {

                // Habilitar Procurar de Paragrafos ná Pagina 8 e Transcritor
                "_procurar_paragrafos": {
                    "status": true,
                    "onde_procurar": ".transcritor--box-audio",
                },
                "_procurar_animacao": {
                    "status": true,
                    "onde_procurar_animacao": ".animation",
                },
                "_renderizar_audio": {
                    "status": true,
                    "onde_colocar_audio": ".render-audio-container",
                },

            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logobranca.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                animate__animated animate__fadeInDown animate__slow
            `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".transcritor--box-audio"
                    }
                }
            ]
        }
    },

    // PÁGINA 28 Atividade Disciplina
    /*
        FILTRO
            ------> pg[28]
            ------> CMAudio Disciplina]
        AQUI ÉA PÁGINA DE Atividade Disciplina
        
    */
    {
        "pagina": 28,
        "nome_page": `Atividade`,
        "tipo": "Atividade",
        "id_page": ".content-render-api",
        "id_component": ".c-carousel__slides",
        "id_elemento_para_modificar": "container-atividade",
        "data": {
            "container_render": `
                <div class="pagina-tipo-atividade animation">
                    <div id="h5p-container"></div>
                </div>
        `,
        },
        "forcarAtualizacao": {
            "variaveis": [
                {
                    "Nome": "--animacao-sidebar",
                    "Entrada": "none",
                    "Saida": "slideDown 2s forwards"
                }
            ]
        },
        "paramentros": {
            // Injetar estilos na Pagina
            "inserir_estilo_pagina": [{
                "url": "./conf/css/pagina5.css"
            }],
            "inserir_escript_pagina": [
                {
                    "onde": "body",
                    "posicao": "beforeend",
                    "src": "./conf/js/atividade.js"
                }
            ],
            "ferramentas": [
                {
                    "container": "icons-action--container",
                    "Podcast": {
                        "ativa": true,
                        "html": `
                            <button class="btn-podcast " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Podcast">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas " aria-label="close" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ferramentas">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },
                    "FullScreen": {
                        "ativa": true,
                        "html": `
                            <button class="btn-fullscreen " aria-label="min" data-bs-toggle="tooltip" data-bs-placement="bottom" title="FullScreen">
                                <i data-lucide="maximize-2"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "icons-action--container-mobile",
                    "Podcast": {
                        "ativa": false,
                        "html": `
                            <button class="btn-podcast">
                                <i data-lucide="audio-lines"></i>
                            </button>
                        `
                    },
                    "Videoaula": {
                        "ativa": true,
                        "html": `
                            <button class="btn-videoaula">
                                <i data-lucide="video"></i>
                            </button>
                        `
                    },
                    "Ferramentas": {
                        "ativa": true,
                        "html": `
                            <button class="btn-ferramentas" aria-label="close">
                                <i data-lucide="pencil-ruler"></i>
                            </button>
                        `
                    },

                },
                {
                    "container": "box-tools-inline",
                    "Resulmo": {
                        "ativa": true,
                        "html": `
                            <button class="abrir-resumo"><i data-lucide="file-text"></i>Resumo</button>
                            
                        `
                    },
                    "Destacar": {
                        "ativa": false,
                        "html": `
                             <button class="acionador abrir-destacar"><i data-lucide="pencil"></i>Destacar</button>
                        `,
                        "acionador": `

                            <div class="box-marca-cores-inline-btn" id="boxMarcaCores-inline-btn">
                                <div class="cores-destaque-inline-btn">
                                        <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                        <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                        <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                        <button class="toolbar-button" id="limpar">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                            Limpar
                                        </button>
                                 </div>
                            </div>

                        `
                    },
                    "Notas": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-annotation"><i data-lucide="sticky-note"></i>Notas</button>
                        `
                    },
                    "Ouvinte": {
                        "ativa": false,
                        "html": `
                             <button class="btn-ouvinte" data-bs-toggle="modal" data-bs-target="#modal-ouvinte"><i data-lucide="ear"></i>Ouvinte</button>
                        `
                    },
                    "Download": {
                        "ativa": false,
                        "html": `
                            <button pdf-data="../pdf/unidade-01.pdf"  class="baixar-pdf" ><i data-lucide="download"></i>Download</button>
                        `
                    },
                    "Dicionario": {
                        "ativa": true,
                        "html": `
                             <button class="abrir-dicionario"><i data-lucide="search"></i>Dicionario</button>
                        `
                    },
                    "close": {
                        "ativa": true,
                        "html": `
                              <button><i data-lucide="x" id="close_box"></i></button>
                        `
                    },
                }

            ],
            "cores": {
                // "sidebar": "#000000",
                // "fundo": "#011C41",
                // "icones": "white",
                // Cores de icones Especificas
                // "iconesEspecificos":{
                //     ".openAnnotation":{
                //         "cor":"white",
                //     }  
                // }
            },
            "configuracoes_gerais": {
                 // Habilitar Procurar de Paragrafos ná Pagina 6
                //  "_procurar_paragrafos": {
                //     "status": true,
                //     "onde_procurar": ".pagina-tipo-atividade",
                // },
                // "_procurar_animacao": {
                //     "status": true,
                //     "onde_procurar_animacao": ".animation",
                // }
            },
            "fonte": {
                // "titulo":"1rem",
                "paragrafos": "1rem",
                // "font_familly":"Lato",
                // "cor_fonte":"black",
                "alinhamento_texto": "justify",
                "hifens": "auto"
            },
            "logo": {
                "ativar": true,
                "img": "url(../assets/logobranca.png)",
                "posicaoY": "bottom 1.8%",
                "posicaoX": "left 0.5%",
                "tamanho": "10%",
            },
            // Animação para Texto API
            // "animacao_texto": [{
            //     "indice": "all", // 0 | all
            //     "script_animation": `
            //         animate__animated animate__fadeInDown animate__slow
            //     `
            // }],
            // Animação pra toda Página
            "animacao_elemento": [{
                "elemento": ".animation", // 0 | all
                "script_animation": `
                animate__animated animate__fadeInDown animate__slow
            `
            }],
            "modulos": [
                {
                    "audio": {
                        "ativo": true,
                        "idRef": ".transcritor--box-audio"
                    },
                    "toolbar": {
                        "ativo": true,
                        "refTools": ['editar'],
                        "idRef": "",
                        "blocoRenderizacao": `
                            <div id="toolbar" style="display: none; position: absolute;">
                                <div class="toolbar-container">
                                    <div class="box-marca-cores" id="boxMarcaCores" style="display: none;">
                                        <div class="cores-destaque">
                                            <span class="corTexto" style="background-color: red;" data-cor="red" data-color="white"></span>
                                            <span class="corTexto" style="background-color: green;" data-cor="green"  data-color="white"></span>
                                            <span class="corTexto" style="background-color: blue;" data-cor="blue"  data-color="white"></span>
                                            <button class="toolbar-button" id="limpar">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eraser"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
                                                Limpar
                                            </button>
                                            
                                        </div>
                                    </div>
                                    <button class="toolbar-button" id="resumo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                        Resumo
                                    </button>
                                    <button class="toolbar-button" id="destacar">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                        Destacar
                                    </button>
                                    <button class="toolbar-button" id="dicionario-toolbar">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-search"><path d="M21 6H3"/><path d="M10 12H3"/><path d="M10 18H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>
                                        Dicionário
                                    </button>
                                    
                                </div>
                            </div>

                       `
                    }
                }
            ]
            
        }
    },





];