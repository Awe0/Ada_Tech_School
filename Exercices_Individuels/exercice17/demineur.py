import random


class Demineur:

    def __init__(self, gridSize, nbMines):
        self.gridSize = gridSize
        self.nbMines = nbMines
        self.grid = self.createGrid()
        self.placeMine()
        self.defineNumbers()
        self.reveal = False

    def createRow(self):
        hash = '#'
        row = []
        for i in range(self.gridSize):
            row.append(hash)
        return row

    def createGrid(self):
        grid = []
        for i in range(self.gridSize):
            grid.append(self.createRow())
        return grid

    def printGrid(self):
        for row in self.grid:
            hiddenRow = []
            if self.reveal == False:
                for cell in row:
                    if cell != ' ':
                        hiddenRow.append('#')
                    else:
                        hiddenRow.append(' ')
                print(' '.join(hiddenRow))
            else:
                print(' '.join(row))

    def placeMine(self):
        mines = 0
        while mines < self.nbMines:
            x = random.randint(0, self.gridSize - 1)
            y = random.randint(0, self.gridSize - 1)
            if self.grid[y][x] != '*':
                self.grid[y][x] = '*'
                mines += 1

    def defineNumbers(self):
        for y in range(self.gridSize):
            for x in range(self.gridSize):
                if self.grid[y][x] != '*':
                    number = self.countAdjacentMines(x, y)
                    if number > 0:
                        self.grid[y][x] = str(number)

    def countAdjacentMines(self, x, y):
        count = 0
        for directionX in [-1, 0, 1]:
            for directionY in [-1, 0, 1]:
                coordX = x + directionX
                coordY = y + directionY
                if 0 <= coordX < self.gridSize and 0 <= coordY < self.gridSize:
                    if self.grid[coordY][coordX] == '*':
                        count += 1
        return count

game = Demineur(5,5)
game.printGrid()