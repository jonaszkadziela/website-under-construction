document.addEventListener('DOMContentLoaded', function () {
    var gradient = new Gradient()

    gradient.initGradient("#bg-animated")
})

document.addEventListener('alpine:init', function () {
    Alpine.store('lang', 'en')
    Alpine.store('domain', 'example.local')
    Alpine.store('authorDomain', 'jonaszkadziela.pl')
    Alpine.store('trans', {
        en: {
            head: {
                title: 'Example | Website under construction',
            },
            main: {
                title: 'Website under construction!',
                description: 'The website will be made public soon',
            },
            footer: {
                designed: 'Designed and programmed with',
                by: 'by',
                author: 'Jonasz Kadziela'
            },
        },
        hr: {
            head: {
                title: 'Primjer | Web stranica u izradi',
            },
            main: {
                title: 'Web stranica u izradi!',
                description: 'Web stranica će uskoro biti javno dostupna',
            },
            footer: {
                designed: 'Dizajnirano i programirano s',
                by: 'od',
                author: 'Jonasz Kadziela'
            },
        },
        pl: {
            head: {
                title: 'Przykład | Strona w trakcie budowy',
            },
            main: {
                title: 'Strona w trakcie budowy!',
                description: 'Wkrótce zostanie upubliczniona strona internetowa',
            },
            footer: {
                designed: 'Zaprojektowane i zaprogramowane z',
                by: 'przez',
                author: 'Jonasza Kądzielę'
            },
        },
    })
})
