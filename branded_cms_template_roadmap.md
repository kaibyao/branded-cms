# Branded CMS Template Roadmap

## v0.1

Initial pages created.  
Links created.  
Required libraries created.

## v1.0

### UI Script Bugfix
* The main menu will be hidden on page load and display after bootstrap CSS classes have been applied.

### Thank You Page
* Create page for after the user finishes submitting a problem.

### Page title headers
* Each page will have its title to help the user remember

### Chat implementation
* Chat links will be implemented in one of the menus.
* Will include Chat for IT, Facilities, and HR.

### Better Page Editing
* Edit Page Button for admins
* JS applies on the edit page interface

### Icons Upgrade
* The IT Catalog icons will be modernized/flattened.
* Other icons will follow the same color scheme as those on the home page.

### Browser Testing
* Test in all Bootstrap-compatable browsers. Safari, Firefox, Chrome, IE8/9+.
* Apparently there's a bug in Safari w/ the banners

### Share Distribution
* This will be uploaded to share.servicenow.com for usage by ServiceNow Employees.

## v1.2

### Bug Fixes
* Use .page-home instead of .main-content for banner styles
* HR Knowledge Search Results showed 2 search bars. It now shows 1.
* "Admin Section" will no longer highlight on mouseover.

### Interface Improvements
* Shortened banner on home page.
* Horizontal block menu items now automatically calculate whether to spill over into a new row or remain in the same row.
* Fonts are now embedded in stylesheet. Users will no longer have to manually update a separate font file.


## v1.3

### Bug Fixes
* Fix the jitteryness of the Knowledge page in IE9.
* Create workaround for jQuery not working in Fuji (Use Require.js)
* Different Knowledge Pages aren't actually filtering based on departments

### Improved Interface
* Add Filter buttons to the Knowledge page.


## v2.0

### Bug Fixes
* Uses Require.JS to load JS files (cause our javascript loader is currently broken in Fuji)

### Improved Interface
* Style the dropzones in Layout Edit View
* Better fonts for menus
* Mobile Main Menu

### Changes from 1.x
* Home Page Block Menu has submenu items removed
* @font-face CSS code has been moved to "Bootstrap Overrides" stylesheet (will be retroactively patched into 1.x)


## v2.1
* Improved Catalog + Shopping Cart
* Improved Login Screen
* Improved Search Page
* Improved Forms & Lists
* Improved Chat
* Live Feed
