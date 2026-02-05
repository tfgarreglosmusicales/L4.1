// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "serrat",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Serrat",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence L4.1",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "\u003Ch1\u003E Introducción \u003C\u002Fh1\u003E",
              "content": "\u003Ch2\u003E Gracias por participar en este estudio. \u003Cbr\u003E\u003Cbr\u003E\n\nA lo largo de la sesión vas a escuchar una serie de canciones y, después de cada una, responderás algunas preguntas relacionadas con lo que has escuchado. El objetivo del estudio es analizar cómo se procesan distintos aspectos de las canciones. \u003Cbr\u003E\u003Cbr\u003E\n\nHoy realizarás una parte del estudio y en otra sesión distinta completarás el resto. En total, escucharás cuatro canciones en cada sesión. \u003Cbr\u003E\u003Cbr\u003E\n\nLa duración aproximada de cada sesión es de una hora. \u003C\u002Fh2\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continuar →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Intro",
          "width": "l"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Ch2\u003E Durante el experimento, escucha cada canción con atención. \u003Cbr\u003E\u003Cbr\u003E\n\nLas canciones se reproducirán automáticamente y no podrás avanzar hasta que hayan terminado. Después de escuchar cada canción, responde a todas las preguntas para poder continuar. \u003Cbr\u003E\u003Cbr\u003E\n\nSi en algún momento tienes una duda o surge cualquier problema técnico, avisa al coordinador de la sesión.\u003Cbr\u003E\u003Cbr\u003E\n\nCuando estés listo\u002Fa, continúa para comenzar el experimento. \u003C\u002Fh2\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instrucciones",
          "width": "l"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "\u003Ch1\u003E Audio de Prueba \u003C\u002Fh1\u003E",
              "content": "\u003Ch2\u003E Está sonando una sintonía para comprobar el audio del dispositivo.  \u003Cbr\u003E\u003Cbr\u003E\n\nSi NO puedes escucharla, por favor, avisa al coordinador de la sesión. \u003Cbr\u003E\u003Cbr\u003E\n\nSi puedes escucharla, haz clic en \"Continuar\" para pasar a la siguiente pantalla, donde comenzará la primera canción del estudio. \u003C\u002Fh2\u003E"
            },
            {
              "required": true,
              "type": "html",
              "content": "",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continuar →",
          "submitButtonPosition": "right",
          "files": {
            "04 Pueblo.mp3": "embedded\u002F9dc3adc106faff1b8eac290058438646f180c779c88dd39e8e166ce612322daf.mp3",
            "Música de elevador- efecto de sonido. [72WbalHfQEA].mp3": "embedded\u002Fa62426cb2a5805ccddba557e1d26d8e2c8ad9a87543137a67b2753ea8110a135.mp3"
          },
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "Audio Prueba",
          "timeline": [
            {
              "type": "sound",
              "payload": {
                "src": "https:\u002F\u002Ftfgarreglosmusicales.github.io\u002FCanciones\u002FPrueba.mp3",
                "loop": "false"
              },
              "gain": "",
              "pan": "",
              "rampUp": "",
              "rampDown": "",
              "start": 0,
              "stop": "11000",
              "priority": 0
            }
          ],
          "timeout": "Never",
          "width": "l"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "1. C3V2",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "A continuación, vas a escuchar una canción. \nTras la escucha, te haremos una serie de preguntas. \n\nHaz clic en el botón de \"Continuar\" para que comience a reproducirse la canción.  "
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre Canción"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Canción 1",
                  "content": "Escucha esta canción"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {
                "04 Pueblo.mp3": "embedded\u002F9dc3adc106faff1b8eac290058438646f180c779c88dd39e8e166ce612322daf.mp3"
              },
              "responses": {
                "keydown(8)": "Gestión"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C3V2",
              "timeline": [
                {
                  "type": "sound",
                  "payload": {
                    "src": "https:\u002F\u002Ftfgarreglosmusicales.github.io\u002FCanciones\u002FC3V2.mp3",
                    "loop": false
                  },
                  "gain": "",
                  "pan": "",
                  "rampUp": "",
                  "rampDown": "",
                  "start": 0,
                  "stop": "238000",
                  "priority": 0
                }
              ],
              "timeout": "240000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "",
                  "content": "A continuación, se le presentará una serie de palabras. Debe responder si cree que esas palabras aparecían explícitamente en la canción (Sí \u002F No).  "
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Post Canción"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Items C3V2",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Junio",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 1 (Set B, P4)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Perfil",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 2  (Set B, P4)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Cristal",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 3  (Set B, P4)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Paseo",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 4  (Set B, P4)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Marco",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 5  (Set B, P4)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Muñecas",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 6  (Set B, P4)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Pedrada",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 7  (Set B, P4)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Madera",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C3V2 Item 8  (Set B, P4)  "
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "A continuación, se le presentará una frase extraída de la canción que acaba de escuchar. Debe comentarnos, teniendo en cuenta el resto de la canción, qué interpreta o qué cree que significa."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre-Frases"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "\"Juega las cartas que le da el momento, mañana es sólo un adverbio de tiempo.\"",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "textarea",
                  "label": "Interpretación:",
                  "name": "C1V1 Frase"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C3V2 Frase"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "GEMS y Abiertas",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás una lista de sensaciones o emociones. Marca el grado en que cada una de ellas describe lo que experimentaste mientras escuchabas la canción."
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "coding": "1",
                          "label": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "coding": "3",
                          "label": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "label": "Asombro",
                      "name": "asombro"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Trascendencia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "trascendencia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Ternura",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2  "
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "ternura"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Nostalgia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "nostalgia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Paz",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "paz"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Poder",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "poder"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Vitalidad",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "vitalidad"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tensión",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "tension"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tristeza",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "coding": "6",
                          "label": "6"
                        }
                      ],
                      "name": "tristeza"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Escala GEMS"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás tres preguntas abiertas acerca de tu impresión al escuchar la canción."
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué mensaje pretende transmitir la canción?",
                      "name": "Cognición"
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué sentimientos trata de evocar?",
                      "name": "Emoción"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "En general, ¿qué te ha parecido?",
                      "attributes": {
                        "type": "text"
                      },
                      "name": "Opinión"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "¿Cómo la valorarías?",
                      "attributes": {
                        "type": "number",
                        "min": "1",
                        "max": "10"
                      },
                      "name": "Valoración"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Preguntas Abiertas"
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "2. C4V1",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "A continuación, vas a escuchar una canción. \nTras la escucha, te haremos una serie de preguntas. \n\nHaz clic en el botón de \"Continuar\" para que comience a reproducirse la canción.  "
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre Canción"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Canción 2",
                  "content": "Escucha esta canción"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {
                "04 Pueblo.mp3": "embedded\u002F9dc3adc106faff1b8eac290058438646f180c779c88dd39e8e166ce612322daf.mp3"
              },
              "responses": {
                "keydown(8)": "Gestión"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C4V1",
              "timeline": [
                {
                  "type": "sound",
                  "payload": {
                    "src": "https:\u002F\u002Ftfgarreglosmusicales.github.io\u002FCanciones\u002FC4V1.mp3",
                    "loop": false
                  },
                  "gain": "",
                  "pan": "",
                  "rampUp": "",
                  "rampDown": "",
                  "start": 0,
                  "stop": "200000",
                  "priority": 0
                }
              ],
              "timeout": "201000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "",
                  "content": "A continuación, se le presentará una serie de palabras. Debe responder si cree que esas palabras aparecían explícitamente en la canción (Sí \u002F No).  "
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Post Canción"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Items C4V1",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Sufrimiento",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1 Item 1 (Set A, P2)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Caminos",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1 Item 2  (Set A, P2)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Plata",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1 Item 3  (Set A, P2)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Primavera",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1 Item 4  (Set A, P2)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Puerto",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1 Item 5  (Set A, P2)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Lectura",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1 Item 6  (Set A, P2)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Desengaños",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1  Item 7  (Set A, P2)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Cerveza",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C4V1 Item 8  (Set A, P2)  "
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "A continuación, se le presentará una frase extraída de la canción que acaba de escuchar. Debe comentarnos, teniendo en cuenta el resto de la canción, qué interpreta o qué cree que significa."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre-Frases"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "\"Camina sobre el bien y el mal, con la cadencia de su vals, mitad juicio y mitad mueca burlona.\"",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "textarea",
                  "label": "Interpretación:",
                  "name": "C1V1 Frase"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C4V1 Frase"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "GEMS y Abiertas",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás una lista de sensaciones o emociones. Marca el grado en que cada una de ellas describe lo que experimentaste mientras escuchabas la canción."
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "coding": "1",
                          "label": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "coding": "3",
                          "label": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "label": "Asombro",
                      "name": "asombro"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Trascendencia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "trascendencia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Ternura",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2  "
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "ternura"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Nostalgia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "nostalgia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Paz",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "paz"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Poder",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "poder"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Vitalidad",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "vitalidad"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tensión",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "tension"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tristeza",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "coding": "6",
                          "label": "6"
                        }
                      ],
                      "name": "tristeza"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Escala GEMS"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás tres preguntas abiertas acerca de tu impresión al escuchar la canción."
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué mensaje pretende transmitir la canción?",
                      "name": "Cognición"
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué sentimientos trata de evocar?",
                      "name": "Emoción"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "En general, ¿qué te ha parecido?",
                      "attributes": {
                        "type": "text"
                      },
                      "name": "Opinión"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "¿Cómo la valorarías?",
                      "attributes": {
                        "type": "number",
                        "min": "1",
                        "max": "10"
                      },
                      "name": "Valoración"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Preguntas Abiertas"
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "3. C1V2",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "\u003Ch2\u003E A continuación, vas a escuchar una canción. \nTras la escucha, te haremos una serie de preguntas.  \u003C\u002Fh2\u003E\n\nHaz clic en el botón de \"Continuar\" para que comience a reproducirse la canción.  "
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre Canción"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "\u003Ch1\u003E Canción 3 \u003C\u002Fh1\u003E",
                  "content": "\u003Ch2\u003E Escucha esta canción \u003C\u002Fh2\u003E"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C1 V2",
              "timeline": [
                {
                  "type": "sound",
                  "payload": {
                    "src": "https:\u002F\u002Ftfgarreglosmusicales.github.io\u002FCanciones\u002FC1V2.mp3",
                    "loop": false
                  },
                  "gain": "",
                  "pan": "",
                  "rampUp": "",
                  "rampDown": "",
                  "start": 0,
                  "stop": 289000,
                  "priority": 0
                }
              ],
              "timeout": "290000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "",
                  "content": "\u003Ch1\u003E A continuación, se te presentará una serie de palabras. Debes responder si crees que esas palabras aparecían explícitamente en la canción (Sí \u002F No).  \u003C\u002Fh1\u003E"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Post Canción"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C1V2 Items Set B",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Palomas",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 1 (Set B, P3)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Normal",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 2  (Set B, P3)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Acceso",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 3  (Set B, P3)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Esparto",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 4  (Set B, P3)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Guerra",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 5  (Set B, P3)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Eterna",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 6  (Set B, P3)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Débil",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 7  (Set B, P3)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Bolillos",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C1V2 Item 8  (Set B, P3)  "
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "A continuación, se te presentará una frase extraída de la canción que acabas de escuchar. Debes comentar, teniendo en cuenta el resto de la canción, qué interpretas o qué crees que significa."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre-Frases"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "\"Sigue el camino del pueblo hebreo y busca otra luna, tal vez mañana sonría la fortuna.\"",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "textarea",
                  "label": "Interpretación:",
                  "name": "C1V1 Frase"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C1V2 Frase"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "GEMS y Abiertas",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás una lista de sensaciones o emociones. Marca el grado en que cada una de ellas describe lo que experimentaste mientras escuchabas la canción."
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "coding": "1",
                          "label": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "coding": "3",
                          "label": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "label": "Asombro",
                      "name": "asombro"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Trascendencia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "trascendencia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Ternura",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2  "
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "ternura"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Nostalgia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "nostalgia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Paz",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "paz"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Poder",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "poder"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Vitalidad",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "vitalidad"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tensión",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "tension"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tristeza",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "coding": "6",
                          "label": "6"
                        }
                      ],
                      "name": "tristeza"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Escala GEMS"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás tres preguntas abiertas acerca de tu impresión al escuchar la canción."
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué mensaje pretende transmitir la canción?",
                      "name": "Cognición"
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué sentimientos trata de evocar?",
                      "name": "Emoción"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "En general, ¿qué te ha parecido?",
                      "attributes": {
                        "type": "text"
                      },
                      "name": "Opinión"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "¿Cómo la valorarías?",
                      "attributes": {
                        "type": "number",
                        "min": "1",
                        "max": "10"
                      },
                      "name": "Valoración"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Preguntas Abiertas"
                }
              ]
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "4. C2V1",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "A continuación, vas a escuchar una canción. \nTras la escucha, te haremos una serie de preguntas. \n\nHaz clic en el botón de \"Continuar\" para que comience a reproducirse la canción.  "
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continuar →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre Canción"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Canción 4",
                  "content": "Escucha esta canción"
                },
                {
                  "required": true,
                  "type": "html",
                  "content": "",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {
                "04 Pueblo.mp3": "embedded\u002F9dc3adc106faff1b8eac290058438646f180c779c88dd39e8e166ce612322daf.mp3"
              },
              "responses": {
                "keydown(8)": "Gestión"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C2V1",
              "timeline": [
                {
                  "type": "sound",
                  "payload": {
                    "src": "https:\u002F\u002Ftfgarreglosmusicales.github.io\u002FCanciones\u002FC2V1.mp3",
                    "loop": false
                  },
                  "gain": "",
                  "pan": "",
                  "rampUp": "",
                  "rampDown": "",
                  "start": 0,
                  "stop": "193000",
                  "priority": 0
                }
              ],
              "timeout": "194000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "",
                  "content": "A continuación, se le presentará una serie de palabras. Debe responder si cree que esas palabras aparecían explícitamente en la canción (Sí \u002F No).  "
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Post Canción"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Items C2V1",
              "shuffle": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Prójimo",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 1 (Set A, P1)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Súbita",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 2  (Set A, P1)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Lápida",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 3  (Set A, P1)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Firme",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 4  (Set A, P1)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Pésimo",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 5  (Set A, P1)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Excusas",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 6  (Set A, P1)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Compasión",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "0"
                        },
                        {
                          "label": "No",
                          "coding": "1"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 7  (Set A, P1)  "
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "title": "Nómina",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "label": "Sí",
                          "coding": "1"
                        },
                        {
                          "label": "No",
                          "coding": "0"
                        }
                      ],
                      "label": "¿Aparecía esta palabra?",
                      "name": "aparecia-esta-palabra"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "C2V1 Item 8  (Set A, P1)  "
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "A continuación, se le presentará una frase extraída de la canción que acaba de escuchar. Debe comentarnos, teniendo en cuenta el resto de la canción, qué interpreta o qué cree que significa."
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Puente Pre-Frases"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "\"¿No le gustaría acaso vencer la tentación sucumbiendo de lleno en sus brazos...?\"",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "textarea",
                  "label": "Interpretación:",
                  "name": "C1V1 Frase"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "C2V1 Frase"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "GEMS y Abiertas",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás una lista de sensaciones o emociones. Marca el grado en que cada una de ellas describe lo que experimentaste mientras escuchabas la canción."
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "options": [
                        {
                          "coding": "1",
                          "label": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "coding": "3",
                          "label": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "label": "Asombro",
                      "name": "asombro"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Trascendencia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "trascendencia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Ternura",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2  "
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "ternura"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Nostalgia",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "nostalgia"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Paz",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "paz"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Poder",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "poder"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Vitalidad",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "vitalidad"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tensión",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "label": "2",
                          "coding": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "label": "4",
                          "coding": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "label": "6",
                          "coding": "6"
                        }
                      ],
                      "name": "tension"
                    },
                    {
                      "required": true,
                      "type": "radio",
                      "label": "Tristeza",
                      "options": [
                        {
                          "label": "1",
                          "coding": "1"
                        },
                        {
                          "coding": "2",
                          "label": "2"
                        },
                        {
                          "label": "3",
                          "coding": "3"
                        },
                        {
                          "coding": "4",
                          "label": "4"
                        },
                        {
                          "label": "5",
                          "coding": "5"
                        },
                        {
                          "coding": "6",
                          "label": "6"
                        }
                      ],
                      "name": "tristeza"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Escala GEMS"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": "A continuación encontrarás tres preguntas abiertas acerca de tu impresión al escuchar la canción."
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué mensaje pretende transmitir la canción?",
                      "name": "Cognición"
                    },
                    {
                      "required": true,
                      "type": "textarea",
                      "label": "¿Qué sentimientos trata de evocar?",
                      "name": "Emoción"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "En general, ¿qué te ha parecido?",
                      "attributes": {
                        "type": "text"
                      },
                      "name": "Opinión"
                    },
                    {
                      "required": true,
                      "type": "input",
                      "label": "¿Cómo la valorarías?",
                      "attributes": {
                        "type": "number",
                        "min": "1",
                        "max": "10"
                      },
                      "name": "Valoración"
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continuar →",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Preguntas Abiertas"
                }
              ]
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "\u003Ch1\u003E ¡Muchas gracias por participar! \u003C\u002Fh1\u003E",
              "content": "\u003Ch2\u003E Ya has terminado esta sesión del estudio. Avisa al coordinador de la sesión sin cerrar esta pestaña.  \u003C\u002Fh2\u003E"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continuar →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "keypress(8)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Cierre"
        }
      ]
    }
  ]
})

// Let's go!
study.run()