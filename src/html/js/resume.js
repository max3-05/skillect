var skillectApp = angular.module('skillectApp', []);

skillectApp.filter('translate', ['$rootScope', function($rootScope) {
    // The code here executes only once, during initialization.
    // We'll return the actual filter function that's executed
    // many times.
    var tables = {
        'en': {
            'server': 'Server side',
            '.net': '.NET',
            'java': 'Java',
            'client': 'Client side',
            'general': 'General skills'

        }
    };
    $rootScope.currentLanguage = 'en';
    return function(label) {
        // tables is a nested map; by first selecting the
        // current language (kept in the $rootScope as a
        // global variable), and selecting the label,
        // we get the correct value.
        return tables[$rootScope.currentLanguage][label] || label;
    };
}]);

skillectApp.controller('ShowResumeCtrl', function ($scope, $sce) {
    $scope.search = {
        "techs": [
        
        ]
    };

    $scope.renderHtml = function(html_code)
    {
        return $sce.trustAsHtml(html_code);
    };

    $scope.techFilter = function(item) {
        if ($scope.search.techs.length == 0) {
            return true;
        }
        
        for(i = 0; i < $scope.search.techs.length; i++) { 
            if (item.techs.indexOf($scope.search.techs[i]) != -1) {
                return true;
            }
        }
        return false;
    };

    $scope.resume = {
        "name": "Maksym Rykin",
        "email": "max.rykin@gmail.com",
        "address": "Stoykosti st. 7, Saint-Petersburg, Russia",
        "phone": "+7 981 720 39 10",
        "skype": "max3.05",
        "statement": "",
        "techs": [
            {
                "key": "server",
                "stack": [
                    {
                        "key": "php",
                        "stack": [
                            { "key": "Language basic", "value": 9 },
                            { "key": "PDO", "value": 8 },
                            { "key": "Doctrine", "value": 7 },
                            { "key": "Yii", "value": 8 },
                            { "key": "Composer", "value": 9 },
                            { "key": "Phing", "value": 8 },
                            { "key": "PHPUnit", "value": 7 }
                        ]
                    },
                    {
                        "key": ".net",
                        "stack": [
                            { "key": "Language basic", "value": 8 },
                            { "key": "Linq", "value": 6 },
                            { "key": "Platform Invoke", "value": 8 },
                            { "key": "T4 templates", "value": 6 },
                            { "key": "ASP.NET", "value": 7 },
                            { "key": "Entity Framework", "value": 7 },
                            { "key": "MS Office 2007/2010/2013 Integration", "value": 8 },
                            { "key": "SharePoint 2007/2010/2013", "value": 7 }
                        ]
                    },
                    {
                        "key": "java",
                        "stack": [
                            { "key": "Language Basic", "value": 8 },
                            { "key": "JavaEE", "value": 7 },
                            { "key": "Persistence", "value": 7 },
                            { "key": "Hibernate", "value": 8 },
                            { "key": "Spring DI", "value": 8 },
                            { "key": "Jax-RS", "value": 8 },
                            { "key": "Maven", "value": 8 },
                            { "key": "Gradle", "value": 9 },
                            { "key": "JUnit", "value": 7 }
                        ]
                    },
                    {
                        "key": "python",
                        "stack": [
                            { "key": "Language basic", "value": 8 },
                            { "key": "bottlepy", "value": 8 },
                            { "key": "SQLAlchemy", "value": 8 },
                            { "key": "django", "value": 7 },
                            { "key": "flask", "value": 6 }
                        ]
                    }
                ]
            },
            {
                "key": "client",
                "stack": [
                    {
                        "key": "html",
                        "stack": [
                            {"key": "HTML 5", "value": 6},
                            {"key": "CSS", "value": 5},
                            {"key": "Bootstrap", "value": 7}
                        ]
                    },
                    {
                        "key": "js",
                        "stack": [
                            {"key": "ECMAScript 6", "value": 6},
                            {"key": "jQuery", "value": 8},
                            {"key": "AngularJS", "value": 7},
                            {"key": "Sencha Ext.JS", "value": 5}
                        ]
                    },
                    {
                        "key": "mobile",
                        "stack": []
                    },
                    {
                        "key": "desktop",
                        "stack": []
                    }
                ]
            },
            {
                "key": "general",
                "stack": [
                    {
                        "key": "tools",
                        "stack": [
                            {
                                "key": "versions",
                                "stack": [
                                    {"key": "CVS", "value": 9},
                                    {"key": "SVN", "value": 9},
                                    {"key": "git", "value": 8}
                                ]
                            },
                            {
                                "key": "builds",
                                "stack": [
                                    {"key": "jenkins", "value": 8},
                                    {"key": "TeamCity", "value": 8}
                                ]
                            },
                            {
                                "key": "IDEs",
                                "stack": [
                                    {"key": "Intellij Idea", "value": 8},
                                    {"key": "NetBeans", "value": 8},
                                    {"key": "Eclipse", "value": 6},
                                    {"key": "Visual Studio", "value": 8},
                                    {"key": "vim", "value": 5}
                                ]
                            },
                            {
                                "key": "modelling",
                                "stack": [
                                    {"key": "Visual Paradigm", "value": 7},
                                    {"key": "Toad Data Modeller", "value": 8}
                                ]
                            }
                        ]
                    },

                    {
                        "key": "DBMS",
                        "stack": [
                            {"key": "MongoDB", "value": 7},
                            {"key": "PostgreSQL", "value": 8},
                            {"key": "MySQL", "value": 8},
                            {"key": "MS SQL", "value": 6},
                            {"key": "Oracle", "value": 5}
                        ]
                    },
                    {
                        "key": "architectures",
                        "stack": [
                            {"key": "MVC", "value": 10},
                            {"key": "RESTful services", "value": 8},
                            {"key": "OO Concepts and Patterns", "value": 8}
                        ]
                    },
                    {
                        "key": "others",
                        "stack": [
                            {
                                "key": "xml",
                                "stack": [
                                    {"key": "XML", "value": 8},
                                    {"key": "XPath", "value": 8},
                                    {"key": "XSLT", "value": 8},
                                    {"key": "XQuery", "value": 6}
                                ]
                            },
                            {
                                "key": "uml",
                                "stack": [
                                    {"key": "class", "value": 9},
                                    {"key": "sequence", "value": 7},
                                    {"key": "ORM", "value": 9},
                                    {"key": "entity", "value": 8},
                                    {"key": "BPMN", "value": 5}
                                ]
                            }
                        ]
                    }
                ]
            }
        ],

        "experience": [
            {
                "position": "Senior Developer",
                "company": {
                    "title": "AdServer",
                    "website": "https://propellerads.com/"
                },
                "description": "",
                "startDate":    new Date("2015-04-06"),
                "endDate":      new Date("2015-10-22"),
                "accomplishments": [
                    "Designed and developed a few projects to boost managers effeciency",
                    "Made technical documentation. Described system domain and dataflow"
                ],
            },
            {
                "position": "Consultant",
                "company": {
                    "title": "Business Link International Inc.",
                    "website": "http://scoros.com/"
                },
                "description": "",
                "startDate":    new Date("2013-08-01"),
                "endDate":      new Date("2015-02-01"),
                "accomplishments": [
                    "Developed new features for SharePoint web parts, such as Dashboard web part",
                    "Built web parts packages for 5+ clients (Lilly, Deere and others) and then automate this process",
                    "Developed tests for portal services",
                    "Provided assistance for programmers with SharePoint web parts services"
                ],
                "exitCause": "Company closed all development relationship with Russia and relocate all dev team."

            },
            {
                "position": "Software Engineer",
                "company": {
                    "title": "Realweb",
                    "website": "http://realweb.ru/"
                },
                "startDate":    new Date("2013-08-15"),
                "endDate":      new Date("2014-06-01"),
                "accomplishments": [
                    "Standardized information system for storing customer accounts across different company services (AdHands, Garpun)",
                    "Managed team of 2 people to accomplish tasks for standardized information system",
                    "Standardized development and testing environment and spread it within command of 12 people",
                    "Developed services to manage daemons among distributed servers",
                    "Developed internal system for online payments"
                ],
                "exitCause": "Company refused me for promised promotion as it could not meet foreseen results."
            },
            {
                "position": "Software developer",
                "company": {
                    "title": "IT-mozg",
                    "website": "http://it-mozg.ru/"
                },
                "startDate": new Date("2013-05-15"),
                "endDate": new Date("2013-06-20"),
                "accomplishments": [
                    "Developed new functionality for the site",
                    "Provided required information and reports for marketing department"
                ],
                "exitCause": "Within trial period I and company make conclusion that we were not satisfied our needs."

            },
            {
                "position": "Software Engineer\\Team Lead",
                "company": {
                    "title": "Business Link International Inc.",
                    "website": "http://scoros.com/"
                },
                "startDate":    new Date("2010-02-15"),
                "endDate":      new Date("2013-02-01"),
                "accomplishments": [
                    "Developed new functionality for internal search portals",
                    "Supported old company solutions",
                    "Made proofs of concept for new functionality such as Jive integration, Thomson Reuters services integration and so on",
                    "Coordinated work with oversea office and adapted git workflow across two development teams. It helped to <a href='http://www.prweb.com/releases/2012/6/prweb9601500.htm'>expand engineering resources by 50%</a>",
                    "Managed team of 4 developer. I was responsible for tasks distribution between them, explanation of existing solutions and workflow",
                    "Provided documentation for clients and other team members about high level design of company solutions"
                ],
                "exitCause": "R&D department was reduced due to reduced number of clients and therefor income"
            },
            {
                "position": "Web-developer",
                "company": {
                    "title": "ISpi",
                    "website": "http://ispi.ru/"
                },
                "startDate":    new Date("2009-10-01"),
                "endDate":      new Date("2010-02-01"),
                "accomplishments": [
                    "Developed corporate CMS which accelerated producing of new web sites by about 60%",
                    "Gathered client requirements for their presentation in internet and developed sites based on them"
                ],
                "exitCause": "I made some money for my education and continued to look for a new career opportunities and challenges."
            },
            {
                "position": "Software Engineer",
                "company": {
                    "title": "Partner-Service",
                    "website": "http://1adw.com/"
                },
                "startDate":    new Date("2005-08-01"),
                "endDate":      new Date("2009-08-01"),
                "accomplishments": [
                    "Designed and implemented software within group of 2-3 developer",
                    "Designed databases with ToadData Modeller with 40+ entities",
                    "Mentored new employers",
                    "Gathered client requirements for software modules"
                ],
                "exitCause": "I was looking for a new career opportunities and challenges."
            }
        ],

        "projects": [
            {
                "title": "Content Management Framework \"Eaze\"",
                "url": "http://wiki.eaze.ru/",
                "startDate": new Date("2006-07-01"),
                "endDate": new Date("2009-08-01"),
                "description": "The framework was developed to reduce development time by eliminating needs to create for common tasks, such as get list of items, create, update, validate entities and so on. Inspired by others MVC frameworks (CakePHP, CodeIgniter) \"Eaze\" framework implemented most of tasks using MVC architecture that reduce developing time for pilot versions by 60-70%",
                "techs": [
                    "PHP", "MySQL", "PostgreSQL", "memcached", "MVC", "XML"
                ],
                "accomplishments": [
                    "Implemented base classes for common actions (viewing, creating, editing, validating and deleting objects)",
                    "Designed interface for DB communication and implemented them for PostgreSQL and MySQL"
                ]
            },
            {
                "title": "Content Management System \"Eaze.CMS\"",
                "url": "http://www.1adw.ru/offers/development/eaze.htm",
                "startDate": new Date("2008-05-01"),
                "endDate": new Date("2009-08-01"),
                "description": "This CMS based on \"Eaze\" framework brought common objects with UI for building web sites.",
                "techs": [
                    "PHP", "MySQL", "PostgreSQL", "memcached", "MVC", "OOP"
                ],
                "accomplishments": [
                    "Designed software modules and objects",
                    "Designed interfaces for working with hierarchical structures in databases and implemented them with PostgreSQL and MySQL database management systems"
                ]
            },
            {
                "title": "Children magazine \"5 Uglov\" online edition",
                "url": "http://5uglov.ru/",
                "startDate": new Date("2009-08-01"),
                "endDate": new Date("2009-12-01"),
                "description": "Online edition of informational and educational magazine for young people",
                "techs": [
                    "PHP", "MySQL", "HTML"
                ],
                "accomplishments": [
                    "Gathered requirements with clients",
                    "Developed software modules",
                    "Deployed developed software within client infrastructure"
                ]
            },
            {
                "title": "All-Russian Internet Contest for Schoolchildren",
                "url": "http://olymp.ifmo.ru/",
                "startDate": new Date("2007-09-01"),
                "endDate":  new Date("2009-05-01"),
                "description": "",
                "techs": [
                    "PHP", "PostgreSQL"
                ],
                "accomplishments": [
                    "Designed and developed software modules (reports graphic presentations, problems editing, problems distribution across different servers)  in group of 2-3 people",
                    "Designed databases structure. Optimized \"heavy\" query to improve site speed up to 100%",
                    "Provided necessary reports for organizers such as different distributions of problems or pupils",
                    "Provided technical support for organizer during internal round of the olympiad"
                ]
            },
            {
                "title": "Warehouse Management System for RPE \"Burevestnik\"",
                "url": "http://bourevestnik.com/",
                "description": "Warehouse Management System provided information about all details used for manufacturing various equipments.",
                "startDate": new Date("2005-12-01"),
                "endDate":  new Date("2006-04-01"),
                "description": "",
                "techs": [
                    ".NET", "MS SQL", "WinForms", "CrystalReports"
                ],
                "accomplishments": [
                    "Designed and developed software modules (details catalog, reports) in group of 2-3 people",
                    "Documented developed software"
                ]
            },
            {
                "title": "Code Design and Generation System for \"Eaze\"",
                "url": "",
                "startDate": new Date("2006-11-01"),
                "endDate":  new Date("2007-04-01"),
                "description": "The system provided opportunity to generate PHP code for \"Eaze\" framework for objects and actions based on database schema and predefined templates.",
                "techs": [
                    ".NET", "MySQL", "PostgreSQL", "T4 Templates", "WinForms"
                ],
                "accomplishments": [
                    "Designed and developed software modules (database schema extraction, UI) in group of 2-3 people",
                ]
            },
            {
                "title": "System Integration for \"PROMT\" with MS Office 2007/2010 Package",
                "url": "",
                "startDate": new Date("2007-11-01"),
                "endDate":  new Date("2008-04-01"),
                "description": "The software highlighted words and phrases, which were in \"PROMT\" dictionaries, in texts in MS Office products",
                "techs": [
                    ".NET", "C++", "P/Invoke", "COM", "MS Office 2007", "MS Office 2010", "NSIS"
                ],
                "accomplishments": [
                    "Gathered client requirements",
                    "Communicated with Microsoft to discover undocumented Office API",
                    "Designed and developed software modules (Office integration, dictionary generation)",
                    "Built application installer"
                ]
            },
            {
                "title": "Wiki System Integration",
                "url": "",
                "startDate": new Date("2010-04-01"),
                "endDate":  new Date("2010-08-01"),
                "description": "Improved system should use the same code base for different wikies within one portal, which may be different in templates. This improvement reduced portal code base size by 50% and number of issues related to portal wikies reduced by 70%",
                "techs": [
                    "PHP", "MySQL", "Wiki"
                ],
                "accomplishments": [
                    "Designed and developed module for wiki storage to separate uploaded content from different wiki instances",
                    "Designed and developed module for seamless wiki login from portal system",
                ]
            },
            {
                "title": "Thomson Reuters Service Integration",
                "url": "",
                "startDate": new Date("2011-08-01"),
                "endDate":  new Date("2012-01-01"),
                "description": "The service got information from Thomson Reuters API and displayed within portal design",
                "techs": [
                    "PHP", "SOAP", "Ext.JS", "AJAX", "APC Cache", "XML", "XSLT"
                ],
                "accomplishments": [
                    "Designed and developed backend layer for receiving and caching data from the service",
                    "Implemented XSLT stylesheet for XML data",
                    "Implemented client side HTML application for data presentation"
                ]
            },
            {
                "title": "Aspect Logger",
                "url": "",
                "startDate": new Date("2012-12-01"),
                "endDate":  new Date("2013-01-01"),
                "description": "The system developed to introduce logging functionality across portal code base without needs to make major code update.",
                "techs": [
                    "PHP", "Aspect Oriented Programming", "PHP Core"
                ],
                "accomplishments": [
                    "Designed and developed basic advises may be used to track portal actions",
                ]
            },
            {
                "title": "SharePoint Portal Integration",
                "url": "",
                "startDate": new Date("2010-07-01"),
                "endDate":  new Date("2012-04-01"),
                "description": "The solution introduces SharePoint web parts collection to embed SinglePoint strategic research rortal content and search facilities throughout a company's intranet. <a href='http://www.prnewswire.com/news-releases/northern-light-introduces-sharepoint-web-parts-collection-to-embed-singlepoint-strategic-research-portal-content-and-search-facilities-throughout-a-companys-intranet-121558328.html'>Press Release</a>",
                "techs": [
                    ".NET", "PHP", "Cryptography", "XML", "Sharepoint 2007/2010/2013", "XSLT", "Web Forms"
                ],
                "accomplishments": [
                    "Designed services API",
                    "Implemented modules on both, SinglePoint server and SharePoint client, sides",
                    "Provided high level documentation for Microsoft engineers",
                    "Collaborated with release engineers during integration"
                ]
            },
            {
                "title": "SharePoint Content Crawler",
                "url": "",
                "startDate": new Date("2012-10-01"),
                "endDate":  new Date("2013-01-01"),
                "description": "",
                "techs": [
                    ".NET", "MySQL", "PowerShell Scripting", "XML", "Sharepoint 2007/2010/2013"
                ],
                "accomplishments": [
                    "Designed application architecture",
                    "Implemented crawler functionality",
                    "Collaborated with another team to provide necessary information about crawled documents for processing",
                    "Optimized SQL queries and speed up crawl processing up to 10 times"
                ]
            },
            {
                "title": "Customer Common Data Access Service",
                "url": "",
                "startDate": new Date("2013-08-01"),
                "endDate":  new Date("2013-10-01"),
                "description": "",
                "techs": [
                    "PHP", "MongoDB", "JSON", "JSON Schema", "REST"
                ],
                "accomplishments": [
                    "Designed object mapping to json using JSON schema",
                    "Defined tasks and distributed them among the team of 2 engineers",
                    "Reserched a problem within different MongoDB adapters that led to lack of performance by 10 times"
                ]
            },
            {
                "title": "Monitoring System for Distributed PHP Daemons",
                "url": "",
                "startDate": new Date("2013-11-01"),
                "endDate":  new Date("2014-01-01"),
                "description": "The system was able to start background jobs on custom events and monitor their execution state",
                "techs": [
                    "Java", "Jetty", "REST", "Jersey", "Gradle", "Java Concurrency", "BerkleyDB JE", "JUnit"
                ],
                "accomplishments": [
                    "Engineered REST API",
                    "Determined techonologies for implementation",
                    "Programmed software to provide the API"
                ]
            },
            {
                "title": "Internal Billing System",
                "url": "",
                "startDate": new Date("2014-02-01"),
                "endDate":  new Date("2014-05-01"),
                "description": "The solution provided salesmen functionality to track recent payments for service usage",
                "techs": [
                    "UML", "Java", "Jetty", "REST", "Jersey", "Gradle", "Hibernate", "PostgreSQL", "JUnit"
                ],
                "accomplishments": [
                    "Modelled domain objects and user stories using UML",
                    "Integrated with bank payment system",
                    "Developed program modules"
                ]
            },
            {
                "title": "Automated Testing System for SharePoint Services",
                "url": "",
                "startDate": new Date("2014-02-01"),
                "endDate":  new Date("2014-11-01"),
                "description": "The software modules is used to perform automated testing of SinglePoint services for SharePoint",
                "techs": [
                    "Groovy", "SmartBear SoapUI", "HTTP", "XML"
                ],
                "accomplishments": [
                    "Conceptualized opportunity of verification service data by extraction one from general UI",
                    "Implemented common tests",
                ]
            },
            {
                "title": "Code Generation Script for SharePoint Web Parts Solution",
                "url": "",
                "startDate": new Date("2014-10-01"),
                "endDate":  new Date("2015-01-01"),
                "description": "Scripts provided functionality to generate SharePoint solution from given configuration without engineers interventions",
                "techs": [
                    "Python", "JSON"
                ],
                "accomplishments": [
                    "Standardized SharePoint solution creation steps and automated them"
                ]
            },
            {
                "title": "Dashboards for advertisment optimisers",
                "url": "",
                "startDate": new Date("2015-07-01"),
                "endDate":  new Date("2015-10-15"),
                "description": "Dashboards provides analytical information to managers to assist them in making desicions about advertisment optimization without needs in other interfaces.",
                "techs": [
                    "NodeJS", "JSON", "REST", "Docker"
                ],
                "accomplishments": [
                    "Provided single UI for all data needed for manager to make decisions",
                    "Extended API of internal products to follow SOA principles"
                ]
            },
            {
                "title": "System description",
                "url": "",
                "startDate": new Date("2015-05-01"),
                "endDate":  new Date("2015-11-01"),
                "description": "This project intent to provide technical overview of the system in different points of view, such as domain's entities, components, dataflows and so on.",
                "techs": [
                    "UML", "Visual Paradigm"
                ],
                "accomplishments": [
                    "Made the glossary of terms for all developer and managers across the company",
                    "Found some flaws of architecture that were very expensive for maintenance"
                ]
            },

        ],

        "education": [
            {
		"title": "Saint-Petersburg State University Information Technologies, Mechanic and Optics (University ITMO)",
		"degree": "Engineer of Information Systems",
                "startDate": new Date("2005-09-01"),
                "endDate":  new Date("2012-01-16"),
                "activities": [
                    "Delivered extension course about PostgreSQL",
                    "Participated in ACM contests"
                ]
               
            }
        ],

        "certificates": [
            {
                "title": "Brainbench: PHP 5.4 Master",
                "startDate": new Date("2013-10-29"),
                "url": "http://maxrykin.com/wp-content/uploads/2013/12/PHP-5.4-Master-Certificate.pdf"
            },
            {
                "title": "Brainbench: RDBMS Concepts Master",
                "startDate": new Date("2014-04-06"),
                "url": "http://maxrykin.com/wp-content/uploads/2014/04/RDBMS-Master-Certificate.pdf"
            },
            {
                "title": "Brainbench: OO Concepts Master",
                "startDate": new Date("2013-11-07"),
                "url": "http://maxrykin.com/wp-content/uploads/2013/12/OO-Concept-Certificate.pdf"
            },
            {
                "title": "Zend Certified PHP Engineer",
                "startDate": new Date("2015-11-03"),
                "url": "https://www.zend.com/en/yellow-pages/ZEND027989"
            }
        ]
    };
});
