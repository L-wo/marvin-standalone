class Level1 extends GameScene { //GOOD
	constructor() {
    super('Level1')   
    this.flightcases = [	{x:2,y:8,fixture:'wash'},
                          {x:5,y:8,fixture:'wash'}]

    this.trussStart = [5,3];
    this.relentmore = [[8,8]];
    this.motorPos = [10,8];
    this.music = 'level1';
	  this.nextLevel = 'Level2';
	}
}
  
class Level2 extends GameScene {
	constructor() {
    super('Level2')
    this.flightcases = [	{x:1,y:0,fixture:'wash'},
                          {x:4,y:0,fixture:'spot'}]

    this.trussStart = [6,4];
    this.relentmore = [[2,4]];
    this.motorPos = [10,8];
    this.music = 'level1';
		this.nextLevel = 'Level3';
	}
}
  
class Level3 extends GameScene {
	constructor() {
    super('Level3')
    this.flightcases = [	{x:1,y:1,fixture:'wash'},
                          {x:1,y:4,fixture:'spot'},
                          {x:1,y:7,fixture:'wash'}]
    
    this.trussStart = [5,3];
    this.relentmore = [[6,6]];
    this.motorPos = [12,3];
    this.music = 'level1';
		this.nextLevel = 'Level4';
	}
}

class Level4 extends GameScene {
  constructor() {
    super('Level4')
    this.flightcases = [  {x:1,y:7,fixture:'wash'},
                          {x:4,y:7,fixture:'wash'}, 
                          {x:7,y:7,fixture:'wash'}, 
                          {x:10,y:7,fixture:'wash'}]

    this.trussStart = [3,3];
    this.relentmore = [[3,5],[9,5]];
    this.motorPos = [1,1];
    this.music = 'level2';
    this.nextLevel = 'Level5';
  }
}

class Level5 extends GameScene {
  constructor() {
    super('Level5')
    this.flightcases = [  {x:2,y:0,fixture:'wash'},
                          {x:10,y:0,fixture:'spot'}, 
                          {x:2,y:3,fixture:'beam'},  
                          {x:10,y:3,fixture:'beam'}]
    this.trussStart = [3,6];
    this.relentmore = [[1,6],[12,6]];
    this.motorPos = [6,8];
    this.music = 'level2';
    this.nextLevel = 'Level6';
  }
}

class Level6 extends GameScene {
  constructor() {
    super('Level6')
    this.flightcases = [  {x:3,y:5,fixture:'wash'},
                          {x:8,y:5,fixture:'spot'}, 
                          {x:3,y:7,fixture:'beam'}, 
                          {x:8,y:7,fixture:'strobe'}]
    this.trussStart = [3,3];
    this.relentmore = [[6,6]];
    this.motorPos = [6,1];
    this.music = 'level2';
    this.nextLevel = 'Level7';
  }
}


class Level7 extends GameScene {
  constructor() {
    super('Level7')
    this.flightcases = [	{x:2,y:1,fixture:'beam'},
                          {x:10,y:1,fixture:'beam'},
                          {x:2,y:7,fixture:'strobe'},
                          {x:6,y:7,fixture:'strobe'},
                          {x:10,y:7,fixture:'strobe'}]
    this.trussStart = [2,3];
    this.relentmore = [[2,5],[12,5]];
    this.motorPos = [6,1];
    this.music = 'level3';
    this.nextLevel = 'Level8';
  }
}

class Level8 extends GameScene {
  constructor() {
    super('Level8')
    this.flightcases = [	{x:1,y:8,fixture:'wash'},
                          {x:4,y:8,fixture:'spot'},
                          {x:7,y:8,fixture:'spot'},
                          {x:1,y:1,fixture:'beam'},
                          {x:4,y:1,fixture:'strobe'},
                          {x:7,y:1,fixture:'strobe'}]

    this.trussStart = [1,4];
    this.relentmore = [[10,1],[10,8]];
    this.motorPos = [12,8];
    this.music = 'level3';
    this.nextLevel = 'EndScene';
  }
}
