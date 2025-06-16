document.addEventListener('DOMContentLoaded', function () {
    var gradient = new Gradient()

    gradient.initGradient("#bg-animated")
})

document.addEventListener('alpine:init', function () {
    Alpine.store('lang', 'en')
    Alpine.store('contactEmail', 'contact@acme.local')
    Alpine.store('authorDomain', 'jonaszkadziela.pl')
    Alpine.store('trans', {
        en: {
            head: {
                title: 'Acme | Website under construction',
            },
            language: {
                change: 'Change language',
                en: 'English',
                hr: 'Croatian',
                pl: 'Polish',
            },
            main: {
                title: 'Website under construction!',
                description: 'The website will be made public soon',
                email: 'You can reach us at',
            },
            footer: {
                designed: 'Designed and programmed with',
                by: 'by',
                author: 'Jonasz Kadziela',
            },
        },
        hr: {
            head: {
                title: 'Acme | Web stranica u izradi',
            },
            language: {
                change: 'Promijeni jezik',
                en: 'Engleski (English)',
                hr: 'Hrvatski (Croatian)',
                pl: 'Poljski (Polish)',
            },
            main: {
                title: 'Web stranica u izradi!',
                description: 'Web stranica će uskoro biti javno dostupna',
                email: 'Možete nas kontaktirati na',
            },
            footer: {
                designed: 'Dizajnirano i programirano s',
                by: 'od',
                author: 'Jonasz Kadziela',
            },
        },
        pl: {
            head: {
                title: 'Acme | Strona w trakcie budowy',
            },
            language: {
                change: 'Zmień język',
                en: 'Angielski (English)',
                hr: 'Chorwacki (Croatian)',
                pl: 'Polski (Polish)',
            },
            main: {
                title: 'Strona w trakcie budowy!',
                description: 'Wkrótce zostanie upubliczniona strona internetowa',
                email: 'Napisz do nas na',
            },
            footer: {
                designed: 'Zaprojektowane i zaprogramowane z',
                by: 'przez',
                author: 'Jonasza Kądzielę',
            },
        },
    })
})
