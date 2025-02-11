export const sfHub = {
  id: 'sfHub',
  displayName: 'Space Hanger Observation Lounge',
  shortName: 'Space Lounge',
  description: 'An impossibly fast elevator whisks you up to a bright lounge of steel, chrome, and futuristic plastics. Spacecraft of all shapes and sizes constantly come and go in view of the giant observation window. Constrasting the vast depths of space, the lounge itself is strangely cozy. Floor-to-ceiling hexagonal bookshelves provide all the reading material you could ask for, with oddly shaped but fluffy ottoman-like chairs to settle into. A [[vending machine->vendingMachine]] offers refreshment, along with an extensive bar serving Cosmic Cryo-Brewed Coffee, Terrific Techno-Tea, and apple juice.</br></br>A little robot beckons you to the [[Robot Fabrication Lab->robots]]. In the corner, a [[dusty machine->timeMachine]] blinks invitingly. You can also go back to the central [[hall]].',
  hasNoteWall: true,
  noteWallData: {
    roomWallDescription: 'Among the seemingly infinite bookshelves, one has been emptied out and contains only a small pile of notebooks. A sign next to it reads "BOOKMARKS - PLEASE HELP US SIFT THE GOOD STUFF!"',
    noteWallButton: 'Add a link',
    addNoteLinkText: 'add a link',
    addNotePrompt: 'What would you like to link to?',
    noteWallDescription: 'Contributions of links to slides, videos, and articles of interest.'
  }
}

export const robots = {
  id: 'robots',
  displayName: 'Robot Fabrication Lab',
  shortName: 'robot lab',
  description: 'Something witty about making a robot friend. Go back to the [[Spacehanger->sfHub]].'
}

export const timeMachine = {
  id: 'timeMachine',
  displayName: 'Space Hanger - Strange Device',
  shortName: 'strange item',
  hidden: true,
  description: 'You can\'t get the machine to turn on, no matter what you do, plug in or unplug. However, there is an inscription on it.</br></br>A grid of glyphs in rows arrayed,</br>Is how I\'ll tell your tale;</br>From decades past to present day,</br>My codepage has prevailed;</br>Tiles are fine if you have have time,</br> But I shall never stale;</br>Now speak my name as if you\'d /go,</br>And I shall fill your sail.</br></br>Go back to the [[Spacehanger->sfHub]].'
}

export const vendingMachine = {
  id: 'vendingMachine',
  displayName: 'Space Hanger - Vending Machine',
  shortName: 'vending machine',
  description: 'Set into the wall is a curious-looking vending machine labelled "Munxip\'s Magnifient Munchies". A touch screen flashes "[[Get Random Food!->generateFood]]" in cycling colours.</br></br>Go back to the [[Space Hanger->sfHub]].'
}
