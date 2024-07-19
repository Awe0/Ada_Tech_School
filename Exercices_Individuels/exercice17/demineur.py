import random

hash = '#'

class Demineur:

    def __init__(self, gridSize, nbMines):
        self.gridSize = gridSize
        self.nbMines = nbMines
        self.grid = self.createGrid()
        self.placeMine()

    def createRow(self):
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
            print(' '.join(row))

    def placeMine(self):
        mines = 0
        while mines < self.nbMines:
            x = random.randint(0, self.gridSize - 1)
            y = random.randint(0, self.gridSize - 1)
            if self.grid[y][x] != '*':
                self.grid[y][x] = '*'
                mines += 1

game = Demineur(5,5)
game.printGrid()