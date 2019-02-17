
DESCRIPTION:

The high level goal of this application is to provide users an easy way to compare
multiple breeds of dogs based on three main features: shade, size, and loyalty.
Each dog "box" is represented by a DogFrame object, which stores the feature information,
image, and returns these to be displayed as HTML objects. App.js creates a list
of DogFrame objects and passes it as a prop to FilteredList.jsx. Based what
the user chooses to search for, filter, or sort by via the dropdown buttons, FilteredList
sends a modified, newly ordered list of chosen DogFrame items as a prop to List.jsx.
List.jsx utilizes map() to display the chosen items on the page. In terms of user
interface design principles, the interface utilizes a type palette (dark bold title,
bold feature names, light italic feature values) to help users understand the
hierarchy of information, peeking content from the bottom of page to suggest
continuity and invite scrolling, colored loyalty ratings to promote visual
grouping of dogs with similar loyalty, and a black line under each row to suggest
that dogs are sorted from left-to-right rather than top-to-bottom.
