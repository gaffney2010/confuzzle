
export function sampleCrossword() {
  return `> this is an example crossword spec
> it is written in eno: eno-lang.org/eno
> you may wish to edit in a text editor with support for
> eno syntax highlighting - see eno-lang.org/plugins
> comments start with ">"

> crossword metadata
# meta

> mandatory fields
name: Example crossword
author: RK

> optional fields

> type defaults to "cryptic" if not present
type: example
identifier: 2020/04/07
copyright: Please respect copyright when using this site

> a subset of HTML is supported for formatting
note: Note: select <i>Edit</i> from the menu above to edit this crossword.

> answer scrambling, can be anything, defaults to "none".
> "base64" is understood by the crossword engine.
scramble: none

> grid information
# grid

> height and width are mandatory 
width: 15
height: 15

> optional subsection for shading squares
## shading

> subsections of "shading" can have coordinates or lists of clues. 
> subsection name is required but can be anything.
### yellowclues
color: #fefc34
clues:
  - 1D
  - 2D

### scarletletter
color: #f00
row: 2
col: 6

> clue section - each clue is a subsection
# clues

> clue identifier 
> number: used to number cell
> A/D: denotes direction (A -> across, D -> down)
> out of order/duplicate numbers are allowed,
> use of duplicate clue identifiers is undefined
## 1A

> clue coordinates (mandatory)
row: 2
col: 3

> clue text (mandatory)
text: Coarsen, so coarsely, this?

> solution as shown in grid (optional, may be scrambled according to "scramble" field in metadata)
> will be automatically filled in when compiling if scramble is "none"
ans: ONEACROSS

> lengths of each word in the clue (mandatory)
lengths:
    - 3
    - 6

> separators to denote word breaks
> (optional, defaults to ",")
separators:
    - -

> custom numbering, of course you can have emoji 😉
### numbering
clue: ❤️ [1A]
grid: ❤️
offset: 6

## 1D
row: 7
col: 10
ans: ONE

text: ⬅️ duck low, without severed connection
lengths:
    - 3


## 2D
row: 7
col: 12
ans: TWODOWN
text: See 1D
lengths:
    - 3
    - 4

> section describing clues which are spread across multiple grid slots
# references

> primary clue
## 1D

> grid slots in order
clues:
    - 1D
    - 2D

> word separators between grid slots.
> to split a single word across multiple slots, specify an empty list here.
separators:
    - /

> bug reports and suggestions for new features are absolutely welcome:
> https://github.com/rjkat/anagrind/issues/new

> happy compiling!
`;
}