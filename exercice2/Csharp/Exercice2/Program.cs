using ClassesLib;

int maxRange = 100;
int minRange = 0;

Random mysteryNumber = new Random();
Player player = new Player(mysteryNumber.Next(minRange,maxRange), minRange, maxRange);

player.askNumber();
