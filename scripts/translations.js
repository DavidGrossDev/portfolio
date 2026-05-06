/**
 * @fileoverview Translation data for the portfolio website.
 * Contains multilingual text content for English and German languages, including navigation, sections, forms, and legal documents.
 */

/**
 * Object containing all translation strings for the website.
 * Organized by language (en/de) and then by sections like nav, landing, about_me, etc.
 * @type {Object<string, Object<string, Object>>}
 */
const translations = {
    en: {
        overlay: {
            turnMsg: "Please turn your Device"
        },
        nav: {
            about_me: "About me",
            skills: "Skills",
            contact: "Contact"
        },
        landing: {
            btn: "Let's talk!",
            scrlDown: "Scroll down"
        },
        about_me: {
            title: "About me",
            description: {
                mainContent: "Hi, I'm David — a developer who discovered a passion for programming through my work. I'm fascinated by the endless possibilities technology offers and enjoy continuously improving my skills while building practical and meaningful solutions. My focus is on web development, using technologies like JavaScript, HTML, and CSS to create modern and responsive web applications.",
                callOut: "Let's connect and create something amazing together!"
            },
            location: "I'm based in Merzig, Saarland, Germany, and open to various ways of working, including on-site, remote, or relocation opportunities.",
            passion: "I'm passionate about learning new technologies and continuously improving my skills. I enjoy exploring modern tools, frameworks, and development practices to grow as a developer and build better, more efficient solutions.",
            approach: "My approach to problem-solving is based on analytical thinking, creativity, and persistence. I enjoy breaking down complex problems into smaller parts and exploring different solutions to find the most efficient and elegant approach. Every challenge is an opportunity to learn, improve my skills, and grow as a developer. I also value collaboration and believe that exchanging ideas often leads to better solutions."
        },
        skills: {
            title: "Skills",
            mainContent: "I have gained experience working on different projects using front-end technologies such as HTML, CSS, and JavaScript. Each project has helped me strengthen my understanding of building responsive and user-friendly web applications. I'm always open to learning new technologies and adapting to modern tools and frameworks as the field continues to evolve. Continuous learning is essential to me in order to keep up with the fast-paced changes in web development and to grow as a developer.",
            callOut: "I'm enthusiastic about learning new technologies and constantly improving my skills.",
            learning: "Continually learning",
            specInterest: "I have a special interest in learning",
            btn: "Get in touch"
        },
        portfolio: {
            explore: "Explore a selection of my work here - Interact with projects to see my skills in action.",
            loco: {
                description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen."
            },
            join: {
                description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
            },
            pokedex: {
                description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information."
            }
        },
        contact: {
            title: "Contact",
            undertitle: "Got a problem to solve?",
            mainContent: "I'm looking for opportunities as a junior web developer where I can contribute to meaningful projects and continue developing my skills. I aim to add value by writing clean, maintainable code and creating modern, user-focused web applications."
        },
        form: {
            nameMsg: "Your name is required",
            emailMsg: "Your email is required",
            messageMsg: "Your message is empty",
            ppCheck: "Please accept the privacy policy.",
            succes: "Sent successfully",
            placeholder: {
                namePh: "Your Name",
                emailPh: "Your Email",
                messagePh: "Your Message"
            }
        },
        footer: {
            legNot: "Legal Notice"
        },
        legNot: {
            headline: "Legal Notice",
            imprint: {
                headline: "Imprint",
                location: "66663 Merzig (Germany)"
            },
            explore: "Exploring the Board",
            acceptance: "Acceptance of terms",
            scope: "Scope and ownership of the product",
            proprietary: "Proprietary rights",
            use: "Use of the product",
            disclaimer: "Disclaimer of warranties and limitation of liability",
            indemnity: "Indemnity"
        },
        priPol: {
            headline: "Privacy policy",
            disclaimer: "This privacy policy is a translated version of the original German text provided for convenience. In case of any discrepancies or inconsistencies, the German version shall prevail as the legally binding version.",
            overview: {
                headline: "1. Overview of data protection",
                general: {
                    headline: "General information",
                    content: "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data refers to any information that can be used to identify you personally. Detailed information on the subject of data protection can be found in our privacy policy listed below this text."
                },
                collection: {
                    headline: "Data collection on this website",
                    local: {
                        headline: "Use of local storage",
                        content: {
                            first: "This website uses the browser’s local storage to store your language preference. This information is stored locally on your device and is not transmitted to third parties.",
                            second: "The use of local storage is based on our legitimate interest in providing a user-friendly experience (Art. 6(1)(f) GDPR).",
                            third: "The stored data remains on your device until it is manually deleted."
                        }
                    },
                    responsible: {
                        headline: "Who is responsible for data collection on this website?",
                        content: "Data processing on this website is carried out by the website operator. You can find the contact details in the section “Information about the responsible party” in this privacy policy."
                    },
                    collect: {
                        headline: "How do we collect your data?",
                        content: {
                            first: "Your data is collected, on the one hand, when you provide it to us. This may, for example, include data that you enter into a contact form.",
                            second: "Other data is collected automatically or after your consent when you visit this website through our IT systems. This primarily includes technical data such as your internet browser, operating system, or the time of page access. This data is collected automatically as soon as you access this website."
                        }
                    },
                    use : {
                        headline: "What do we use your data for?",
                        content: "Some of the data is collected to ensure the proper functioning of the website. Other data may be used to analyze user behavior. If contracts are concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders, or other requests."
                    },
                    rights: {
                        headline: "What rights do you have regarding your data?",
                        content: {
                            first: "You have the right at any time to receive, free of charge, information about the origin, recipients, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you may revoke this consent at any time with effect for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. You also have the right to lodge a complaint with the competent supervisory authority.",
                            second: "You can contact us at any time if you have any questions about data protection or this privacy policy."
                        }
                    },
                    tools: {
                        headline: "Analytics tools and third-party tools",
                        content: {
                            first: "When you visit this website, your browsing behavior may be statistically analyzed. This is primarily done using analytics tools.",
                            second: "Detailed information about these analytics tools can be found in the privacy policy below."
                        }
                    }
                }
            },
            hosting: {
                headline: "2. Hosting",
                infoCall: "The content of our website is hosted by the following provider:",
                allInkl: {
                    headline: "All-Inkl",
                    content: {
                        first: "The provider is ALL-INKL.COM – Neue Medien Münnich, owner René Münnich, Hauptstraße 68, 02742 Friedersdorf, Germany (hereinafter referred to as “All-Inkl”). Further details can be found in All-Inkl’s privacy policy:",
                        second: "The use of All-Inkl is based on Art. 6(1)(f) GDPR. We have a legitimate interest in ensuring the most reliable presentation of our website. If consent has been requested, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and Section 25(1) TDDDG, insofar as the consent includes the storage of cookies or access to information on the user’s device (e.g. device fingerprinting) within the meaning of the TDDDG. Consent can be revoked at any time."
                    },
                    processing: {
                        headline: "Data processing agreement",
                        content: "We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that the service provider processes the personal data of our website visitors only in accordance with our instructions and in compliance with the GDPR."
                    }
                }
            },
            general: {
                headline: "3. General information and mandatory information",
                protection: {
                    headline: "Privacy",
                    content: {
                        first: "The operators of this website take the protection of your personal data very seriously. We handle your personal data confidentially and in accordance with applicable data protection laws and this privacy policy.",
                        second: "When you use this website, various types of personal data are collected. Personal data refers to any information that can be used to identify you personally. This privacy policy explains what data we collect, how we use it, and for what purpose.",
                        third: "Please note that data transmission over the Internet (e.g. communication via email) may be subject to security vulnerabilities. Complete protection of data against access by third parties cannot be guaranteed."
                    }
                },
                regarding: {
                    headline: "Information about the responsible party",
                    infoCall: "The responsible party for data processing on this website is as follows:",
                    content: "The responsible party is the natural or legal person who, alone or jointly with others, determines the purposes and means of processing personal data (e.g. names, email addresses, or similar information)."
                },
                storage: {
                    headline: "Data retention",
                    content: "Unless a more specific retention period is specified in this privacy policy, your personal data will be stored by us until the purpose for data processing no longer applies. If you submit a legitimate request for deletion or withdraw your consent to data processing, your data will be deleted, unless we have other legally permissible grounds for storing your personal data (e.g. retention periods required by tax or commercial law). In such cases, the data will be deleted once these grounds no longer apply."
                },
                information: {
                    headline: "General information on the legal basis for data processing on this website",
                    content: "If you have given your consent to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR, if special categories of data pursuant to Art. 9(1) GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, data processing is also carried out on the basis of Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or access to information on your device (e.g. via device fingerprinting), data processing is additionally carried out on the basis of Section 25(1) TDDDG. Consent can be revoked at any time. If your data is required for the performance of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, we process your data if this is necessary to comply with a legal obligation on the basis of Art. 6(1)(c) GDPR. Data processing may also be carried out on the basis of our legitimate interest pursuant to Art. 6(1)(f) GDPR. The specific legal bases applicable in each individual case are explained in the following sections of this privacy policy."
                },
                recipients: {
                    headline: "Recipients of personal data",
                    content: "As part of our business activities, we cooperate with various external parties. In some cases, this also requires the transfer of personal data to these external parties. We only disclose personal data to external parties if this is necessary for the performance of a contract, if we are legally obliged to do so (e.g. disclosure of data to tax authorities), if we have a legitimate interest in the disclosure pursuant to Art. 6(1)(f) GDPR, or if another legal basis permits the disclosure of data. When using processors, we only transfer personal data of our customers on the basis of a valid data processing agreement (DPA). In the case of joint processing, a joint processing agreement is concluded."
                },
                revocation: {
                    headline: "Withdrawal of your consent to data processing",
                    content: "Many data processing operations are only possible with your explicit consent. You may withdraw your consent at any time. The lawfulness of the data processing carried out prior to the withdrawal remains unaffected." 
                },
                right: {
                    headline: "Right to object to data processing in specific cases and to direct marketing (Art. 21 GDPR)",
                    content: {
                        first: "IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21(1) GDPR).",
                        second: "IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH MARKETING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR)."
                    }
                },
                lodge: {
                    headline: "Right to lodge a complaint with the competent supervisory authority",
                    content: "In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work, or the place of the alleged infringement. This right exists without prejudice to any other administrative or judicial remedies."
                },
                portability: {
                    headline: "Right to data portability",
                    content: "You have the right to receive the data that we process automatically based on your consent or in the performance of a contract, in a commonly used, machine-readable format, and to have it transmitted to yourself or to a third party. If you request the direct transfer of the data to another controller, this will only be carried out where technically feasible."
                },
                deletion: {
                    headline: "Access, rectification and erasure",
                    content: "Within the framework of the applicable legal provisions, you have the right at any time to obtain, free of charge, information about your stored personal data, its origin, recipients, and the purpose of processing, as well as, where applicable, the right to request the rectification or erasure of this data. You can contact us at any time if you have any questions regarding personal data."
                },
                restriction: {
                    headline: "Right to restriction of processing",
                    infoCall: "You have the right to request the restriction of the processing of your personal data. You may contact us at any time to exercise this right. The right to restriction of processing applies in the following cases:",
                    listItems: {
                        first: "If you contest the accuracy of the personal data stored by us, we will generally need time to verify this. During this period, you have the right to request the restriction of the processing of your personal data.",
                        second: "If the processing of your personal data is unlawful, you may request the restriction of processing instead of its erasure.",
                        third: "If we no longer require your personal data, but you need it for the establishment, exercise, or defense of legal claims, you have the right to request the restriction of the processing of your personal data instead of its erasure.",
                        fourth: "If you have lodged an objection pursuant to Art. 21(1) GDPR, a balancing of your interests and ours must be carried out. Until it is determined whose interests prevail, you have the right to request the restriction of the processing of your personal data."
                    },
                    content: "If you have restricted the processing of your personal data, such data may – apart from storage – only be processed with your consent or for the establishment, exercise, or defense of legal claims, for the protection of the rights of another natural or legal person, or for reasons of important public interest of the European Union or a Member State."
                },
                ssl: {
                    headline: "SSL or TLS encryption",
                    content: {
                        first: "This website uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the website operator. You can recognize an encrypted connection by the change in the browser’s address bar from “http://” to “https://” and by the lock symbol in your browser.",
                        second: "If SSL/TLS encryption is enabled, the data you transmit to us cannot be read by third parties."
                    }
                }
            },
            collection: {
                headline: "4. Data collection on this website",
                contactForm: {
                    headline: "Contact form",
                    content: {
                        first: "If you send us inquiries via the contact form, the information you provide, including the contact details you enter, will be stored by us for the purpose of processing your request and for handling any follow-up questions. We will not share this data without your consent.",
                        second: "The processing of this data is based on Art. 6(1)(b) GDPR, provided that your request is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, processing is based on our legitimate interest in effectively handling the inquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR), if such consent has been requested. Consent can be withdrawn at any time.",
                        third: "The data you enter in the contact form will be stored by us until you request its deletion, withdraw your consent to its storage, or the purpose for storing the data no longer applies (e.g. after your request has been fully processed). Mandatory statutory provisions, in particular retention periods, remain unaffected."
                    }
                },
                inquiries: {
                    headline: "Inquiries by email, telephone or fax",
                    content: {
                        first: "If you contact us by email, telephone, or fax, your inquiry, including all personal data arising from it (such as your name and the content of your inquiry), will be stored and processed by us for the purpose of handling your request. We will not share this data without your consent.",
                        second: "The processing of this data is based on Art. 6(1)(b) GDPR, provided that your request is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, processing is based on our legitimate interest in effectively handling the inquiries addressed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR), if such consent has been requested. Consent can be withdrawn at any time.",
                        third: "The data you send to us via contact inquiries will be stored by us until you request its deletion, withdraw your consent to its storage, or the purpose for storing the data no longer applies (e.g. after your request has been fully processed). Mandatory statutory provisions, in particular statutory retention periods, remain unaffected."
                    }
                }
            },
            tools: {
                headline: "5. Plugins and tools",
                fonts: {
                    headline: "Google Fonts (lokales Hosting)",
                    content: {
                        first: "This website uses Google Fonts, which are provided by Google, to ensure a consistent display of fonts. The Google Fonts are installed locally. No connection to Google servers is established.",
                        second: "Further information on Google Fonts can be found at:",
                        third: "and in Google’s privacy policy:"
                    }
                }
            },
            source:"Source:"
        }
    },
    de: {
        overlay: {
            turnMsg: "Bitte dreh dein Gerät"
        },
        nav: {
            about_me: "Über mich",
            skills: "Fähigkeiten",
            contact: "Kontakt"
        },
        landing: {
            btn: "Kontaktieren!",
            scrlDown: "Weiter scrollen"
        },
        about_me: {
            title: "Über mich",
            description: {
                mainContent: "Hi, ich bin David — ein Entwickler, der durch seine berufliche Tätigkeit eine Leidenschaft für das Programmieren entdeckt hat. Ich bin fasziniert von den unzähligen Möglichkeiten, die Technologie bietet, und habe Freude daran, meine Fähigkeiten kontinuierlich weiterzuentwickeln und dabei praktische sowie sinnvolle Lösungen zu entwickeln. Mein Fokus liegt auf der Webentwicklung, wobei ich Technologien wie JavaScript, HTML und CSS nutze, um moderne und responsive Webanwendungen zu erstellen.",
                callOut: "Lass uns gemeinsam etwas Großartiges schaffen!"
            },
            location: "Ich lebe in Merzig, Saarland und bin offen für Vor-Ort-, Remote- oder Umzugsoptionen.",
            passion: "Ich habe große Freude daran, neue Technologien zu lernen und mich kontinuierlich weiterzuentwickeln. Dabei arbeite ich gerne mit modernen Tools, Frameworks und Entwicklungsansätzen, um als Entwickler zu wachsen und effiziente, hochwertige Lösungen zu entwickeln.",
            approach: "Mein Ansatz zur Problemlösung basiert auf analytischem Denken, Kreativität und Ausdauer. Ich zerlege komplexe Probleme in kleinere Schritte und erkunde verschiedene Lösungswege, um die effizienteste und zugleich eleganteste Lösung zu finden. Jede Herausforderung ist für mich eine Chance, zu lernen, meine Fähigkeiten zu verbessern und als Entwickler zu wachsen. Zudem lege ich großen Wert auf Zusammenarbeit, da der Austausch von Ideen häufig zu besseren Ergebnissen führt."
        },
        skills: {
            title: "Fähigkeiten",
            mainContent: "Ich habe an verschiedenen Projekten mit Frontend-Technologien wie HTML, CSS und JavaScript gearbeitet. Dabei konnte ich mein Verständnis für die Entwicklung responsiver und benutzerfreundlicher Webanwendungen stetig verbessern. Ich bin offen für neue Technologien und passe mich gerne modernen Tools und Frameworks an, da sich die Webentwicklung ständig weiterentwickelt. Kontinuierliches Lernen ist für mich ein wichtiger Bestandteil, um als Entwickler zu wachsen und Schritt mit den schnellen Veränderungen der Branche zu halten.",
            callOut: "Ich habe große Freude daran, neue Technologien zu erlernen und meine Fähigkeiten stetig weiterzuentwickeln.",
            learning: "Kontinuierlich lernen",
            specInterest: "Speziell Interessiert am lernen von",
            btn: "Kontakt aufnehmen"
        },
        portfolio: {
            explore: "Schau dir einige meiner Arbeiten an - Interagiere mit den Projekten mache dir einen Eindruck.",
            loco: {
                description: "Spring, renn und Wurf-Spiel basierent auf Objekt-Orientierung. Hilf Pepe Coins und Tabasco für den Kampf gegen die verrückten Hühner zu finden."
            },
            join: {
                description: "Ein Aufgabenmanager, inspiriert vom Kanban-System. Aufgaben lassen sich per Drag-and-Drop erstellen und organisieren, außerdem können Benutzer und Kategorien zugewiesen werden."
            },
            pokedex: {
                description: "Basierend auf der PokéAPI, einer einfachen Bibliothek zur Bereitstellung und Katalogisierung von Pokémon-Informationen."
            }
        },
        contact: {
            title: "Kontakt",
            undertitle: "Hast du ein Problem, das gelöst werden soll?",
            mainContent: "Ich suche nach einer Position als Junior Web Developer, in der ich an sinnvollen Projekten mitarbeiten und mich fachlich weiterentwickeln kann. Dabei ist es mein Ziel, Mehrwert zu schaffen, indem ich sauberen, wartbaren Code schreibe und moderne, benutzerorientierte Webanwendungen entwickle."
        },
        form: {
            nameMsg: "Dein name ist erforderlich",
            emailMsg: "Deine Email ist erforderlich",
            messageMsg: "Deine Nachricht ist leer",
            ppCheck: "Bitte akzeptiere die Datenschutzerklärung",
            succes: "Erfolgreich gesendet",
            placeholder: {
                namePh: "Dein Name",
                emailPh: "Deine Email",
                messagePh: "Deine Nachricht"
            }
        },
        footer: {
            legNot: "Rechtlicher Hinweis"
        },
        legNot: {
            headline: "Rechtlicher Hinweis",
            imprint: {
                headline: "Impressum",
                location: "66663 Merzig (Deutschland)"
            },
            explore: "Kontaktinformationen",
            acceptance: "Akzeptieren der Nutzungsbedingungen",
            scope: "Umfang und Eigentumsrechte des Produkts",
            proprietary: "Eigentumsrechte",
            use: "Verwendung des Produkts",
            disclaimer: "Gewährleistungsausschluss und Haftungsbeschränkung",
            indemnity: "Entschädigung"
        },
        priPol: {
            headline: "Datenschutzerklärung",
            disclaimer: "",
            overview: {
                headline: "1. Datenschutz auf einen Blick",
                general: {
                    headline: "Allgemeine Hinweise",
                    content: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
                },
                collection: {
                    headline: "Datenerfassung auf dieser Website",
                    local: {
                        headline: "Verwendung von Local Storage",
                        content: {
                            first: "Diese Website nutzt den Local Storage Ihres Browsers, um Ihre Sprachpräferenz zu speichern. Diese Information wird ausschließlich lokal auf Ihrem Endgerät gespeichert und nicht an Dritte weitergegeben.",
                            second: "Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an einer nutzerfreundlichen Darstellung (Art. 6 Abs. 1 lit. f DSGVO).",
                            third: "Die gespeicherten Daten verbleiben auf Ihrem Endgerät, bis Sie diese manuell löschen."
                        }
                    },
                    responsible: {
                        headline: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
                        content: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen."
                    },
                    collect: {
                        headline: "Wie erfassen wir Ihre Daten?",
                        content: {
                            first: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
                            second: "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
                        }
                    },
                    use : {
                        headline: "Wofür nutzen wir Ihre Daten?",
                        content: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet."
                    },
                    rights: {
                        headline: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
                        content: {
                            first: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
                            second: "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden."
                        }
                    },
                    tools: {
                        headline: "Analyse-Tools und Tools von Drittanbietern",
                        content: {
                            first: "Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.",
                            second: "Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung."
                        }
                    }
                }
            },
            hosting: {
                headline: "2. Hosting",
                infoCall: "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:",
                allInkl: {
                    headline: "All-Inkl",
                    content: {
                        first: "Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerklärung von All-Inkl:",
                        second: "Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar."
                    },
                    processing: {
                        headline: "Auftragsverarbeitung",
                        content: "Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet."
                    }
                }
            },
            general: {
                headline: "3. Allgemeine Hinweise und Pflichtinformationen",
                protection: {
                    headline: "Datenschutz",
                    content: {
                        first: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
                        second: "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
                        third: "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich."
                    }
                },
                regarding: {
                    headline: "Hinweis zur verantwortlichen Stelle",
                    infoCall: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:",
                    content: "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet."
                },
                storage: {
                    headline: "Speicherdauer",
                    content: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe."
                },
                information: {
                    headline: "Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website",
                    content: "Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert."
                },
                recipients: {
                    headline: "Empfänger von personenbezogenen Daten",
                    content: "Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen."
                },
                revocation: {
                    headline: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
                    content: "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt." 
                },
                right: {
                    headline: "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)",
                    content: {
                        first: "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).",
                        second: "WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO)."
                    }
                },
                lodge: {
                    headline: "Beschwerderecht bei der zuständigen Aufsichtsbehörde",
                    content: "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe."
                },
                portability: {
                    headline: "Recht auf Datenübertragbarkeit",
                    content: "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."
                },
                deletion: {
                    headline: "Auskunft, Berichtigung und Löschung",
                    content: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden."
                },
                restriction: {
                    headline: "Recht auf Einschränkung der Verarbeitung",
                    infoCall: "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:",
                    listItems: {
                        first: "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
                        second: "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.",
                        third: "Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
                        fourth: "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."
                    },
                    content: "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden."
                },
                ssl: {
                    headline: "SSL- bzw. TLS-Verschlüsselung",
                    content: {
                        first: "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
                        second: "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden."
                    }
                }
            },
            collection: {
                headline: "4. Datenerfassung auf dieser Website",
                contactForm: {
                    headline: "Kontaktformular",
                    content: {
                        first: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
                        second: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
                        third: "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt."
                    }
                },
                inquiries: {
                    headline: "Anfrage per E-Mail, Telefon oder Telefax",
                    content: {
                        first: "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
                        second: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
                        third: "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt."
                    }
                }
            },
            tools: {
                headline: "5. Plugins und Tools",
                fonts: {
                    headline: "Google Fonts (lokales Hosting)",
                    content: {
                        first: "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.",
                        second: "Weitere Informationen zu Google Fonts finden Sie unter:",
                        third: "und in der Datenschutzerklärung von Google:"
                    }
                }
            },
            source:"Quelle:"
        }
    }
}

