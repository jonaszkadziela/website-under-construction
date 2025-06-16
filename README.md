# Website under construction

## A few words of introduction:
I became tired of the generic placeholder websites and intrusive advertisements commonly used by web hosting providers.
To resolve this issue, I set out to design a more visually engaging and polished "website under construction" template.

## Used technologies:
* HTML
* CSS
* Tailwind CSS
* JavaScript
* Alpine.js

## How to set up locally?
1. Clone the repository
	```
	$ git clone https://github.com/jonaszkadziela/website-under-construction.git
	```
1. Enter **website-under-construction** project directory
	```
	$ cd website-under-construction
	```
1. Open **index.html** file

## Configuration:
* In `assets/images/favicon.png`, you **SHOULD**:
    * Replace placeholder `favicon.png` with your own file
* In `assets/js/main.js`, you **SHOULD**:
    * Change default language via `lang` value
    * Change contact information via `contactEmail` value
    * Adjust default translations via `trans` value
* In `assets/css/main.css`, you **COULD**:
    * Change color of animated background via `gradient-color-{1,2,3,4}` CSS variables
    * Adjust animation speed via `gradient-speed` CSS variable
* In `index.html`, you **COULD**:
    * Change background fallback color via `<body class="bg-[#15319f] ...">` hex value

## How to deploy?
1. Just copy `index.html` and `assets` directory along with its contents to your web server
